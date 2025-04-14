# 🏞️ Dashboard Cianjur

**Dashboard Cianjur** adalah aplikasi web interaktif yang memberikan informasi terkait wilayah Cianjur, mencakup data statistik, lokasi penting, serta fitur pengelolaan dan pembangunan daerah. Aplikasi ini dibangun menggunakan **React** di frontend dan **Node.js + Express.js** di backend, serta menggunakan **PostgreSQL** sebagai basis data. Frontend aplikasi dideploy menggunakan **Vercel**.

---

## ✨ Fitur Unggulan

- 📊 **Dashboard Interaktif**: Visualisasi data statistik wilayah Cianjur menggunakan ApexCharts.
- 🗺️ **Peta Lokasi**: Menampilkan lokasi-lokasi penting di Cianjur.
- ✍️ **Pengelolaan Data**: Fitur CRUD untuk data wilayah dan statistik.
- 🔐 **Autentikasi Pengguna**: Registrasi dan login menggunakan enkripsi password (bcrypt) & JWT.
- 📱 **Desain Responsif**: Tampilan optimal di berbagai ukuran layar.
- 🚀 **Deployment Otomatis**: Frontend dideploy ke **Vercel**.

---

## 🛠️ Teknologi yang Digunakan

### 🧩 Frontend

- **React** – Library untuk membangun antarmuka pengguna.
- **Tailwind CSS** – Utility-first CSS framework.
- **React Router** – Navigasi antar halaman.
- **Framer Motion** – Animasi interaktif pada elemen UI.
- **ApexCharts** – Visualisasi grafik interaktif.

### ⚙️ Backend

- **Node.js** – Runtime JavaScript.
- **Express.js** – Web framework minimalis.
- **PostgreSQL** – Database relasional.
- **bcrypt** – Untuk mengenkripsi password pengguna.
- **jsonwebtoken (JWT)** – Untuk autentikasi berbasis token.
- **pg (node-postgres)** – Library PostgreSQL untuk Node.js.

---

## 📦 Prasyarat

Pastikan Anda sudah menginstal:

- **Node.js** (versi 14.x atau lebih baru)
- **npm** atau **yarn**
- **PostgreSQL** (sudah terinstal dan berjalan secara lokal)

---

## 🚀 Instalasi & Menjalankan Proyek

### 1. Clone Repositori

```bash
git clone https://github.com/heavoice/dashboard-cianjur.git
cd dashboard-cianjur
```

### Menjalankan Front-end
``` 
npm install
npm start
```

### Menjalankan Back-end
```
cd backend
npm install
npm run dev
```
