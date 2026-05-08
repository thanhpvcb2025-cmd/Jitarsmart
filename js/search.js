// ============================================================
// search.js — Tính năng tìm kiếm sản phẩm
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initSearch();
});

function initSearch() {
  const input = document.getElementById("search-input");
  const dropdown = document.getElementById("search-dropdown");
  if (!input || !dropdown) return;

  // Debounce search
  let debounceTimer = null;

  input.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    const q = input.value.trim();
    if (q.length < 1) {
      hideDropdown();
      return;
    }
    debounceTimer = setTimeout(() => showSearchDropdown(q), 200);
  });

  // Enter → go to index.html?search=keyword
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const q = input.value.trim();
      if (q) {
        hideDropdown();
        window.location.href = `index.html?search=${encodeURIComponent(q)}`;
      }
    }
    if (e.key === "Escape") {
      hideDropdown();
      input.blur();
    }
  });

  // Đóng dropdown khi click ngoài
  document.addEventListener("click", (e) => {
    const wrap = document.getElementById("search-wrap");
    if (wrap && !wrap.contains(e.target)) {
      hideDropdown();
    }
  });

  // Focus lại input khi click vào dropdown
  dropdown.addEventListener("mousedown", (e) => e.preventDefault());
}

function showSearchDropdown(query) {
  const dropdown = document.getElementById("search-dropdown");
  if (!dropdown) return;

  const q = query.toLowerCase();
  const results = getAllProducts().filter(p =>
    p.name.toLowerCase().includes(q) ||
    getCategoryLabel(p.category).toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  ).slice(0, 6);

  if (results.length === 0) {
    dropdown.innerHTML = `<div class="search-dropdown__empty">Không tìm thấy sản phẩm nào</div>`;
    dropdown.style.display = "block";
    return;
  }

  dropdown.innerHTML = results.map(p => `
    <a class="search-result-item" href="product.html?id=${p.id}">
      <img src="${p.thumbnail}" alt="${p.name}" class="search-result-item__img"
           onerror="this.src='assets/images/placeholder.jpg'">
      <div class="search-result-item__info">
        <div class="search-result-item__name">${highlightMatch(p.name, query)}</div>
        <div class="search-result-item__meta">
          <span class="search-result-item__cat">${getCategoryLabel(p.category)}</span>
          <span class="search-result-item__price">${formatPrice(p.price)}</span>
        </div>
      </div>
    </a>
  `).join("") + `
    <div class="search-dropdown__footer">
      <a href="index.html?search=${encodeURIComponent(query)}" class="search-dropdown__all">
        🔍 Xem tất cả kết quả cho "<strong>${escapeHtml(query)}</strong>"
      </a>
    </div>
  `;

  dropdown.style.display = "block";
}

function hideDropdown() {
  const dropdown = document.getElementById("search-dropdown");
  if (dropdown) dropdown.style.display = "none";
}

function highlightMatch(text, query) {
  if (!query) return escapeHtml(text);
  const escaped = escapeHtml(text);
  const escapedQ = escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return escaped.replace(new RegExp(`(${escapedQ})`, "gi"), "<mark>$1</mark>");
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
