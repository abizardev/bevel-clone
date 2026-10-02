# Peta Mockup Hero

Di mana letak mockup **phone** dan **jam tangan** di bagian atas halaman (hero).

## Nama elemennya

| Nama | Deskripsi |
|---|---|
| `.hero_phone-section` | container mockup — area tempat phone & jam berdiri |
| `.hero_phone-container` | container phone — menggeser phone ke kiri |
| `.hero_phone` | bodi phone — gambar bodi hp |
| `.hero_phone-ui` | layar phone — video/isi layar |
| `.hero_watch` | bodi jam — gambar bodi jam tangan |
| `.hero_watch-ui` | layar jam — video/isi layar jam |

## Di file mana

**HTML** — `src/partials/sections/hero.html`

| Baris | Elemen |
|---|---|
| 38 | `.hero_phone-section` |
| 39 | `.hero_phone-container` |
| 40 | `.hero_phone` |
| 41 | `.hero_phone-ui` |
| 47 | `.hero_watch` |
| 49 | `.hero_watch-ui` |

**CSS** — `src/styles/sections/hero.css`

| Baris | Elemen |
|---|---|
| 137 | `.hero_phone-section` |
| 64 | `.hero_phone-container` |
| 42 | `.hero_phone` |
| 169 | `.hero_phone-ui` |
| 53 | `.hero_watch` |
| 30 | `.hero_watch-ui` |

## Susunan (dari luar ke dalam)

```
.hero_phone-section
├── .hero_phone-container
│   └── .hero_phone
│       └── .hero_phone-ui
└── .hero_watch
    └── .hero_watch-ui
```

## Latar (background) — di mana

Latar gradien biru hero bernama **`.hero_bg-2`**.

Markup-nya ada di `src/partials/sections/hero.html` (tag `<div class="hero_bg-2">`).
Stylenya di `src/styles/overrides.css` — bukan di `hero.css`.

Catatan: aturan ini tidak ada di CSS asli Webflow, itu tambahan kita waktu
memperbaiki posisi gradien supaya tidak muncul di bawah headline.

## Gambar/Video yang dipakai

| Elemen | File aset |
|---|---|
| Bodi phone | `images/phone-2.avif` |
| Layar phone | `video/part1-new.mp4` |
| Bodi jam | `images/watch-wo-mask-p-800.avif` |
| Layar jam | `images/watch-poster.avif` |
| Latar gradien | CSS gradient, bukan gambar |

Semua aset ada di `dist/` setelah `npm run build`.

## Cara cepat diubah

| Ingin ubah | Buka |
|---|---|
| Posisi jam | `.hero_watch` → `top`, `right` |
| Ukuran jam | `.hero_watch` → `width` |
| Geser phone | `.hero_phone-container` → `transform` |
| Gradien latar | `.hero_bg-2` → `background-image` |
| Title jaraknya | `.hero_bg-2` → `top` |

> Penting: `src/styles/sections/hero.css` di-generate ulang tiap `npm run css`.
> Kalau mau perubahan permanen, taruh di `src/styles/overrides.css`.