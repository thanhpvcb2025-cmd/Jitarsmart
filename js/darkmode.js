// ============================================================
// darkmode.js — Chế độ tối (Dark Mode)
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Áp dụng dark mode từ localStorage
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    updateDarkModeBtn(true);
  }
});

function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", isDark ? "true" : "false");
  updateDarkModeBtn(isDark);
}

function updateDarkModeBtn(isDark) {
  const btn = document.getElementById("dark-mode-btn");
  if (btn) {
    btn.textContent = isDark ? "☀️" : "🌙";
    btn.title = isDark ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối";
  }
}
