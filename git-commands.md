# Hướng dẫn Git cho Team — Jitarsmart

> Hướng dẫn từng bước để cộng tác code qua Git/GitHub

---

## 📋 Mục lục

1. [Lần đầu tiên — Clone repo về máy](#1-lần-đầu-tiên--clone-repo-về-máy)
2. [Quy trình làm việc hàng ngày](#2-quy-trình-làm-việc-hàng-ngày)
3. [Xử lý conflict](#3-xử-lý-conflict)
4. [Các lệnh Git thường dùng](#4-các-lệnh-git-thường-dùng)
5. [Best Practices](#5-best-practices)

---

## 1. Lần đầu tiên — Clone repo về máy

### Bước 1.1: Cài đặt Git

**Windows:**
- Tải tại: [git-scm.com](https://git-scm.com/download/win)
- Cài đặt với tùy chọn mặc định

**Kiểm tra đã cài chưa:**
```bash
git --version
# Kết quả: git version 2.x.x
```

### Bước 1.2: Cấu hình Git (chỉ làm 1 lần)

```bash
# Đặt tên và email (hiện trong commit)
git config --global user.name "Tên Của Bạn"
git config --global user.email "email@example.com"

# Kiểm tra
git config --list
```

### Bước 1.3: Clone repo về máy

```bash
# Clone repo
git clone https://github.com/thanhpvcb2025-cmd/Jitarsmart.git

# Vào thư mục
cd Jitarsmart
```

### Bước 1.4: Mở trong VS Code

```bash
# Mở VS Code tại thư mục hiện tại
code .
```

---

## 2. Quy trình làm việc hàng ngày

### 🔄 Quy trình chuẩn (QUAN TRỌNG)

```
1. Pull code mới nhất về
2. Tạo branch mới cho tính năng
3. Code + test
4. Commit + push
5. Tạo Pull Request (nếu cần review)
6. Merge vào main
```

---

### Bước 2.1: Kéo code mới nhất về (LUÔN LÀM TRƯỚC KHI CODE)

```bash
# Đảm bảo đang ở branch main
git checkout main

# Kéo code mới nhất từ GitHub về
git pull origin main
```

> ⚠️ **QUAN TRỌNG:** Luôn `git pull` trước khi bắt đầu code để tránh conflict!

---

### Bước 2.2: Tạo branch mới cho tính năng

```bash
# Tạo và chuyển sang branch mới
git checkout -b feature/ten-tinh-nang

# Ví dụ:
git checkout -b feature/them-gio-hang
git checkout -b fix/loi-dang-nhap
git checkout -b update/sua-giao-dien
```

**Quy tắc đặt tên branch:**
- `feature/` — tính năng mới
- `fix/` — sửa lỗi
- `update/` — cập nhật/cải tiến
- Dùng dấu gạch ngang `-`, không dùng space

---

### Bước 2.3: Code và test

Làm việc bình thường trong VS Code. Kiểm tra file đã thay đổi:

```bash
# Xem file nào đã sửa
git status
```

---

### Bước 2.4: Commit thay đổi

```bash
# Thêm tất cả file đã sửa
git add .

# Hoặc thêm từng file cụ thể
git add index.html
git add css/style.css

# Commit với message mô tả rõ ràng
git commit -m "Thêm tính năng giỏ hàng"

# Ví dụ message tốt:
git commit -m "Fix lỗi đăng nhập không hiện toast"
git commit -m "Update giao diện trang chủ - thêm banner"
git commit -m "Thêm chức năng lọc sản phẩm theo giá"
```

**Quy tắc viết commit message:**
- Ngắn gọn, rõ ràng (< 50 ký tự)
- Bắt đầu bằng động từ: Thêm, Sửa, Xóa, Cập nhật
- Viết tiếng Việt có dấu hoặc tiếng Anh đều được

---

### Bước 2.5: Push lên GitHub

```bash
# Push branch lên GitHub
git push origin feature/ten-tinh-nang

# Ví dụ:
git push origin feature/them-gio-hang
```

---

### Bước 2.6: Tạo Pull Request (nếu cần review)

**Cách 1 — Qua GitHub Web:**
1. Vào repo: https://github.com/thanhpvcb2025-cmd/Jitarsmart
2. Sẽ thấy banner **"Compare & pull request"** → Click
3. Điền tiêu đề và mô tả
4. Click **"Create pull request"**
5. Đợi người khác review và approve
6. Click **"Merge pull request"**

**Cách 2 — Merge trực tiếp (nếu không cần review):**
```bash
# Chuyển về main
git checkout main

# Merge branch vào main
git merge feature/ten-tinh-nang

# Push main lên GitHub
git push origin main
```

---

### Bước 2.7: Xóa branch cũ (sau khi merge xong)

```bash
# Xóa branch local
git branch -d feature/ten-tinh-nang

# Xóa branch trên GitHub
git push origin --delete feature/ten-tinh-nang
```

---

## 3. Xử lý Conflict

### Khi nào xảy ra conflict?

Khi 2 người sửa cùng 1 file, cùng 1 dòng → Git không biết giữ code của ai.

### Cách xử lý:

```bash
# 1. Pull code mới nhất
git pull origin main

# Nếu có conflict, Git sẽ báo:
# CONFLICT (content): Merge conflict in index.html
```

**Mở file bị conflict**, sẽ thấy:

```html
<<<<<<< HEAD
<h1>Code của bạn</h1>
=======
<h1>Code của người khác</h1>
>>>>>>> origin/main
```

**Sửa thủ công:**
1. Xóa các dòng `<<<<<<<`, `=======`, `>>>>>>>`
2. Giữ lại code đúng (hoặc kết hợp cả 2)
3. Lưu file

```bash
# 3. Đánh dấu đã giải quyết conflict
git add index.html

# 4. Commit
git commit -m "Giải quyết conflict trong index.html"

# 5. Push
git push origin main
```

---

## 4. Các lệnh Git thường dùng

### Xem trạng thái

```bash
# Xem file nào đã sửa
git status

# Xem chi tiết thay đổi
git diff

# Xem lịch sử commit
git log --oneline
```

### Quản lý branch

```bash
# Xem tất cả branch
git branch -a

# Tạo branch mới
git checkout -b ten-branch

# Chuyển branch
git checkout ten-branch

# Xóa branch
git branch -d ten-branch
```

### Hủy thay đổi

```bash
# Hủy thay đổi 1 file (chưa add)
git checkout -- index.html

# Hủy tất cả thay đổi (chưa add)
git checkout -- .

# Hủy add (đưa file ra khỏi staging)
git reset HEAD index.html

# Hủy commit cuối (giữ lại code)
git reset --soft HEAD~1

# Hủy commit cuối (XÓA code)
git reset --hard HEAD~1
```

### Đồng bộ với GitHub

```bash
# Kéo code mới nhất về
git pull origin main

# Đẩy code lên
git push origin main

# Xem remote URL
git remote -v
```

---

## 5. Best Practices

### ✅ NÊN

1. **Luôn `git pull` trước khi code**
2. **Commit thường xuyên** (mỗi tính năng nhỏ 1 commit)
3. **Viết commit message rõ ràng**
4. **Tạo branch riêng cho mỗi tính năng**
5. **Test kỹ trước khi push**
6. **Pull Request để review code** (nếu làm team lớn)

### ❌ KHÔNG NÊN

1. ❌ Commit trực tiếp vào `main` (nên dùng branch)
2. ❌ Commit message kiểu "update", "fix bug" (quá chung chung)
3. ❌ Push code chưa test
4. ❌ Commit file không cần thiết (node_modules, .env, .DS_Store)
5. ❌ Force push (`git push -f`) trừ khi thật sự cần

---

## 📌 Tóm tắt quy trình nhanh

```bash
# 1. Kéo code mới nhất
git pull origin main

# 2. Tạo branch mới
git checkout -b feature/ten-tinh-nang

# 3. Code xong → add + commit
git add .
git commit -m "Mô tả thay đổi"

# 4. Push lên GitHub
git push origin feature/ten-tinh-nang

# 5. Merge vào main (qua GitHub hoặc local)
git checkout main
git merge feature/ten-tinh-nang
git push origin main

# 6. Xóa branch cũ
git branch -d feature/ten-tinh-nang
```

---

## 🆘 Gặp vấn đề?

### Lỗi: "Permission denied"
→ Chưa được thêm vào Collaborators. Liên hệ owner repo để add.

### Lỗi: "Your branch is behind"
→ Chạy `git pull origin main` để kéo code mới nhất.

### Lỗi: "Merge conflict"
→ Xem mục [3. Xử lý Conflict](#3-xử-lý-conflict)

### Lỗi: "fatal: not a git repository"
→ Chưa clone repo. Chạy `git clone <URL>`

---

## 📚 Tài liệu tham khảo

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**⚡ Jitarsmart Team** — Happy Coding!
