# Výsledky skenu digitální vyspělosti pro {% $organisationName %}

**Než se podíváte na samotné výsledky, pojďte si rychle připomenout, jak sken funguje.**

Sken vychází z předpokladu, že lidé v organizaci dosahují **špičkových výsledků** pouze pokud se vzájemně doplňují a podporují **3 pilíře: Kultura, Dovednosti a Nástroje**.

{% image src="https://assets.cesko.digital/11f81f04.jpg" width=2309 height=1732 alt="" /%}

**Sken funguje na principu _benchmarkování_**: nabízí výroky, které popisují to, jak může organizace fungovat. Úkolem vyplňující osoby je **posoudit, nakolik nabízený popis odpovídá reálnému fungování skenované organizace**.

Odpovědi se zaznamenávají jako hodnoty na škále 1–5, kdy 1= výrok vůbec neodpovídá a 5 = výrok naprosto odpovídá. Jinými slovy, **čím vyšší hodnota, tím blíže má aktuální stav organizace k cílovému stavu popsanému ve výroku**.

V rámci vyhodnocení jsou pak hodnoty **interpretovány následovně**:

1. Nevyužitý potenciál
2. Dobrý začátek
3. Solidní základ
4. Vynikající praxe
5. Inspirativní přístup

Sken mapuje **4 klíčové oblasti digitální vyspělosti**:

- Komunikace & Spolupráce
- Procesy & Automatizace
- Bezpečnost & Flexibilita
- Učení & Rozvoj

**V každé oblasti sken mapuje 5 klíčových témat. Každé téma vždy posuzuje optikou všech 3 pilířů.** Výstupem skenu je tedy 60 výroků ohodnocených na škále 1–5.

Výsledky mají podobu grafů a jsou rozděleny na 3 části podle zobrazené míry detailu:

1. Pohled na celkovou úroveň digitální vyspělosti organizace
2. Srovnání úrovně klíčových oblastí
3. Srovnání úrovně klíčových témat v rámci jednotlivých oblastí

**Cílem skenu je posoudit, nakolik jsou pilíře Kultura, Dovednosti a Nástroje v rovnováze, tedy jestli dosahují stejné úrovně v rámci organizace jako celku, v rámci klíčových oblastí a v rámci klíčových témat.**

Při čtení grafů se snažte identifikovat oblasti a témata, ve kterých existuje největší nerovnováha mezi jednotlivými pilíři. Díky tomu budete schopni posoudit, na co přesně se při zvyšování digitální vyspělosti vaší organizace zaměřit.

A teď už se pojďme podívat, jak je na tom vaše organizace. **Doporučujeme vzít si k ruce papír a tužku, abyste si rovnou mohli zapisovat svá zjištění.**

## Část první: Celková úroveň digitální vyspělosti

{% score_distribution_chart caption="1. Celková úroveň digitální vyspělosti" data=$data /%}

Graf č. 1 ukazuje, jak často skenovaná organizace dosahuje jednotlivých úrovní.

- _Nevyužitý potenciál_ ukazuje počet odpovědí s hodnotou 1 („Vůbec neodpovídá“).
- _Inspirativní přístup_ ukazuje počet odpovědí s hodnotou 5 („Naprosto odpovídá“).
- Ostatní sloupce ukazují počty odpovědí s hodnotami 2, 3, 4.

**V ideálním případě by všechny odpovědi měly spadat do kategorie Solidní základ a výše.**

- Pokud převažují odpovědi typu Nevyužitý potenciál a Dobrý začátek, rovnou lze konstatovat, že zvyšování digitální vyspělosti by se mělo stát hlavní prioritou skenované organizace.
- Pokud převažují odpovědi typu Solidní základ a výše, je třeba se nejprve podívat na další grafy.

{% axis_score_chart caption="2. Srovnání celkové úrovně pilířů" data=$data /%}

{% stacked_axis_score_chart caption="3. Vliv pilířů na celkovou úroveň digitální vyspělosti" data=$data /%}

## Část druhá: Úroveň pilířů v jednotlivých oblastech

{% score_over_area_chart caption="4. Srovnání celkové úrovně klíčových oblastí" data=$data /%}

Opět platí, že cílem je co největší rovnováha. **Pokud některá oblast dosahuje výrazně nižších hodnot, je třeba věnovat ji zvýšenou pozornost.** Grafy ve třetí části vám pomohou určit, na jaká konkrétní témata se v dané oblasti zaměřit.

{% score_over_area_and_axis_chart caption="5. Srovnání úrovně pilířů v jednotlivých oblastech" data=$data /%}

Zpozorněte, pokud **některý z pilířů dosahuje v rámci některé oblasti výrazně nižší úrovně než ostatní pilíře**, zejména pokud k tomu dochází opakovaně napříč oblastmi.

## Část třetí: Úroveň témat v jednotlivých oblastech

V poslední části najdete detailní pohled na klíčová témata v jednotlivých oblastech. **Grafy rovnou ukazují, jak se do úrovně jednotlivých témat propisuje úroveň pilířů.**

Vypište si na papír všechna témata, která splňují tato kritéria:

- celková hodnota za téma je 8 a méně;
- pilíř v rámci tématu dosahuje hodnoty 1 („Nevyužitý potenciál‘) nebo 2 („Dobrý začátek“). Poznamenejte si také, o jaký pilíř se jedná.

Pokud je témat hodně, seřaďte je od nejnižší hodnoty a věnujte jim pozornost v tomto pořadí.

{% topic_drilldown_chart caption="6. Úroveň témat v oblasti Komunikace & Spolupráce" data=$data area=0 /%}

{% topic_drilldown_chart caption="7. Úroveň témat v oblasti Procesy & Automatizace" data=$data area=1 /%}

{% topic_drilldown_chart caption="8. Úroveň témat v oblasti Bezpečnost & Flexibilita" data=$data area=2 /%}

{% topic_drilldown_chart caption="9. Úroveň témat v oblasti Učení & Rozvoj" data=$data area=3 /%}

## Promyšlení dalšího postupu

**Jak zaznělo na začátku, úroveň pilířů by měla být co nejvyrovnanější**, a to v rámci každého klíčového tématu, každé klíčové oblasti i v rámci organizace jako celku.

**Co přesně je třeba dělat pro zvýšení digitální vyspělosti u skenované organizace záleží na tom, který pilíř vyšel v rámci oblasti nebo tématu jako nejslabší:**

- Pokud nejnižší hodnoty dosahuje pilíř Kultura, znamená to, že hlavní překážkou pro další zvyšování digitální vyspělosti je obecně vztah k tématu digitálních technologií ve skenované organizaci.
  - Vhodným krokem může být například podpoření tématu digitalizace ze strany nejvyššího vedení nebo vytvoření týmových dohod.
  - Konkrétní témata, na která se zaměřit, vyčtete z grafů ve třetí části.
- Pokud nejnižší hodnoty dosahuje pilíř Dovednosti, znamená to, že hlavní překážkou pro další zvyšování digitální vyspělosti jsou kompetence lidí.
  - Vhodným krokem může být například školení nebo jiné vzdělávání v oblastech a tématech s nejnižší úrovní.
  - Co by mělo být obsahem vzdělávání, vyčtete z grafů ve třetí části.
- Pokud nejnižší hodnoty dosahuje pilíř Nástroje, znamená to, že hlavní překážkou pro další zvyšování digitální vyspělosti je nedostatečná digitální infrastruktura.
  - Vhodným krokem může být například zmapování procesů a potřeb v oblastech a tématech s nejnižší úrovní s cílem pojmenovat kritéria pro výběr nového nástroje
  - Kde s mapováním začít a na co se zaměřit, vyčtete z grafů ve třetí části.

{% box %}

## Máte téma, ale nevíte, co dál? Zkonzultujte další postup na Tržišti

**_Tržiště_ je volně přístupné internetové fórum**, které provozuje organizace Česko.Digital. Neziskové organizace zde mohou **bezplatně poptávat dobrovolnickou i placenou pomoc** se vším, co se týká digitálních technologií.

Je to ideální místo, kam zavítat, pokud:

- váháte, jak na základě výsledků skenu postupovat dál,
- nebo už máte konkrétní zadání a **sháníte někoho, kdo vám pomůže s jeho realizací**.

**Vytvořte nový příspěvek, popište, s čím potřebujete pomoct a počkejte na reakce.**

{% button href="https://trziste.diskutuj.digital" title="Navštivte Tržiště" /%}

{% /box %}
