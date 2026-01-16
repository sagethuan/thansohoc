# Thần Số Học - Landing Page

🔮 Website landing page Thần Số Học (Numerology) với tính năng tính số chủ đạo, năm cá nhân và đặt lịch tư vấn.

## Tính năng

- ✅ **Tính số chủ đạo (Life Path)** - Giữ master numbers 11/22/33
- ✅ **Tính năm cá nhân** - Theo năm hiện tại
- ✅ **Giải nghĩa chi tiết** - Điểm mạnh, thách thức, lời khuyên
- ✅ **Form đặt lịch tư vấn** - Với validation
- ✅ **UI hiện đại** - Glassmorphism, animations, responsive
- ✅ **Playwright tests** - Screenshots & demo video

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Cài đặt Playwright browsers (cho testing)
npx playwright install
```

## Chạy ứng dụng

```bash
# Development mode
npm run dev

# Build production
npm run build

# Start production server
npm start
```

Mở trình duyệt: [http://localhost:3000](http://localhost:3000)

## Testing

```bash
# Chạy tất cả tests
npm test

# Chạy tests với UI
npm run test:headed

# Chạy test cụ thể
npx playwright test e2e/numerology.spec.ts
```

Sau khi chạy test, các artifacts sẽ được lưu trong thư mục `artifacts/`:
- `desktop-full.png` - Screenshot desktop (1440×900)
- `mobile-full.png` - Screenshot mobile (iPhone 12)
- `demo.webm` - Video demo flow

## Cấu trúc thư mục

```
thần số học/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles + Tailwind
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main page
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── ValueCards.tsx   # Giá trị bạn nhận được
│   │   ├── IndexCards.tsx   # Các chỉ số nổi bật
│   │   ├── Calculator.tsx   # Công cụ tính + kết quả
│   │   ├── BookingForm.tsx  # Form đặt lịch
│   │   ├── Footer.tsx       # Footer
│   │   └── BackToTop.tsx    # Nút về đầu trang
│   └── lib/
│       ├── numerology.ts    # Logic tính toán
│       └── numerologyMeanings.ts  # Data giải nghĩa
├── e2e/
│   └── numerology.spec.ts   # Playwright tests
├── artifacts/               # Screenshots & videos
├── tailwind.config.ts       # Tailwind config
├── playwright.config.ts     # Playwright config
└── package.json
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Testing:** Playwright

## Palette màu

- **Cream:** `#FEFCF3` - Màu chữ sáng
- **Lavender:** `#A78BDB` - Accent tím
- **Gold:** `#D4A853` - Accent vàng kim

---

**Thiết kế bởi Sage Thuần** 💜
# thansohoc
