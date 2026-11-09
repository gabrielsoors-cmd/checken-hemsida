# Checken – hemsida

Statisk sida (HTML/CSS/JS) som ligger på GitHub Pages med domänen **checken.se** (`CNAME`). Ingen build behövs: ändra en fil, commita, så är det live inom någon minut.

## Struktur

| Sökväg | Innehåll |
|---|---|
| `index.html` | Startsidan (hero, så funkar det, köp, om oss, galleri, CTA) |
| `pages/` | Kontakt, integritetspolicy, cookiepolicy, köpvillkor |
| `404.html` | Egen felsida |
| `css/style.css` | All styling. Färger och typsnitt ligger överst i `:root` |
| `js/main.js` | Mobilmeny, scroll-animationer, årtal i sidfot |
| `images/` | Foton, logotyper (`logo-*.svg`), favicon, `og-image.jpg`, appikoner |
| `fonts/` | MinervaModern (rubriker) och Courier Prime (brödtext) |
| `robots.txt`, `sitemap.xml`, `site.webmanifest` | SEO / PWA-metadata |

## Varumärke

- Röd `#7a2d25`, svart `#231f20`, cream `#f8f4ed`
- Rubriker: MinervaModern. Brödtext: Courier Prime.
- Perforeringslinjen (`.perforation`) är sidans signatur.

## Vanliga ändringar

- **Text:** redigera direkt i `index.html` eller filerna i `pages/`.
- **Webbshop:** Kwikk-skriptet ligger i produktkortet i `#kop` på startsidan. Pris och "7 kr / flört" är vanlig text bredvid.
- **Ny sida:** kopiera `pages/kontakt.html`, byt innehåll, `title`, `description` och `canonical`, och lägg till sidan i `sitemap.xml`.
- **Efter större ändringar:** uppdatera `lastmod` i `sitemap.xml`.

Status, beslut och nästa steg: se [`PROJECT_STATUS.md`](PROJECT_STATUS.md).
