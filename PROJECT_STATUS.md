# Checken – projektstatus

_Senast uppdaterad: 2026-11-09_

## Läge
Startsida + kontakt + tre policysidor + 404. Live på checken.se via GitHub Pages (www redirectar till apex).

## Beslut
- Domän: **checken.se (utan www)** är kanonisk. Allt (canonical, OG, sitemap, robots, JSON-LD) pekar dit.
- Ingen Google Analytics, ingen Search Console och ingen cookie-banner tills vidare (ingen tillgång till domäninställningar/mät-ID). Policysidorna säger detta.
- Kontakt via förifyllda `mailto:`-länkar (ingen formulärtjänst).
- Bolagsform: enskild firma, Stockholm.
- Frakten är gratis (står i produktkortet, köpvillkor och produktdata).
- Policysidorna är `noindex` och ligger inte i sitemap. Kontakt är indexerbar.
- Delningsbild (`og-image.jpg`) visar enbart logotypen.

## Öppet / behöver ni fylla i
- [ ] **Organisationsnummer** saknas på policysidorna (enskild firma ska kunna identifieras i köpvillkor/integritetspolicy). Lägg till under "Företagsinformation" / "Personuppgiftsansvarig".
- [ ] **Leveranstid** ("2–5 arbetsdagar") i `pages/kopvillkor.html` är inte verifierad mot Kwikk. Bekräfta eller ändra.
- [ ] **Köpvillkor i övrigt** (ångerrätt, retur, reklamation) bör stämmas av mot Kwikks villkor.
- [ ] Produktdatan i JSON-LD anger `InStock`. Ändra om lagerstatus ändras.
- [ ] Kontrollera att Kwikk-knappen laddar på live-sidan (kunde inte testas i utvecklingsmiljön).

## Senare (när möjligt)
- Koppla Google Search Console (kräver DNS- eller filverifiering) och skicka in `sitemap.xml`.
- Google Analytics eller en cookiefri statistiktjänst. Då behövs även cookie-samtycke (om GA) och uppdaterade policys.
- Kontrollera delningsbilden med Facebooks Sharing Debugger efter första live-publiceringen.
