// ============================================================
// home.js — Logic trang chủ
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Kiểm tra URL param ?search=keyword
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get("search");

  if (searchQuery) {
    // Điền vào search input
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = searchQuery;
    // Render kết quả tìm kiếm
    renderSearchResults(searchQuery);
  } else {
    renderProducts("all");
    initFilter();
  }

  initBannerSlideshow();
});

// ── Banner Slideshow random ───────────────────────────────

let bannerIndex   = 0;
let bannerTimer   = null;
const BANNER_INTERVAL = 3000; // 3 giây đổi ảnh

function initBannerSlideshow() {
  // Lấy tất cả sản phẩm còn hàng (đã merge override), shuffle ngẫu nhiên
  const all = getMergedProductsForHome()
    .filter(p => p.inStock)
    .map(p => ({ src: p.thumbnail, name: p.name }));

  // Shuffle
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }

  // Chỉ lấy tối đa 6 sản phẩm cho banner
  const pool = all.slice(0, 6);

  if (pool.length === 0) return;

  const img      = document.getElementById("banner-img");
  const dotsWrap = document.getElementById("banner-dots");
  const titleEl  = document.querySelector(".banner__title");

  // Tạo dots
  dotsWrap.innerHTML = pool.map((_, i) =>
    `<span class="banner__dot ${i === 0 ? "banner__dot--active" : ""}"
           onclick="jumpBanner(${i})"></span>`
  ).join("");

  function showSlide(idx) {
    bannerIndex = (idx + pool.length) % pool.length;
    const item  = pool[bannerIndex];

    // Fade out
    img.style.opacity = "0";
    img.style.transform = "scale(0.95)";

    setTimeout(() => {
      img.src = item.src;
      img.alt = item.name;

      // Cập nhật text banner theo danh mục sản phẩm
      const p = getMergedProductsForHome().find(p => p.thumbnail === item.src);
      if (p && titleEl) {
        const labels = { dienthoai: "Điện thoại", laptop: "Laptop", pc: "PC & iMac" };
        document.querySelector(".banner__tag").textContent =
          `🔥 ${labels[p.category] || "Sản phẩm"} nổi bật`;
      }

      // Fade in
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
    }, 300);

    // Cập nhật dots
    document.querySelectorAll(".banner__dot").forEach((dot, i) => {
      dot.classList.toggle("banner__dot--active", i === bannerIndex);
    });
  }

  // Hiện slide đầu tiên ngay (không chờ preload)
  showSlide(0);

  // Preload toàn bộ ảnh, khi xong mới bắt đầu auto play
  let loaded = 0;
  pool.forEach(item => {
    const preload = new Image();
    preload.src = item.src;
    preload.onload = preload.onerror = () => {
      loaded++;
      if (loaded === pool.length && !bannerTimer) {
        bannerTimer = setInterval(() => showSlide(bannerIndex + 1), BANNER_INTERVAL);
      }
    };
  });

  // Pause khi hover
  const wrap = document.querySelector(".banner__img-wrap");
  wrap?.addEventListener("mouseenter", () => clearInterval(bannerTimer));
  wrap?.addEventListener("mouseleave", () => {
    bannerTimer = setInterval(() => showSlide(bannerIndex + 1), BANNER_INTERVAL);
  });

  // Expose để dots có thể gọi
  window.jumpBanner = showSlide;
}

// ── Render grid sản phẩm ──────────────────────────────────

let currentCategory = "all";
let currentPage     = 1;
const PER_PAGE      = 8;

function renderProducts(category, page = 1) {
  currentCategory = category;
  currentPage     = page;

  const grid = document.getElementById("product-grid");
  const { items, total, pages } = getProductsPagedMerged(category, page, PER_PAGE);

  if (items.length === 0) {
    grid.innerHTML = `<p class="empty-msg">Không có sản phẩm nào.</p>`;
    renderPagination(0, 0, 0);
    return;
  }

  grid.innerHTML = items.map(p => createProductCard(p)).join("");
  renderPagination(pages, page, total);
}

// ── Phân trang ────────────────────────────────────────────

function renderPagination(totalPages, currentPage, totalItems) {
  const wrap = document.getElementById("pagination");
  if (!wrap) return;

  if (totalPages <= 1) { wrap.innerHTML = ""; return; }

  let html = `<div class="pagination__info">Hiển thị trang ${currentPage}/${totalPages} (${totalItems} sản phẩm)</div>
              <div class="pagination__btns">`;

  // Nút Trước
  html += `<button class="page-btn ${currentPage === 1 ? "page-btn--disabled" : ""}"
             onclick="changePage(${currentPage - 1})"
             ${currentPage === 1 ? "disabled" : ""}>‹ Trước</button>`;

  // Số trang
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 || i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      html += `<button class="page-btn ${i === currentPage ? "page-btn--active" : ""}"
                 onclick="changePage(${i})">${i}</button>`;
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      html += `<span class="page-dots">…</span>`;
    }
  }

  // Nút Sau
  html += `<button class="page-btn ${currentPage === totalPages ? "page-btn--disabled" : ""}"
             onclick="changePage(${currentPage + 1})"
             ${currentPage === totalPages ? "disabled" : ""}>Sau ›</button>`;

  html += `</div>`;
  wrap.innerHTML = html;
}

function changePage(page) {
  renderProducts(currentCategory, page);
  // Scroll lên đầu section sản phẩm
  document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function createProductCard(p) {
  const discount = calcDiscount(p.price, p.originalPrice);
  const badgeHtml = p.badge
    ? `<span class="card__badge card__badge--${p.badge.toLowerCase()}">${p.badge}</span>`
    : "";
  const stockHtml = !p.inStock
    ? `<span class="card__out-of-stock">Hết hàng</span>`
    : "";
  const inWishlist = typeof isInWishlist === "function" && isInWishlist(p.id);

  return `
    <div class="card" onclick="location.href='product.html?id=${p.id}'">
      <div class="card__img-wrap">
        <img src="${p.thumbnail}" alt="${p.name}" class="card__img"
             onerror="this.src='assets/images/placeholder.jpg'">
        ${badgeHtml}
        ${stockHtml}
        <button class="heart-btn ${inWishlist ? "heart-btn--active" : ""}"
          data-id="${p.id}"
          title="${inWishlist ? "Xóa khỏi yêu thích" : "Thêm vào yêu thích"}"
          onclick="event.stopPropagation(); handleHeartClick(this, ${p.id})">
          <span class="heart-icon">${inWishlist ? "❤️" : "🤍"}</span>
        </button>
      </div>
      <div class="card__body">
        <p class="card__category">${getCategoryLabel(p.category)}</p>
        <h3 class="card__name">${p.name}</h3>
        <div class="card__price-wrap">
          <span class="card__price">${formatPrice(p.price)}</span>
          <span class="card__original-price">${formatPrice(p.originalPrice)}</span>
          <span class="card__discount">-${discount}%</span>
        </div>
        <div class="card__card-actions">
          <button class="btn btn--primary card__btn"
            onclick="event.stopPropagation(); handleAddToCart(${p.id})"
            ${!p.inStock ? "disabled" : ""}>
            ${p.inStock ? "🛒 Thêm vào giỏ" : "Hết hàng"}
          </button>
          <button class="btn btn--outline card__compare-btn"
            title="So sánh"
            onclick="event.stopPropagation(); toggleCompare(${p.id})">
            ⚖️
          </button>
        </div>
      </div>
    </div>
  `;
}

// Kiểm tra đăng nhập trước khi thêm giỏ hàng (trang chủ)
function handleAddToCart(productId) {
  if (!requireLogin()) return;
  addToCart(productId);
}

// Toggle wishlist và cập nhật UI ngay lập tức
function handleHeartClick(btn, productId) {
  toggleWishlist(productId);
  const active = isInWishlist(productId);
  // Cập nhật tất cả nút cùng productId trên trang
  document.querySelectorAll(`.heart-btn[data-id="${productId}"]`).forEach(b => {
    b.classList.toggle("heart-btn--active", active);
    const icon = b.querySelector(".heart-icon");
    if (icon) icon.textContent = active ? "❤️" : "🤍";
    b.title = active ? "Xóa khỏi yêu thích" : "Thêm vào yêu thích";
  });
}

// ── Tìm kiếm sản phẩm (từ URL param) ─────────────────────

function renderSearchResults(query) {
  const q = query.toLowerCase();
  const allMerged = getMergedProductsForHome();
  const results = allMerged.filter(p =>
    p.name.toLowerCase().includes(q) ||
    getCategoryLabel(p.category).toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );

  // Cập nhật tiêu đề section
  const titleEl = document.querySelector(".section__title");
  if (titleEl) titleEl.textContent = `🔍 Kết quả tìm kiếm: "${query}"`;

  // Ẩn filter tabs khi đang tìm kiếm
  const filterEl = document.querySelector(".filter");
  if (filterEl) {
    filterEl.innerHTML = `<button class="filter__tab filter__tab--active" onclick="clearSearch()">← Xem tất cả sản phẩm</button>`;
  }

  const grid = document.getElementById("product-grid");
  const paginationEl = document.getElementById("pagination");
  if (paginationEl) paginationEl.innerHTML = "";

  if (results.length === 0) {
    grid.innerHTML = `<p class="empty-msg">Không tìm thấy sản phẩm nào cho "<strong>${query}</strong>"</p>`;
    return;
  }

  grid.innerHTML = results.map(p => createProductCard(p)).join("");
}

function clearSearch() {
  window.location.href = "index.html";
}

// ── Filter tab ────────────────────────────────────────────

function initFilter() {
  const tabs = document.querySelectorAll(".filter__tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("filter__tab--active"));
      tab.classList.add("filter__tab--active");
      renderProducts(tab.dataset.category, 1); // Reset về trang 1
    });
  });
}
