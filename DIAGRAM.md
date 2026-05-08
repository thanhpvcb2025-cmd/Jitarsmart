# Sơ đồ Website Bán Hàng Công Nghệ — Thanhbcwed

> Cập nhật lần cuối: 2026-05-08

---

## 1. Cấu trúc thư mục dự án

```
Thanhbcwed/
├── index.html              # Trang chủ
├── product.html            # Trang chi tiết sản phẩm
├── cart.html               # Giỏ hàng / Lịch sử / Yêu thích
├── admin.html              # Trang quản trị Admin
├── DOCUMENT.md             # Tài liệu nghiệp vụ
├── DIAGRAM.md              # Sơ đồ dự án (file này)
│
├── css/
│   ├── style.css           # Style chung + dark mode
│   ├── home.css            # Trang chủ (banner, filter, grid, pagination)
│   ├── product.css         # Chi tiết SP (gallery, tabs, variants, reviews)
│   ├── cart.css            # Giỏ hàng (voucher, payment, wishlist, orders)
│   ├── auth.css            # Đăng nhập / Đăng ký
│   └── admin.css           # Trang quản trị
│
├── js/
│   ├── data.js             # 20 sản phẩm + hàm lọc/tìm/phân trang
│   ├── main.js             # Hàm dùng chung (format, toast, cart, hamburger)
│   ├── auth.js             # Đăng nhập / Đăng ký / Đăng xuất
│   ├── home.js             # Trang chủ (render, filter, phân trang, slideshow)
│   ├── product.js          # Chi tiết SP (gallery, tabs, variants, wishlist, compare)
│   ├── cart.js             # Giỏ hàng, voucher, thanh toán, lịch sử
│   ├── admin.js            # Quản trị (đơn hàng, user, sản phẩm, thống kê)
│   ├── search.js           # Tìm kiếm realtime + dropdown
│   ├── wishlist.js         # Danh sách yêu thích
│   ├── reviews.js          # Đánh giá sản phẩm
│   ├── compare.js          # So sánh sản phẩm
│   └── darkmode.js         # Chế độ tối
│
└── assets/
    └── images/
        ├── placeholder.jpg
        └── products/       # Ảnh sản phẩm
```

---

## 2. Sơ đồ trang (Sitemap)

```
[Trang Chủ - index.html]
        │
        ├──► [Chi tiết SP - product.html?id=1..20]
        │
        ├──► [Giỏ hàng - cart.html]
        │         ├── Tab: Giỏ hàng
        │         ├── Tab: Lịch sử đơn hàng (?tab=orders)
        │         └── Tab: Yêu thích (?tab=wishlist)
        │
        └──► [Quản trị - admin.html]  ← chỉ Admin
                  ├── Section: Đơn hàng
                  ├── Section: Sản phẩm  ← MỚI
                  ├── Section: Tài khoản
                  └── Section: Thống kê
```

---

## 3. Sơ đồ luồng người dùng

### 3.1 Khách chưa đăng nhập

```
Vào trang chủ
      │
      ├── Xem 20 SP (8/trang, phân trang)
      ├── Lọc danh mục (Tất cả/Điện thoại/Laptop/PC/Phụ kiện)
      ├── Tìm kiếm realtime
      ├── ❤️ Yêu thích (không cần đăng nhập)
      ├── ⚖️ So sánh (không cần đăng nhập)
      │
      └── Click "Thêm vào giỏ" / "Đặt hàng" / "Đánh giá"
                │
                ▼
          ⚠️ Popup đăng nhập
```

### 3.2 User đã đăng nhập

```
Trang Chủ / Chi Tiết SP
      │
      ├── Chọn biến thể (màu/dung lượng/RAM) → đổi ảnh + giá
      ├── Thêm vào giỏ → localStorage["cart"] + badge cập nhật
      │
      └── Vào Giỏ Hàng
              │
              ├── Tab Giỏ hàng
              │     ├── Tăng/giảm/xóa sản phẩm
              │     ├── Nhập voucher → giảm giá
              │     └── Đặt hàng ngay
              │           │
              │           ▼
              │     Modal đặt hàng (có scroll)
              │     - Tên, SĐT (tự điền)
              │     - Địa chỉ giao hàng
              │     - Chọn PTTT (COD/CK/MoMo/ZaloPay)
              │           │
              │           ▼
              │     Tạo đơn → localStorage["orders"]
              │     Hiện mã đơn + tổng tiền
              │
              ├── Tab Lịch sử đơn hàng
              │     - Danh sách đơn (mới nhất lên đầu)
              │     - Trạng thái, PTTT, voucher đã dùng
              │
              └── Tab Yêu thích
                    - Danh sách SP đã lưu
                    - Thêm vào giỏ / Xóa
```

### 3.3 Admin

```
admin.html → Đăng nhập (admin/admin123)
      │
      ▼
Dashboard
      │
      ├── 📋 Đơn hàng
      │     ├── Stat cards: Tổng / Chờ / Đã giao / Doanh thu
      │     ├── Tìm kiếm + Lọc trạng thái + Sắp xếp
      │     ├── Phê duyệt nhanh ✅ / Hủy ❌ trên bảng
      │     └── Modal chi tiết → Cập nhật trạng thái
      │
      ├── 📦 Sản phẩm
      │     ├── Stat cards: Tổng / Còn hàng / Hết hàng / Danh mục
      │     ├── Tìm kiếm + Lọc danh mục + Lọc tồn kho
      │     ├── Toggle tồn kho nhanh 📦/✅ trên bảng
      │     └── Modal chỉnh sửa → Giá bán, giá gốc, tồn kho, badge
      │           └── Nút ↩️ Khôi phục về mặc định (nếu đã sửa)
      │
      ├── 👥 Tài khoản
      │     └── Danh sách user + tìm kiếm
      │
      └── 📊 Thống kê
            ├── Tổng quan doanh thu
            ├── Đơn theo trạng thái
            └── Top 5 sản phẩm bán chạy
```

---

## 4. Sơ đồ trạng thái đơn hàng

```
[Chờ xác nhận] ──► [Đang xử lý] ──► [Đang giao] ──► [Đã giao]
       │                 │                │
       └─────────────────┴────────────────┘
                         ▼
                     [Đã hủy]
```

| Trạng thái | Màu | Người thực hiện |
|-----------|-----|----------------|
| Chờ xác nhận | 🟡 Vàng | Hệ thống (khi khách đặt) |
| Đang xử lý | 🔵 Xanh dương | Admin phê duyệt |
| Đang giao | 🟢 Xanh lá | Admin cập nhật |
| Đã giao | 🟢 Xanh đậm | Admin xác nhận |
| Đã hủy | 🔴 Đỏ | Admin hủy |

---

## 5. Sơ đồ dữ liệu localStorage

```
localStorage
├── users[]
│   ├── id, fullname, email, phone, password
│   ├── createdAt
│   └── orders[]         # Mảng mã đơn hàng
│
├── currentUser{}
│   └── id, fullname, email, phone
│
├── cart[]
│   └── id, name, price, thumbnail, quantity
│
├── orders[]
│   ├── id               # "DH" + timestamp
│   ├── userId, customerName, phone, address, note
│   ├── items[]          # id, name, price, quantity, subtotal, thumbnail
│   ├── total, discount, voucher
│   ├── paymentMethod    # COD | BankTransfer | MoMo | ZaloPay
│   ├── status
│   ├── createdAt, updatedAt
│
├── wishlist[]           # Mảng ID sản phẩm
│
├── reviews[]
│   └── productId, userId, userName, rating, comment, createdAt
│
├── productOverrides{}
│   └── { [productId]: { price, originalPrice, inStock, badge, updatedAt } }
│       ← Admin sửa sản phẩm lưu vào đây, không đụng data.js gốc
│       ← Xóa key này = khôi phục về mặc định
│
└── darkMode             # "true" | "false"
```

---

## 6. Cấu trúc dữ liệu sản phẩm (data.js)

```javascript
{
  id: 1,
  name: "iPhone 16 Pro Max 256GB",
  category: "dienthoai",       // dienthoai | laptop | pc | phukien
  price: 34990000,
  originalPrice: 37990000,
  thumbnail: "assets/images/products/iphone16promax.jpg",
  images: ["url_1", "url_2", "url_3"],
  badge: "Hot",                // Hot | Sale | New | null
  variants: [                  // Tùy chọn — biến thể sản phẩm
    {
      label: "Màu sắc",
      type: "color",
      options: [
        { name: "Black", value: "black", color: "#1c1c1e", image: "url" }
      ]
    },
    {
      label: "Dung lượng",
      type: "storage",
      options: [
        { name: "256GB", value: "256gb", price: 34990000, originalPrice: 37990000 }
      ]
    }
  ],
  specs: { "Màn hình": "...", "Chip": "...", ... },
  description: "Mô tả chi tiết...",
  inStock: true
}
```

---

## 7. Danh sách 20 sản phẩm

| # | Tên | Danh mục | Giá | Có variants |
|---|-----|----------|-----|-------------|
| 1 | iPhone 16 Pro Max 256GB | Điện thoại | 34.990.000đ | ✅ Màu + Dung lượng |
| 2 | Samsung Galaxy S25 Ultra 256GB | Điện thoại | 31.990.000đ | — |
| 3 | Xiaomi 15 Pro 512GB | Điện thoại | 22.990.000đ | — |
| 4 | Google Pixel 9 Pro XL 256GB | Điện thoại | 28.990.000đ | — |
| 5 | OPPO Find X8 Pro 256GB | Điện thoại | 24.990.000đ | — |
| 6 | MacBook Pro M4 Pro 14 inch | Laptop | 52.990.000đ | ✅ Màu + Bộ nhớ + RAM |
| 7 | ASUS ROG Zephyrus G16 2024 | Laptop | 45.990.000đ | — |
| 8 | Dell XPS 16 9640 | Laptop | 42.990.000đ | — |
| 9 | Lenovo ThinkPad X1 Carbon Gen 12 | Laptop | 38.990.000đ | — |
| 10 | MacBook Air M3 15 inch | Laptop | 36.990.000đ | ✅ Màu + Bộ nhớ + RAM |
| 11 | PC Gaming RTX 5080 Super Build | PC | 55.990.000đ | — |
| 12 | iMac 24 inch M4 | PC | 46.990.000đ | ✅ Màu (7 màu) + Bộ nhớ |
| 13 | Mac Mini M4 Pro | PC | 28.990.000đ | — |
| 14 | AirPods Pro 2 (USB-C) | Phụ kiện | 6.490.000đ | — |
| 15 | AirPods 4 (ANC) | Phụ kiện | 4.490.000đ | — |
| 16 | Apple Watch Series 10 45mm | Phụ kiện | 11.990.000đ | ✅ Kích thước + Vật liệu + Kết nối |
| 17 | Apple Watch Ultra 2 49mm | Phụ kiện | 23.990.000đ | — |
| 18 | iPad Pro M4 11 inch WiFi 256GB | Phụ kiện | 26.990.000đ | — |
| 19 | Apple Pencil Pro | Phụ kiện | 3.490.000đ | — |
| 20 | MagSafe Charger 25W | Phụ kiện | 1.290.000đ | — |

---

## 8. Wireframe giao diện

### Trang Chủ (index.html)
```
┌──────────────────────────────────────────────────────┐
│ ⚡LOGO  🔍[Tìm kiếm...]  🌙 [👤Đăng nhập] [❤️] [🛒]│ ← Header
├──────────────────────────────────────────────────────┤
│  BANNER SLIDESHOW (random ảnh SP, dots điều hướng)   │ ← Banner
├──────────────────────────────────────────────────────┤
│  📊 10+ SP | 100% Chính hãng | 24/7 | Free ship     │ ← Stats
├──────────────────────────────────────────────────────┤
│  [Tất cả][📱 ĐT][💻 Laptop][🖥️ PC][🎧 Phụ kiện]   │ ← Filter
├──────────────────────────────────────────────────────┤
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                        │
│  │Ảnh│ │Ảnh│ │Ảnh│ │Ảnh│  ← 4 cột, 8 SP/trang    │
│  │Tên│ │Tên│ │Tên│ │Tên│                            │
│  │Giá│ │Giá│ │Giá│ │Giá│                            │
│  │[🛒][⚖️][❤️]│...│                                │
│  └────┘ └────┘ └────┘ └────┘                        │
├──────────────────────────────────────────────────────┤
│  [‹ Trước] [1] [2] [3] [Sau ›]  (phân trang)        │ ← Pagination
├──────────────────────────────────────────────────────┤
│  Footer | © 2026 | 🔧 Quản trị                      │ ← Footer
└──────────────────────────────────────────────────────┘
```

### Trang Chi Tiết (product.html)
```
┌──────────────────────────────────────────────────────┐
│  Header                                              │
├──────────────────────────────────────────────────────┤
│  Home > Danh mục > Tên sản phẩm                     │ ← Breadcrumb
├──────────────────┬───────────────────────────────────┤
│  [Ảnh lớn]       │  Tên SP  ⭐4.5 (12 đánh giá)     │
│                  │  Giá: 34.990.000đ                 │
│  [T1][T2][T3]   │  Gốc: ~~37.990.000đ~~ -8%        │
│  (thumbnails)    │  Màu sắc: [●][●][●][●]           │
│                  │  Dung lượng: [256GB][512GB][1TB]  │
│                  │  SL: [-][1][+]                    │
│                  │  [🛒 Thêm vào giỏ] [⚡ Mua ngay] │
│                  │  [❤️ Yêu thích] [⚖️ So sánh]     │
├──────────────────┴───────────────────────────────────┤
│  [Mô tả] [Thông số kỹ thuật] [Đánh giá ⭐]          │ ← Tabs
├──────────────────────────────────────────────────────┤
│  SẢN PHẨM LIÊN QUAN                                 │
└──────────────────────────────────────────────────────┘
```

### Trang Giỏ Hàng (cart.html)
```
┌──────────────────────────────────────────────────────┐
│  Header                                              │
├──────────────────────────────────────────────────────┤
│  [🛒 Giỏ hàng] [📋 Lịch sử] [❤️ Yêu thích]        │ ← Tabs
├───────────────────────────────┬──────────────────────┤
│  Ảnh | Sản phẩm | SL | Tiền  │  Tóm tắt đơn hàng   │
│  ─────────────────────────── │  🎟️ [Mã voucher][Áp]│
│  📱 iPhone 16  [-][1][+] ✕  │  Số lượng: 1 SP      │
│  💻 MacBook    [-][1][+] ✕  │  Tạm tính: ...       │
│                               │  Giảm giá: -...      │
│                               │  Ship: Miễn phí      │
│                               │  ─────────────────── │
│                               │  TỔNG: ...           │
│                               │  [⚡ Đặt hàng ngay] │
└───────────────────────────────┴──────────────────────┘
```

### Trang Admin (admin.html)
```
┌──────────┬───────────────────────────────────────────┐
│ SIDEBAR  │  ☰ Quản lý đơn hàng          👤 admin    │
│ ⚡ Admin │  ─────────────────────────────────────── │
│          │  [📋 Tổng] [⏳ Chờ] [✅ Giao] [💰 DT]   │
│ � Đơn  │  ─────────────────────────────────────── │
│ � User │  🔍[Tìm...] [Lọc TT ▾] [Sắp xếp ▾]     │
│ 📊 Stats│  ─────────────────────────────────────── │
│          │  Mã đơn|Khách|SP|Tiền|Ngày|TT|[👁✅❌]  │
│ ─────── │  DH123 |Tên  |..|... |... |⏳|[👁✅❌]  │
│ 🏠 Home │  DH456 |Tên  |..|... |... |🔵|[👁 ❌]  │
│ 🚪 Logout│                                          │
└──────────┴───────────────────────────────────────────┘
```

---

## 9. Màu sắc & Design tokens

| Token | Giá trị | Dùng cho |
|-------|---------|---------|
| `--primary` | `#0066CC` | Nút chính, link, border active |
| `--accent` | `#FF6600` | Nút CTA, giá, badge |
| `--bg` | `#F5F5F5` | Nền trang |
| `--white` | `#ffffff` | Card, modal |
| `--text` | `#222222` | Text chính |
| `--text-muted` | `#666666` | Text phụ |
| `--success` | `#28a745` | Còn hàng, thành công |
| `--danger` | `#dc3545` | Hết hàng, lỗi, hủy |
| `--border` | `#e0e0e0` | Đường kẻ |
| `--radius` | `8px` | Border radius |
| Font | `'Segoe UI', sans-serif` | Toàn site |
| Admin sidebar | `#1a1a2e` | Nền sidebar admin |

---

## 10. Tính năng theo từng file JS

| File | Tính năng chính |
|------|----------------|
| `data.js` | 20 sản phẩm (4 danh mục), variants, hàm lọc/tìm/phân trang, **getMergedProductsForHome(), getMergedProductById(), getMergedRelatedProducts(), getProductsPagedMerged()** |
| `main.js` | Format tiền VNĐ, giỏ hàng localStorage, toast, toggle password, hamburger nav |
| `auth.js` | Đăng ký, đăng nhập, đăng xuất, UI header, requireLogin() |
| `home.js` | Render grid, filter tab, phân trang, banner slideshow random, tìm kiếm từ URL — **dùng getMergedProductsForHome() để phản ánh thay đổi từ admin** |
| `product.js` | Gallery, tabs, variants (màu/dung lượng/RAM), wishlist, compare, reviews — **dùng getMergedProductById() và getMergedRelatedProducts()** |
| `cart.js` | Giỏ hàng CRUD, voucher (GIAM10/GIAM20/FREESHIP/SALE50K), phương thức TT, lịch sử, wishlist tab |
| `admin.js` | Đăng nhập admin, quản lý đơn hàng, **quản lý sản phẩm (chỉnh sửa + khôi phục)**, cập nhật trạng thái, thống kê, quản lý user |
| `search.js` | Tìm kiếm realtime, dropdown 6 kết quả, highlight từ khóa, điều hướng |
| `wishlist.js` | Toggle yêu thích, badge đếm, render tab Yêu thích, cập nhật UI ngay lập tức |
| `reviews.js` | Form đánh giá sao (1-5), submit, hiển thị danh sách, điểm trung bình, biểu đồ |
| `compare.js` | So sánh tối đa 3 SP, floating bar, modal so sánh thông số side-by-side |
| `darkmode.js` | Toggle dark mode, lưu preference, áp dụng khi load trang |

---

## 11. Phân quyền người dùng

| Vai trò | Trang truy cập | Chức năng |
|---------|---------------|-----------|
| **Khách** | index, product | Xem SP, lọc, tìm kiếm, wishlist, so sánh |
| **User** | index, product, cart | + Thêm giỏ, đặt hàng, đánh giá, lịch sử |
| **Admin** | admin.html | Phê duyệt đơn, quản lý user, thống kê |

---

## 12. Voucher — Cách thêm/sửa

Mở `js/cart.js`, tìm object `VOUCHERS` (~dòng 87):

```javascript
const VOUCHERS = {
  "GIAM10":   { type: "percent", value: 10 },     // Giảm 10%
  "GIAM20":   { type: "percent", value: 20 },     // Giảm 20%
  "FREESHIP": { type: "fixed",   value: 0 },      // Miễn phí ship
  "SALE50K":  { type: "fixed",   value: 50000 },  // Giảm 50.000đ
  // Thêm mới tại đây:
  // "GIAM30":   { type: "percent", value: 30 },
  // "SALE100K": { type: "fixed",   value: 100000 },
};
```

> Mã voucher phải viết **HOA**. Người dùng nhập thường hay hoa đều được (code tự `toUpperCase()`).
