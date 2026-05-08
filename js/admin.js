// ============================================================
// admin.js — Logic trang quản trị
// ============================================================

// Tài khoản admin mặc định
const ADMIN_CREDENTIALS = { username: "admin", password: "admin123" };

let currentOrderId = null; // ID đơn hàng đang xem trong modal
let allOrders = [];        // Cache danh sách đơn hàng

// ── Đăng nhập Admin ───────────────────────────────────────

function adminLogin(e) {
  e.preventDefault();
  const username = document.getElementById("admin-username").value.trim();
  const password = document.getElementById("admin-password").value;
  const errorEl  = document.getElementById("admin-login-error");

  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    sessionStorage.setItem("adminLoggedIn", "true");
    document.getElementById("admin-login-overlay").style.display = "none";
    document.getElementById("topbar-admin-name").textContent = username;
    initAdmin();
  } else {
    errorEl.textContent = "Tên đăng nhập hoặc mật khẩu không đúng!";
  }
}

function adminLogout() {
  sessionStorage.removeItem("adminLoggedIn");
  document.getElementById("admin-login-overlay").style.display = "flex";
}

// ── Khởi tạo ─────────────────────────────────────────────

function initAdmin() {
  loadOrders();
  loadUsers();
  loadAdminProducts();
  updateNavCounts();
  renderStats();
}

// ── Navigation ────────────────────────────────────────────

function switchSection(name) {
  document.querySelectorAll(".admin-section").forEach(s => s.style.display = "none");
  document.querySelectorAll(".sidebar__link").forEach(l => l.classList.remove("sidebar__link--active"));

  document.getElementById(`section-${name}`).style.display = "block";
  document.querySelector(`[data-section="${name}"]`)?.classList.add("sidebar__link--active");

  const titles = {
    orders:   "Quản lý đơn hàng",
    products: "Quản lý sản phẩm",
    users:    "Quản lý tài khoản",
    stats:    "Thống kê doanh thu"
  };
  document.getElementById("topbar-title").textContent = titles[name] || "";

  if (name === "products") loadAdminProducts();
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("sidebar--open");
}

// ── Load & Render đơn hàng ────────────────────────────────

function loadOrders() {
  allOrders = JSON.parse(localStorage.getItem("orders")) || [];
  renderOrdersTable(allOrders);
  updateStatCards(allOrders);
}

function renderOrdersTable(orders) {
  const tbody   = document.getElementById("orders-tbody");
  const emptyEl = document.getElementById("orders-empty-msg");

  if (orders.length === 0) {
    tbody.innerHTML = "";
    emptyEl.style.display = "flex";
    return;
  }
  emptyEl.style.display = "none";

  tbody.innerHTML = orders.map(order => `
    <tr class="order-row" onclick="openOrderModal('${order.id}')">
      <td><span class="order-id-badge">${order.id}</span></td>
      <td>
        <div class="customer-info">
          <strong>${order.customerName}</strong>
          <span>${order.phone}</span>
        </div>
      </td>
      <td>
        <div class="order-items-preview">
          ${order.items.slice(0, 2).map(item =>
            `<span class="item-chip">${item.name.split(" ").slice(0,3).join(" ")} x${item.quantity}</span>`
          ).join("")}
          ${order.items.length > 2 ? `<span class="item-chip item-chip--more">+${order.items.length - 2}</span>` : ""}
        </div>
      </td>
      <td><strong class="price-text">${formatPrice(order.total)}</strong></td>
      <td><span class="date-text">${formatDate(order.createdAt)}</span></td>
      <td>
        <span class="order-status-badge order-status-badge--${statusClass(order.status)}">
          ${statusIcon(order.status)} ${order.status}
        </span>
      </td>
      <td onclick="event.stopPropagation()">
        <div class="action-btns">
          <button class="action-btn action-btn--view" onclick="openOrderModal('${order.id}')" title="Xem chi tiết">👁</button>
          <button class="action-btn action-btn--approve"
            onclick="quickUpdateStatus('${order.id}', 'Đang xử lý')"
            title="Phê duyệt"
            ${order.status !== 'Chờ xác nhận' ? 'disabled' : ''}>✅</button>
          <button class="action-btn action-btn--cancel"
            onclick="quickUpdateStatus('${order.id}', 'Đã hủy')"
            title="Hủy đơn"
            ${order.status === 'Đã giao' || order.status === 'Đã hủy' ? 'disabled' : ''}>❌</button>
        </div>
      </td>
    </tr>
  `).join("");
}

// ── Filter & Search ───────────────────────────────────────

function filterOrders() {
  const keyword    = document.getElementById("order-search").value.toLowerCase();
  const statusVal  = document.getElementById("order-status-filter").value;
  const sortVal    = document.getElementById("order-sort").value;

  let filtered = [...allOrders];

  // Tìm kiếm
  if (keyword) {
    filtered = filtered.filter(o =>
      o.id.toLowerCase().includes(keyword) ||
      o.customerName.toLowerCase().includes(keyword) ||
      o.phone.includes(keyword) ||
      o.address.toLowerCase().includes(keyword)
    );
  }

  // Lọc trạng thái
  if (statusVal) {
    filtered = filtered.filter(o => o.status === statusVal);
  }

  // Sắp xếp
  if (sortVal === "newest")  filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (sortVal === "oldest")  filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  if (sortVal === "highest") filtered.sort((a, b) => b.total - a.total);

  renderOrdersTable(filtered);
}

// ── Cập nhật trạng thái nhanh (từ bảng) ──────────────────

function quickUpdateStatus(orderId, newStatus) {
  if (!confirm(`Xác nhận cập nhật đơn ${orderId} → "${newStatus}"?`)) return;
  updateOrderStatus(orderId, newStatus);
  showToast(`Đã cập nhật đơn ${orderId} → ${newStatus}`);
}

function updateOrderStatus(orderId, newStatus) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const idx = orders.findIndex(o => o.id === orderId);
  if (idx === -1) return;
  orders[idx].status = newStatus;
  orders[idx].updatedAt = new Date().toISOString();
  localStorage.setItem("orders", JSON.stringify(orders));
  allOrders = orders;
  renderOrdersTable(filterCurrentOrders());
  updateStatCards(orders);
  updateNavCounts();
}

function filterCurrentOrders() {
  const keyword   = document.getElementById("order-search").value.toLowerCase();
  const statusVal = document.getElementById("order-status-filter").value;
  const sortVal   = document.getElementById("order-sort").value;
  let filtered = [...allOrders];
  if (keyword)    filtered = filtered.filter(o => o.id.toLowerCase().includes(keyword) || o.customerName.toLowerCase().includes(keyword) || o.phone.includes(keyword));
  if (statusVal)  filtered = filtered.filter(o => o.status === statusVal);
  if (sortVal === "newest")  filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (sortVal === "oldest")  filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  if (sortVal === "highest") filtered.sort((a, b) => b.total - a.total);
  return filtered;
}

// ── Modal chi tiết đơn hàng ───────────────────────────────

function openOrderModal(orderId) {
  const order = allOrders.find(o => o.id === orderId);
  if (!order) return;

  currentOrderId = orderId;

  // Tìm thông tin user
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user  = users.find(u => u.id === order.userId);

  document.getElementById("modal-order-id").textContent = `📦 ${order.id}`;
  document.getElementById("modal-status-select").value  = order.status;

  document.getElementById("modal-body").innerHTML = `
    <!-- Thông tin khách hàng -->
    <div class="modal-section">
      <h4 class="modal-section__title">👤 Thông tin khách hàng</h4>
      <div class="modal-info-grid">
        <div class="modal-info-item">
          <span class="modal-info-label">Họ tên</span>
          <span class="modal-info-val">${order.customerName}</span>
        </div>
        <div class="modal-info-item">
          <span class="modal-info-label">Số điện thoại</span>
          <span class="modal-info-val">${order.phone}</span>
        </div>
        <div class="modal-info-item" style="grid-column: 1/-1;">
          <span class="modal-info-label">Địa chỉ giao hàng</span>
          <span class="modal-info-val">${order.address}</span>
        </div>
        ${order.note ? `
        <div class="modal-info-item" style="grid-column: 1/-1;">
          <span class="modal-info-label">Ghi chú</span>
          <span class="modal-info-val">${order.note}</span>
        </div>` : ""}
        ${order.paymentMethod ? `
        <div class="modal-info-item">
          <span class="modal-info-label">Phương thức thanh toán</span>
          <span class="modal-info-val">💳 ${getPaymentLabelAdmin(order.paymentMethod)}</span>
        </div>` : ""}
        ${user ? `
        <div class="modal-info-item">
          <span class="modal-info-label">Email tài khoản</span>
          <span class="modal-info-val">${user.email}</span>
        </div>` : ""}
      </div>
    </div>

    <!-- Sản phẩm -->
    <div class="modal-section">
      <h4 class="modal-section__title">🛒 Sản phẩm đặt mua</h4>
      <div class="modal-items">
        ${order.items.map(item => `
          <div class="modal-item">
            <img src="${item.thumbnail}" alt="${item.name}"
                 onerror="this.src='assets/images/placeholder.jpg'">
            <div class="modal-item__info">
              <p class="modal-item__name">${item.name}</p>
              <p class="modal-item__price">${formatPrice(item.price)} × ${item.quantity}</p>
            </div>
            <p class="modal-item__subtotal">${formatPrice(item.subtotal)}</p>
          </div>
        `).join("")}
      </div>
      <div class="modal-total">
        <span>Tổng cộng:</span>
        <strong>${formatPrice(order.total)}</strong>
      </div>
    </div>

    <!-- Thông tin đơn hàng -->
    <div class="modal-section">
      <h4 class="modal-section__title">📋 Thông tin đơn hàng</h4>
      <div class="modal-info-grid">
        <div class="modal-info-item">
          <span class="modal-info-label">Mã đơn hàng</span>
          <span class="modal-info-val">${order.id}</span>
        </div>
        <div class="modal-info-item">
          <span class="modal-info-label">Ngày đặt</span>
          <span class="modal-info-val">${formatDate(order.createdAt)}</span>
        </div>
        <div class="modal-info-item">
          <span class="modal-info-label">Trạng thái hiện tại</span>
          <span class="order-status-badge order-status-badge--${statusClass(order.status)}">
            ${statusIcon(order.status)} ${order.status}
          </span>
        </div>
        ${order.updatedAt ? `
        <div class="modal-info-item">
          <span class="modal-info-label">Cập nhật lần cuối</span>
          <span class="modal-info-val">${formatDate(order.updatedAt)}</span>
        </div>` : ""}
      </div>
    </div>
  `;

  document.getElementById("order-detail-modal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeOrderModal() {
  document.getElementById("order-detail-modal").style.display = "none";
  document.body.style.overflow = "";
  currentOrderId = null;
}

function saveOrderStatus() {
  if (!currentOrderId) return;
  const newStatus = document.getElementById("modal-status-select").value;
  updateOrderStatus(currentOrderId, newStatus);
  showToast(`Đã cập nhật trạng thái → ${newStatus}`);
  closeOrderModal();
}

// ── Load & Render tài khoản ───────────────────────────────

function loadUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  renderUsersTable(users);
}

function renderUsersTable(users) {
  const tbody   = document.getElementById("users-tbody");
  const emptyEl = document.getElementById("users-empty-msg");

  if (users.length === 0) {
    tbody.innerHTML = "";
    emptyEl.style.display = "flex";
    return;
  }
  emptyEl.style.display = "none";

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  tbody.innerHTML = users.map((user, idx) => {
    const userOrders = orders.filter(o => o.userId === user.id).length;
    return `
      <tr>
        <td>${idx + 1}</td>
        <td><strong>${user.fullname}</strong></td>
        <td>${user.email}</td>
        <td>${user.phone || "—"}</td>
        <td>${formatDate(user.createdAt)}</td>
        <td>
          <span class="order-count-badge ${userOrders > 0 ? "order-count-badge--active" : ""}">
            ${userOrders} đơn
          </span>
        </td>
      </tr>
    `;
  }).join("");
}

function filterUsers() {
  const keyword = document.getElementById("user-search").value.toLowerCase();
  const users   = JSON.parse(localStorage.getItem("users")) || [];
  const filtered = keyword
    ? users.filter(u =>
        u.fullname.toLowerCase().includes(keyword) ||
        u.email.toLowerCase().includes(keyword) ||
        (u.phone || "").includes(keyword)
      )
    : users;
  renderUsersTable(filtered);
}

// ── Stat cards ────────────────────────────────────────────

function updateStatCards(orders) {
  const total    = orders.length;
  const pending  = orders.filter(o => o.status === "Chờ xác nhận").length;
  const done     = orders.filter(o => o.status === "Đã giao").length;
  const revenue  = orders
    .filter(o => o.status !== "Đã hủy")
    .reduce((sum, o) => sum + o.total, 0);

  document.getElementById("stat-total").textContent   = total;
  document.getElementById("stat-pending").textContent = pending;
  document.getElementById("stat-done").textContent    = done;
  document.getElementById("stat-revenue").textContent = formatPrice(revenue);
}

function updateNavCounts() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const users  = JSON.parse(localStorage.getItem("users"))  || [];
  const pending = orders.filter(o => o.status === "Chờ xác nhận").length;

  const orderCount   = document.getElementById("nav-order-count");
  const userCount    = document.getElementById("nav-user-count");
  const productCount = document.getElementById("nav-product-count");

  if (orderCount)   { orderCount.textContent   = orders.length;   orderCount.style.display   = orders.length   ? "inline" : "none"; }
  if (userCount)    { userCount.textContent     = users.length;    userCount.style.display    = users.length    ? "inline" : "none"; }
  if (productCount) { productCount.textContent  = getAllProducts().length; productCount.style.display = "inline"; }

  document.title = pending > 0
    ? `(${pending}) Admin — Thanhbcwed`
    : "Admin — Thanhbcwed";
}

// ── Thống kê ──────────────────────────────────────────────

function renderStats() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const users  = JSON.parse(localStorage.getItem("users"))  || [];

  const statusGroups = {};
  orders.forEach(o => {
    statusGroups[o.status] = (statusGroups[o.status] || 0) + 1;
  });

  // Top sản phẩm bán chạy
  const productSales = {};
  orders.filter(o => o.status !== "Đã hủy").forEach(o => {
    o.items.forEach(item => {
      if (!productSales[item.name]) productSales[item.name] = { qty: 0, revenue: 0 };
      productSales[item.name].qty     += item.quantity;
      productSales[item.name].revenue += item.subtotal;
    });
  });
  const topProducts = Object.entries(productSales)
    .sort((a, b) => b[1].qty - a[1].qty)
    .slice(0, 5);

  const totalRevenue = orders.filter(o => o.status !== "Đã hủy").reduce((s, o) => s + o.total, 0);

  document.getElementById("stats-detail").innerHTML = `
    <!-- Tổng quan -->
    <div class="stats-card">
      <h3 class="stats-card__title">📊 Tổng quan</h3>
      <div class="stats-rows">
        <div class="stats-row"><span>Tổng đơn hàng</span><strong>${orders.length}</strong></div>
        <div class="stats-row"><span>Tổng tài khoản</span><strong>${users.length}</strong></div>
        <div class="stats-row"><span>Doanh thu (chưa hủy)</span><strong style="color:var(--accent)">${formatPrice(totalRevenue)}</strong></div>
        <div class="stats-row"><span>Đơn trung bình</span><strong>${orders.length ? formatPrice(Math.round(totalRevenue / orders.length)) : "0đ"}</strong></div>
      </div>
    </div>

    <!-- Theo trạng thái -->
    <div class="stats-card">
      <h3 class="stats-card__title">📋 Đơn hàng theo trạng thái</h3>
      <div class="stats-rows">
        ${["Chờ xác nhận","Đang xử lý","Đang giao","Đã giao","Đã hủy"].map(s => `
          <div class="stats-row">
            <span>${statusIcon(s)} ${s}</span>
            <strong>${statusGroups[s] || 0}</strong>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Top sản phẩm -->
    <div class="stats-card stats-card--wide">
      <h3 class="stats-card__title">🏆 Top sản phẩm bán chạy</h3>
      ${topProducts.length === 0
        ? `<p style="color:var(--text-muted); text-align:center; padding:20px;">Chưa có dữ liệu</p>`
        : `<table class="admin-table">
            <thead><tr><th>#</th><th>Sản phẩm</th><th>Số lượng bán</th><th>Doanh thu</th></tr></thead>
            <tbody>
              ${topProducts.map(([name, data], i) => `
                <tr>
                  <td>${i + 1}</td>
                  <td>${name}</td>
                  <td><strong>${data.qty}</strong></td>
                  <td><strong style="color:var(--accent)">${formatPrice(data.revenue)}</strong></td>
                </tr>
              `).join("")}
            </tbody>
          </table>`
      }
    </div>
  `;
}

// ── Helpers ───────────────────────────────────────────────

function formatDate(isoString) {
  if (!isoString) return "—";
  const d = new Date(isoString);
  return `${d.getDate().toString().padStart(2,"0")}/${(d.getMonth()+1).toString().padStart(2,"0")}/${d.getFullYear()} ${d.getHours().toString().padStart(2,"0")}:${d.getMinutes().toString().padStart(2,"0")}`;
}

function statusClass(status) {
  const map = { "Chờ xác nhận":"pending", "Đang xử lý":"processing", "Đang giao":"shipping", "Đã giao":"done", "Đã hủy":"cancelled" };
  return map[status] || "pending";
}

function statusIcon(status) {
  const map = { "Chờ xác nhận":"⏳", "Đang xử lý":"⚙️", "Đang giao":"🚚", "Đã giao":"✅", "Đã hủy":"❌" };
  return map[status] || "📋";
}

function getPaymentLabelAdmin(method) {
  const map = {
    "COD": "Thanh toán khi nhận hàng",
    "BankTransfer": "Chuyển khoản ngân hàng",
    "MoMo": "MoMo",
    "ZaloPay": "ZaloPay"
  };
  return map[method] || method;
}

// ── Khởi tạo khi DOM ready ────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  // Kiểm tra đã đăng nhập chưa
  if (sessionStorage.getItem("adminLoggedIn") === "true") {
    document.getElementById("admin-login-overlay").style.display = "none";
    initAdmin();
  }

  // Gắn sự kiện sidebar nav
  document.querySelectorAll(".sidebar__link[data-section]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchSection(link.dataset.section);
      // Đóng sidebar trên mobile
      document.getElementById("sidebar").classList.remove("sidebar--open");
    });
  });

  // Đóng modal khi click ngoài
  document.getElementById("order-detail-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "order-detail-modal") closeOrderModal();
  });
});

// ============================================================
// QUẢN LÝ SẢN PHẨM
// ============================================================

// Lưu override giá/trạng thái vào localStorage (không sửa data.js gốc)
function getProductOverrides() {
  return JSON.parse(localStorage.getItem("productOverrides")) || {};
}
function saveProductOverrides(overrides) {
  localStorage.setItem("productOverrides", JSON.stringify(overrides));
}

// Lấy sản phẩm đã merge với override
function getMergedProducts() {
  const overrides = getProductOverrides();
  return getAllProducts().map(p => {
    const ov = overrides[p.id];
    return ov ? { ...p, ...ov } : p;
  });
}

let currentEditProductId = null;

// ── Load & Render bảng sản phẩm ──────────────────────────

function loadAdminProducts() {
  const products = getMergedProducts();
  renderProductsTable(products);
  updateProductStats(products);
}

function renderProductsTable(products) {
  const tbody   = document.getElementById("products-tbody");
  const emptyEl = document.getElementById("products-empty-msg");
  if (!tbody) return;

  if (products.length === 0) {
    tbody.innerHTML = "";
    emptyEl.style.display = "flex";
    return;
  }
  emptyEl.style.display = "none";

  const catLabel = { dienthoai: "📱 Điện thoại", laptop: "💻 Laptop", pc: "🖥️ PC", phukien: "🎧 Phụ kiện" };

  tbody.innerHTML = products.map(p => `
    <tr>
      <td>
        <img src="${p.thumbnail}" alt="${p.name}"
             style="width:48px;height:48px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:4px;"
             onerror="this.src='assets/images/placeholder.jpg'">
      </td>
      <td>
        <div style="font-weight:600;font-size:0.88rem;">${p.name}</div>
        ${p.badge ? `<span class="order-status-badge order-status-badge--${p.badge === 'Hot' ? 'processing' : p.badge === 'Sale' ? 'cancelled' : 'shipping'}" style="font-size:0.7rem;">${p.badge}</span>` : ""}
      </td>
      <td><span style="font-size:0.85rem;">${catLabel[p.category] || p.category}</span></td>
      <td>
        <strong style="color:var(--accent);font-size:0.9rem;">${formatPrice(p.price)}</strong>
        ${getProductOverrides()[p.id]?.price !== undefined ? '<span style="font-size:0.7rem;color:var(--primary);margin-left:4px;">✏️ đã sửa</span>' : ""}
      </td>
      <td>
        <span style="text-decoration:line-through;color:var(--text-muted);font-size:0.85rem;">${formatPrice(p.originalPrice)}</span>
        <span style="font-size:0.75rem;color:var(--danger);margin-left:4px;">-${Math.round((p.originalPrice - p.price) / p.originalPrice * 100)}%</span>
      </td>
      <td>
        <span class="order-status-badge order-status-badge--${p.inStock ? "shipping" : "cancelled"}">
          ${p.inStock ? "✅ Còn hàng" : "❌ Hết hàng"}
        </span>
      </td>
      <td>
        <div class="action-btns">
          <button class="action-btn action-btn--view" onclick="openProductModal(${p.id})" title="Chỉnh sửa">✏️</button>
          <button class="action-btn ${p.inStock ? "action-btn--cancel" : "action-btn--approve"}"
            onclick="quickToggleStock(${p.id})"
            title="${p.inStock ? "Đánh dấu hết hàng" : "Đánh dấu còn hàng"}">
            ${p.inStock ? "📦" : "✅"}
          </button>
        </div>
      </td>
    </tr>
  `).join("");
}

function updateProductStats(products) {
  const inStock  = products.filter(p => p.inStock).length;
  const outStock = products.filter(p => !p.inStock).length;
  const cats     = new Set(products.map(p => p.category)).size;

  const el = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  el("pstat-total",      products.length);
  el("pstat-instock",    inStock);
  el("pstat-outstock",   outStock);
  el("pstat-categories", cats);
}

// ── Filter sản phẩm ───────────────────────────────────────

function filterAdminProducts() {
  const keyword  = document.getElementById("product-search")?.value.toLowerCase() || "";
  const category = document.getElementById("product-category-filter")?.value || "";
  const stock    = document.getElementById("product-stock-filter")?.value || "";

  let list = getMergedProducts();

  if (keyword)  list = list.filter(p => p.name.toLowerCase().includes(keyword));
  if (category) list = list.filter(p => p.category === category);
  if (stock === "instock")  list = list.filter(p => p.inStock);
  if (stock === "outstock") list = list.filter(p => !p.inStock);

  renderProductsTable(list);
}

// ── Toggle tồn kho nhanh ──────────────────────────────────

function quickToggleStock(productId) {
  const products  = getMergedProducts();
  const p         = products.find(pr => pr.id === productId);
  if (!p) return;

  const overrides = getProductOverrides();
  overrides[productId] = { ...(overrides[productId] || {}), inStock: !p.inStock };
  saveProductOverrides(overrides);

  loadAdminProducts();
  showToast(`${p.name}: ${!p.inStock ? "✅ Còn hàng" : "❌ Hết hàng"}`);
}

// ── Modal chỉnh sửa ───────────────────────────────────────

function openProductModal(productId) {
  const products = getMergedProducts();
  const p = products.find(pr => pr.id === productId);
  if (!p) return;

  // Lấy dữ liệu gốc từ data.js (chưa bị override)
  const original = getAllProducts().find(pr => pr.id === productId);
  const hasOverride = !!getProductOverrides()[productId];

  currentEditProductId = productId;

  const catLabel = { dienthoai: "📱 Điện thoại", laptop: "💻 Laptop", pc: "🖥️ PC", phukien: "🎧 Phụ kiện" };

  document.getElementById("product-modal-title").textContent = `✏️ Chỉnh sửa: ${p.name.split(" ").slice(0, 4).join(" ")}...`;
  document.getElementById("pedit-img").src   = p.thumbnail;
  document.getElementById("pedit-name").textContent = p.name;
  document.getElementById("pedit-cat").textContent  = catLabel[p.category] || p.category;
  document.getElementById("pedit-id").textContent   = `#${p.id}`;

  const priceInput = document.getElementById("pedit-price");
  const origInput  = document.getElementById("pedit-original-price");
  priceInput.value = p.price;
  origInput.value  = p.originalPrice;

  document.getElementById("pedit-instock").value = String(p.inStock);
  document.getElementById("pedit-badge").value   = p.badge || "";

  // Hiển thị thông tin gốc và nút khôi phục
  const restoreSection = document.getElementById("pedit-restore-section");
  if (restoreSection) {
    if (hasOverride && original) {
      restoreSection.style.display = "block";
      document.getElementById("pedit-original-info").innerHTML =
        `<span>Giá gốc ban đầu: <strong>${formatPrice(original.price)}</strong></span>
         <span>Giá niêm yết: <strong>${formatPrice(original.originalPrice)}</strong></span>
         <span>Trạng thái: <strong>${original.inStock ? "Còn hàng" : "Hết hàng"}</strong></span>
         <span>Badge: <strong>${original.badge || "Không có"}</strong></span>`;
    } else {
      restoreSection.style.display = "none";
    }
  }

  updatePriceCalc();

  // Live preview khi nhập
  priceInput.oninput = origInput.oninput = updatePriceCalc;

  document.getElementById("product-edit-modal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function updatePriceCalc() {
  const price    = parseInt(document.getElementById("pedit-price")?.value) || 0;
  const original = parseInt(document.getElementById("pedit-original-price")?.value) || 0;

  document.getElementById("pedit-price-preview").textContent    = price    ? formatPrice(price)    : "";
  document.getElementById("pedit-original-preview").textContent = original ? formatPrice(original) : "";

  if (price > 0 && original > 0 && original >= price) {
    const pct    = Math.round((original - price) / original * 100);
    const saving = original - price;
    document.getElementById("pedit-discount-pct").textContent = `-${pct}%`;
    document.getElementById("pedit-saving").textContent       = formatPrice(saving);
    document.getElementById("pedit-calc").style.display       = "flex";
  } else {
    document.getElementById("pedit-calc").style.display = "none";
  }
}

function closeProductModal() {
  document.getElementById("product-edit-modal").style.display = "none";
  document.body.style.overflow = "";
  currentEditProductId = null;
}

function saveProductEdit() {
  if (!currentEditProductId) return;

  const price    = parseInt(document.getElementById("pedit-price").value);
  const original = parseInt(document.getElementById("pedit-original-price").value);
  const inStock  = document.getElementById("pedit-instock").value === "true";
  const badge    = document.getElementById("pedit-badge").value || null;

  // Validate
  if (!price || price <= 0) {
    showToast("Giá bán không hợp lệ!", "error"); return;
  }
  if (!original || original <= 0) {
    showToast("Giá gốc không hợp lệ!", "error"); return;
  }
  if (price > original) {
    showToast("Giá bán không được cao hơn giá gốc!", "error"); return;
  }

  // Lưu override
  const overrides = getProductOverrides();
  overrides[currentEditProductId] = {
    ...(overrides[currentEditProductId] || {}),
    price,
    originalPrice: original,
    inStock,
    badge,
    updatedAt: new Date().toISOString()
  };
  saveProductOverrides(overrides);

  closeProductModal();
  loadAdminProducts();
  showToast("✅ Đã lưu thay đổi sản phẩm!");
}

// Đóng modal khi click ngoài
window.addEventListener("click", (e) => {
  if (e.target.id === "product-edit-modal") closeProductModal();
});

// ── Khôi phục sản phẩm về dữ liệu gốc ───────────────────

function restoreProductEdit() {
  if (!currentEditProductId) return;
  const original = getAllProducts().find(p => p.id === currentEditProductId);
  if (!original) return;

  if (!confirm(`Khôi phục "${original.name}" về thông tin gốc ban đầu?`)) return;

  const overrides = getProductOverrides();
  delete overrides[currentEditProductId];
  saveProductOverrides(overrides);

  closeProductModal();
  loadAdminProducts();
  showToast("↩️ Đã khôi phục sản phẩm về thông tin gốc!");
}
