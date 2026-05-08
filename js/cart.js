// ============================================================
// cart.js — Logic trang giỏ hàng
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  renderCart();

  // Auto switch tab nếu URL có ?tab=orders hoặc ?tab=wishlist
  const params = new URLSearchParams(window.location.search);
  const tab = params.get("tab");
  if (tab === "orders") {
    switchCartTab("orders");
  } else if (tab === "wishlist") {
    switchCartTab("wishlist");
  }
});

// ── Render giỏ hàng ───────────────────────────────────────

function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cart-items");
  const emptyMsg = document.getElementById("cart-empty");
  const cartContent = document.getElementById("cart-content");

  if (cart.length === 0) {
    emptyMsg.style.display = "block";
    cartContent.style.display = "none";
    return;
  }

  emptyMsg.style.display = "none";
  cartContent.style.display = "grid";

  container.innerHTML = cart.map(item => `
    <div class="cart-item" id="cart-item-${item.id}">
      <img src="${item.thumbnail}" alt="${item.name}" class="cart-item__img"
           onerror="this.src='assets/images/placeholder.jpg'">
      <div class="cart-item__info">
        <h3 class="cart-item__name">${item.name}</h3>
        <p class="cart-item__price">${formatPrice(item.price)}</p>
      </div>
      <div class="cart-item__qty">
        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
        <span class="qty-val">${item.quantity}</span>
        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
      </div>
      <div class="cart-item__subtotal">
        ${formatPrice(item.price * item.quantity)}
      </div>
      <button class="cart-item__remove" onclick="removeFromCart(${item.id})" title="Xóa">✕</button>
    </div>
  `).join("");

  updateSummary();
}

// ── Cập nhật số lượng ─────────────────────────────────────

function updateQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart(cart);
  renderCart();
}

// ── Xóa sản phẩm ─────────────────────────────────────────

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  renderCart();
  showToast("Đã xóa sản phẩm khỏi giỏ hàng", "error");
}

// ── Tính tổng tiền ────────────────────────────────────────

// Voucher definitions
const VOUCHERS = {
  "GIAM10":   { type: "percent", value: 10 },
  "GIAM20":   { type: "percent", value: 20 },
  "FREESHIP": { type: "fixed",   value: 0 },
  "SALE500K":  { type: "fixed",   value: 500000 }
};

let appliedVoucher = null;

function applyVoucher() {
  const code = document.getElementById("voucher-input")?.value.trim().toUpperCase();
  const msgEl = document.getElementById("voucher-msg");
  if (!code) {
    if (msgEl) { msgEl.textContent = "Vui lòng nhập mã voucher!"; msgEl.className = "voucher-msg voucher-msg--error"; }
    return;
  }

  if (VOUCHERS[code]) {
    appliedVoucher = { code, ...VOUCHERS[code] };
    if (msgEl) {
      const desc = appliedVoucher.type === "percent"
        ? `Giảm ${appliedVoucher.value}%`
        : appliedVoucher.value === 0 ? "Miễn phí vận chuyển" : `Giảm ${formatPrice(appliedVoucher.value)}`;
      msgEl.textContent = `✅ Áp dụng thành công: ${desc}`;
      msgEl.className = "voucher-msg voucher-msg--success";
    }
    showToast(`Áp dụng voucher ${code} thành công!`);
  } else {
    appliedVoucher = null;
    if (msgEl) { msgEl.textContent = "❌ Mã voucher không hợp lệ!"; msgEl.className = "voucher-msg voucher-msg--error"; }
  }
  updateSummary();
}

function updateSummary() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let discount = 0;
  if (appliedVoucher) {
    if (appliedVoucher.type === "percent") {
      discount = Math.round(subtotal * appliedVoucher.value / 100);
    } else {
      discount = appliedVoucher.value;
    }
  }

  const total = Math.max(0, subtotal - discount);

  document.getElementById("summary-subtotal").textContent = formatPrice(subtotal);
  document.getElementById("summary-shipping").textContent = "Miễn phí";
  document.getElementById("summary-total").textContent = formatPrice(total);
  document.getElementById("summary-count").textContent =
    cart.reduce((sum, item) => sum + item.quantity, 0) + " sản phẩm";

  const discountRow = document.getElementById("summary-discount-row");
  const discountEl = document.getElementById("summary-discount");
  if (discountRow && discountEl) {
    if (discount > 0) {
      discountRow.style.display = "flex";
      discountEl.textContent = `-${formatPrice(discount)}`;
    } else {
      discountRow.style.display = "none";
    }
  }
}

// ── Đặt hàng ─────────────────────────────────────────────

function checkout() {
  const cart = getCart();
  if (cart.length === 0) {
    showToast("Giỏ hàng trống!", "error");
    return;
  }

  // Yêu cầu đăng nhập
  if (!requireLogin()) return;

  const modal = document.getElementById("order-modal");
  modal.style.display = "flex";

  // Tự điền thông tin từ tài khoản
  const user = getCurrentUser();
  if (user) {
    const nameEl  = document.getElementById("order-name");
    const phoneEl = document.getElementById("order-phone");
    if (nameEl && !nameEl.value)   nameEl.value  = user.fullname;
    if (phoneEl && !phoneEl.value) phoneEl.value = user.phone || "";
  }
}

function closeModal() {
  document.getElementById("order-modal").style.display = "none";
}

function onPaymentChange(method) {
  document.getElementById("payment-method").value = method;
  const bankInfo = document.getElementById("bank-info");
  if (bankInfo) bankInfo.style.display = method === "BankTransfer" ? "block" : "none";
}

function submitOrder(e) {
  e.preventDefault();
  const name    = document.getElementById("order-name").value.trim();
  const phone   = document.getElementById("order-phone").value.trim();
  const address = document.getElementById("order-address").value.trim();
  const note    = document.getElementById("order-note")?.value.trim() || "";

  if (!name || !phone || !address) {
    showToast("Vui lòng điền đầy đủ thông tin!", "error");
    return;
  }

  const cart = getCart();
  const user = getCurrentUser();

  // ── Tạo đơn hàng ──────────────────────────────────────
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let discount = 0;
  if (appliedVoucher) {
    if (appliedVoucher.type === "percent") {
      discount = Math.round(subtotal * appliedVoucher.value / 100);
    } else {
      discount = appliedVoucher.value;
    }
  }
  const total = Math.max(0, subtotal - discount);
  const paymentMethod = document.getElementById("payment-method")?.value || "COD";

  const order = {
    id: "DH" + Date.now(),
    userId: user ? user.id : null,
    customerName: name,
    phone,
    address,
    note,
    paymentMethod,
    voucher: appliedVoucher ? appliedVoucher.code : null,
    discount,
    items: cart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      thumbnail: item.thumbnail,
      subtotal: item.price * item.quantity
    })),
    subtotal,
    total,
    status: "Chờ xác nhận",
    createdAt: new Date().toISOString()
  };

  // ── Lưu vào localStorage["orders"] ────────────────────
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  // ── Gắn đơn hàng vào tài khoản user (nếu đã đăng nhập) ─
  if (user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const idx = users.findIndex(u => u.id === user.id);
    if (idx !== -1) {
      if (!users[idx].orders) users[idx].orders = [];
      users[idx].orders.push(order.id);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }

  // ── Xóa giỏ hàng & hiện thành công ───────────────────
  localStorage.removeItem("cart");
  appliedVoucher = null;
  updateCartBadge();
  closeModal();

  document.getElementById("cart-content").style.display = "none";
  const successEl = document.getElementById("order-success");
  successEl.style.display = "block";
  document.getElementById("success-order-id").textContent = order.id;
  document.getElementById("success-total").textContent = formatPrice(order.total);
}

// Đóng modal khi click ngoài
window.addEventListener("click", (e) => {
  const modal = document.getElementById("order-modal");
  if (e.target === modal) closeModal();
});

// ── Switch tab Giỏ hàng / Lịch sử / Yêu thích ──────────

function switchCartTab(tab) {
  document.querySelectorAll(".cart-tab__btn").forEach(btn => {
    btn.classList.toggle("cart-tab__btn--active", btn.dataset.tab === tab);
  });
  document.getElementById("tab-cart").style.display      = tab === "cart"     ? "block" : "none";
  document.getElementById("tab-orders").style.display    = tab === "orders"   ? "block" : "none";
  const wishlistTab = document.getElementById("tab-wishlist");
  if (wishlistTab) wishlistTab.style.display = tab === "wishlist" ? "block" : "none";

  if (tab === "orders") renderOrders();
  if (tab === "wishlist" && typeof renderWishlist === "function") renderWishlist();
}

// ── Render lịch sử đơn hàng ──────────────────────────────

function renderOrders() {
  const user = getCurrentUser();
  const loginRequired = document.getElementById("orders-login-required");
  const emptyEl       = document.getElementById("orders-empty");
  const listEl        = document.getElementById("orders-list");

  // Chưa đăng nhập
  if (!user) {
    loginRequired.style.display = "block";
    emptyEl.style.display       = "none";
    listEl.innerHTML             = "";
    return;
  }
  loginRequired.style.display = "none";

  // Lấy đơn hàng của user
  const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
  const myOrders  = allOrders
    .filter(o => o.userId === user.id)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Mới nhất lên đầu

  if (myOrders.length === 0) {
    emptyEl.style.display = "block";
    listEl.innerHTML       = "";
    return;
  }
  emptyEl.style.display = "none";

  listEl.innerHTML = myOrders.map(order => `
    <div class="order-card">
      <div class="order-card__header">
        <div class="order-card__meta">
          <span class="order-card__id">📦 ${order.id}</span>
          <span class="order-card__date">${formatDate(order.createdAt)}</span>
        </div>
        <span class="order-status order-status--${statusClass(order.status)}">${order.status}</span>
      </div>

      <div class="order-card__items">
        ${order.items.map(item => `
          <div class="order-item">
            <img src="${item.thumbnail}" alt="${item.name}"
                 onerror="this.src='assets/images/placeholder.jpg'">
            <div class="order-item__info">
              <p class="order-item__name">${item.name}</p>
              <p class="order-item__qty">x${item.quantity} — ${formatPrice(item.price)}</p>
            </div>
            <p class="order-item__subtotal">${formatPrice(item.subtotal)}</p>
          </div>
        `).join("")}
      </div>

      <div class="order-card__footer">
        <div class="order-card__address">
          <span>📍</span>
          <span>${order.customerName} · ${order.phone} · ${order.address}</span>
        </div>
        <div class="order-card__total">
          ${order.discount > 0 ? `<div style="font-size:0.82rem;color:var(--success)">Giảm: -${formatPrice(order.discount)}</div>` : ""}
          Tổng: <strong>${formatPrice(order.total)}</strong>
          ${order.paymentMethod ? `<div style="font-size:0.78rem;color:var(--text-muted)">💳 ${getPaymentLabel(order.paymentMethod)}</div>` : ""}
        </div>
      </div>
    </div>
  `).join("");
}

// ── Helpers ───────────────────────────────────────────────

function formatDate(isoString) {
  const d = new Date(isoString);
  return `${d.getDate().toString().padStart(2,"0")}/${(d.getMonth()+1).toString().padStart(2,"0")}/${d.getFullYear()} ${d.getHours().toString().padStart(2,"0")}:${d.getMinutes().toString().padStart(2,"0")}`;
}

function statusClass(status) {
  const map = {
    "Chờ xác nhận": "pending",
    "Đang xử lý":   "processing",
    "Đang giao":    "shipping",
    "Đã giao":      "done",
    "Đã hủy":       "cancelled"
  };
  return map[status] || "pending";
}

function getPaymentLabel(method) {
  const map = {
    "COD": "Thanh toán khi nhận hàng",
    "BankTransfer": "Chuyển khoản ngân hàng",
    "MoMo": "MoMo",
    "ZaloPay": "ZaloPay"
  };
  return map[method] || method;
}
