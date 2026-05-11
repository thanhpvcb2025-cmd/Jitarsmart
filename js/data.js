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
    thumbnail: "assets/images/products/macbook-prom4.jpg",
    images: [
      "assets/images/products/macbook-prom4.jpg",
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
  },

  // ── SẢN PHẨM MỚI 2025–2026 ───────────────────────────

  // iPhone 17 Air
  {
    id: 21,
    name: "iPhone 17 Air 256GB",
    category: "dienthoai",
    price: 32000000,
    originalPrice: 35990000,
    thumbnail: "assets/images/products/iphone17air.jpg",
    images: ["assets/images/products/iphone17air.jpg"],
    badge: "New",
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Sky Blue",    value: "skyblue",    color: "#a8c8e8", image: "assets/images/products/iphone17air.jpg" },
          { name: "Pale Gold",   value: "palegold",   color: "#d4b896", image: "assets/images/products/iphone17air.jpg" },
          { name: "Cloud White", value: "cloudwhite", color: "#f5f5f0", image: "assets/images/products/iphone17air.jpg" },
          { name: "Space Black", value: "spaceblack", color: "#1c1c1e", image: "assets/images/products/iphone17air.jpg" }
        ]
      },
      {
        label: "Dung lượng",
        type: "storage",
        options: [
          { name: "256GB", value: "256gb", price: 32000000, originalPrice: 35990000 },
          { name: "512GB", value: "512gb", price: 38500000, originalPrice: 42990000 },
          { name: "1TB",   value: "1tb",   price: 45000000, originalPrice: 49990000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "6.6 inch Super Retina XDR OLED, 120Hz ProMotion",
      "Chip": "Apple A19",
      "RAM": "8GB",
      "Bộ nhớ trong": "256GB",
      "Camera sau": "48MP Fusion + 12MP Ultra Wide",
      "Camera trước": "24MP TrueDepth",
      "Pin": "Lên đến 23 giờ phát video",
      "Độ mỏng": "5.5mm — iPhone mỏng nhất từ trước đến nay",
      "Kết nối": "5G, Wi-Fi 7, Bluetooth 5.4, USB-C",
      "Màu sắc": "Sky Blue, Pale Gold, Cloud White, Space Black"
    },
    description: "iPhone 17 Air — siêu phẩm mỏng nhất lịch sử Apple chỉ 5.5mm, chip A19 mạnh mẽ, camera 48MP và màn hình 6.6 inch ProMotion 120Hz. Thiết kế nhôm cao cấp 4 màu sắc mới.",
    inStock: true
  },

  // iPhone 17 Pro Max
  {
    id: 22,
    name: "iPhone 17 Pro Max 256GB",
    category: "dienthoai",
    price: 37000000,
    originalPrice: 40990000,
    thumbnail: "assets/images/products/iphone17promax.jpg",
    images: ["assets/images/products/iphone17promax.jpg"],
    badge: "Hot",
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Black Titanium",   value: "black",   color: "#2c2c2e", image: "assets/images/products/iphone17promax.jpg" },
          { name: "Desert Titanium",  value: "desert",  color: "#c8a882", image: "assets/images/products/iphone17promax.jpg" },
          { name: "Natural Titanium", value: "natural", color: "#b0a99a", image: "assets/images/products/iphone17promax.jpg" },
          { name: "White Titanium",   value: "white",   color: "#f5f5f0", image: "assets/images/products/iphone17promax.jpg" }
        ]
      },
      {
        label: "Dung lượng",
        type: "storage",
        options: [
          { name: "256GB", value: "256gb", price: 37000000, originalPrice: 40990000 },
          { name: "512GB", value: "512gb", price: 43000000, originalPrice: 47990000 },
          { name: "1TB",   value: "1tb",   price: 50000000, originalPrice: 54990000 },
          { name: "2TB",   value: "2tb",   price: 64000000, originalPrice: 68990000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "6.9 inch Super Retina XDR OLED, 120Hz ProMotion",
      "Chip": "Apple A19 Pro",
      "RAM": "12GB",
      "Bộ nhớ trong": "256GB",
      "Camera sau": "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto Tetraprism",
      "Camera trước": "24MP TrueDepth",
      "Pin": "Lên đến 33 giờ phát video",
      "Vật liệu": "Khung Titan Grade 5, mặt lưng kính nhám",
      "Kết nối": "5G, Wi-Fi 7, Bluetooth 5.4, USB-C Thunderbolt 5",
      "Màu sắc": "Black Titanium, Desert Titanium, Natural Titanium, White Titanium"
    },
    description: "iPhone 17 Pro Max — đỉnh cao công nghệ Apple 2025 với chip A19 Pro, camera 48MP Ultra Wide thế hệ mới, pin 33 giờ và cổng Thunderbolt 5 siêu tốc. Khung Titan Grade 5 sang trọng.",
    inStock: true
  },

  // MacBook Air M5 13 inch
  {
    id: 23,
    name: "MacBook Air M5 13 inch",
    category: "laptop",
    price: 32990000,
    originalPrice: 35990000,
    thumbnail: "assets/images/products/macbook-air-m5.jpg",
    images: ["assets/images/products/macbook-air-m5.jpg"],
    badge: "New",
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Sky Blue",  value: "skyblue",  color: "#a8c8e8", image: "assets/images/products/macbook-air-m5.jpg" },
          { name: "Midnight",  value: "midnight",  color: "#1c2526", image: "assets/images/products/macbook-air-m5.jpg" },
          { name: "Starlight", value: "starlight", color: "#e8e0d0", image: "assets/images/products/macbook-air-m5.jpg" },
          { name: "Silver",    value: "silver",    color: "#e8e8ed", image: "assets/images/products/macbook-air-m5.jpg" }
        ]
      },
      {
        label: "Bộ nhớ",
        type: "storage",
        options: [
          { name: "512GB SSD", value: "512gb", price: 32990000, originalPrice: 35990000 },
          { name: "1TB SSD",   value: "1tb",   price: 39990000, originalPrice: 42990000 },
          { name: "2TB SSD",   value: "2tb",   price: 52990000, originalPrice: 55990000 }
        ]
      },
      {
        label: "RAM",
        type: "ram",
        options: [
          { name: "16GB", value: "16gb", price: 32990000, originalPrice: 35990000 },
          { name: "32GB", value: "32gb", price: 45990000, originalPrice: 48990000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "13.6 inch Liquid Retina, 500 nits",
      "Chip": "Apple M5 (10-core CPU, 10-core GPU)",
      "RAM": "16GB Unified Memory",
      "Ổ cứng": "512GB SSD",
      "Pin": "Lên đến 18 giờ",
      "Cổng kết nối": "2x Thunderbolt 4, MagSafe 3, 3.5mm",
      "Kết nối": "Wi-Fi 7, Bluetooth 6",
      "Hệ điều hành": "macOS Sequoia",
      "Trọng lượng": "1.24 kg",
      "Màu sắc": "Sky Blue, Midnight, Starlight, Silver"
    },
    description: "MacBook Air M5 13 inch 2026 — chip M5 nhanh hơn 30% so với M4, AI nhanh gấp 4x, bộ nhớ khởi điểm 512GB và kết nối Wi-Fi 7 + Bluetooth 6. Không quạt, không ồn, pin 18 giờ.",
    inStock: true
  },

  // MacBook Pro M5 Pro 14 inch
  {
    id: 24,
    name: "MacBook Pro M5 Pro 14 inch",
    category: "laptop",
    price: 62990000,
    originalPrice: 67990000,
    thumbnail: "assets/images/products/macbook-pro-m5.jpg",
    images: ["assets/images/products/macbook-pro-m5.jpg"],
    badge: "New",
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Space Black", value: "space-black", color: "#1c1c1e", image: "assets/images/products/macbook-pro-m5.jpg" },
          { name: "Silver",      value: "silver",      color: "#e8e8ed", image: "assets/images/products/macbook-pro-m5.jpg" }
        ]
      },
      {
        label: "Bộ nhớ",
        type: "storage",
        options: [
          { name: "1TB SSD", value: "1tb", price: 62990000, originalPrice: 67990000 },
          { name: "2TB SSD", value: "2tb", price: 75990000, originalPrice: 80990000 }
        ]
      },
      {
        label: "RAM",
        type: "ram",
        options: [
          { name: "24GB", value: "24gb", price: 62990000, originalPrice: 67990000 },
          { name: "48GB", value: "48gb", price: 78990000, originalPrice: 83990000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "14.2 inch Liquid Retina XDR, 120Hz ProMotion",
      "Chip": "Apple M5 Pro (12-core CPU, 20-core GPU)",
      "RAM": "24GB Unified Memory",
      "Ổ cứng": "1TB SSD",
      "Pin": "Lên đến 24 giờ",
      "Cổng kết nối": "3x Thunderbolt 5, HDMI 2.1, SD Card, MagSafe 3",
      "Kết nối": "Wi-Fi 7, Bluetooth 6",
      "Hệ điều hành": "macOS Sequoia",
      "Trọng lượng": "1.62 kg",
      "Màu sắc": "Space Black, Silver"
    },
    description: "MacBook Pro M5 Pro 14 inch 2026 — chip M5 Pro với CPU nhanh nhất thế giới, AI nhanh gấp 4x so với M4 Pro, Thunderbolt 5 và bộ nhớ khởi điểm 1TB. Hiệu năng đỉnh cao cho chuyên gia.",
    inStock: true
  },

  // MacBook Neo
  {
    id: 25,
    name: "MacBook Neo 13 inch",
    category: "laptop",
    price: 16990000,
    originalPrice: 18990000,
    thumbnail: "assets/images/products/macbook-neo.jpg",
    images: ["assets/images/products/macbook-neo.jpg"],
    badge: "New",
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Silver", value: "silver", color: "#e8e8ed", image: "assets/images/products/macbook-neo.jpg" },
          { name: "Blush",  value: "blush",  color: "#f4c2b0", image: "assets/images/products/macbook-neo.jpg" },
          { name: "Citrus", value: "citrus", color: "#f5d020", image: "assets/images/products/macbook-neo.jpg" },
          { name: "Indigo", value: "indigo", color: "#4b5ea6", image: "assets/images/products/macbook-neo.jpg" }
        ]
      },
      {
        label: "Bộ nhớ",
        type: "storage",
        options: [
          { name: "256GB SSD", value: "256gb", price: 16990000, originalPrice: 18990000 },
          { name: "512GB SSD", value: "512gb", price: 20990000, originalPrice: 22990000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "13.6 inch Liquid Retina, 500 nits",
      "Chip": "Apple A18 Pro (6-core CPU, 5-core GPU)",
      "RAM": "8GB Unified Memory",
      "Ổ cứng": "256GB SSD",
      "Pin": "Lên đến 16 giờ",
      "Camera": "1080p FaceTime HD",
      "Kết nối": "Wi-Fi 6E, Bluetooth 5.3, 2x USB-C",
      "Hệ điều hành": "macOS Sequoia",
      "Thiết kế": "Nhôm fanless (không quạt), 4 màu sắc",
      "Màu sắc": "Silver, Blush, Citrus, Indigo"
    },
    description: "MacBook Neo — laptop Apple giá rẻ nhất từ trước đến nay, chỉ từ 16.990.000đ. Chip A18 Pro mạnh mẽ, thiết kế nhôm không quạt, 4 màu sắc tươi sáng và pin 16 giờ. Hoàn hảo cho học sinh, sinh viên.",
    inStock: true
  },

  // iPad Air M4 11 inch (2026)
  {
    id: 26,
    name: "iPad Air M4 11 inch WiFi 256GB",
    category: "phukien",
    price: 22990000,
    originalPrice: 25990000,
    thumbnail: "assets/images/products/ipad-air-m4.jpg",
    images: ["assets/images/products/ipad-air-m4.jpg"],
    badge: "New",
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Blue",       value: "blue",      color: "#4a90d9", image: "assets/images/products/ipad-air-m4.jpg" },
          { name: "Purple",     value: "purple",    color: "#9b59b6", image: "assets/images/products/ipad-air-m4.jpg" },
          { name: "Starlight",  value: "starlight", color: "#e8e0d0", image: "assets/images/products/ipad-air-m4.jpg" },
          { name: "Space Gray", value: "spacegray", color: "#6e6e73", image: "assets/images/products/ipad-air-m4.jpg" }
        ]
      },
      {
        label: "Dung lượng",
        type: "storage",
        options: [
          { name: "128GB", value: "128gb", price: 18990000, originalPrice: 21990000 },
          { name: "256GB", value: "256gb", price: 22990000, originalPrice: 25990000 },
          { name: "512GB", value: "512gb", price: 29990000, originalPrice: 32990000 },
          { name: "1TB",   value: "1tb",   price: 36990000, originalPrice: 39990000 }
        ]
      },
      {
        label: "Kết nối",
        type: "connectivity",
        options: [
          { name: "Wi-Fi",          value: "wifi",     price: 22990000, originalPrice: 25990000 },
          { name: "Wi-Fi + Cellular", value: "cellular", price: 28990000, originalPrice: 31990000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "11 inch Liquid Retina, True Tone, P3",
      "Chip": "Apple M4 (9-core CPU, 10-core GPU)",
      "RAM": "8GB",
      "Bộ nhớ trong": "256GB",
      "Camera sau": "12MP Wide + 12MP Ultra Wide",
      "Camera trước": "12MP TrueDepth Center Stage",
      "Pin": "Lên đến 10 giờ",
      "Kết nối": "Wi-Fi 6E, Bluetooth 5.3, USB-C Thunderbolt 4",
      "Hỗ trợ": "Apple Pencil Pro, Magic Keyboard",
      "Màu sắc": "Blue, Purple, Starlight, Space Gray"
    },
    description: "iPad Air M4 11 inch 2026 — chip M4 mạnh hơn 50% so với M2, hỗ trợ Apple Pencil Pro và Magic Keyboard. Màn hình Liquid Retina sắc nét, thiết kế mỏng nhẹ hoàn hảo cho sáng tạo và học tập.",
    inStock: true
  },
  {
    id: 27,
    name: "iPhone 17e 256GB",
    category: "dienthoai",
    price: 17500000,
    originalPrice: 19990000,
    thumbnail: "assets/images/products/iphone17e.jpg",
    images: ["assets/images/products/iphone17e.jpg"],
    badge: "New",
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Black",     value: "black",    color: "#1c1c1e", image: "assets/images/products/iphone17e.jpg" },
          { name: "White",     value: "white",    color: "#f5f5f0", image: "assets/images/products/iphone17e.jpg" },
          { name: "Soft Pink", value: "softpink", color: "#f4c2c2", image: "assets/images/products/iphone17e.jpg" }
        ]
      },
      {
        label: "Dung lượng",
        type: "storage",
        options: [
          { name: "256GB", value: "256gb", price: 17500000, originalPrice: 19990000 },
          { name: "512GB", value: "512gb", price: 21990000, originalPrice: 24990000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "6.1 inch Super Retina XDR OLED, Ceramic Shield 2",
      "Chip": "Apple A19",
      "RAM": "8GB",
      "Bộ nhớ trong": "256GB",
      "Camera sau": "48MP Fusion 2-in-1",
      "Camera trước": "12MP TrueDepth",
      "Pin": "Lên đến 26 giờ phát video",
      "Kết nối": "5G, Wi-Fi 6, Bluetooth 5.3, MagSafe, USB-C",
      "Màu sắc": "Black, White, Soft Pink"
    },
    description: "iPhone 17e 2026 — iPhone giá tốt nhất dòng 17, chip A19 mạnh mẽ, camera 48MP, bộ nhớ khởi điểm 256GB và hỗ trợ MagSafe. Màn hình 6.1 inch Ceramic Shield 2 bền gấp 3x.",
    inStock: true
  },
  {
    id: 28,
    name: "Mac Studio M4 Max",
    category: "pc",
    price: 52990000,
    originalPrice: 57990000,
    thumbnail: "assets/images/products/mac-studio-m4.jpg",
    images: ["assets/images/products/mac-studio-m4.jpg"],
    badge: "New",
    variants: [
      {
        label: "Chip",
        type: "storage",
        options: [
          { name: "M4 Max 36GB / 512GB", value: "m4max-36gb", price: 52990000, originalPrice: 57990000 },
          { name: "M4 Max 64GB / 1TB",   value: "m4max-64gb", price: 72990000, originalPrice: 77990000 },
          { name: "M3 Ultra 96GB / 1TB", value: "m3ultra",    price: 119990000, originalPrice: 124990000 }
        ]
      }
    ],
    specs: {
      "Chip": "Apple M4 Max (14-core CPU, 32-core GPU)",
      "RAM": "36GB Unified Memory",
      "Ổ cứng": "512GB SSD",
      "Cổng kết nối": "3x Thunderbolt 5, 2x USB-A, HDMI 2.1, SD Card, Ethernet 10Gb",
      "Cổng trước": "2x Thunderbolt 5, 1x USB-C, 1x USB-A, SD Card",
      "Hỗ trợ màn hình": "Lên đến 5 màn hình",
      "Hệ điều hành": "macOS Sequoia",
      "Kích thước": "19.7 × 19.7 × 9.5 cm",
      "Trọng lượng": "2.7 kg"
    },
    description: "Mac Studio M4 Max 2025 — desktop pro nhỏ gọn mạnh nhất từ trước đến nay. Chip M4 Max với 32-core GPU, Thunderbolt 5, hỗ trợ 5 màn hình và Ethernet 10Gb. Lý tưởng cho video editor, nhạc sĩ và lập trình viên.",
    inStock: true
  },
  {
    id: 29,
    name: "MacBook Pro M5 Max 16 inch",
    category: "laptop",
    price: 99990000,
    originalPrice: 109990000,
    thumbnail: "assets/images/products/macbook-pro-m5-max.jpg",
    images: ["assets/images/products/macbook-pro-m5-max.jpg"],
    badge: "Hot",
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Space Black", value: "space-black", color: "#1c1c1e", image: "assets/images/products/macbook-pro-m5-max.jpg" },
          { name: "Silver",      value: "silver",      color: "#e8e8ed", image: "assets/images/products/macbook-pro-m5-max.jpg" }
        ]
      },
      {
        label: "Bộ nhớ",
        type: "storage",
        options: [
          { name: "2TB SSD / 48GB RAM",  value: "2tb-48gb",  price: 99990000,  originalPrice: 109990000 },
          { name: "4TB SSD / 128GB RAM", value: "4tb-128gb", price: 139990000, originalPrice: 149990000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "16.2 inch Liquid Retina XDR, 120Hz ProMotion, 1000 nits",
      "Chip": "Apple M5 Max (16-core CPU, 40-core GPU)",
      "RAM": "48GB Unified Memory",
      "Ổ cứng": "2TB SSD",
      "Pin": "Lên đến 24 giờ",
      "Cổng kết nối": "3x Thunderbolt 5, HDMI 2.1, SD Card, MagSafe 3",
      "Kết nối": "Wi-Fi 7, Bluetooth 6",
      "Hệ điều hành": "macOS Sequoia",
      "Trọng lượng": "2.14 kg",
      "Màu sắc": "Space Black, Silver"
    },
    description: "MacBook Pro M5 Max 16 inch 2026 — đỉnh cao laptop chuyên nghiệp với chip M5 Max 40-core GPU, màn hình XDR 16 inch, pin 24 giờ và Thunderbolt 5. Dành cho video 8K, 3D render và AI workload.",
    inStock: true
  },
  {
    id: 30,
    name: "MacBook Air M5 15 inch",
    category: "laptop",
    price: 39990000,
    originalPrice: 43990000,
    thumbnail: "assets/images/products/macbook-air-m5-15.jpg",
    images: ["assets/images/products/macbook-air-m5-15.jpg"],
    badge: "New",
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Sky Blue",  value: "skyblue",   color: "#a8c8e8", image: "assets/images/products/macbook-air-m5-15.jpg" },
          { name: "Midnight",  value: "midnight",  color: "#1c2526", image: "assets/images/products/macbook-air-m5-15.jpg" },
          { name: "Starlight", value: "starlight", color: "#e8e0d0", image: "assets/images/products/macbook-air-m5-15.jpg" },
          { name: "Silver",    value: "silver",    color: "#e8e8ed", image: "assets/images/products/macbook-air-m5-15.jpg" }
        ]
      },
      {
        label: "Bộ nhớ",
        type: "storage",
        options: [
          { name: "512GB / 16GB RAM", value: "512gb", price: 39990000, originalPrice: 43990000 },
          { name: "1TB / 16GB RAM",   value: "1tb",   price: 46990000, originalPrice: 50990000 },
          { name: "1TB / 32GB RAM",   value: "1tb-32gb", price: 55990000, originalPrice: 59990000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "15.3 inch Liquid Retina, 500 nits",
      "Chip": "Apple M5 (10-core CPU, 10-core GPU)",
      "RAM": "16GB Unified Memory",
      "Ổ cứng": "512GB SSD",
      "Pin": "Lên đến 18 giờ",
      "Cổng kết nối": "2x Thunderbolt 4, MagSafe 3, 3.5mm",
      "Kết nối": "Wi-Fi 7, Bluetooth 6",
      "Hệ điều hành": "macOS Sequoia",
      "Trọng lượng": "1.51 kg",
      "Màu sắc": "Sky Blue, Midnight, Starlight, Silver"
    },
    description: "MacBook Air M5 15 inch 2026 — màn hình lớn 15.3 inch, chip M5 mạnh hơn 30% M4, bộ nhớ khởi điểm 512GB và Wi-Fi 7. Không quạt, không ồn, pin 18 giờ — laptop hoàn hảo cho mọi nhu cầu.",
    inStock: true
  },
  {
    id: 31,
    name: "iPad Pro M5 11 inch WiFi 256GB",
    category: "phukien",
    price: 29990000,
    originalPrice: 33990000,
    thumbnail: "assets/images/products/ipad-pro-m5.jpg",
    images: ["assets/images/products/ipad-pro-m5.jpg"],
    badge: "New",
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Space Black", value: "spaceblack", color: "#1c1c1e", image: "assets/images/products/ipad-pro-m5.jpg" },
          { name: "Silver",      value: "silver",     color: "#e8e8ed", image: "assets/images/products/ipad-pro-m5.jpg" }
        ]
      },
      {
        label: "Dung lượng",
        type: "storage",
        options: [
          { name: "256GB", value: "256gb", price: 29990000, originalPrice: 33990000 },
          { name: "512GB", value: "512gb", price: 36990000, originalPrice: 40990000 },
          { name: "1TB",   value: "1tb",   price: 46990000, originalPrice: 50990000 },
          { name: "2TB",   value: "2tb",   price: 59990000, originalPrice: 63990000 }
        ]
      },
      {
        label: "Kết nối",
        type: "connectivity",
        options: [
          { name: "Wi-Fi",            value: "wifi",     price: 29990000, originalPrice: 33990000 },
          { name: "Wi-Fi + Cellular", value: "cellular", price: 36990000, originalPrice: 40990000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "11 inch Ultra Retina XDR OLED tandem, 120Hz ProMotion",
      "Chip": "Apple M5 (10-core CPU, 10-core GPU)",
      "RAM": "16GB",
      "Bộ nhớ trong": "256GB",
      "Camera sau": "12MP Wide + 10MP Ultra Wide + LiDAR",
      "Camera trước": "12MP TrueDepth Center Stage",
      "Pin": "Lên đến 10 giờ",
      "Kết nối": "Wi-Fi 6E, Bluetooth 5.3, USB-C Thunderbolt 4",
      "Độ mỏng": "5.1mm",
      "Hỗ trợ": "Apple Pencil Pro, Magic Keyboard"
    },
    description: "iPad Pro M5 11 inch — chip M5 mạnh nhất trên iPad, màn hình OLED tandem siêu sáng, mỏng chỉ 5.1mm. Hỗ trợ Apple Intelligence, Apple Pencil Pro và Magic Keyboard. Hiệu năng ngang MacBook.",
    inStock: true
  },
  {
    id: 32,
    name: "iPad Pro M5 13 inch WiFi 256GB",
    category: "phukien",
    price: 39990000,
    originalPrice: 44990000,
    thumbnail: "assets/images/products/ipad-pro-m5-13.jpg",
    images: ["assets/images/products/ipad-pro-m5-13.jpg"],
    badge: "New",
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Space Black", value: "spaceblack", color: "#1c1c1e", image: "assets/images/products/ipad-pro-m5-13.jpg" },
          { name: "Silver",      value: "silver",     color: "#e8e8ed", image: "assets/images/products/ipad-pro-m5-13.jpg" }
        ]
      },
      {
        label: "Dung lượng",
        type: "storage",
        options: [
          { name: "256GB", value: "256gb", price: 39990000, originalPrice: 44990000 },
          { name: "512GB", value: "512gb", price: 46990000, originalPrice: 51990000 },
          { name: "1TB",   value: "1tb",   price: 56990000, originalPrice: 61990000 },
          { name: "2TB",   value: "2tb",   price: 69990000, originalPrice: 74990000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "13 inch Ultra Retina XDR OLED tandem, 120Hz ProMotion",
      "Chip": "Apple M5 (10-core CPU, 10-core GPU)",
      "RAM": "16GB",
      "Bộ nhớ trong": "256GB",
      "Camera sau": "12MP Wide + 10MP Ultra Wide + LiDAR",
      "Camera trước": "12MP TrueDepth Center Stage",
      "Pin": "Lên đến 10 giờ",
      "Kết nối": "Wi-Fi 6E, Bluetooth 5.3, USB-C Thunderbolt 4",
      "Độ mỏng": "5.1mm",
      "Hỗ trợ": "Apple Pencil Pro, Magic Keyboard"
    },
    description: "iPad Pro M5 13 inch — màn hình OLED 13 inch lớn nhất dòng iPad Pro, chip M5 cực mạnh, mỏng 5.1mm. Trải nghiệm sáng tạo và làm việc chuyên nghiệp đỉnh cao với Apple Pencil Pro.",
    inStock: true
  },
  {
    id: 33,
    name: "Apple Studio Display 27 inch",
    category: "phukien",
    price: 41990000,
    originalPrice: 45990000,
    thumbnail: "assets/images/products/studio-display.jpg",
    images: ["assets/images/products/studio-display.jpg"],
    badge: "New",
    specs: {
      "Màn hình": "27 inch 5K Retina, 218 PPI",
      "Độ sáng": "600 nits (SDR), True Tone",
      "Màu sắc": "P3 wide color, 1 tỷ màu",
      "Camera": "12MP Ultra Wide Center Stage",
      "Âm thanh": "6 loa Spatial Audio, 3 mic studio",
      "Kết nối": "1x Thunderbolt 3 (96W sạc), 3x USB-C",
      "Tương thích": "Mac, iPad Pro, iPad Air",
      "Kích thước": "62.3 × 47.8 × 16.8 cm",
      "Trọng lượng": "6.3 kg"
    },
    description: "Apple Studio Display 2026 — màn hình 5K Retina 27 inch sắc nét 218 PPI, camera 12MP Center Stage, 6 loa Spatial Audio và sạc Thunderbolt 3 96W. Hoàn hảo cho Mac và iPad Pro.",
    inStock: true
  },
  {
    id: 34,
    name: "Apple Studio Display XDR 27 inch",
    category: "phukien",
    price: 86990000,
    originalPrice: 94990000,
    thumbnail: "assets/images/products/studio-display-xdr.jpg",
    images: ["assets/images/products/studio-display-xdr.jpg"],
    badge: "New",
    specs: {
      "Màn hình": "27 inch 5K Retina XDR, 218 PPI, Mini-LED",
      "Độ sáng": "1000 nits (SDR), 2000 nits peak HDR",
      "Tần số quét": "120Hz Adaptive Sync",
      "Màu sắc": "P3 wide + Adobe RGB, 1 tỷ màu",
      "Camera": "12MP Ultra Wide Center Stage",
      "Âm thanh": "6 loa Spatial Audio, 3 mic studio",
      "Kết nối": "1x Thunderbolt 5, 3x USB-C",
      "Dimming zones": "2304 vùng Mini-LED",
      "Trọng lượng": "7.1 kg"
    },
    description: "Apple Studio Display XDR 2026 — màn hình pro đỉnh cao với Mini-LED 2304 vùng, 2000 nits HDR, 120Hz Adaptive Sync và Thunderbolt 5. Chuẩn màu P3 + Adobe RGB cho nhiếp ảnh và video chuyên nghiệp.",
    inStock: true
  },
  {
    id: 35,
    name: "Magic Keyboard with Touch ID",
    category: "phukien",
    price: 2990000,
    originalPrice: 3490000,
    thumbnail: "assets/images/products/magic-keyboard.jpg",
    images: ["assets/images/products/magic-keyboard.jpg"],
    badge: null,
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Silver", value: "silver", color: "#e8e8ed", image: "assets/images/products/magic-keyboard.jpg" },
          { name: "Black",  value: "black",  color: "#1c1c1e", image: "assets/images/products/magic-keyboard.jpg" }
        ]
      },
      {
        label: "Phiên bản",
        type: "storage",
        options: [
          { name: "Không Numeric Keypad", value: "standard",  price: 2990000, originalPrice: 3490000 },
          { name: "Có Numeric Keypad",    value: "numeric",   price: 3690000, originalPrice: 4190000 }
        ]
      }
    ],
    specs: {
      "Kết nối": "Bluetooth, USB-C",
      "Tính năng": "Touch ID, phím chức năng đầy đủ",
      "Pin": "Sạc USB-C, dùng 1 tháng/lần",
      "Tương thích": "Mac với Apple Silicon hoặc Intel (macOS 12+)",
      "Màu sắc": "Silver, Black",
      "Bố cục": "Tiếng Anh (US)"
    },
    description: "Magic Keyboard with Touch ID — bàn phím không dây Apple với cảm biến vân tay Touch ID tích hợp, phím scissor êm ái, kết nối Bluetooth và sạc USB-C tiện lợi.",
    inStock: true
  },
  {
    id: 36,
    name: "Apple Magic Mouse",
    category: "phukien",
    price: 1990000,
    originalPrice: 2490000,
    thumbnail: "assets/images/products/magic-mouse.jpg",
    images: ["assets/images/products/magic-mouse.jpg"],
    badge: null,
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Silver", value: "silver", color: "#e8e8ed", image: "assets/images/products/magic-mouse.jpg" },
          { name: "Black",  value: "black",  color: "#1c1c1e", image: "assets/images/products/magic-mouse.jpg" }
        ]
      }
    ],
    specs: {
      "Kết nối": "Bluetooth, USB-C",
      "Bề mặt": "Multi-Touch toàn bộ mặt trên",
      "Cử chỉ": "Scroll, swipe, zoom",
      "Pin": "Sạc USB-C, dùng 1 tháng/lần",
      "Tương thích": "Mac, iPad (iPadOS 13.4+)",
      "Màu sắc": "Silver, Black"
    },
    description: "Apple Magic Mouse — chuột không dây với bề mặt Multi-Touch toàn phần, hỗ trợ cử chỉ scroll và swipe mượt mà. Kết nối Bluetooth, sạc USB-C và thiết kế siêu mỏng đặc trưng Apple.",
    inStock: true
  },
  {
    id: 37,
    name: "Apple Magic Trackpad",
    category: "phukien",
    price: 3290000,
    originalPrice: 3790000,
    thumbnail: "assets/images/products/magic-trackpad.jpg",
    images: ["assets/images/products/magic-trackpad.jpg"],
    badge: null,
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Silver", value: "silver", color: "#e8e8ed", image: "assets/images/products/magic-trackpad.jpg" },
          { name: "Black",  value: "black",  color: "#1c1c1e", image: "assets/images/products/magic-trackpad.jpg" }
        ]
      }
    ],
    specs: {
      "Kết nối": "Bluetooth, USB-C",
      "Bề mặt": "Multi-Touch lớn hơn 40% so với thế hệ trước",
      "Cử chỉ": "Force Touch, Haptic Feedback, tất cả cử chỉ macOS",
      "Pin": "Sạc USB-C, dùng 1 tháng/lần",
      "Tương thích": "Mac, iPad (iPadOS 13.4+)",
      "Màu sắc": "Silver, Black"
    },
    description: "Apple Magic Trackpad — trackpad không dây lớn nhất với Force Touch và Haptic Feedback chính xác. Hỗ trợ toàn bộ cử chỉ macOS, kết nối Bluetooth và sạc USB-C.",
    inStock: true
  },
  {
    id: 38,
    name: "Apple HomePod (thế hệ 2)",
    category: "phukien",
    price: 7990000,
    originalPrice: 8990000,
    thumbnail: "assets/images/products/homepod-2nd.jpg",
    images: ["assets/images/products/homepod-2nd.jpg"],
    badge: null,
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Midnight", value: "midnight", color: "#1c2526", image: "assets/images/products/homepod-2nd.jpg" },
          { name: "White",    value: "white",    color: "#f5f5f0", image: "assets/images/products/homepod-2nd.jpg" },
          { name: "Yellow",   value: "yellow",   color: "#f5d020", image: "assets/images/products/homepod-2nd.jpg" }
        ]
      }
    ],
    specs: {
      "Chip": "Apple S9",
      "Loa": "Woofer high-excursion + 5 tweeter beamforming",
      "Âm thanh": "Spatial Audio, Dolby Atmos, Room Sensing",
      "Cảm biến": "Nhiệt độ và độ ẩm tích hợp",
      "Kết nối": "Wi-Fi 6, Bluetooth 5.3, Thread, Ultra Wideband",
      "Smart Home": "Hub HomeKit, Matter, Thread",
      "Siri": "Nhận diện giọng nói cá nhân",
      "Màu sắc": "Midnight, White, Yellow"
    },
    description: "Apple HomePod thế hệ 2 — loa thông minh âm thanh Spatial Audio đỉnh cao, chip S9, cảm biến nhiệt độ & độ ẩm, hub HomeKit/Matter/Thread. Siri nhận diện giọng nói cá nhân.",
    inStock: true
  },
  {
    id: 39,
    name: "Apple HomePod mini",
    category: "phukien",
    price: 2490000,
    originalPrice: 2990000,
    thumbnail: "assets/images/products/homepod-mini.jpg",
    images: ["assets/images/products/homepod-mini.jpg"],
    badge: null,
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Space Gray", value: "spacegray", color: "#6e6e73", image: "assets/images/products/homepod-mini.jpg" },
          { name: "White",      value: "white",     color: "#f5f5f0", image: "assets/images/products/homepod-mini.jpg" },
          { name: "Yellow",     value: "yellow",    color: "#f5d020", image: "assets/images/products/homepod-mini.jpg" },
          { name: "Orange",     value: "orange",    color: "#f0a050", image: "assets/images/products/homepod-mini.jpg" },
          { name: "Blue",       value: "blue",      color: "#4a90d9", image: "assets/images/products/homepod-mini.jpg" }
        ]
      }
    ],
    specs: {
      "Chip": "Apple S5",
      "Loa": "Full-range driver + dual passive radiators",
      "Âm thanh": "360° audio, Spatial Audio",
      "Kết nối": "Wi-Fi 5, Bluetooth 5.0, Thread, Ultra Wideband",
      "Smart Home": "Hub HomeKit, Matter, Thread",
      "Siri": "Nhận diện giọng nói",
      "Kích thước": "Cao 8.4 cm",
      "Màu sắc": "Space Gray, White, Yellow, Orange, Blue"
    },
    description: "Apple HomePod mini — loa thông minh nhỏ gọn 360° âm thanh vòm, hub HomeKit/Matter/Thread, Siri thông minh. 5 màu sắc tươi sáng, giá tốt nhất dòng HomePod.",
    inStock: true
  },
  {
    id: 40,
    name: "Apple TV 4K (thế hệ 3)",
    category: "phukien",
    price: 3990000,
    originalPrice: 4490000,
    thumbnail: "assets/images/products/apple-tv-4k.jpg",
    images: ["assets/images/products/apple-tv-4k.jpg"],
    badge: null,
    variants: [
      {
        label: "Phiên bản",
        type: "storage",
        options: [
          { name: "Wi-Fi 64GB",           value: "wifi",     price: 3990000, originalPrice: 4490000 },
          { name: "Wi-Fi + Ethernet 128GB", value: "ethernet", price: 4690000, originalPrice: 5190000 }
        ]
      }
    ],
    specs: {
      "Chip": "Apple A15 Bionic",
      "Hình ảnh": "4K HDR, Dolby Vision, HDR10+, HLG",
      "Âm thanh": "Dolby Atmos, Spatial Audio",
      "Kết nối": "Wi-Fi 6, Bluetooth 5.0, HDMI 2.1",
      "Điều khiển": "Siri Remote (cảm ứng, tìm kiếm giọng nói)",
      "Smart Home": "Hub HomeKit, Thread",
      "Bộ nhớ": "64GB",
      "Hệ điều hành": "tvOS 18"
    },
    description: "Apple TV 4K thế hệ 3 — trải nghiệm phim 4K Dolby Vision, Dolby Atmos sống động, chip A15 Bionic mạnh mẽ, Siri Remote cảm ứng và hub HomeKit/Thread. Cổng HDMI 2.1 hỗ trợ 4K 120Hz.",
    inStock: true
  },
  {
    id: 41,
    name: "AirPods Max (USB-C)",
    category: "phukien",
    price: 13990000,
    originalPrice: 15490000,
    thumbnail: "assets/images/products/airpods-max.jpg",
    images: ["assets/images/products/airpods-max.jpg"],
    badge: null,
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Midnight",    value: "midnight",    color: "#1c2526", image: "assets/images/products/airpods-max.jpg" },
          { name: "Starlight",   value: "starlight",   color: "#e8e0d0", image: "assets/images/products/airpods-max.jpg" },
          { name: "Sky Blue",    value: "skyblue",     color: "#a8c8e8", image: "assets/images/products/airpods-max.jpg" },
          { name: "Pink",        value: "pink",        color: "#f4a0b0", image: "assets/images/products/airpods-max.jpg" },
          { name: "Orange",      value: "orange",      color: "#f0a050", image: "assets/images/products/airpods-max.jpg" }
        ]
      }
    ],
    specs: {
      "Chip": "Apple H2",
      "Chống ồn": "Active Noise Cancellation thế hệ 2",
      "Âm thanh": "Spatial Audio, Personalized Spatial Audio, Adaptive EQ",
      "Driver": "40mm dynamic driver tùy chỉnh",
      "Pin": "Lên đến 20 giờ (ANC bật)",
      "Kết nối": "Bluetooth 5.3",
      "Sạc": "USB-C",
      "Vật liệu": "Khung nhôm, đệm tai memory foam",
      "Màu sắc": "Midnight, Starlight, Sky Blue, Pink, Orange"
    },
    description: "AirPods Max USB-C — tai nghe over-ear đỉnh cao của Apple với chip H2, ANC thế hệ 2, Spatial Audio 3D sống động và driver 40mm tùy chỉnh. Khung nhôm cao cấp, đệm memory foam êm ái, pin 20 giờ.",
    inStock: true
  },
  {
    id: 42,
    name: "Apple Watch Series 10 42mm",
    category: "phukien",
    price: 10490000,
    originalPrice: 11990000,
    thumbnail: "assets/images/products/apple-watch-s10-42.jpg",
    images: ["assets/images/products/apple-watch-s10-42.jpg"],
    badge: null,
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
          { name: "Nhôm",  value: "aluminum", price: 10490000, originalPrice: 11990000 },
          { name: "Titan", value: "titanium", price: 17990000, originalPrice: 19990000 }
        ]
      },
      {
        label: "Kết nối",
        type: "connectivity",
        options: [
          { name: "GPS",              value: "gps",      price: 10490000, originalPrice: 11990000 },
          { name: "GPS + Cellular",   value: "cellular", price: 13990000, originalPrice: 15490000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "42mm Always-On Retina LTPO OLED",
      "Chip": "Apple S10",
      "Cảm biến": "Tim mạch, SpO2, nhiệt độ da, ECG, Sleep Apnea",
      "Pin": "Lên đến 18 giờ (36 giờ Low Power)",
      "Kết nối": "GPS, Wi-Fi, Bluetooth 5.3",
      "Kháng nước": "50m (WR50)",
      "Hệ điều hành": "watchOS 11",
      "Vật liệu": "Nhôm / Titan"
    },
    description: "Apple Watch Series 10 42mm — phiên bản nhỏ hơn của Series 10, mỏng nhất từ trước đến nay, sạc nhanh 2x, phát hiện Sleep Apnea và chip S10 mạnh mẽ. Lựa chọn hoàn hảo cho cổ tay nhỏ.",
    inStock: true
  },
  {
    id: 43,
    name: "iPad mini A17 Pro WiFi 128GB",
    category: "phukien",
    price: 16990000,
    originalPrice: 18990000,
    thumbnail: "assets/images/products/ipad-mini-a17.jpg",
    images: ["assets/images/products/ipad-mini-a17.jpg"],
    badge: "New",
    variants: [
      {
        label: "Màu sắc",
        type: "color",
        options: [
          { name: "Blue",       value: "blue",      color: "#4a90d9", image: "assets/images/products/ipad-mini-a17.jpg" },
          { name: "Purple",     value: "purple",    color: "#9b59b6", image: "assets/images/products/ipad-mini-a17.jpg" },
          { name: "Starlight",  value: "starlight", color: "#e8e0d0", image: "assets/images/products/ipad-mini-a17.jpg" },
          { name: "Space Gray", value: "spacegray", color: "#6e6e73", image: "assets/images/products/ipad-mini-a17.jpg" }
        ]
      },
      {
        label: "Dung lượng",
        type: "storage",
        options: [
          { name: "128GB", value: "128gb", price: 16990000, originalPrice: 18990000 },
          { name: "256GB", value: "256gb", price: 20990000, originalPrice: 22990000 },
          { name: "512GB", value: "512gb", price: 27990000, originalPrice: 29990000 }
        ]
      },
      {
        label: "Kết nối",
        type: "connectivity",
        options: [
          { name: "Wi-Fi",            value: "wifi",     price: 16990000, originalPrice: 18990000 },
          { name: "Wi-Fi + Cellular", value: "cellular", price: 21990000, originalPrice: 23990000 }
        ]
      }
    ],
    specs: {
      "Màn hình": "8.3 inch Liquid Retina, True Tone, P3",
      "Chip": "Apple A17 Pro",
      "RAM": "8GB",
      "Bộ nhớ trong": "128GB",
      "Camera sau": "12MP Wide",
      "Camera trước": "12MP TrueDepth Center Stage",
      "Pin": "Lên đến 10 giờ",
      "Kết nối": "Wi-Fi 6E, Bluetooth 5.3, USB-C",
      "Hỗ trợ": "Apple Pencil Pro, Apple Intelligence",
      "Màu sắc": "Blue, Purple, Starlight, Space Gray"
    },
    description: "iPad mini A17 Pro 2024 — iPad nhỏ gọn nhất với chip A17 Pro mạnh mẽ, hỗ trợ Apple Intelligence và Apple Pencil Pro. Màn hình 8.3 inch Liquid Retina sắc nét, hoàn hảo để mang theo mọi nơi.",
    inStock: true
  },
  {
    id: 44,
    name: "Mac Pro M4 Ultra",
    category: "pc",
    price: 249990000,
    originalPrice: 269990000,
    thumbnail: "assets/images/products/mac-pro-m4.jpg",
    images: ["assets/images/products/mac-pro-m4.jpg"],
    badge: "Hot",
    variants: [
      {
        label: "Cấu hình",
        type: "storage",
        options: [
          { name: "M4 Ultra 192GB / 1TB",  value: "192gb-1tb",  price: 249990000, originalPrice: 269990000 },
          { name: "M4 Ultra 192GB / 4TB",  value: "192gb-4tb",  price: 289990000, originalPrice: 309990000 },
          { name: "M4 Ultra 384GB / 8TB",  value: "384gb-8tb",  price: 399990000, originalPrice: 429990000 }
        ]
      }
    ],
    specs: {
      "Chip": "Apple M4 Ultra (32-core CPU, 80-core GPU)",
      "RAM": "192GB Unified Memory",
      "Ổ cứng": "1TB SSD",
      "Cổng kết nối": "6x Thunderbolt 5, 2x USB-A, 2x HDMI 2.1, 2x Ethernet 10Gb",
      "Khe mở rộng": "6 khe PCIe (3x full-length, 3x half-length)",
      "Hỗ trợ màn hình": "Lên đến 6 màn hình Pro Display XDR",
      "Hệ điều hành": "macOS Sequoia",
      "Thiết kế": "Tower / Rack mount"
    },
    description: "Mac Pro M4 Ultra — siêu máy trạm đỉnh cao của Apple với chip M4 Ultra 80-core GPU, 192GB RAM, 6 khe PCIe mở rộng và 6x Thunderbolt 5. Dành cho studio phim, AI research và render 3D chuyên nghiệp.",
    inStock: true
  },

];
// thêm ở đây
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
