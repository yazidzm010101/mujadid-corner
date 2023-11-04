---
title: FuzzySearch Commerce
date: "2023-10-06T10:45:01.605Z"
description: Implementasi fuzzy search pada katalog produk menggunakan interpolasi linear
preview: "/images/project-fuzzysearch-commerce.png"
icon: "/images/project-icon-fuzzysearch-commerce.png"
demoURL: "https://yazidzm010101.github.io/fuzzysearch-commerce/"
tags:
  - Vite
  - React.js
  - ChakraUI
  - ReactQuery
---

Aplikasi ini merupakan reimplementasi dari topik yang saya angkat pada tugas akhir pendidikan S1 Teknik Informatika pada tahun 2021 di Gunadarma. Dimana pada saat itu saya menerapkan pencarian fuzzy pada sistem pendukung keputusan pemilihan tablet grafik menggunakan Android Studio (java), Express.js, MongoDB, React.js (Dashboard administrator), Puppeteer.js, Gitlab CI/CD, ParseHub dan Heroku untuk mengakomodir kebutuhan sebagai berikut:

- Dapat mengkonsumsi data secara periodik menggunakan scheduler gitlab CI/CD dari ParseHub Job
- Dapat memancing eksekusi web-scarping ParseHub menggunakan scheduler gitlab CI/CD
- Implementasi halaman administrator untuk mengelola:
- Master tablet grafik
- Master kriteria Fuzzy
- Master API Parsehub
- Implementasi aplikasi Android untuk:
  - Melihat daftar katalog tablet grafik
  - Mencari tablet grafik berdasarkan krtieria Fuzzy

Secara scope implementasi ulang proyek ini cukup memakan waktu dan sumber daya. Sebelum proyek ini dibuat saya sedang tertarik sekali dengan teknologi vite dan ChakraUI. Jadi saat itu saya berniat untuk mengimplementasi kembali inti utama dari proyek ini yaitu pencarian Fuzzy dimana scopenya dipersempit menjadi sebagai berikut:

- Front-end diimplementasi menggunakan React.js + Chakra.UI
- Master data cukup digenerate menggunakan fungsi faker/dummy
- Kriteria pencarian dapat di-adjust oleh pengguna (tidak dihardcode dari administrator) berupa input range atau slider
- User juga dapat melihat hasil perhitungan Fuzzy dalam bentuk chart (menggunakan Chart.js)
- Sementara tidak perlu database server karena aplikasi ini hanya berupa prototype implementasi existing core logic
