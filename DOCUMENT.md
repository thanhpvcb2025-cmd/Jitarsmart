# Tài liệu nghiệp vụ & chức năng — Website Thanhbcwed

> Cập nhật lần cuối: 2026-05-08

---

## 1. Tổng quan dự án

**Thanhbcwed** là website bán hàng công nghệ trực tuyến, chuyên cung cấp các sản phẩm:
- 📱 Điện thoại thông minh
- 💻 Laptop
- 🖥️ PC & iMac
- 🎧 Phụ kiện Apple (AirPods, Apple Watch, iPad, Apple Pencil, MagSafe...)

**Công nghệ sử dụng:** HTML5 · CSS3 · JavaScript thuần (Vanilla JS)
**Lưu trữ dữ liệu:** `localStorage` của trình duyệt (không cần backend/server)

---

## 2. Cấu trúc dự án

```
Thanhbcwed/
├── index.html          # Trang chủ
├── product.html        # Trang chi tiết sản phẩm
├── cart.html           # Trang giỏ hàng, lịch sử, yêu thích
├── admin.html          # Trang quản trị Admin
├── DOCUMENT.md         # Tài liệu nghiệp vụ (file này)
├── DIAGRAM.md          # Sơ đồ dự án
│
├── css/
│   ├── style.css       # Style chung (header, footer, card, toast, button, dark mode)
│   ├── home.css        # Style trang chủ (banner, filter, grid, pagination)
│   ├── product.css     # Style trang chi tiết (gallery, tabs, spec, variants, reviews)
│   ├── cart.css        # Style giỏ hàng, lịch sử, yêu thích, voucher, payment
│   ├── auth.css        # Style đăng nhập / đăng ký
│   └── admin.css       # Style trang quản trị
│
├── js/
│   ├── data.js         # 20 sản phẩm + hàm lọc/tìm kiếm/phân trang
│   ├── main.js         # Hàm dùng chung (format tiền, giỏ hàng, toast, hamburger)
│   ├── auth.js         # Đăng nhập / đăng ký / đăng xuất
│   ├── home.js         # Logic trang chủ (render, filter, phân trang, banner slideshow)
│   ├── product.js      # Logic trang chi tiết (gallery, tabs, variants, wishlist, compare)
│   ├── cart.js         # Giỏ hàng, voucher, thanh toán, lịch sử đơn hàng
│   ├── admin.js        # Logic trang quản trị (đơn hàng, sản phẩm, user, thống kê)
│   ├── search.js       # Tìm kiếm realtime + dropdown
│   ├── wishlist.js     # Danh sách yêu thích
│   ├── reviews.js      # Đánh giá sản phẩm
│   ├── compare.js      # So sánh sản phẩm
│   └── darkmode.js     # Chế độ tối
│
└── assets/
    └── images/
        └── products/   # Ảnh sản phẩm
```

---

## 3. Danh sách 20 sản phẩm (2024-2025)

### Điện thoại
| # | Tên sản phẩm | Giá bán | Trạng thái |
|---|-------------|---------|------------|
| 1 | iPhone 16 Pro Max 256GB | 34.990.000đ | Còn hàng |
| 2 | Samsung Galaxy S25 Ultra 256GB | 31.990.000đ | Còn hàng |
| 3 | Xiaomi 15 Pro 512GB | 22.990.000đ | Còn hàng |
| 4 | Google Pixel 9 Pro XL 256GB | 28.990.000đ | Còn hàng |
| 5 | OPPO Find X8 Pro 256GB | 24.990.000đ | Còn hàng |

### Laptop
| # | Tên sản phẩm | Giá bán | Trạng thái |
|---|-------------|---------|------------|
| 6 | MacBook Pro M4 Pro 14 inch | 52.990.000đ | Còn hàng |
| 7 | ASUS ROG Zephyrus G16 2024 | 45.990.000đ | Còn hàng |
| 8 | Dell XPS 16 9640 | 42.990.000đ | Còn hàng |
| 9 | Lenovo ThinkPad X1 Carbon Gen 12 | 38.990.000đ | Còn hàng |
| 10 | MacBook Air M3 15 inch | 36.990.000đ | Còn hàng |

### PC
| # | Tên sản phẩm | Giá bán | Trạng thái |
|---|-------------|---------|------------|
| 11 | PC Gaming RTX 5080 Super Build | 55.990.000đ | Còn hàng |
| 12 | iMac 24 inch M4 | 46.990.000đ | Còn hàng |
| 13 | Mac Mini M4 Pro | 28.990.000đ | Còn hàng |

### Phụ kiện Apple
| # | Tên sản phẩm | Giá bán | Trạng thái |
|---|-------------|---------|------------|
| 14 | AirPods Pro 2 (USB-C) | 6.490.000đ | Còn hàng |
| 15 | AirPods 4 (ANC) | 4.490.000đ | Còn hàng |
| 16 | Apple Watch Series 10 45mm | 11.990.000đ | Còn hàng |
| 17 | Apple Watch Ultra 2 49mm | 23.990.000đ | Còn hàng |
| 18 | iPad Pro M4 11 inch WiFi 256GB | 26.990.000đ | Còn hàng |
| 19 | Apple Pencil Pro | 3.490.000đ | Còn hàng |
| 20 | MagSafe Charger 25W | 1.290.000đ | Còn hàng |

---

## 4. Nghiệp vụ & Luồng sử dụng

### 4.1 Luồng người dùng chưa đăng nhập

```
Vào trang chủ
    │
    ├── Xem 20 sản phẩm (8 SP/trang, có phân trang)
    ├── Lọc theo danh mục (Tất cả / Điện thoại / Laptop / PC / Phụ kiện)
    ├── Tìm kiếm sản phẩm (realtime dropdown)
    ├── Thêm vào Yêu thích ❤️ (không cần đăng nhập)
    ├── So sánh sản phẩm ⚖️ (không cần đăng nhập)
    ├── Click xem chi tiết sản phẩm
    │
    └── Click "Thêm vào giỏ" hoặc "Đặt hàng"
              │
              ▼
        ⚠️ Popup yêu cầu đăng nhập
              │
              ├── Đăng nhập tài khoản cũ
              └── Tạo tài khoản mới
```

### 4.2 Luồng đăng ký tài khoản

```
Click "Đăng nhập" trên header
    │
    ▼
Modal đăng nhập/đăng ký mở ra
    │
    └── Chọn tab "Tạo tài khoản"
              │
              ▼
        Điền thông tin:
        - Họ và tên (bắt buộc)
        - Email (bắt buộc, không được trùng)
        - Số điện thoại (bắt buộc)
        - Mật khẩu (tối thiểu 6 ký tự)
        - Xác nhận mật khẩu
              │
              ▼
        Validate:
        ✓ Email chưa tồn tại trong hệ thống
        ✓ Mật khẩu >= 6 ký tự
        ✓ Mật khẩu xác nhận khớp
              │
              ▼
        Đăng ký thành công → Tự động đăng nhập
        Lưu vào localStorage["users"]
```

### 4.3 Luồng mua hàng (đã đăng nhập)

```
Trang chủ / Chi tiết sản phẩm
    │
    ▼
Click "Thêm vào giỏ"
    │
    ▼
Lưu vào localStorage["cart"]
Badge số lượng cập nhật
Toast "Đã thêm vào giỏ hàng"
    │
    ▼
Vào trang Giỏ hàng (cart.html)
    │
    ├── Tăng / giảm số lượng
    ├── Xóa sản phẩm
    ├── Nhập mã voucher giảm giá
    │
    └── Click "Đặt hàng ngay"
              │
              ▼
        Modal điền thông tin giao hàng:
        - Họ tên (tự điền từ tài khoản)
        - Số điện thoại (tự điền từ tài khoản)
        - Địa chỉ giao hàng (bắt buộc)
        - Ghi chú (tùy chọn)
        - Chọn phương thức thanh toán
              │
              ▼
        Xác nhận → Tạo đơn hàng
        Lưu vào localStorage["orders"]
        Hiện mã đơn + tổng tiền + trạng thái
```

### 4.4 Luồng sử dụng Voucher

```
Trong trang Giỏ hàng → Ô "Mã giảm giá"
    │
    ▼
Nhập mã → Click "Áp dụng"
    │
    ├── Mã hợp lệ → Hiện thông báo xanh + dòng "Giảm giá" trong tóm tắt
    └── Mã không hợp lệ → Hiện thông báo đỏ "Mã voucher không hợp lệ"
```

**Danh sách mã voucher có sẵn** (định nghĩa trong `cart.js`):

| Mã | Loại | Giá trị | Mô tả |
|----|------|---------|-------|
| `GIAM10` | Phần trăm | 10% | Giảm 10% tổng đơn |
| `GIAM20` | Phần trăm | 20% | Giảm 20% tổng đơn |
| `FREESHIP` | Cố định | 0đ | Miễn phí vận chuyển |
| `SALE50K` | Cố định | 50.000đ | Giảm 50.000đ |

> **Thêm/sửa voucher:** Mở `js/cart.js`, tìm object `VOUCHERS` (dòng ~87), thêm dòng mới theo cú pháp:
> ```javascript
> "TENGIAM": { type: "percent", value: 30 }   // Giảm %
> "TENGIAM": { type: "fixed",   value: 100000 } // Giảm cố định
> ```
> Mã phải viết HOA.

### 4.5 Luồng chọn phương thức thanh toán

```
Trong modal đặt hàng → Chọn phương thức:
    │
    ├── 💵 COD — Thanh toán khi nhận hàng (mặc định)
    ├── 🏦 Chuyển khoản → Hiện thông tin ngân hàng
    ├── 💜 MoMo
    └── 💙 ZaloPay

Phương thức được lưu vào đơn hàng và hiển thị trong lịch sử + admin
```

### 4.6 Luồng Wishlist (Yêu thích)

```
Click ❤️ trên card sản phẩm hoặc trang chi tiết
    │
    ├── Chưa yêu thích → Tim đỏ, lưu vào localStorage["wishlist"]
    └── Đã yêu thích → Tim xám, xóa khỏi localStorage["wishlist"]

Xem danh sách: cart.html → Tab "❤️ Yêu thích"
    │
    ├── Thêm vào giỏ (yêu cầu đăng nhập)
    └── Xóa khỏi danh sách
```

### 4.7 Luồng Đánh giá sản phẩm

```
Vào product.html → Tab "Đánh giá"
    │
    ├── Chưa đăng nhập → Hiện nút "Đăng nhập để đánh giá"
    └── Đã đăng nhập → Hiện form đánh giá
              │
              ▼
        Chọn số sao (1-5) + Nhập bình luận
              │
              ▼
        Submit → Lưu vào localStorage["reviews"]
        Hiện ngay trong danh sách đánh giá
        Cập nhật điểm trung bình gần tên sản phẩm
```

### 4.8 Luồng So sánh sản phẩm

```
Click ⚖️ trên card sản phẩm (tối đa 3 sản phẩm)
    │
    ▼
Floating bar xuất hiện ở đáy màn hình
Hiện ảnh + tên các sản phẩm đã chọn
    │
    └── Click "So sánh ngay"
              │
              ▼
        Modal so sánh mở ra
        Bảng thông số kỹ thuật side-by-side
        Nút "Thêm vào giỏ" cho từng sản phẩm
```

### 4.9 Luồng Tìm kiếm

```
Nhập từ khóa vào thanh tìm kiếm (header)
    │
    ▼
Dropdown hiện tối đa 6 kết quả (realtime)
Mỗi kết quả: ảnh + tên + giá + danh mục
    │
    ├── Click kết quả → product.html?id=X
    └── Nhấn Enter → index.html?search=keyword
                          │
                          ▼
                    Grid lọc theo từ khóa
                    Nút "← Xem tất cả sản phẩm"
```

### 4.10 Luồng xem lịch sử đơn hàng

```
cart.html → Tab "📋 Lịch sử đơn hàng"
    HOẶC
Avatar → Dropdown → "📋 Lịch sử đơn hàng"
    │
    ▼
Kiểm tra đăng nhập:
    ├── Chưa đăng nhập → Hiện nút "Đăng nhập ngay"
    └── Đã đăng nhập → Hiện danh sách đơn (mới nhất lên đầu)
              Mỗi đơn hiện:
              - Mã đơn + ngày đặt + badge trạng thái
              - Ảnh + tên + số lượng + giá từng sản phẩm
              - Địa chỉ giao hàng + phương thức thanh toán
              - Tổng tiền (sau giảm giá nếu có)
```

---

## 5. Chức năng chi tiết

### 5.1 Trang chủ (index.html)

| Chức năng | Mô tả |
|-----------|-------|
| Banner slideshow | Tự động random ảnh từ sản phẩm, 3s/lần, dots điều hướng, pause khi hover |
| Thống kê nhanh | Số sản phẩm, chính hãng, hỗ trợ 24/7, miễn phí ship |
| Grid sản phẩm | 8 sản phẩm/trang, 4 cột desktop |
| Filter danh mục | Tất cả / Điện thoại / Laptop / PC / Phụ kiện |
| Phân trang | Nút Trước/Sau + số trang, scroll mượt khi chuyển trang |
| Tìm kiếm | Thanh tìm kiếm realtime với dropdown kết quả |
| Nút yêu thích | Tim ❤️ trên mỗi card, toggle ngay không cần reload |
| Nút so sánh | ⚖️ trên mỗi card, tối đa 3 sản phẩm |
| Dark mode | Nút 🌙/☀️ toggle chế độ tối |
| Hamburger menu | Nút ☰ trên mobile để mở nav |

### 5.2 Trang chi tiết sản phẩm (product.html)

| Chức năng | Mô tả |
|-----------|-------|
| Gallery ảnh | Ảnh lớn + thumbnails, click để đổi ảnh chính |
| Biến thể sản phẩm | Chọn màu sắc (đổi ảnh), dung lượng/RAM (đổi giá) |
| Thông tin giá | Giá bán, giá gốc, % giảm, tiết kiệm |
| Chọn số lượng | Nút tăng/giảm (1-99) |
| Tabs | Mô tả / Thông số kỹ thuật / Đánh giá |
| Đánh giá | Form sao + bình luận, hiện danh sách, điểm trung bình |
| Sản phẩm liên quan | 4 sản phẩm cùng danh mục |
| Wishlist | Nút ❤️ toggle yêu thích |
| So sánh | Nút ⚖️ thêm vào danh sách so sánh |

### 5.3 Trang giỏ hàng (cart.html)

| Chức năng | Mô tả |
|-----------|-------|
| Tab Giỏ hàng | Danh sách sản phẩm, tăng/giảm/xóa |
| Tab Lịch sử | Đơn hàng đã đặt, trạng thái, chi tiết |
| Tab Yêu thích | Sản phẩm đã lưu, thêm giỏ hoặc xóa |
| Voucher | Nhập mã giảm giá, hiện dòng giảm trong tóm tắt |
| Phương thức TT | COD / Chuyển khoản / MoMo / ZaloPay |
| Modal đặt hàng | Có thanh cuộn khi nội dung dài |
| Màn hình thành công | Mã đơn, tổng tiền, trạng thái |

### 5.4 Hệ thống tài khoản

| Chức năng | Mô tả |
|-----------|-------|
| Đăng ký | Email, SĐT, mật khẩu (≥6 ký tự) |
| Đăng nhập | Xác thực email + mật khẩu |
| Đăng xuất | Xóa session |
| Avatar | Chữ cái đầu tên trong header |
| Dropdown | Giỏ hàng, Lịch sử đơn hàng, Đăng xuất |
| Toggle mật khẩu | Nút 👁 hiện/ẩn |

---

## 6. Dữ liệu lưu trữ (localStorage)

| Key | Kiểu | Nội dung |
|-----|------|---------|
| `users` | Array | Tài khoản: id, fullname, email, phone, password, orders[], createdAt |
| `currentUser` | Object | Tài khoản đang đăng nhập: id, fullname, email, phone |
| `cart` | Array | Giỏ hàng: id, name, price, thumbnail, quantity |
| `orders` | Array | Đơn hàng: id, userId, items[], total, discount, voucher, paymentMethod, address, status, createdAt |
| `wishlist` | Array | Mảng ID sản phẩm yêu thích |
| `reviews` | Array | Đánh giá: productId, userId, userName, rating, comment, createdAt |
| `productOverrides` | Object | Override sản phẩm do admin sửa: `{ [productId]: { price, originalPrice, inStock, badge, updatedAt } }` — xóa key = khôi phục mặc định |
| `darkMode` | String | `"true"` hoặc `"false"` |

> **Kiểm tra dữ liệu:** Mở DevTools (F12) → Application → Local Storage

---

## 7. Trạng thái đơn hàng

| Trạng thái | Màu | Người thực hiện |
|-----------|-----|----------------|
| Chờ xác nhận | 🟡 Vàng | Hệ thống tự tạo khi khách đặt |
| Đang xử lý | 🔵 Xanh dương | Admin phê duyệt |
| Đang giao | 🟢 Xanh lá | Admin cập nhật |
| Đã giao | 🟢 Xanh đậm | Admin xác nhận |
| Đã hủy | 🔴 Đỏ | Admin hủy |

---

## 8. Quy tắc nghiệp vụ

1. **Bắt buộc đăng nhập** để thêm giỏ hàng, đặt hàng, đánh giá sản phẩm
2. **Wishlist và So sánh** không cần đăng nhập
3. **Email không được trùng** khi đăng ký
4. **Mật khẩu tối thiểu 6 ký tự**
5. **Sản phẩm hết hàng** không thể thêm vào giỏ
6. **Số lượng** trong giỏ: tối thiểu 1, tối đa 99
7. **Phí vận chuyển miễn phí** cho tất cả đơn hàng
8. **Mã đơn hàng** format: `DH` + timestamp
9. **Lịch sử đơn hàng** chỉ hiện đơn của tài khoản đang đăng nhập
10. **Thông tin giao hàng** tự điền từ tài khoản (tên, SĐT)
11. **Mã voucher** phải viết HOA, áp dụng 1 mã/đơn hàng
12. **So sánh** tối đa 3 sản phẩm cùng lúc, reset khi reload trang
13. **Mỗi user** chỉ đánh giá 1 lần mỗi sản phẩm
14. **Biến thể sản phẩm** (màu/dung lượng) đổi ảnh và giá ngay lập tức
15. **Admin sửa sản phẩm** lưu vào `productOverrides`, không đụng `data.js` gốc
16. **Trang chủ và chi tiết SP** luôn đọc dữ liệu đã merge với `productOverrides`

---

## 9. Nghiệp vụ Admin (admin.html)

### Truy cập
- URL trực tiếp: `admin.html`
- Link footer trang chủ: **🔧 Quản trị**
- Tài khoản: `admin` / `admin123`
- Phiên dùng `sessionStorage` — đóng tab phải đăng nhập lại

### 3 Section chính

| Section | Chức năng |
|---------|-----------|
| 📋 Đơn hàng | Xem, tìm kiếm, lọc, phê duyệt, cập nhật trạng thái |
| 📦 Sản phẩm | Xem danh sách, tìm kiếm, lọc, chỉnh sửa giá/tồn kho/badge, khôi phục |
| 👥 Tài khoản | Danh sách user, tìm kiếm, số đơn hàng |
| 📊 Thống kê | Doanh thu, đơn theo trạng thái, top 5 sản phẩm bán chạy |

### Quy trình xử lý đơn hàng

```
Chờ xác nhận → Đang xử lý → Đang giao → Đã giao
      │               │            │
      └───────────────┴────────────┘
                      ▼
                  Đã hủy (trừ "Đã giao")
```

### Quy tắc Admin
1. Nút ✅ Phê duyệt chỉ hoạt động khi đơn "Chờ xác nhận"
2. Nút ❌ Hủy bị khóa khi đơn "Đã giao" hoặc "Đã hủy"
3. Doanh thu không tính đơn đã hủy
4. Tab trình duyệt hiện số đơn chờ: `(3) Admin — Thanhbcwed`
5. Đơn hàng hiện cả phương thức thanh toán và voucher đã dùng
6. **Chỉnh sửa sản phẩm** lưu vào `localStorage["productOverrides"]`, không sửa `data.js` gốc
7. **Khôi phục sản phẩm** xóa key trong `productOverrides` → trả về dữ liệu gốc `data.js`
8. Sản phẩm đã sửa hiện nhãn "✏️ đã sửa" trong cột giá bán
9. Khi mở modal sản phẩm đã sửa, hiện khung vàng với thông tin gốc ban đầu

### Nghiệp vụ chỉnh sửa sản phẩm

```
Admin → Section Sản phẩm → Click ✏️ trên hàng sản phẩm
    │
    ▼
Modal chỉnh sửa mở ra:
    - Giá bán (VNĐ)
    - Giá gốc (VNĐ)
    - Trạng thái kho (Còn hàng / Hết hàng)
    - Badge (Hot / New / Sale / Không có)
    - Live preview: giá định dạng + % giảm + tiết kiệm
    │
    ├── Nếu sản phẩm đã từng bị sửa:
    │     └── Hiện khung vàng "↩️ Thông tin gốc ban đầu"
    │           + Nút "↩️ Khôi phục về mặc định"
    │
    └── Click "💾 Lưu thay đổi"
              │
              ▼
        Lưu vào localStorage["productOverrides"][productId]
        Trang chủ, chi tiết SP, tìm kiếm tự động phản ánh thay đổi
```

**Cơ chế merge dữ liệu sản phẩm:**
- `data.js` chứa dữ liệu gốc, **không bao giờ bị sửa**
- `localStorage["productOverrides"]` chứa các thay đổi của admin
- Khi render sản phẩm ở bất kỳ trang nào, gọi `getMergedProductsForHome()` hoặc `getMergedProductById()` để lấy dữ liệu đã merge
- Xóa key `productOverrides[id]` = khôi phục sản phẩm đó về mặc định

---

## 10. Hàm tiện ích quan trọng trong data.js

| Hàm | Mô tả |
|-----|-------|
| `getAllProducts()` | Trả về 20 sản phẩm gốc từ data.js |
| `getMergedProductsForHome()` | Trả về 20 SP đã merge với productOverrides — **dùng cho trang chủ, tìm kiếm, banner** |
| `getMergedProductById(id)` | Lấy 1 SP theo ID đã merge — **dùng cho trang chi tiết** |
| `getMergedRelatedProducts(id, category)` | SP liên quan đã merge — **dùng cho trang chi tiết** |
| `getProductsPagedMerged(category, page, perPage)` | Phân trang đã merge — **dùng cho trang chủ** |
| `getProductById(id)` | Lấy SP gốc theo ID (không merge) |
| `getProductsByCategory(category)` | Lọc SP gốc theo danh mục |
| `getProductsPaged(category, page, perPage)` | Phân trang SP gốc |

> **Quy tắc:** Mọi trang hiển thị cho người dùng phải dùng hàm `getMerged*` để đảm bảo phản ánh thay đổi từ admin.

---

## 11. Hướng phát triển tiếp theo

| Tính năng | Mô tả | Độ phức tạp |
|-----------|-------|-------------|
| 📦 Theo dõi đơn hàng | Trang tra cứu mã đơn, timeline tiến trình | Thấp |
| 🏷️ Mã giảm giá động | Admin tạo/xóa voucher từ trang quản trị | Trung bình |
| 👤 Trang cá nhân | Profile, lịch sử đơn, đổi mật khẩu, địa chỉ | Trung bình |
| 🔍 Tìm kiếm nâng cao | Lọc giá, sắp xếp, autocomplete | Thấp–Trung bình |
| 🎁 Flash Sale | Banner đếm ngược, giá giới hạn thời gian | Thấp |
| 📊 Thống kê nâng cao | Biểu đồ Chart.js, top khách hàng | Cao |
| 🔔 Thông báo | Notification dropdown, alert đơn mới | Trung bình |
| 💬 Chat hỗ trợ | Widget chat, admin trả lời | Cao |
| Backend thật | Node.js + Express + MongoDB | — |
| Thanh toán thật | VNPay, MoMo API, ZaloPay API | — |
