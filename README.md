# Osobní web pro terapeutické služby

Jednostránkový, moderní a citlivě navržený web pro nabídku terapeutických a poradenských služeb. Web je vytvořen s důrazem na uklidňující atmosféru, přehlednost, rychlé načítání a přístupnost (a11y).

Připraveno pro okamžitý bezplatný deploy na **Vercel** a propojení s **GitHubem**.

---

## 🌿 Obsah webu

Web je koncipován jako kompaktní **one-page landing page** s těmito sekcemi:

1. **Hlavička (Header)** – Logo, přehledná navigace a rychlé tlačítko pro objednání.
2. **Hero sekce** – Důvěryhodný úvod s hlavní myšlenkou, garancemi bezpečí/diskrétnosti a CTA tlačítky.
3. **O mně** – Představení osobního a empatického přístupu, kvalifikace, etického kodexu a supervize.
4. **Nabízené služby** – 1. Walk and Talk Therapy v Brně (terapie v chůzi a zeleni) a 2. Online terapie (videohovory odkudkoliv), včetně přehledu řešených témat.
5. **Průběh spolupráce** – 3 jasné kroky: od prvního kontaktu přes samotné sezení až po úlevu a nové vhledy.
6. **Ceník** – Transparentní ceny pro obě formy sezení (Walk & Talk i Online) včetně storno podmínek.
7. **Kontakt & Objednání** – Přímé kontakty (telefon, e-mail, lokality v Brně) a interaktivní poptávkový formulář.
8. **Časté dotazy (FAQ)** – Harmonika s odpověďmi na nejčastější obavy klientů (doporučení od lékaře, mlčenlivost, online forma).
9. **Patička** – Box s krizovými linkami bezplatné pomoci (Linka první psychické pomoci 116 123) a autorská práva.

---

## 📁 Struktura projektu

```text
Webovka/
├── index.html       # Sémantická, přístupná struktura stránky
├── styles.css       # Kompletní CSS s přírodní paletou a responzivním layoutem
├── script.js        # Mobilní menu, plynulé posouvání a validace formuláře
├── vercel.json      # Konfigurace pro Vercel (bezpečnostní a cachovací hlavičky)
├── package.json     # Metadata projektu a skripty
├── .gitignore       # Ignorované soubory
└── README.md        # Tato dokumentace
```

---

## 🚀 Jak spustit lokálně

V kořenovém adresáři stačí otevřít soubor `index.html` v libovolném prohlížeči, nebo spustit lokální server:

```bash
npx serve .
```

---

## ☁️ Nasazení na Vercel

### Způsob A: Automaticky přes GitHub (Doporučeno)
1. Tento projekt nahrajeme do vašeho GitHub repozitáře (viz níže).
2. Na [vercel.com](https://vercel.com) se přihlaste svým GitHub účtem.
3. Klikněte na **Add New...** → **Project**.
4. Vyberte váš repozitář a klikněte na **Deploy**.
5. Vercel web okamžitě nasadí a přidělí mu bezplatnou HTTPS doménu (např. `terapie-svec.vercel.app`).
6. Při každém budoucím `git push` se web automaticky znovu přebuduje!

### Způsob B: Pomocí Vercel CLI
Pokud máte nainstalovaný Vercel CLI:
```bash
npx vercel
```
a následujte instrukce v terminálu.

---

## ✏️ Jak upravit údaje a kontakty

Všechny texty můžete snadno editovat v souboru `index.html`:
- **Jméno:** hledejte `Filip Švec` a upravte podle potřeby.
- **Telefon:** hledejte `+420 777 123 456`.
- **E-mail:** hledejte `terapie@filipsvec.cz` (v `index.html` i v `script.js`).
- **Lokalita:** hledejte `Brno a okolí` (parky Lužánky, Kraví hora, Wilsonův les atd.).
- **Ceny:** upravte v sekci `#cenik`.
