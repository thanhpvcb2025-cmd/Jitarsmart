// ============================================================
// compare.js — Tính năng so sánh sản phẩm
// ============================================================

// Lưu trong memory (không localStorage)
let compareList = [];
const MAX_COMPARE = 3;

// ── Toggle so sánh ────────────────────────────────────────

function toggleCompare(productId) {
  productId = parseInt(productId);
  if (!productId) return;

  const idx = compareList.indexOf(productId);
  if (idx !== -1) {
    compareList.splice(idx, 1);
    showToast("Đã xóa khỏi danh sách so sánh");
  } else {
    if (compareList.length >= MAX_COMPARE) {
      showToast(`Chỉ có thể so sánh tối đa ${MAX_COMPARE} sản phẩm!`, "error");
      return;
    }
    compareList.push(productId);
    showToast("Đã thêm vào danh sách so sánh ⚖️");
  }

  renderCompareBar();
  updateCompareButtons();
}

function isInCompare(productId) {
  return compareList.includes(parseInt(productId));
}

function updateCompareButtons() {
  document.querySelectorAll(".card__compare-btn, #btn-compare").forEach(btn => {
    const id = parseInt(btn.getAttribute("onclick")?.match(/\d+/)?.[0] || 0);
    if (!id) return;
    btn.classList.toggle("compare-btn--active", isInCompare(id));
    btn.title = isInCompare(id) ? "Xóa khỏi so sánh" : "So sánh";
  });
}

// ── Floating compare bar ──────────────────────────────────

function renderCompareBar() {
  let bar = document.getElementById("compare-bar");

  if (compareList.length === 0) {
    if (bar) bar.style.display = "none";
    return;
  }

  if (!bar) {
    bar = document.createElement("div");
    bar.id = "compare-bar";
    document.body.appendChild(bar);
  }

  const products = compareList.map(id => getProductById(id)).filter(Boolean);

  bar.style.display = "flex";
  bar.innerHTML = `
    <div class="compare-bar__inner">
      <div class="compare-bar__items">
        ${products.map(p => `
          <div class="compare-bar__item">
            <img src="${p.thumbnail}" alt="${p.name}"
                 onerror="this.src='assets/images/placeholder.jpg'">
            <span class="compare-bar__item-name">${p.name.split(" ").slice(0,4).join(" ")}</span>
            <button class="compare-bar__remove" onclick="toggleCompare(${p.id})" title="Xóa">✕</button>
          </div>
        `).join("")}
        ${compareList.length < MAX_COMPARE ? `
          <div class="compare-bar__placeholder">
            <span>+ Thêm sản phẩm</span>
          </div>
        ` : ""}
      </div>
      <div class="compare-bar__actions">
        <button class="btn btn--accent" onclick="openCompareModal()" ${compareList.length < 2 ? "disabled" : ""}>
          ⚖️ So sánh ngay (${compareList.length})
        </button>
        <button class="btn btn--outline compare-bar__clear" onclick="clearCompare()">Xóa tất cả</button>
      </div>
    </div>
  `;
}

function clearCompare() {
  compareList = [];
  renderCompareBar();
  updateCompareButtons();
}

// ── Modal so sánh ─────────────────────────────────────────

function openCompareModal() {
  if (compareList.length < 2) {
    showToast("Cần ít nhất 2 sản phẩm để so sánh!", "error");
    return;
  }

  const products = compareList.map(id => getProductById(id)).filter(Boolean);

  let modal = document.getElementById("compare-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "compare-modal";
    document.body.appendChild(modal);
  }

  // Lấy tất cả spec keys
  const allSpecKeys = [...new Set(products.flatMap(p => Object.keys(p.specs || {})))];

  modal.innerHTML = `
    <div class="compare-modal__overlay" onclick="closeCompareModal()"></div>
    <div class="compare-modal__content">
      <div class="compare-modal__header">
        <h2 class="compare-modal__title">⚖️ So sánh sản phẩm</h2>
        <button class="compare-modal__close" onclick="closeCompareModal()">✕</button>
      </div>
      <div class="compare-modal__body">
        <div class="compare-table-wrap">
          <table class="compare-table">
            <thead>
              <tr>
                <th class="compare-table__label-col">Thông tin</th>
                ${products.map(p => `
                  <th>
                    <div class="compare-product-header">
                      <img src="${p.thumbnail}" alt="${p.name}"
                           onerror="this.src='assets/images/placeholder.jpg'">
                      <a href="product.html?id=${p.id}" class="compare-product-name">${p.name}</a>
                      <div class="compare-product-price">${formatPrice(p.price)}</div>
                      <button class="btn btn--primary compare-add-btn"
                        onclick="handleAddToCart(${p.id})"
                        ${!p.inStock ? "disabled" : ""}>
                        ${p.inStock ? "🛒 Thêm vào giỏ" : "Hết hàng"}
                      </button>
                    </div>
                  </th>
                `).join("")}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="compare-table__label">Danh mục</td>
                ${products.map(p => `<td>${getCategoryLabel(p.category)}</td>`).join("")}
              </tr>
              <tr>
                <td class="compare-table__label">Giá bán</td>
                ${products.map(p => `<td class="compare-price">${formatPrice(p.price)}</td>`).join("")}
              </tr>
              <tr>
                <td class="compare-table__label">Giá gốc</td>
                ${products.map(p => `<td><s>${formatPrice(p.originalPrice)}</s></td>`).join("")}
              </tr>
              <tr>
                <td class="compare-table__label">Trạng thái</td>
                ${products.map(p => `<td class="${p.inStock ? "stock--in" : "stock--out"}">${p.inStock ? "✓ Còn hàng" : "✕ Hết hàng"}</td>`).join("")}
              </tr>
              ${allSpecKeys.map(key => `
                <tr>
                  <td class="compare-table__label">${key}</td>
                  ${products.map(p => `<td>${p.specs?.[key] || "—"}</td>`).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeCompareModal() {
  const modal = document.getElementById("compare-modal");
  if (modal) modal.style.display = "none";
  document.body.style.overflow = "";
}

// Hàm handleAddToCart dùng trong compare modal (nếu chưa có)
if (typeof handleAddToCart === "undefined") {
  window.handleAddToCart = function(productId) {
    if (!requireLogin()) return;
    addToCart(productId);
  };
}

// ── Khởi tạo ─────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderCompareBar();
});
