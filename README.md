# Warung Bu Bakhtiar - Next.js Project

Website Warung Bu Bakhtiar yang telah dikonversi dari HTML murni ke Next.js dengan TypeScript dan Tailwind CSS.

## 🚀 Fitur-Fitur

✅ **Homepage dengan Carousel** - Slider interaktif menggunakan Keen Slider  
✅ **Halaman Login** - Form login dengan validasi email dan password  
✅ **Halaman Register** - Form registrasi dengan konfirmasi password  
✅ **Navbar Responsif** - Navigasi tetap di atas (fixed)  
✅ **Styling Tailwind CSS** - Design yang menarik dan responsif  
✅ **TypeScript** - Type safety untuk development yang lebih baik  

## 📁 Struktur Project

```
app/
├── components/
│   ├── Navbar.tsx         # Navbar component
│   └── Carousel.tsx       # Carousel component dengan Keen Slider
├── login/
│   └── page.tsx           # Login page
├── register/
│   └── page.tsx           # Register page
├── layout.tsx             # Root layout
├── page.tsx               # Homepage
├── globals.css            # Global styles
└── favicon.ico
```

## 🛠️ Teknologi yang Digunakan

- **Next.js 16.2.9** - React framework untuk production
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Keen Slider** - Library carousel yang responsif
- **ESLint** - Code linting

## 🚀 Cara Menjalankan

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

Development server akan berjalan di `http://localhost:3000`

### 3. Build untuk Production
```bash
npm run build
npm run start
```

## 📄 Halaman-Halaman

### 1. Homepage (`/`)
- Navbar dengan logo dan tombol Login/Register
- Carousel dengan 3 slide
- Section "Tentang Warung Bu Bakhtiar"
- 3 feature cards (Menu Beragam, Cepat & Segar, Harga Terjangkau)

### 2. Login (`/login`)
- Form login dengan field Email dan Password
- Tombol Login
- Link ke halaman Register

### 3. Register (`/register`)
- Form registrasi dengan field Full Name, Email, Password, dan Confirm Password
- Tombol Register
- Link ke halaman Login

## 🎨 Styling

Semua styling menggunakan **Tailwind CSS**:
- Gradient background (hijau ke biru)
- Color scheme: Green dan Blue
- Responsive design untuk semua ukuran layar

## ✨ Konversi dari HTML ke Next.js

Semua fitur dari versi HTML original telah dipertahankan:
- ✅ Carousel/Slider functionality
- ✅ Login form
- ✅ Register form
- ✅ Navbar navigation
- ✅ Styling dan layout

Keuntungan versi Next.js:
- 📦 Struktur lebih modular dengan components
- 🔄 Easy to maintain dan scale
- ⚡ Better performance dengan Next.js optimization
- 🎯 Type safety dengan TypeScript
- 📱 Responsive di semua devices
# warungBuBakhtiar_ForPorto
