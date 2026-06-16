# Checken — Hemsida

## Ladda upp bilder till GitHub (viktigt!)

Bilderna finns inte automatiskt på GitHub — du behöver ladda upp dem manuellt.

**Steg för steg:**
1. Gå till ditt GitHub-repo
2. Klicka på mappen `images/`
3. Klicka på "Add file" → "Upload files"
4. Ladda upp dessa filer med **exakt dessa namn** (skiftlägeskänsliga!):

| Filnamn | Används på |
|---|---|
| `checken-closeup-1.jpeg` | Steg 1 (hur det funkar) |
| `checken-closeup-hand.jpeg` | Steg 3 (hur det funkar) |
| `checken-closeup-hand-2.jpeg` | Galleri |
| `checken-closeup-kamera.jpeg` | Shop + galleri |
| `checken-distans-overview.jpeg` | Galleri |
| `checken-grundarna.jpeg` | Om oss |
| `checken-in-action.jpeg` | Hero + steg 2 |
| `og-image.jpg` | Delning på sociala medier (skapa en 1200×630px bild) |
| `favicon.svg` | Fliken i webbläsaren |

5. Klicka "Commit changes" — bilderna är live direkt!

---

## Filstruktur

```
checken/
├── index.html              ← STARTSIDAN — redigera här
├── robots.txt              ← SEO: vad Google får indexera
├── sitemap.xml             ← SEO: karta över webbplatsen
├── css/
│   └── style.css           ← ALL DESIGN — färger, typsnitt, layout
├── js/
│   └── main.js             ← Cookies, animationer, navbar
├── images/                 ← Lägg alla bilder här
│   ├── checken-closeup-1.jpeg
│   ├── checken-closeup-hand.jpeg
│   ├── checken-closeup-hand-2.jpeg
│   ├── checken-closeup-kamera.jpeg
│   ├── checken-distans-overview.jpeg
│   ├── checken-grundarna.jpeg
│   └── checken-in-action.jpeg
└── pages/
    ├── kontakt.html        ← Kontaktsida
    ├── integritetspolicy.html
    ├── cookiepolicy.html
    └── kopvillkor.html
```

---

## Vanliga ändringar

### Ändra färger
Öppna `css/style.css` och scrolla till toppen — alla färger finns i `:root { }`:
```css
--color-bg:     #1A1008;   /* Bakgrundsfärg */
--color-text:   #F5F0E8;   /* Textfärg */
--color-accent: #C9A87C;   /* Accentfärg (guld) */
```

### Ändra texter på startsidan
Öppna `index.html` — leta efter kommentarer som börjar med `<!-- ÄNDRA:` för att hitta rätt ställe.

### Koppla Google Analytics
1. Skapa ett konto på [analytics.google.com](https://analytics.google.com)
2. Skapa en ny Property och välj "Web"
3. Kopiera ditt Measurement ID (ser ut som `G-XXXXXXXXXX`)
4. Byt ut `G-XXXXXXXXXX` på **tre** ställen:
   - `index.html` (rad ~50 och ~55)
   - `pages/kontakt.html` (rad ~60 och ~65)

### Koppla Kwikk-shoppen
1. Logga in på Kwikk och hämta embed-koden
2. Öppna `index.html`
3. Hitta `<div id="kwikk-embed">`
4. Radera allt innehåll inuti och klistra in Kwikk-koden

### Koppla kontaktformuläret
1. Skapa ett konto på [formspree.io](https://formspree.io) (gratis för upp till 50 mejl/månad)
2. Skapa ett nytt formulär och kopiera action-URL:en
3. Öppna `pages/kontakt.html`
4. Byt ut `action="#"` mot er Formspree-URL, t.ex. `action="https://formspree.io/f/abc123"`
5. Ta bort `e.preventDefault()` i script-taggen längst ner

### Uppdatera sitemap efter innehållsändringar
Öppna `sitemap.xml` och uppdatera `<lastmod>`-datumen.

### Domän och GitHub Pages
1. Ladda upp alla filer till ett GitHub-repo
2. Gå till Settings → Pages → välj `main`-branchen
3. Lägg till er domän under "Custom domain"
4. Uppdatera alla `https://www.checken.se`-referenser i `index.html`, `sitemap.xml` och policy-sidorna

---

## SEO-checklista (gör detta när domänen är klar)

- [ ] Byt ut alla `https://www.checken.se` mot er riktiga domän
- [ ] Lägg till en riktig favicon (`images/favicon.svg`)
- [ ] Skapa en OG-bild (`images/og-image.jpg`, 1200×630px) för delning på sociala medier
- [ ] Koppla Google Analytics (se ovan)
- [ ] Skicka in `sitemap.xml` till Google Search Console
- [ ] Verifiera sidan i Google Search Console
- [ ] Fyll i org.nr och rätt e-postadresser på alla policy-sidor

---

## Filer att INTE ändra om du är osäker
- `robots.txt` — styr vad Google indexerar
- Strukturerad data (`<script type="application/ld+json">`) i `index.html` — viktigt för SEO
