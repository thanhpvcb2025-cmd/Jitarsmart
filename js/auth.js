// ============================================================
// auth.js — Xử lý đăng nhập / đăng ký / đăng xuất
// ============================================================

// ── Hàm tiện ích ─────────────────────────────────────────

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser")) || null;
}

function setCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

function logout() {
  localStorage.removeItem("currentUser");
  updateAuthUI();
  showToast("Đã đăng xuất thành công!");
  // Nếu đang ở trang cart thì redirect về trang chủ
  if (window.location.pathname.includes("cart.html")) {
    window.location.href = "index.html";
  }
}

// ── Đăng ký ──────────────────────────────────────────────

function register(fullname, email, phone, password) {
  const users = getUsers();

  // Kiểm tra email đã tồn tại
  if (users.find(u => u.email === email)) {
    return { success: false, message: "Email này đã được đăng ký!" };
  }

  // Kiểm tra độ dài mật khẩu
  if (password.length < 6) {
    return { success: false, message: "Mật khẩu phải có ít nhất 6 ký tự!" };
  }

  const newUser = {
    id: Date.now(),
    fullname,
    email,
    phone,
    password, // Thực tế nên hash, ở đây demo đơn giản
    createdAt: new Date().toISOString(),
    orders: []
  };

  users.push(newUser);
  saveUsers(users);
  setCurrentUser({ id: newUser.id, fullname: newUser.fullname, email: newUser.email, phone: newUser.phone });

  return { success: true, message: "Đăng ký thành công!" };
}

// ── Đăng nhập ────────────────────────────────────────────

function login(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return { success: false, message: "Email hoặc mật khẩu không đúng!" };
  }

  setCurrentUser({ id: user.id, fullname: user.fullname, email: user.email, phone: user.phone });
  return { success: true, message: "Đăng nhập thành công!" };
}

// ── Cập nhật UI theo trạng thái đăng nhập ────────────────

function updateAuthUI() {
  const user = getCurrentUser();
  const authBtn = document.getElementById("auth-btn");
  const userMenu = document.getElementById("user-menu");
  const userName = document.getElementById("user-name");

  if (!authBtn) return;

  if (user) {
    // Đã đăng nhập
    authBtn.style.display = "none";
    if (userMenu) userMenu.style.display = "flex";
    if (userName) userName.textContent = user.fullname.split(" ").pop();

    // Cập nhật avatar chữ cái đầu
    const avatarEl = document.getElementById("user-avatar-letter");
    if (avatarEl) avatarEl.textContent = user.fullname.charAt(0).toUpperCase();

    // Cập nhật dropdown info
    const fullnameEl = document.getElementById("dropdown-fullname");
    const emailEl    = document.getElementById("dropdown-email");
    if (fullnameEl) fullnameEl.textContent = user.fullname;
    if (emailEl)    emailEl.textContent    = user.email;
  } else {
    // Chưa đăng nhập
    authBtn.style.display = "flex";
    if (userMenu) userMenu.style.display = "none";
  }
}

// ── Kiểm tra đăng nhập trước khi mua ─────────────────────

function requireLogin(callback) {
  const user = getCurrentUser();
  if (!user) {
    openAuthModal("login");
    showToast("Vui lòng đăng nhập để tiếp tục!", "error");
    return false;
  }
  if (callback) callback(user);
  return true;
}

// ── Mở / đóng modal ──────────────────────────────────────

function openAuthModal(tab = "login") {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;
  modal.style.display = "flex";
  switchAuthTab(tab);
  document.body.style.overflow = "hidden";
}

function closeAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;
  modal.style.display = "none";
  document.body.style.overflow = "";
  // Reset form
  document.getElementById("login-form")?.reset();
  document.getElementById("register-form")?.reset();
  clearAuthErrors();
}

function switchAuthTab(tab) {
  document.querySelectorAll(".auth-tab__btn").forEach(btn => {
    btn.classList.toggle("auth-tab__btn--active", btn.dataset.tab === tab);
  });
  document.querySelectorAll(".auth-panel").forEach(panel => {
    panel.classList.toggle("auth-panel--active", panel.id === `panel-${tab}`);
  });
}

function clearAuthErrors() {
  document.querySelectorAll(".auth-error").forEach(el => el.textContent = "");
}

// ── Xử lý submit form ────────────────────────────────────

function handleLogin(e) {
  e.preventDefault();
  clearAuthErrors();

  const email    = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;

  const result = login(email, password);

  if (result.success) {
    closeAuthModal();
    updateAuthUI();
    showToast(result.message);
    // Nếu đang ở trang cart thì reload để hiện nút đặt hàng
    if (window.location.pathname.includes("cart.html")) {
      location.reload();
    }
  } else {
    document.getElementById("login-error").textContent = result.message;
  }
}

function handleRegister(e) {
  e.preventDefault();
  clearAuthErrors();

  const fullname  = document.getElementById("reg-fullname").value.trim();
  const email     = document.getElementById("reg-email").value.trim();
  const phone     = document.getElementById("reg-phone").value.trim();
  const password  = document.getElementById("reg-password").value;
  const password2 = document.getElementById("reg-password2").value;

  if (password !== password2) {
    document.getElementById("reg-error").textContent = "Mật khẩu xác nhận không khớp!";
    return;
  }

  const result = register(fullname, email, phone, password);

  if (result.success) {
    closeAuthModal();
    updateAuthUI();
    showToast("Chào mừng " + fullname + "! Đăng ký thành công 🎉");
  } else {
    document.getElementById("reg-error").textContent = result.message;
  }
}

// ── Toggle dropdown user menu ─────────────────────────────

function toggleUserDropdown() {
  const dropdown = document.getElementById("user-dropdown");
  if (!dropdown) return;
  dropdown.classList.toggle("user-dropdown--open");
}

// Đóng dropdown khi click ngoài
document.addEventListener("click", (e) => {
  const menu = document.getElementById("user-menu");
  if (menu && !menu.contains(e.target)) {
    document.getElementById("user-dropdown")?.classList.remove("user-dropdown--open");
  }
});

// ── Khởi tạo khi DOM ready ────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  updateAuthUI();

  // Gắn sự kiện form
  document.getElementById("login-form")?.addEventListener("submit", handleLogin);
  document.getElementById("register-form")?.addEventListener("submit", handleRegister);

  // Đóng modal khi click ngoài
  document.getElementById("auth-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "auth-modal") closeAuthModal();
  });
});
