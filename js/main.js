// ============================================================
// main.js — Hàm dùng chung toàn site
// ============================================================

// Format tiền VNĐ
function formatPrice(price) {
  return price.toLocaleString("vi-VN") + "đ";
}

// Tính % giảm giá
function calcDiscount(price, originalPrice) {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

// ── Giỏ hàng (localStorage) ───────────────────────────────

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const product = getProductById(productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity
    });
  }
  saveCart(cart);
  showToast("Đã thêm vào giỏ hàng!");
}

function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cart-badge");
  if (badge) {
    badge.textContent = total;
    badge.style.display = total > 0 ? "flex" : "none";
  }
}

// ── Toast thông báo ───────────────────────────────────────

function showToast(message, type = "success") {
  // Xóa toast cũ nếu có
  const old = document.getElementById("toast");
  if (old) old.remove();

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <span class="toast__icon">${type === "success" ? "✓" : "✕"}</span>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);

  // Hiện lên
  setTimeout(() => toast.classList.add("toast--show"), 10);
  // Ẩn sau 2.5s
  setTimeout(() => {
    toast.classList.remove("toast--show");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ── Render badge danh mục ─────────────────────────────────

function getCategoryLabel(category) {
  const map = { dienthoai: "Điện thoại", laptop: "Laptop", pc: "PC", phukien: "Phụ kiện" };
  return map[category] || category;
}

// ── Khởi tạo chung khi DOM ready ─────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();

  // Active nav link theo trang hiện tại
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const currentHash = window.location.hash; // ví dụ: "#products", "#footer"

  function setActiveNav() {
    document.querySelectorAll(".nav__link").forEach(link => {
      const href = link.getAttribute("href");
      link.classList.remove("nav__link--active");

      if (href && href.startsWith("#")) {
        // Anchor link: active nếu hash hiện tại khớp
        if (currentHash && href === currentHash) {
          link.classList.add("nav__link--active");
        }
        return;
      }

      // Link file: active nếu tên file khớp và không có hash (hoặc hash không khớp anchor nào)
      const hasMatchingAnchor = Array.from(document.querySelectorAll(".nav__link"))
        .some(l => l.getAttribute("href")?.startsWith("#") && l.getAttribute("href") === currentHash);

      if (href === currentPage && !hasMatchingAnchor) {
        link.classList.add("nav__link--active");
      }
    });
  }

  setActiveNav();

  // Xử lý active cho anchor link khi click
  document.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav__link").forEach(l => l.classList.remove("nav__link--active"));
      link.classList.add("nav__link--active");
    });
  });
});

// ── Toggle hiện/ẩn mật khẩu ──────────────────────────────
function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === "password") {
    input.type = "text";
    btn.textContent = "🙈";
  } else {
    input.type = "password";
    btn.textContent = "👁";
  }
}

// ── Mobile nav toggle ─────────────────────────────────────
function toggleMobileNav() {
  const nav = document.getElementById("main-nav");
  const btn = document.getElementById("hamburger-btn");
  if (!nav) return;
  nav.classList.toggle("nav--open");
  btn?.classList.toggle("hamburger-btn--open");
}

// Đóng mobile nav khi click ngoài
document.addEventListener("click", (e) => {
  const nav = document.getElementById("main-nav");
  const btn = document.getElementById("hamburger-btn");
  if (nav && nav.classList.contains("nav--open")) {
    if (!nav.contains(e.target) && e.target !== btn && !btn?.contains(e.target)) {
      nav.classList.remove("nav--open");
      btn?.classList.remove("hamburger-btn--open");
    }
  }
});
