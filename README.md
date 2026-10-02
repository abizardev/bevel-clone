# Bevel — landing page clone

Struktur ulang dari export Webflow `www.bevel.health`, plus perbaikan
responsif mobile. Sumber acuan token ada di [DESIGN.md](DESIGN.md),
peta elemen hero di [HERO-MOCKUP.md](HERO-MOCKUP.md).

**Deploy:** <https://site-khaki-six-83.vercel.app>
**Vercel Root Directory:** `site`

## Struktur

```
site/            # ← yang dideploy (index.html + assets/)
  index.html
  vercel.json    # cleanUrls + cache immutable untuk /assets/*
  assets/
    css/         # webflow-page/shared + tokens.css + main.css + overrides.css
    js/          # main.js + vendor/ (webflow, gsap, scrolltrigger, lenis)
    images/      # logos, members, devices, features, icons, backgrounds, ui
    videos/
    fonts/

src/             # sumber untuk yang di-build ke site/
  partials/sections/hero.html
  styles/overrides.css          ← SUMBER semua fix hero + mobile
  styles/sections/hero.css      # referensi/peta, tidak di-link

tools/build.py   # npm run css | hero | build

_raw/            # arsip mentah hasil export Webflow (145 file). Jangan diedit.
www.bevel.health.zip  # zip export asli
```

## Build

`site/` adalah hasil jadi — tidak perlu build untuk deploy. Tapi kalau mau
mengubah apa pun di `src/`:

```bash
npm run css     # salin src/styles/overrides.css → site/assets/css/overrides.css
npm run hero    # validasi hero.html cocok dengan section hero di index.html
npm run build   # css + hero + cek aset & referensi lokal
```

`npm run build` gagal kalau ada referensi aset lokal yang hilang. Jalankan
setiap kali selesai ubah `src/`, lalu commit `site/` bareng `src/`.

## Isi overrides.css

Semua perbaikan tampilan ada di satu file, diurut per blok:

| Blok | Isi |
| --- | --- |
| `:root` / `.hero_bg-2` | gradien hero, `--hero-bg-top` sebagai pengatur jarak headline |
| gate visibility | menetralkan `visibility:hidden` Webflow yang tidak pernah ter-open |
| A–H | adaptasi mobile 320–767px: tipografi fluid, tap target 44px, drawer nav, section stacking, banner/QR |
| I | marquee "Join over 2.5 million" jalan kanan → kiri (loop mulus, dua baris identik) |
| batch mobile | headline hero, strip foto Crafted with Care (scroll-snap + kolom staggered), ring logo Connect your health, testimoni geser |

## Catatan aset

- Semua path di `index.html` relatif ke `assets/`, jadi bisa dibuka via
  `file://` juga (kecuali video/lazy asset butuh HTTP).
- 14 icon `health-record-icon-*` awalnya menunjuk CDN yang tidak ada di arsip
  lokal, sudah dialihkan ke aset lokal supaya ring logo terisi penuh.
- Beberapa URL CDN lain (OG image, 9 video kecil `_smaller.mp4`, `data-nerd`)
  memang tidak ada di zip dan masih butuh internet.