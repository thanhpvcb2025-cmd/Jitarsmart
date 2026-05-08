// ============================================================
// reviews.js — Tính năng đánh giá sản phẩm
// ============================================================

let currentProductId = null;
let selectedRating = 0;

// ── Khởi tạo ─────────────────────────────────────────────

function initReviews(productId) {
  currentProductId = parseInt(productId);
  renderReviewSection();
  updateProductRatingDisplay();
}

// ── Lấy / lưu reviews ────────────────────────────────────

function getReviews() {
  return JSON.parse(localStorage.getItem("reviews")) || [];
}

function saveReviews(reviews) {
  localStorage.setItem("reviews", JSON.stringify(reviews));
}

function getProductReviews(productId) {
  return getReviews().filter(r => r.productId === parseInt(productId));
}

// ── Tính trung bình rating ────────────────────────────────

function getAverageRating(productId) {
  const reviews = getProductReviews(productId);
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((s, r) => s + r.rating, 0);
  return (sum / reviews.length).toFixed(1);
}

// ── Cập nhật hiển thị rating gần tên sản phẩm ────────────

function updateProductRatingDisplay() {
  const reviews = getProductReviews(currentProductId);
  const avg = getAverageRating(currentProductId);
  const ratingEl = document.getElementById("product-rating-display");
  if (!ratingEl) return;

  if (reviews.length === 0) {
    ratingEl.innerHTML = `<span class="rating-stars-empty">☆☆☆☆☆</span> <span class="rating-count">Chưa có đánh giá</span>`;
  } else {
    ratingEl.innerHTML = `
      <span class="rating-stars">${renderStarsDisplay(parseFloat(avg))}</span>
      <span class="rating-avg">${avg}</span>
      <span class="rating-count">(${reviews.length} đánh giá)</span>
    `;
  }
}

function renderStarsDisplay(avg) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(avg)) html += "★";
    else if (i - avg < 1 && i - avg > 0) html += "½";
    else html += "☆";
  }
  return html;
}

// ── Render toàn bộ section đánh giá ──────────────────────

function renderReviewSection() {
  const panel = document.getElementById("tab-review");
  if (!panel) return;

  const user = getCurrentUser();
  const reviews = getProductReviews(currentProductId);
  const avg = getAverageRating(currentProductId);

  panel.innerHTML = `
    <!-- Tổng quan rating -->
    <div class="review-summary">
      <div class="review-summary__avg">
        <div class="review-summary__score">${reviews.length > 0 ? avg : "—"}</div>
        <div class="review-summary__stars">${reviews.length > 0 ? renderStarsDisplay(parseFloat(avg)) : "☆☆☆☆☆"}</div>
        <div class="review-summary__count">${reviews.length} đánh giá</div>
      </div>
      <div class="review-summary__bars">
        ${[5,4,3,2,1].map(star => {
          const count = reviews.filter(r => r.rating === star).length;
          const pct = reviews.length > 0 ? Math.round((count / reviews.length) * 100) : 0;
          return `
            <div class="review-bar-row">
              <span class="review-bar-label">${star}★</span>
              <div class="review-bar-track"><div class="review-bar-fill" style="width:${pct}%"></div></div>
              <span class="review-bar-count">${count}</span>
            </div>
          `;
        }).join("")}
      </div>
    </div>

    <!-- Form đánh giá -->
    <div class="review-form-wrap">
      <h3 class="review-form__title">✍️ Viết đánh giá của bạn</h3>
      ${user ? `
        <div class="review-form" id="review-form">
          <div class="review-form__stars" id="star-selector">
            ${[1,2,3,4,5].map(i => `
              <button class="star-btn" data-star="${i}"
                onmouseover="hoverStars(${i})"
                onmouseout="resetStarHover()"
                onclick="selectStar(${i})">★</button>
            `).join("")}
          </div>
          <p class="review-form__star-label" id="star-label">Chọn số sao</p>
          <textarea id="review-comment" class="review-form__textarea"
            placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm này..." rows="4"></textarea>
          <button class="btn btn--primary review-form__submit" onclick="submitReview()">
            ✅ Gửi đánh giá
          </button>
        </div>
      ` : `
        <div class="review-login-required">
          <p>Vui lòng <a onclick="openAuthModal('login')" style="color:var(--primary);cursor:pointer;font-weight:600;">đăng nhập</a> để viết đánh giá.</p>
        </div>
      `}
    </div>

    <!-- Danh sách đánh giá -->
    <div class="reviews-list" id="reviews-list">
      ${reviews.length === 0
        ? `<p class="reviews-empty">Chưa có đánh giá nào. Hãy là người đầu tiên!</p>`
        : reviews.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).map(r => renderReviewCard(r)).join("")
      }
    </div>
  `;

  // Reset selected rating
  selectedRating = 0;
}

function renderReviewCard(r) {
  const date = new Date(r.createdAt);
  const dateStr = `${date.getDate().toString().padStart(2,"0")}/${(date.getMonth()+1).toString().padStart(2,"0")}/${date.getFullYear()}`;
  const stars = "★".repeat(r.rating) + "☆".repeat(5 - r.rating);
  return `
    <div class="review-card">
      <div class="review-card__avatar">${r.userName.charAt(0).toUpperCase()}</div>
      <div class="review-card__body">
        <div class="review-card__header">
          <span class="review-card__name">${escapeHtmlReview(r.userName)}</span>
          <span class="review-card__stars">${stars}</span>
          <span class="review-card__date">${dateStr}</span>
        </div>
        <p class="review-card__comment">${escapeHtmlReview(r.comment)}</p>
      </div>
    </div>
  `;
}

function escapeHtmlReview(str) {
  return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

// ── Star selector ─────────────────────────────────────────

function hoverStars(n) {
  document.querySelectorAll(".star-btn").forEach((btn, i) => {
    btn.classList.toggle("star-btn--hover", i < n);
  });
}

function resetStarHover() {
  document.querySelectorAll(".star-btn").forEach((btn, i) => {
    btn.classList.remove("star-btn--hover");
    btn.classList.toggle("star-btn--selected", i < selectedRating);
  });
}

function selectStar(n) {
  selectedRating = n;
  const labels = ["", "Rất tệ", "Tệ", "Bình thường", "Tốt", "Xuất sắc"];
  const labelEl = document.getElementById("star-label");
  if (labelEl) labelEl.textContent = labels[n] || "";
  document.querySelectorAll(".star-btn").forEach((btn, i) => {
    btn.classList.toggle("star-btn--selected", i < n);
  });
}

// ── Submit review ─────────────────────────────────────────

function submitReview() {
  const user = getCurrentUser();
  if (!user) {
    openAuthModal("login");
    return;
  }

  if (selectedRating === 0) {
    showToast("Vui lòng chọn số sao!", "error");
    return;
  }

  const comment = document.getElementById("review-comment")?.value.trim();
  if (!comment) {
    showToast("Vui lòng nhập nội dung đánh giá!", "error");
    return;
  }

  const reviews = getReviews();

  // Kiểm tra đã đánh giá chưa
  const existing = reviews.find(r => r.productId === currentProductId && r.userId === user.id);
  if (existing) {
    showToast("Bạn đã đánh giá sản phẩm này rồi!", "error");
    return;
  }

  const review = {
    productId: currentProductId,
    userId: user.id,
    userName: user.fullname,
    rating: selectedRating,
    comment,
    createdAt: new Date().toISOString()
  };

  reviews.push(review);
  saveReviews(reviews);

  showToast("Cảm ơn bạn đã đánh giá! ⭐");
  renderReviewSection();
  updateProductRatingDisplay();
}
