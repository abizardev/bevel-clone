"""Bevel2 build — setara `npm run css` / `npm run build` (lihat package.json).

  python3 tools/build.py css    -> salin src/styles/overrides.css ke site/assets/css/
                                 + validasi jangkar baris hero.css (HERO-MOCKUP.md)
  python3 tools/build.py hero   -> validasi hero.html == section hero di site/index.html
  python3 tools/build.py        -> css + hero + cek aset hero + cek referensi lokal
"""
import os, re, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

# Dokumen -> path nyata (HERO-MOCKUP.md memakai images/ & video/, build memakai assets/)
DOC_TO_REAL = {
    "images/phone-2.avif": "site/assets/images/devices/phone-2.avif",
    "video/part1-new.mp4": "site/assets/videos/part1-new.mp4",
    "images/watch-wo-mask-p-800.avif": "site/assets/images/devices/watch-wo-mask-p-800.avif",
    "images/watch-poster.avif": "site/assets/images/devices/watch-poster.avif",
}
CSS_ANCHORS = {30: ".hero_watch-ui {", 42: ".hero_phone {", 53: ".hero_watch {",
               64: ".hero_phone-container {", 137: ".hero_phone-section {", 169: ".hero_phone-ui {"}
HTML_ANCHORS = {38: "hero_phone-section", 39: "hero_phone-container", 40: "hero_phone",
                41: "hero_phone-ui", 47: "hero_watch", 49: "hero_watch-ui"}
HTML_LINK = '<link href="assets/css/overrides.css" rel="stylesheet" type="text/css" />'
fails = []

def check(cond, msg):
    print(("  OK  " if cond else "  GAGAL ") + msg)
    if not cond:
        fails.append(msg)
    return cond

def norm(s):
    return re.sub(r"\s+", " ", s).strip()

def cmd_css():
    print("== css: overrides -> site ==")
    src, dst = "src/styles/overrides.css", "site/assets/css/overrides.css"
    check(os.path.exists(src), f"sumber ada: {src}")
    if os.path.exists(src):
        shutil.copy2(src, dst)
        check(os.path.exists(dst), f"tersalin: {dst}")
        html = open("site/index.html", encoding="utf-8").read()
        if HTML_LINK not in html:
            html = html.replace(
                '<link href="assets/css/main.css" rel="stylesheet" type="text/css" />',
                '<link href="assets/css/main.css" rel="stylesheet" type="text/css" />\n    ' + HTML_LINK)
            open("site/index.html", "w", encoding="utf-8").write(html)
            print("  OK   link overrides.css ditambahkan ke index.html")
        else:
            print("  OK   link overrides.css sudah ada di index.html")
    print("== css: validasi jangkar hero.css (HERO-MOCKUP.md) ==")
    lines = open("src/styles/sections/hero.css", encoding="utf-8").read().split("\n")
    for ln, exp in CSS_ANCHORS.items():
        check(lines[ln - 1] == exp, f"hero.css baris {ln} == {exp}")

def hero_section_from_index():
    html = open("site/index.html", encoding="utf-8").read()
    a = html.find('<section class="hero_section')
    b = html.find('<section class="works-with')
    return html[a:b]

def cmd_hero():
    print("== hero: validasi partial vs index.html ==")
    partial = open("src/partials/sections/hero.html", encoding="utf-8").read()
    check(norm(partial) == norm(hero_section_from_index()), "hero.html identik dengan section hero di index.html")
    lines = partial.split("\n")
    for ln, cls in HTML_ANCHORS.items():
        check(cls in lines[ln - 1], f"hero.html baris {ln} memuat .{cls}")

def cmd_assets():
    print("== aset hero (dokumen -> nyata) ==")
    for doc, real in DOC_TO_REAL.items():
        check(os.path.exists(real), f"{doc} -> {real}")
    print("== referensi lokal index.html ==")
    html = open("site/index.html", encoding="utf-8").read()
    refs = re.findall(r'''(?:src|href)="([^"]+)"''', html)
    local = [r for r in refs if r.startswith("assets/") or r in ("favicon.png",)]
    missing = [r for r in local if not os.path.exists(os.path.join("site", r.split("?")[0].split("#")[0]))]
    check(not missing, f"{len(local)} referensi lokal, {len(missing)} hilang" + (f": {missing[:5]}" if missing else ""))

if __name__ == "__main__":
    arg = sys.argv[1] if len(sys.argv) > 1 else "build"
    if arg == "css":
        cmd_css()
    elif arg == "hero":
        cmd_hero()
    else:
        cmd_css(); cmd_hero(); cmd_assets()
    print("SELESAI: OK" if not fails else f"SELESAI: {len(fails)} GAGAL")
    sys.exit(1 if fails else 0)
