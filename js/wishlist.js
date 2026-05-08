// ============================================================
// wishlist.js — Tính năng yêu thích (Wishlist)
// ============================================================

// ── Helpers ───────────────────────────────────────────────

function getWishlist() {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveWishlist(list) {
  localStorage.setItem("wishlist", JSON.stringify(list));
  updateWishlistBadge();
}

function isInWishlist(productId) {
  return getWishlist().includes(parseInt(productId));
}

function toggleWishlist(productId) {
  productId = parseInt(productId);
  let list = getWishlist();
  if (list.includes(productId)) {
    list = list.filter(id => id !== productId);
    showToast("Đã xóa khỏi danh sách yêu thích", "error");
  } else {
    list.push(productId);
    showToast("Đã thêm vào danh sách yêu thích ❤️");
  }
  saveWishlist(list);
  // Cập nhật tất cả nút heart trên trang
  updateAllHeartButtons(productId);
  return list.includes(productId);
}

function updateAllHeartButtons(productId) {
  const active = isInWishlist(productId);
  document.querySelectorAll(`.heart-btn[data-id="${productId}"]`).forEach(btn => {
    btn.classList.toggle("heart-btn--active", active);
    btn.title = active ? "Xóa khỏi yêu thích" : "Thêm vào yêu thích";
    const icon = btn.querySelector(".heart-icon");
    if (icon) icon.textContent = active ? "❤️" : "🤍";
  });
}

function updateWishlistBadge() {
  const count = getWishlist().length;
  const badge = document.getElementById("wishlist-badge");
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }
}

// ── Render wishlist tab (cart.html) ───────────────────────

function renderWishlist() {
  const list = getWishlist();
  const container = document.getElementById("wishlist-items");
  const emptyEl = document.getElementById("wishlist-empty");
  if (!container) return;

  if (list.length === 0) {
    if (emptyEl) emptyEl.style.display = "block";
    container.innerHTML = "";
    return;
  }
  if (emptyEl) emptyEl.style.display = "none";

  const products = list.map(id => getProductById(id)).filter(Boolean);

  container.innerHTML = products.map(p => `
    <div class="wishlist-item" id="wishlist-item-${p.id}">
      <img src="${p.thumbnail}" alt="${p.name}" class="wishlist-item__img"
           onerror="this.src='assets/images/placeholder.jpg'"
           onclick="location.href='product.html?id=${p.id}'" style="cursor:pointer">
      <div class="wishlist-item__info">
        <h3 class="wishlist-item__name" onclick="location.href='product.html?id=${p.id}'" style="cursor:pointer">${p.name}</h3>
        <p class="wishlist-item__price">${formatPrice(p.price)}</p>
        <p class="wishlist-item__stock ${p.inStock ? "stock--in" : "stock--out"}">${p.inStock ? "✓ Còn hàng" : "✕ Hết hàng"}</p>
      </div>
      <div class="wishlist-item__actions">
        <button class="btn btn--primary wishlist-item__add"
          onclick="handleWishlistAddToCart(${p.id})"
          ${!p.inStock ? "disabled" : ""}>
          🛒 Thêm vào giỏ
        </button>
        <button class="btn btn--outline wishlist-item__remove"
          onclick="removeFromWishlistAndRender(${p.id})">
          🗑 Xóa
        </button>
      </div>
    </div>
  `).join("");
}

function handleWishlistAddToCart(productId) {
  if (!requireLogin()) return;
  addToCart(productId);
}

function removeFromWishlistAndRender(productId) {
  let list = getWishlist();
  list = list.filter(id => id !== parseInt(productId));
  saveWishlist(list);
  updateAllHeartButtons(productId);
  renderWishlist();
  showToast("Đã xóa khỏi danh sách yêu thích", "error");
}

// ── Khởi tạo ─────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  updateWishlistBadge();
});
