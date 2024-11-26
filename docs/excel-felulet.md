---
sidebar_position: 2
id: excel-felulet
title: Az Excel program kezelőfelülete
sidebar_label: Kezelőfelület
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Az Excel program kezelőfelülete

A táblázatkezelő hatékony használatához először ismerkedjünk meg az Excel program kezelőfelületével és fő komponenseivel.

:::tip Tipp
Az Excel 2019 felülete nagyon hasonló az újabb verziókhoz (pl. Microsoft 365), így az itt tanultak más verziókban is használhatók.
:::

## Az Excel indítása és a kezdőképernyő

<Tabs>
  <TabItem value="start" label="Program indítása" default>
    - Start menü → Microsoft Excel 2019
    - Asztali parancsikon használata
    - Windows keresőbe "Excel" beírása
  </TabItem>
  <TabItem value="kezdokepernyo" label="Kezdőképernyő">
    - Üres munkafüzet létrehozása
    - Sablonok böngészése
    - Korábban használt fájlok megnyitása
  </TabItem>
  <TabItem value="gyorsbillentyu" label="Gyorsbillentyűk">
    - CTRL + N: Új munkafüzet
    - CTRL + O: Megnyitás
    - CTRL + S: Mentés
  </TabItem>
</Tabs>

## A munkakörnyezet részei

### 1. Címsor 📋
- Legfelül található
- Tartalmazza:
  - Program neve (Microsoft Excel)
  - Aktuális munkafüzet neve
  - Ablakkezelő gombok

### 2. Gyorselérési eszköztár ⚡
- A címsor alatt vagy mellett
- Gyakran használt parancsok:
  ```
  💾 Mentés | ↩ Visszavonás | ↪ Mégis
  ```
- Testreszabható a gyakran használt műveletekkel

### 3. Menüszalag (Ribbon) 🎯

:::info Fontos
A menüszalag az Excel legfontosabb vezérlőeleme. Tartalmazza az összes szükséges eszközt a hatékony munkavégzéshez.
:::

<details>
<summary><strong>Fájl lap</strong> - Alapműveletek</summary>

- Új munkafüzet létrehozása
- Megnyitás és mentés
- Nyomtatás
- Excel beállítások
</details>

<details>
<summary><strong>Kezdőlap</strong> - Gyakori műveletek</summary>

- Vágólap műveletek
- Betűtípus beállítások
- Igazítás
- Számformátumok
- Cellastílusok
</details>

<details>
<summary><strong>Beszúrás lap</strong> - Objektumok</summary>

- Táblázatok és diagramok
- Képek és alakzatok
- Hivatkozások
</details>

<details>
<summary><strong>További lapok</strong></summary>

- Lapelrendezés: témák, oldalbeállítás
- Képletek: függvények, számítások
- Adatok: importálás, szűrés
- Nézet: megjelenítési beállítások
</details>

### 4. Munkalap 📊
A fő munkaterület felépítése:
```
    A    B    C    D    E
 1  [ ]  [ ]  [ ]  [ ]  [ ]
 2  [ ]  [ ]  [ ]  [ ]  [ ]
 3  [ ]  [ ]  [ ]  [ ]  [ ]
```
- Sorok: számozott (1, 2, 3...)
- Oszlopok: betűk (A, B, C...)
- Cellák: oszlop és sor kereszteződése (pl. A1)
- Cellatartomány: több összefüggő cella (pl. A1:B4)

### 5. Munkalapfülek 📑
- Munkalapok közötti navigáció
- Műveletek:
  - Új lap beszúrása (+)
  - Átnevezés (dupla kattintás)
  - Mozgatás (húzás)

### 6. Állapotsor 📈
- Információk az aktuális műveletről
- Nézetek váltása és nagyítás

## Alapfogalmak és billentyűparancsok

### Fontos fogalmak

| Fogalom | Leírás |
|---------|---------|
| Cella | A táblázat egy "doboza", egyedi címmel (pl. A1) |
| Aktív cella | Az éppen kijelölt, vastag szegéllyel jelölt cella |
| Cellatartomány | Több összefüggő cella (pl. A1:B4) |
| Munkafüzet | Az Excel fájl (.xlsx) |

### Gyakori billentyűparancsok ⌨️

:::tip Pro tipp
A billentyűparancsok használata jelentősen gyorsítja a munkát!
:::

| Művelet | Windows | Mac |
|---------|----------|-----|
| Mentés | CTRL + S | ⌘ + S |
| Másolás | CTRL + C | ⌘ + C |
| Beillesztés | CTRL + V | ⌘ + V |
| Visszavonás | CTRL + Z | ⌘ + Z |
| Mindent kijelöl | CTRL + A | ⌘ + A |
| Cellatartalom szerkesztése | F2 | F2 |

## Gyakorlati tippek 💡

1. **Gyors navigáció**
   - CTRL + nyilak: Gyors mozgás a táblázatban
   - CTRL + Home: Ugrás a táblázat elejére (A1)
   - CTRL + End: Ugrás az utolsó használt cellához

2. **Hatékony kijelölés**
   - Shift + nyilak: Több cella kijelölése
   - CTRL + Shift + nyilak: Teljes adatterület kijelölése
   - CTRL + Space: Teljes oszlop kijelölése
   - Shift + Space: Teljes sor kijelölése

3. **Munkalapok kezelése**
   - CTRL + PageUp/PageDown: Váltás munkalapok között
   - Shift + F11: Új munkalap beszúrása

