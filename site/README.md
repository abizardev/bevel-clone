# Bevel — Structured Site (bevel2/site)

Hasil rapihan dari `www.bevel.health.zip` (Webflow export) mengacu ke `DESIGN.md`.

## Masalah awal (tidak beraturan)
Zip hasil scrape berisi 145 file dengan folder bernama domain:
```
_raw/
  cdn.prod.website-files.com/64dcc.../69ebf72..._nama.avif
  cdn.prod.website-files.com/69d570.../...
  s3.amazonaws.com/webflow-prod-assets/...
  d3e54v103j8qbb.cloudfront.net/...
  unpkg.com/lenis@1.3.23/packages/core/src/*.ts
  www.bevel.health/index.html (305KB, 213 refs absolut ke CDN)
  www.bevel.health/nvhc.../xHD6...html (halaman verifikasi, tidak dipakai)
```
Nama file berprefix hash 24-hex (`69ebf72bc357..._`), spasi (`apple watch.svg`),
duplikasi `-avif.avif`, dan varian responsif (`-p-500`, `-p-800`) tercampur.

## Struktur baru (clean)
```
site/
  index.html              # 291KB, semua path relatif assets/...
  favicon.png
  asset-manifest.json     # mapping URL CDN -> file lokal + sisa eksternal
  assets/
    css/
      webflow-shared.min.css   # dari bevel-app.webflow.shared...
      webflow-page.min.css     # dari bevel-app.webflow.69ebf...opt...
      tokens.css               # design tokens dari DESIGN.md
      main.css                 # override tipis (ritme 80px, feature-card, btn)
    js/
      vendor/
        jquery-3.5.1.min.js
        gsap.min.js
        scrolltrigger.min.js
        lenis.min.js
        webflow-schunk.min.js
        webflow.min.js
        gtm.js
      main.js                  # init Lenis + year + log
    images/
      logos/      # oura, garmin, amazfit, apple-watch, google-health
      members/    # member-photos-01..04
      devices/    # phone-*, watch-*, phone-frame, phone-shape
      features/   # intelligence_*, strain, sleep, recovery, nutrition, dll
      icons/      # health-record-icon-*, dot, sleep-fg, privacy-lock
      backgrounds/# crafted-bg-*, clouds, footer-cta
      ui/         # home-*, activity-*, biology-*, qr-code, awards, hipaa, soc2
    videos/       # hero-tunnel, intelligence-bg, phone/mobile parts (kebab-case)
    fonts/
      inter-600.woff2
```

Aturan rename:
- Hapus prefix hash `^[0-9a-f]{20,}_`, hapus `-avif` ganda, lowercase, spasi/underscore -> `-`.
- CSS/JS vendor diberi nama pendek (`webflow.min.js`, `jquery-3.5.1.min.js`).
- `_raw/` TIDAK dihapus — tetap sebagai arsip. Jangan edit `_raw`.

## DESIGN.md → implementasi
- `tokens.css` berisi semua CSS custom properties dari DESIGN.md
  (Paper White `#ffffff`, Charcoal `#1f2025`, Ink `#222326`, Cloud `#ebf0f8`,
  Body Gray `#747679`, Gold `#ffca00`, Coral `#ffab94`, Green `#31ce01`,
  Blue `#415eee`, Lilac `#b9a6ff`, Hero gradient, spacing 8–160, radius, shadow).
- `main.css` contoh pakai: `.btn-download`, `.feature-card`, section gap 80px.
- `index.html` sudah inject `<link tokens.css/main.css>` + `<script main.js>`.

## Status asset
- 147 referensi lokal di `index.html` → **0 missing** (terverifikasi).
- 27 URL tetap CDN (file memang tidak ada di zip, jadi fallback tidak mungkin):
  - `open graph@3x.jpg`, `Webclip_Apple Touch.png` (meta/OG)
  - 14 icons: `health-record-icon-01,03,06,07,08,10,22,24,26,27,29,30,34,37`, `data-nerd`, `app-icon`
  - 9 video kecil `_smaller.mp4` (`ActivityStatus`, `StrengthBuilder`, `Widgets`, `Hydration`, `SmartAlarm`, `Caffeine`, `CycleTracking`, `Journal3`, `BioAge3`)
  - Lihat `asset-manifest.json → still_external` untuk daftar lengkap.
- Varian responsif `-p-500` yang tidak ada di zip di-fallback ke file `-p-800`/asli lokal.

## Cara jalankan
```bash
cd /root/work/bevel2/site
python3 -m http.server 8000
# buka http://localhost:8000
```
Tidak perlu build step. Semua path relatif, bisa dibuka via file:// juga
(kecuali video/CDN eksternal butuh internet).

## File yang TIDAK dibawa
- `unpkg.com/.../packages/core/src/*.ts` (source Lenis, hanya `dist/lenis.min.js` dipakai)
- `package.json` lenis, `www.googletagmanager.com/gtm.js` tetap di vendor sebagai arsip
- Halaman verifikasi `nvhc.../xHD6...html` (hanya untuk verifikasi Webflow)

## Struktur `src/` hero (lihat `HERO-MOCKUP.md`)
```
src/partials/sections/hero.html   # section hero (120 baris, mockup di 38-41/47/49)
src/styles/sections/hero.css      # ekstrak Webflow, jangkar di 30/42/53/64/137/169
src/styles/overrides.css          # SUMBER fix permanen -> build ke assets/css/overrides.css
tools/build.py                    # `npm run css|hero|build` (lihat package.json)
```
- `hero.css` tidak di-link (referensi/peta saja, live tetap dari webflow CSS).
- `overrides.css` di-link PALING AKHIR — berisi fix `.hero_bg-2` (gradien di
  bawah headline via `--hero-bg-top`) + pengaman z-index H1 + force-show.
- Jalankan `python3 tools/build.py` (atau `npm run build`) tiap ubah `src/`.
