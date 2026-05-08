// ============================================================
// data.js — Dữ liệu sản phẩm (cập nhật 2025)
// ============================================================

const products = [
  // ── ĐIỆN THOẠI ────────────────────────────────────────
  {
    id: 1,
    name: "iPhone 16 Pro Max 256GB",
    category: "dienthoai",
    price: 34990000,
    originalPrice: 37990000,
    thumbnail: "assets/images/products/iphone16promax.jpg",
    images: ["assets/images/products/iphone16promax.jpg"],
    badge: "Hot",
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Black Titanium",   value: "black",   color: "#2c2c2e", image: "assets/images/products/iphone16promax.jpg" },
          { name: "Desert Titanium",  value: "desert",  color: "#c8a882", image: "assets/images/products/iphone16promax.jpg" },
          { name: "Natural Titanium", value: "natural", color: "#b0a99a", image: "assets/images/products/iphone16promax.jpg" },
          { name: "White Titanium",   value: "white",   color: "#f5f5f0", image: "assets/images/products/iphone16promax.jpg" }
        ]
      },
      {
        label: "Dung lượng",
        type: "storage",
        options: [
          { name: "256GB", value: "256gb", price: 34990000, originalPrice: 37990000 },
          { name: "512GB", value: "512gb", price: 39990000, originalPrice: 42990000 },
          { name: "1TB",   value: "1tb",   price: 46990000, originalPrice: 49990000 }
        ]
      }
    ],
    specs: {
      "Chip": "Apple A18 Pro",
      "RAM": "8GB",
      "Bộ nhớ trong": "256GB",
      "Pin": "4685 mAh",
      "Camera sau": "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
      "Camera trước": "12MP TrueDepth",
      "Hệ điều hành": "iOS 18",
      "Kết nối": "5G, Wi-Fi 7, Bluetooth 5.3, USB-C 3.0",
      "Màu sắc": "Desert Titanium, Natural Titanium, White Titanium, Black Titanium"
    },
    description: "iPhone 16 Pro Max — đỉnh cao công nghệ Apple 2024 với chip A18 Pro, camera 48MP Ultra Wide mới, màn hình lớn nhất từ trước đến nay 6.9 inch và nút Camera Control hoàn toàn mới.",
    inStock: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S25 Ultra 256GB",
    category: "dienthoai",
    price: 31990000,
    originalPrice: 35990000,
    thumbnail: "assets/images/products/samsung-s25-ultra.jpg",
    images: ["assets/images/products/samsung-s25-ultra.jpg"],
    badge: "New",
    specs: {
      "Màn hình": "6.9 inch Dynamic AMOLED 2X, 120Hz",
      "Chip": "Snapdragon 8 Elite",
      "RAM": "12GB",
      "Bộ nhớ trong": "256GB",
      "Pin": "5000 mAh",
      "Camera sau": "200MP + 50MP + 10MP + 50MP",
      "Camera trước": "12MP",
      "Hệ điều hành": "Android 15, One UI 7",
      "Kết nối": "5G, Wi-Fi 7, Bluetooth 5.4",
      "Đặc biệt": "S Pen tích hợp, Galaxy AI"
    },
    description: "Samsung Galaxy S25 Ultra với S Pen tích hợp, Galaxy AI thông minh, chip Snapdragon 8 Elite mạnh nhất và camera 200MP đỉnh cao. Thiết kế titan sang trọng, mỏng hơn thế hệ trước.",
    inStock: true
  },
  {
    id: 3,
    name: "Xiaomi 15 Pro 512GB",
    category: "dienthoai",
    price: 22990000,
    originalPrice: 25990000,
    thumbnail: "assets/images/products/xiaomi15pro.jpg",
    images: ["assets/images/products/xiaomi15pro.jpg"],
    badge: "New",
    specs: {
      "Màn hình": "6.73 inch LTPO AMOLED, 120Hz",
      "Chip": "Snapdragon 8 Elite",
      "RAM": "12GB",
      "Bộ nhớ trong": "512GB",
      "Pin": "6100 mAh",
      "Camera sau": "50MP Leica Summilux + 50MP + 50MP",
      "Camera trước": "32MP",
      "Hệ điều hành": "Android 15, HyperOS 2",
      "Sạc": "90W có dây, 50W không dây"
    },
    description: "Xiaomi 15 Pro với camera Leica Summilux thế hệ mới, pin khủng 6100mAh, sạc 90W siêu nhanh và chip Snapdragon 8 Elite mạnh mẽ nhất 2024.",
    inStock: true
  },
  {
    id: 4,
    name: "Google Pixel 9 Pro XL 256GB",
    category: "dienthoai",
    price: 28990000,
    originalPrice: 32990000,
    thumbnail: "assets/images/products/pixel9pro.jpg",
    images: ["assets/images/products/pixel9pro.jpg"],
    badge: "New",
    specs: {
      "Màn hình": "6.8 inch LTPO OLED, 120Hz",
      "Chip": "Google Tensor G4",
      "RAM": "16GB",
      "Bộ nhớ trong": "256GB",
      "Pin": "5060 mAh",
      "Camera sau": "50MP + 48MP Ultra Wide + 48MP 5x Telephoto",
      "Camera trước": "42MP",
      "Hệ điều hành": "Android 15",
      "Đặc biệt": "Gemini AI, 7 năm cập nhật OS"
    },
    description: "Google Pixel 9 Pro XL — camera AI tốt nhất thị trường với Gemini AI tích hợp sâu, chip Tensor G4 và cam trước 42MP siêu nét. Cam kết 7 năm cập nhật hệ điều hành.",
    inStock: true
  },
  {
    id: 5,
    name: "OPPO Find X8 Pro 256GB",
    category: "dienthoai",
    price: 24990000,
    originalPrice: 27990000,
    thumbnail: "assets/images/products/oppo-findx8pro.jpg",
    images: ["assets/images/products/oppo-findx8pro.jpg"],
    badge: "Sale",
    specs: {
      "Màn hình": "6.78 inch LTPO AMOLED, 120Hz",
      "Chip": "MediaTek Dimensity 9400",
      "RAM": "16GB",
      "Bộ nhớ trong": "256GB",
      "Pin": "5910 mAh",
      "Camera sau": "50MP Hasselblad + 50MP + 50MP",
      "Camera trước": "32MP",
      "Hệ điều hành": "Android 15, ColorOS 15",
      "Sạc": "80W có dây, 50W không dây"
    },
    description: "OPPO Find X8 Pro với hệ thống camera Hasselblad 3 ống kính 50MP, chip Dimensity 9400 mạnh mẽ và pin 5910mAh sạc siêu nhanh 80W.",
    inStock: true
  },

  // ── LAPTOP ────────────────────────────────────────────
  {
    id: 6,
    name: "MacBook Pro M4 Pro 14 inch",
    category: "laptop",
    price: 52990000,
    originalPrice: 56990000,
    thumbnail: "assets/images/products/macbook-pro.jpg",
    images: [
      "assets/images/products/macbook-pro.jpg",
      "assets/images/products/macbookpro1.jpg",
      "assets/images/products/macbookpro2.jpg"
    ],
    badge: "Hot",
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Space Black", value: "space-black", color: "#1c1c1e", image: "assets/images/products/macbook-pro.jpg" },
          { name: "Silver",      value: "silver",      color: "#e8e8ed", image: "assets/images/products/macbookpro1.jpg" }
        ]
      },
      {
        label: "Bộ nhớ",
        type: "storage",
        options: [
          { name: "512GB SSD", value: "512gb", price: 52990000, originalPrice: 56990000 },
          { name: "1TB SSD",   value: "1tb",   price: 59990000, originalPrice: 63990000 },
          { name: "2TB SSD",   value: "2tb",   price: 72990000, originalPrice: 76990000 }
        ]
      },
      {
        label: "RAM",
        type: "ram",
        options: [
          { name: "24GB",  value: "24gb",  price: 52990000, originalPrice: 56990000 },
          { name: "48GB",  value: "48gb",  price: 65990000, originalPrice: 69990000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "14.2 inch Liquid Retina XDR, 120Hz",
      "Chip": "Apple M4 Pro (12-core CPU, 20-core GPU)",
      "RAM": "24GB Unified Memory",
      "Ổ cứng": "512GB SSD",
      "Pin": "Lên đến 24 giờ",
      "Cổng kết nối": "3x Thunderbolt 5, HDMI 2.1, SD Card, MagSafe 3",
      "Hệ điều hành": "macOS Sequoia",
      "Trọng lượng": "1.62 kg",
      "Màu sắc": "Space Black, Silver"
    },
    description: "MacBook Pro M4 Pro 2024 — bước nhảy vọt với chip M4 Pro, Thunderbolt 5 tốc độ cao, màn hình Liquid Retina XDR và thời lượng pin lên đến 24 giờ.",
    inStock: true
  },
  {
    id: 7,
    name: "ASUS ROG Zephyrus G16 2024",
    category: "laptop",
    price: 45990000,
    originalPrice: 49990000,
    thumbnail: "assets/images/products/asus-rog-g16.jpg",
    images: ["assets/images/products/asus-rog-g16.jpg"],
    badge: "Hot",
    specs: {
      "Màn hình": "16 inch OLED 2.5K 240Hz",
      "CPU": "Intel Core Ultra 9 185H",
      "RAM": "32GB DDR5",
      "Ổ cứng": "1TB NVMe SSD Gen4",
      "GPU": "NVIDIA GeForce RTX 4090 16GB",
      "Pin": "90Wh",
      "Hệ điều hành": "Windows 11 Home",
      "Trọng lượng": "1.85 kg"
    },
    description: "ASUS ROG Zephyrus G16 2024 — laptop gaming mỏng nhẹ với RTX 4090, màn hình OLED 240Hz và chip Intel Core Ultra 9. Hiệu năng đỉnh cao trong thiết kế sang trọng.",
    inStock: true
  },
  {
    id: 8,
    name: "Dell XPS 16 9640",
    category: "laptop",
    price: 42990000,
    originalPrice: 46990000,
    thumbnail: "assets/images/products/dell-xps16.jpg",
    images: ["assets/images/products/dell-xps16.jpg"],
    badge: null,
    specs: {
      "Màn hình": "16.3 inch OLED 3.2K 120Hz",
      "CPU": "Intel Core Ultra 9 185H",
      "RAM": "32GB DDR5",
      "Ổ cứng": "1TB NVMe SSD",
      "GPU": "NVIDIA GeForce RTX 4070 8GB",
      "Pin": "99.5Wh",
      "Hệ điều hành": "Windows 11 Home",
      "Trọng lượng": "1.89 kg"
    },
    description: "Dell XPS 16 9640 với màn hình OLED 3.2K tuyệt đẹp, chip Intel Core Ultra 9 và RTX 4070. Thiết kế premium mỏng nhẹ cho dân sáng tạo chuyên nghiệp.",
    inStock: true
  },
  {
    id: 9,
    name: "Lenovo ThinkPad X1 Carbon Gen 12",
    category: "laptop",
    price: 38990000,
    originalPrice: 42990000,
    thumbnail: "assets/images/products/thinkpad-x1-gen12.jpg",
    images: ["assets/images/products/thinkpad-x1-gen12.jpg"],
    badge: "New",
    specs: {
      "Màn hình": "14 inch IPS 2.8K OLED, 120Hz",
      "CPU": "Intel Core Ultra 7 165U vPro",
      "RAM": "32GB LPDDR5x",
      "Ổ cứng": "1TB SSD",
      "Pin": "57Wh, lên đến 15 giờ",
      "Hệ điều hành": "Windows 11 Pro",
      "Trọng lượng": "1.09 kg",
      "Bảo mật": "TPM 2.0, vân tay, IR camera, ThinkShield"
    },
    description: "ThinkPad X1 Carbon Gen 12 — siêu nhẹ 1.09kg, chip Intel Core Ultra 7 vPro, bảo mật doanh nghiệp ThinkShield và màn hình OLED 2.8K sắc nét.",
    inStock: true
  },
  {
    id: 10,
    name: "MacBook Air M3 15 inch",
    category: "laptop",
    price: 36990000,
    originalPrice: 39990000,
    thumbnail: "assets/images/products/macbook-air-m3.jpg",
    images: ["assets/images/products/macbook-air-m3.jpg"],
    badge: null,
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Midnight",   value: "midnight",  color: "#1c2526", image: "assets/images/products/macbook-air-m3.jpg" },
          { name: "Starlight",  value: "starlight", color: "#e8e0d0", image: "assets/images/products/macbook-air-m3.jpg" },
          { name: "Space Gray", value: "spacegray", color: "#6e6e73", image: "assets/images/products/macbook-air-m3.jpg" },
          { name: "Sky Blue",   value: "skyblue",   color: "#a8c8e8", image: "assets/images/products/macbook-air-m3.jpg" }
        ]
      },
      {
        label: "Bộ nhớ",
        type: "storage",
        options: [
          { name: "256GB SSD", value: "256gb", price: 36990000, originalPrice: 39990000 },
          { name: "512GB SSD", value: "512gb", price: 42990000, originalPrice: 45990000 },
          { name: "1TB SSD",   value: "1tb",   price: 49990000, originalPrice: 52990000 }
        ]
      },
      {
        label: "RAM",
        type: "ram",
        options: [
          { name: "8GB",  value: "8gb",  price: 36990000, originalPrice: 39990000 },
          { name: "16GB", value: "16gb", price: 43990000, originalPrice: 46990000 },
          { name: "24GB", value: "24gb", price: 50990000, originalPrice: 53990000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "15.3 inch Liquid Retina",
      "Chip": "Apple M3 (8-core CPU, 10-core GPU)",
      "RAM": "8GB Unified Memory",
      "Ổ cứng": "256GB SSD",
      "Pin": "Lên đến 18 giờ",
      "Cổng kết nối": "2x Thunderbolt 3, MagSafe 3, 3.5mm",
      "Hệ điều hành": "macOS Sequoia",
      "Trọng lượng": "1.51 kg",
      "Màu sắc": "Midnight, Starlight, Space Gray, Sky Blue"
    },
    description: "MacBook Air M3 15 inch — laptop mỏng nhẹ hoàn hảo với màn hình lớn 15.3 inch, chip M3 mạnh mẽ và pin 18 giờ. Không quạt, không ồn, lý tưởng cho mọi nhu cầu.",
    inStock: true
  },

  // ── PC ────────────────────────────────────────────────
  {
    id: 11,
    name: "PC Gaming RTX 5080 Super Build",
    category: "pc",
    price: 55990000,
    originalPrice: 59990000,
    thumbnail: "assets/images/products/pc-rtx5080.jpg",
    images: ["assets/images/products/pc-rtx5080.jpg"],
    badge: "Hot",
    specs: {
      "CPU": "Intel Core i9-14900KS",
      "RAM": "64GB DDR5 7200MHz",
      "Ổ cứng": "2TB NVMe SSD Gen5",
      "GPU": "NVIDIA GeForce RTX 5080 16GB",
      "Mainboard": "ASUS ROG MAXIMUS Z790 APEX",
      "Nguồn": "1000W 80+ Platinum",
      "Tản nhiệt": "AIO 360mm ARGB",
      "Case": "Lian Li O11 Dynamic EVO"
    },
    description: "Bộ PC Gaming RTX 5080 — hiệu năng đỉnh cao cho gaming 4K/8K và AI workload. RTX 5080 thế hệ Blackwell mới nhất, i9-14900KS và 64GB DDR5.",
    inStock: true
  },
  {
    id: 12,
    name: "iMac 24 inch M4",
    category: "pc",
    price: 46990000,
    originalPrice: 49990000,
    thumbnail: "assets/images/products/imac-m4.jpg",
    images: ["assets/images/products/imac-m4.jpg"],
    badge: "New",
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Blue",   value: "blue",   color: "#4a90d9", image: "assets/images/products/imac-m4.jpg" },
          { name: "Green",  value: "green",  color: "#5cb85c", image: "assets/images/products/imac-m4.jpg" },
          { name: "Pink",   value: "pink",   color: "#f4a0b0", image: "assets/images/products/imac-m4.jpg" },
          { name: "Silver", value: "silver", color: "#e8e8ed", image: "assets/images/products/imac-m4.jpg" },
          { name: "Orange", value: "orange", color: "#f0a050", image: "assets/images/products/imac-m4.jpg" },
          { name: "Purple", value: "purple", color: "#9b59b6", image: "assets/images/products/imac-m4.jpg" },
          { name: "Yellow", value: "yellow", color: "#f5d020", image: "assets/images/products/imac-m4.jpg" }
        ]
      },
      {
        label: "Bộ nhớ",
        type: "storage",
        options: [
          { name: "256GB SSD", value: "256gb", price: 46990000, originalPrice: 49990000 },
          { name: "512GB SSD", value: "512gb", price: 52990000, originalPrice: 55990000 },
          { name: "1TB SSD",   value: "1tb",   price: 59990000, originalPrice: 62990000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "24 inch 4.5K Retina",
      "Chip": "Apple M4 (10-core CPU, 10-core GPU)",
      "RAM": "16GB Unified Memory",
      "Ổ cứng": "256GB SSD",
      "Camera": "12MP Center Stage",
      "Âm thanh": "6 loa stereo, 3 mic array",
      "Hệ điều hành": "macOS Sequoia",
      "Màu sắc": "7 màu tùy chọn"
    },
    description: "iMac 24 inch M4 2024 — thiết kế siêu mỏng 11.5mm, chip M4 mạnh hơn 50% so với M3, màn hình 4.5K Retina rực rỡ và 7 màu sắc tươi sáng.",
    inStock: true
  },
  {
    id: 13,
    name: "Mac Mini M4 Pro",
    category: "pc",
    price: 28990000,
    originalPrice: 31990000,
    thumbnail: "assets/images/products/mac-mini-m4.jpg",
    images: ["assets/images/products/mac-mini-m4.jpg"],
    badge: "New",
    specs: {
      "Chip": "Apple M4 Pro (12-core CPU, 20-core GPU)",
      "RAM": "24GB Unified Memory",
      "Ổ cứng": "512GB SSD",
      "Cổng kết nối": "3x Thunderbolt 5, 2x USB-A, HDMI 2.1, Ethernet 10Gb",
      "Hệ điều hành": "macOS Sequoia",
      "Kích thước": "12.7 × 12.7 × 5 cm",
      "Trọng lượng": "0.67 kg"
    },
    description: "Mac Mini M4 Pro 2024 — nhỏ gọn nhất từ trước đến nay, chip M4 Pro mạnh mẽ, Thunderbolt 5 và Ethernet 10Gb. Giải pháp desktop hoàn hảo với giá hợp lý.",
    inStock: true
  },

  // ── PHỤ KIỆN APPLE ────────────────────────────────────
  {
    id: 14,
    name: "AirPods Pro 2 (USB-C)",
    category: "phukien",
    price: 6490000,
    originalPrice: 7490000,
    thumbnail: "assets/images/products/airpods-pro2.jpg",
    images: ["assets/images/products/airpods-pro2.jpg"],
    badge: "Hot",
    specs: {
      "Chip": "Apple H2",
      "Chống ồn": "Active Noise Cancellation thế hệ 2",
      "Âm thanh": "Adaptive Audio, Personalized Spatial Audio",
      "Pin tai nghe": "Lên đến 6 giờ (ANC bật)",
      "Pin hộp sạc": "Lên đến 30 giờ tổng",
      "Kết nối": "Bluetooth 5.3",
      "Sạc": "USB-C, MagSafe, Qi",
      "Kháng nước": "IP54"
    },
    description: "AirPods Pro 2 với chip H2, chống ồn ANC thế hệ 2 mạnh hơn 2x, Adaptive Audio thông minh và Personalized Spatial Audio. Cổng USB-C tiện lợi.",
    inStock: true
  },
  {
    id: 15,
    name: "AirPods 4 (Active Noise Cancellation)",
    category: "phukien",
    price: 4490000,
    originalPrice: 4990000,
    thumbnail: "assets/images/products/airpods4.jpg",
    images: ["assets/images/products/airpods4.jpg"],
    badge: "New",
    specs: {
      "Chip": "Apple H2",
      "Chống ồn": "Active Noise Cancellation",
      "Âm thanh": "Spatial Audio, Adaptive EQ",
      "Pin tai nghe": "Lên đến 5 giờ (ANC bật)",
      "Pin hộp sạc": "Lên đến 30 giờ tổng",
      "Kết nối": "Bluetooth 5.3",
      "Sạc": "USB-C, MagSafe, Qi2",
      "Thiết kế": "Open-ear, không cần đệm tai"
    },
    description: "AirPods 4 2024 — thiết kế open-ear hoàn toàn mới, lần đầu có ANC trên AirPods thường, chip H2 và hộp sạc USB-C/MagSafe.",
    inStock: true
  },
  {
    id: 16,
    name: "Apple Watch Series 10 45mm",
    category: "phukien",
    price: 11990000,
    originalPrice: 13490000,
    thumbnail: "assets/images/products/apple-watch-s10.jpg",
    images: ["assets/images/products/apple-watch-s10.jpg"],
    badge: "Hot",
    variants: [
      {
        label: "Kích thước",
        type: "size",
        options: [
          { name: "42mm", value: "42mm", price: 10490000, originalPrice: 11990000 },
          { name: "46mm", value: "46mm", price: 11990000, originalPrice: 13490000 }
        ]
      },
      {
        label: "Vật liệu",
        type: "material",
        options: [
          { name: "Nhôm",  value: "aluminum", price: 11990000, originalPrice: 13490000 },
          { name: "Titan", value: "titanium", price: 18990000, originalPrice: 20990000 }
        ]
      },
      {
        label: "Kết nối",
        type: "connectivity",
        options: [
          { name: "GPS",          value: "gps",      price: 11990000, originalPrice: 13490000 },
          { name: "GPS + Cellular", value: "cellular", price: 14990000, originalPrice: 16490000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "45mm Always-On Retina LTPO OLED",
      "Chip": "Apple S10",
      "Cảm biến": "Tim mạch, SpO2, nhiệt độ da, ECG",
      "Pin": "Lên đến 18 giờ (36 giờ Low Power)",
      "Kết nối": "GPS + Cellular, Wi-Fi, Bluetooth 5.3",
      "Kháng nước": "50m (WR50)",
      "Hệ điều hành": "watchOS 11",
      "Vật liệu": "Nhôm / Titan"
    },
    description: "Apple Watch Series 10 — mỏng nhất từ trước đến nay, màn hình lớn hơn, sạc nhanh hơn 2x và tính năng Sleep Apnea Detection mới. Chip S10 mạnh mẽ.",
    inStock: true
  },
  {
    id: 17,
    name: "Apple Watch Ultra 2 49mm",
    category: "phukien",
    price: 23990000,
    originalPrice: 25990000,
    thumbnail: "assets/images/products/apple-watch-ultra2.jpg",
    images: ["assets/images/products/apple-watch-ultra2.jpg"],
    badge: null,
    specs: {
      "Màn hình": "49mm Always-On Retina LTPO OLED, 3000 nits",
      "Chip": "Apple S9",
      "Cảm biến": "Tim mạch, SpO2, nhiệt độ, ECG, độ sâu nước",
      "Pin": "Lên đến 60 giờ (Low Power Mode)",
      "Kết nối": "GPS L1+L5, Cellular, Wi-Fi 6, Bluetooth 5.3",
      "Kháng nước": "100m (EN13319)",
      "Vật liệu": "Titan tự nhiên",
      "Đặc biệt": "Action Button, Siren 86dB"
    },
    description: "Apple Watch Ultra 2 — đồng hồ thể thao cực hạn với pin 60 giờ, GPS chính xác L1+L5, kháng nước 100m và màn hình sáng nhất 3000 nits.",
    inStock: true
  },
  {
    id: 18,
    name: "iPad Pro M4 11 inch WiFi 256GB",
    category: "phukien",
    price: 26990000,
    originalPrice: 29990000,
    thumbnail: "assets/images/products/ipad-pro-m4.jpg",
    images: ["assets/images/products/ipad-pro-m4.jpg"],
    badge: "New",
    specs: {
      "Màn hình": "11 inch Ultra Retina XDR OLED tandem",
      "Chip": "Apple M4",
      "RAM": "8GB",
      "Bộ nhớ trong": "256GB",
      "Camera sau": "12MP Wide + 10MP Ultra Wide + LiDAR",
      "Camera trước": "12MP TrueDepth",
      "Pin": "Lên đến 10 giờ",
      "Kết nối": "Wi-Fi 6E, Bluetooth 5.3, USB-C Thunderbolt 4",
      "Độ mỏng": "5.3mm — mỏng nhất từ trước đến nay"
    },
    description: "iPad Pro M4 11 inch — mỏng nhất thế giới chỉ 5.3mm, màn hình OLED tandem siêu sáng, chip M4 mạnh như MacBook và hỗ trợ Apple Pencil Pro.",
    inStock: true
  },
  {
    id: 19,
    name: "Apple Pencil Pro",
    category: "phukien",
    price: 3490000,
    originalPrice: 3990000,
    thumbnail: "assets/images/products/apple-pencil-pro.jpg",
    images: ["assets/images/products/apple-pencil-pro.jpg"],
    badge: "New",
    specs: {
      "Tương thích": "iPad Pro M4, iPad Air M2",
      "Tính năng": "Squeeze, Double Tap, Find My, Barrel Roll",
      "Cảm biến": "Gyroscope, hover detection",
      "Sạc": "MagSafe",
      "Độ trễ": "Cực thấp",
      "Màu sắc": "Trắng"
    },
    description: "Apple Pencil Pro — bút cảm ứng thông minh nhất với tính năng Squeeze mới, Barrel Roll xoay bút, Find My và sạc MagSafe tiện lợi.",
    inStock: true
  },
  {
    id: 20,
    name: "MagSafe Charger 25W",
    category: "phukien",
    price: 1290000,
    originalPrice: 1490000,
    thumbnail: "assets/images/products/magsafe-25w.jpg",
    images: ["assets/images/products/magsafe-25w.jpg"],
    badge: "New",
    specs: {
      "Công suất": "25W (với iPhone 16)",
      "Tương thích": "iPhone 12 trở lên, AirPods Pro",
      "Kết nối": "MagSafe từ tính",
      "Cáp": "USB-C 1m tích hợp",
      "Chuẩn": "Qi2"
    },
    description: "MagSafe Charger 25W mới nhất — sạc nhanh hơn 2x so với MagSafe 15W, tương thích iPhone 16 và tất cả thiết bị MagSafe/Qi2.",
    inStock: true
  }
];

// ── Hàm tiện ích ──────────────────────────────────────────

function getAllProducts() {
  return products;
}

function getProductsByCategory(category) {
  if (category === "all") return products;
  return products.filter(p => p.category === category);
}

function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

function getRelatedProducts(id, category, limit = 4) {
  return products
    .filter(p => p.category === category && p.id !== parseInt(id))
    .slice(0, limit);
}

// Phân trang
function getProductsPaged(category, page, perPage = 8) {
  const list  = getProductsByCategory(category);
  const total = list.length;
  const pages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const items = list.slice(start, start + perPage);
  return { items, total, pages, page };
}

// ── Merge với override từ admin ───────────────────────────

function getMergedProductsForHome() {
  try {
    const overrides = JSON.parse(localStorage.getItem("productOverrides")) || {};
    return products.map(p => {
      const ov = overrides[p.id];
      return ov ? { ...p, ...ov } : p;
    });
  } catch (e) {
    return products;
  }
}

function getProductsPagedMerged(category, page, perPage = 8) {
  const all  = getMergedProductsForHome();
  const list = category === "all" ? all : all.filter(p => p.category === category);
  const total = list.length;
  const pages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const items = list.slice(start, start + perPage);
  return { items, total, pages, page };
}

// Lấy sản phẩm theo ID đã merge override
function getMergedProductById(id) {
  const overrides = JSON.parse(localStorage.getItem("productOverrides")) || {};
  const p = products.find(p => p.id === parseInt(id));
  if (!p) return null;
  const ov = overrides[p.id];
  return ov ? { ...p, ...ov } : p;
}

// Lấy sản phẩm liên quan đã merge
function getMergedRelatedProducts(id, category, limit = 4) {
  return getMergedProductsForHome()
    .filter(p => p.category === category && p.id !== parseInt(id))
    .slice(0, limit);
}
