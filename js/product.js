// ============================================================
// product.js — Logic trang chi tiết sản phẩm
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = getMergedProductById(id);

  if (!product) {
    document.getElementById("product-detail").innerHTML =
      `<p class="empty-msg">Không tìm thấy sản phẩm.</p>`;
    return;
  }

  renderProductDetail(product);
  renderRelated(product);
  initTabs();

  // Khởi tạo reviews
  if (typeof initReviews === "function") initReviews(id);
});

// ── Render chi tiết sản phẩm ─────────────────────────────

function renderProductDetail(p) {
  const discount = calcDiscount(p.price, p.originalPrice);

  // Breadcrumb
  document.getElementById("breadcrumb-category").textContent = getCategoryLabel(p.category);
  document.getElementById("breadcrumb-name").textContent = p.name;

  // Gallery
  const mainImg = document.getElementById("main-img");
  mainImg.src = p.images[0];
  mainImg.alt = p.name;

  const thumbs = document.getElementById("thumbnails");
  thumbs.innerHTML = p.images.map((src, i) => `
    <img src="${src}" alt="${p.name} ${i + 1}"
         class="thumb ${i === 0 ? "thumb--active" : ""}"
         onclick="switchImage(this, '${src}')"
         onerror="this.src='assets/images/placeholder.jpg'">
  `).join("");

  // Info
  document.getElementById("product-name").textContent = p.name;
  document.getElementById("product-price").textContent = formatPrice(p.price);
  document.getElementById("product-original-price").textContent = formatPrice(p.originalPrice);
  document.getElementById("product-discount").textContent = `-${discount}%`;
  document.getElementById("product-saving").textContent =
    `Tiết kiệm: ${formatPrice(p.originalPrice - p.price)}`;
  document.getElementById("product-stock").textContent =
    p.inStock ? "✓ Còn hàng" : "✕ Hết hàng";
  document.getElementById("product-stock").className =
    p.inStock ? "stock stock--in" : "stock stock--out";

  // Nút yêu thích
  const heartBtn = document.getElementById("btn-wishlist");
  if (heartBtn) {
    const inWL = typeof isInWishlist === "function" && isInWishlist(p.id);
    heartBtn.classList.toggle("heart-btn--active", inWL);
    heartBtn.textContent = inWL ? "❤️ Đã yêu thích" : "🤍 Yêu thích";
    heartBtn.addEventListener("click", () => {
      toggleWishlist(p.id);
      const nowIn = isInWishlist(p.id);
      heartBtn.classList.toggle("heart-btn--active", nowIn);
      heartBtn.textContent = nowIn ? "❤️ Đã yêu thích" : "🤍 Yêu thích";
    });
  }

  // Render variants nếu có
  const variantWrap = document.getElementById("variant-wrap");
  if (p.variants && p.variants.length > 0) {
    variantWrap.style.display = "block";
    variantWrap.innerHTML = p.variants.map((v, vi) =>
      renderVariantGroup(v, vi, p)
    ).join("");
  } else {
    variantWrap.style.display = "none";
  }

  // Nút thêm giỏ
  const btnAdd = document.getElementById("btn-add-cart");
  if (!p.inStock) {
    btnAdd.disabled = true;
    btnAdd.textContent = "Hết hàng";
  } else {
    btnAdd.addEventListener("click", () => {
      if (!requireLogin()) return;
      const qty = parseInt(document.getElementById("qty-input").value) || 1;
      addToCart(p.id, qty);
    });
  }

  // Nút so sánh
  const btnCompare = document.getElementById("btn-compare");
  if (btnCompare) {
    btnCompare.setAttribute("onclick", `toggleCompare(${p.id})`);
  }

  // Specs
  const specTable = document.getElementById("spec-table");
  specTable.innerHTML = Object.entries(p.specs).map(([key, val]) => `
    <tr>
      <td class="spec__key">${key}</td>
      <td class="spec__val">${val}</td>
    </tr>
  `).join("");

  // Description
  document.getElementById("product-description").textContent = p.description;

  // Page title
  document.title = `${p.name} — Thanhbcwed`;
}

// ── Đổi ảnh gallery ──────────────────────────────────────

function switchImage(thumb, src) {
  document.getElementById("main-img").src = src;
  document.querySelectorAll(".thumb").forEach(t => t.classList.remove("thumb--active"));
  thumb.classList.add("thumb--active");
}

// ── Tăng / giảm số lượng ─────────────────────────────────

function changeQty(delta) {
  const input = document.getElementById("qty-input");
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > 99) val = 99;
  input.value = val;
}

// ── Tabs (Mô tả / Thông số / Đánh giá) ───────────────────

function initTabs() {
  const tabs = document.querySelectorAll(".tab__btn");
  const panels = document.querySelectorAll(".tab__panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("tab__btn--active"));
      panels.forEach(p => p.classList.remove("tab__panel--active"));
      tab.classList.add("tab__btn--active");
      document.getElementById(tab.dataset.tab).classList.add("tab__panel--active");
    });
  });
}

// ── Sản phẩm liên quan ───────────────────────────────────

function renderRelated(product) {
  const related = getMergedRelatedProducts(product.id, product.category);
  const wrap = document.getElementById("related-grid");

  if (related.length === 0) {
    wrap.closest(".related").style.display = "none";
    return;
  }

  wrap.innerHTML = related.map(p => `
    <div class="card" onclick="location.href='product.html?id=${p.id}'">
      <div class="card__img-wrap">
        <img src="${p.thumbnail}" alt="${p.name}" class="card__img"
             onerror="this.src='assets/images/placeholder.jpg'">
        ${p.badge ? `<span class="card__badge card__badge--${p.badge.toLowerCase()}">${p.badge}</span>` : ""}
      </div>
      <div class="card__body">
        <h3 class="card__name">${p.name}</h3>
        <div class="card__price-wrap">
          <span class="card__price">${formatPrice(p.price)}</span>
        </div>
      </div>
    </div>
  `).join("");
}

// ── Variants ──────────────────────────────────────────────

// State lưu lựa chọn hiện tại
const selectedVariants = {};

function renderVariantGroup(variant, groupIndex, product) {
  // Chọn mặc định option đầu tiên — dùng ?? thay vì || để tránh lỗi index 0
  if (selectedVariants[groupIndex] == null) {
    selectedVariants[groupIndex] = 0;
  }

  const activeIdx = selectedVariants[groupIndex];

  if (variant.type === "color") {
    return `
      <div class="variant-group" id="variant-group-${groupIndex}">
        <div class="variant-group__label">
          ${variant.label}:
          <span class="variant-selected-name" id="color-name-${groupIndex}">
            ${variant.options[activeIdx].name}
          </span>
        </div>
        <div class="variant-options variant-options--color">
          ${variant.options.map((opt, i) => `
            <button class="variant-color ${i === activeIdx ? "variant-color--active" : ""}"
              style="background: ${opt.color}; border-color: ${opt.color};"
              title="${opt.name}"
              onclick="selectVariant(${groupIndex}, ${i}, '${opt.name}', '${opt.image || ""}')">
              ${i === activeIdx ? '<span class="variant-color__check">✓</span>' : ""}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }

  // Storage / RAM / Size / Material / Connectivity
  return `
    <div class="variant-group" id="variant-group-${groupIndex}">
      <div class="variant-group__label">${variant.label}:</div>
      <div class="variant-options">
        ${variant.options.map((opt, i) => `
          <button class="variant-btn ${i === activeIdx ? "variant-btn--active" : ""}"
            onclick="selectVariant(${groupIndex}, ${i}, '${opt.name}', '', ${opt.price || 0}, ${opt.originalPrice || 0})">
            ${opt.name}
            ${opt.price ? `<span class="variant-btn__price">${formatPrice(opt.price)}</span>` : ""}
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function selectVariant(groupIndex, optionIndex, name, image, price, originalPrice) {
  selectedVariants[groupIndex] = optionIndex;

  // ── Cập nhật active class trực tiếp trên DOM (không re-render) ──

  // Cập nhật tên màu
  const nameEl = document.getElementById(`color-name-${groupIndex}`);
  if (nameEl) nameEl.textContent = name;

  // Cập nhật active cho color buttons
  const colorBtns = document.querySelectorAll(
    `#variant-group-${groupIndex} .variant-color`
  );
  colorBtns.forEach((btn, i) => {
    btn.classList.toggle("variant-color--active", i === optionIndex);
    // Cập nhật dấu ✓
    const check = btn.querySelector(".variant-color__check");
    if (i === optionIndex) {
      if (!check) {
        const span = document.createElement("span");
        span.className = "variant-color__check";
        span.textContent = "✓";
        btn.appendChild(span);
      }
    } else {
      if (check) check.remove();
    }
  });

  // Cập nhật active cho text buttons (storage, RAM...)
  const textBtns = document.querySelectorAll(
    `#variant-group-${groupIndex} .variant-btn`
  );
  textBtns.forEach((btn, i) => {
    btn.classList.toggle("variant-btn--active", i === optionIndex);
  });

  // Đổi ảnh nếu có
  if (image) {
    document.getElementById("main-img").src = image;
    document.querySelectorAll(".thumb").forEach(t => t.classList.remove("thumb--active"));
  }

  // Cập nhật giá nếu có
  if (price && price > 0) {
    document.getElementById("product-price").textContent = formatPrice(price);
    if (originalPrice) {
      document.getElementById("product-original-price").textContent = formatPrice(originalPrice);
      const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
      document.getElementById("product-discount").textContent = `-${discount}%`;
      document.getElementById("product-saving").textContent =
        `Tiết kiệm: ${formatPrice(originalPrice - price)}`;
    }
  }
}
