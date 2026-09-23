# Vietnam Sports Daily

Nền tảng báo thể thao điện tử xây bằng Next.js, có sẵn giao diện trang chủ, trang bài viết và CMS khởi tạo.

## 1. Chạy trên máy

Cài Node.js 20+.

```bash
npm install
npm run dev
```

Mở http://localhost:3000

CMS: http://localhost:3000/admin

## 2. Kết nối Supabase

Tạo project trên Supabase, chạy `supabase/schema.sql` trong SQL Editor.

Copy `.env.example` thành `.env.local` và điền:

NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

## 3. Đưa lên Vercel

Đẩy thư mục này lên GitHub, sau đó import repository vào Vercel.
Trong Vercel > Settings > Environment Variables, thêm 2 biến Supabase ở trên rồi Deploy.

## 4. Domain

Sau khi deploy, vào Vercel > Domains để gắn tên miền của bạn.

## Lưu ý

Đây là bản nền tảng đầu tiên. Trước khi vận hành như một tòa soạn thật cần bổ sung đăng nhập CMS, phân quyền biên tập viên, upload ảnh/video, SEO, sitemap, analytics, quảng cáo và các chính sách pháp lý phù hợp.
