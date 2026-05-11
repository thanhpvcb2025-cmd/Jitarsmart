# Jitarsmart — Website Bán Hàng Công Nghệ

> Website bán điện thoại, laptop, PC và phụ kiện công nghệ chính hãng

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 🚀 Tính năng

### Khách hàng
- 🛍️ Xem 20 sản phẩm (Điện thoại, Laptop, PC, Phụ kiện)
- 🔍 Tìm kiếm realtime với dropdown gợi ý
- 🎨 Chế độ sáng/tối (Dark mode)
- 🛒 Giỏ hàng với voucher giảm giá
- ❤️ Danh sách yêu thích
- ⚖️ So sánh tối đa 3 sản phẩm
- ⭐ Đánh giá sản phẩm
- 📦 Lịch sử đơn hàng
- 💳 4 phương thức thanh toán (COD, Chuyển khoản, MoMo, ZaloPay)

### Admin
- 📋 Quản lý đơn hàng (phê duyệt, cập nhật trạng thái)
- 📦 Quản lý sản phẩm (chỉnh sửa giá, tồn kho, badge, khôi phục)
- 👥 Quản lý tài khoản
- 📊 Thống kê doanh thu, top sản phẩm bán chạy

---

## 📁 Cấu trúc dự án

```
Thanhbcwed/
├── index.html          # Trang chủ
├── product.html        # Chi tiết sản phẩm
├── cart.html           # Giỏ hàng / Lịch sử / Yêu thích
├── admin.html          # Trang quản trị
├── DOCUMENT.md         # Tài liệu nghiệp vụ chi tiết
├── DIAGRAM.md          # Sơ đồ dự án
│
├── css/                # Style files
├── js/                 # JavaScript files
└── assets/images/      # Hình ảnh
```

---

## 🛠️ Cài đặt & Chạy

### Yêu cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Edge, Safari)
- **Không cần** cài đặt Node.js, npm hay bất kỳ thư viện nào

### Bước 1: Clone repo

```bash
git clone https://github.com/thanhpvcb2025-cmd/Jitarsmart.git
cd Jitarsmart
```

### Bước 2: Mở file HTML

**Cách 1 — Mở trực tiếp:**
- Double-click file `index.html`

**Cách 2 — Dùng Live Server (khuyến nghị):**
- Cài extension **Live Server** trong VS Code
- Right-click `index.html` → **Open with Live Server**
- Tự động mở `http://127.0.0.1:5500/Thanhbcwed/index.html`

**Cách 3 — Python HTTP Server:**
```bash
# Python 3
python -m http.server 8000

# Mở trình duyệt: http://localhost:8000/Thanhbcwed/
```

---

## 👤 Tài khoản mặc định

### Admin
- **Username:** `admin`
- **Password:** `admin123`
- **Truy cập:** `admin.html`

### User (tự đăng ký)
- Vào trang chủ → Click **"Đăng nhập"** → Tab **"Tạo tài khoản"**

---

## 💾 Dữ liệu

Dự án sử dụng **localStorage** của trình duyệt để lưu trữ:
- Tài khoản người dùng
- Giỏ hàng
- Đơn hàng
- Yêu thích
- Đánh giá
- Thay đổi sản phẩm từ admin

> **Lưu ý:** Xóa cache trình duyệt sẽ mất toàn bộ dữ liệu.

---

## 🎯 Voucher có sẵn

| Mã | Loại | Giá trị |
|----|------|---------|
| `GIAM10` | Phần trăm | Giảm 10% |
| `GIAM20` | Phần trăm | Giảm 20% |
| `FREESHIP` | Miễn phí ship | 0đ |
| `SALE50K` | Cố định | Giảm 50.000đ |

---

## 📚 Tài liệu

- **[DOCUMENT.md](DOCUMENT.md)** — Tài liệu nghiệp vụ đầy đủ
- **[DIAGRAM.md](DIAGRAM.md)** — Sơ đồ dự án, wireframe, luồng dữ liệu

---

## 🤝 Đóng góp

1. Fork repo
2. Tạo branch mới: `git checkout -b feature/ten-tinh-nang`
3. Commit: `git commit -m "Thêm tính năng X"`
4. Push: `git push origin feature/ten-tinh-nang`
5. Tạo Pull Request

---

## 📝 License

MIT License — Tự do sử dụng cho mục đích học tập và thương mại.

---

## 📧 Liên hệ

- **GitHub:** [@thanhpvcb2025-cmd](https://github.com/thanhpvcb2025-cmd)
- **Email:** thanhbc@gmail.com

---

**⚡ Jitarsmart** — Công nghệ đỉnh cao, giá tốt nhất
