{% if equals($responseType, "individual") %}

# Výsledky skenu digitální vyspělosti pro {% $organisationName %}

{% else /%}

# Průměrné výsledky skenu digitální vyspělosti pro {% $organisationName %}

{% /if %}

**Než se podíváte na samotné výsledky, pojďte si rychle připomenout, jak sken funguje.**

Sken vychází z předpokladu, že lidé v organizaci dosahují **špičkových výsledků** pouze pokud se vzájemně doplňují a podporují 3 pilíře: **Kultura, Dovednosti a Nástroje**.

(Pokud s vámi tyto výsledky někdo sdílel a chtěli byste získat něco
podobného pro vaši organizaci, {% link href=$formUrl %} stačí vyplnit
náš formulář{% /link %}.)

{% image src="https://assets.cesko.digital/11f81f04.jpg" width=2309 height=1732 alt="" /%}

Sken funguje na principu _benchmarkování_: nabízí výroky, které popisují, jak může organizace fungovat. Úkolem vyplňující osoby je **posoudit, nakolik nabízený popis odpovídá reálnému fungování skenované organizace**.

Odpovědi se zaznamenávají jako hodnoty na škále 1–5, kde:

1 = výrok vůbec neodpovídá  
5 = výrok naprosto odpovídá

Jinými slovy, **čím vyšší hodnota, tím blíže má aktuální stav organizace ke stavu popsanému ve výroku**.

V rámci vyhodnocení jsou pak hodnoty interpretovány následovně:

1 = Nevyužitý potenciál  
2 = Dobrý začátek  
3 = Solidní základ  
4 = Vynikající praxe  
5 = Inspirativní přístup

Sken mapuje **4 klíčové oblasti digitální vyspělosti**:

- Komunikace & Spolupráce
- Procesy & Automatizace
- Bezpečnost & Flexibilita
- Učení & Rozvoj

**V každé oblasti sken navíc mapuje 5 klíčových témat. Každé téma se vždy posuzuje optikou všech 3 pilířů.** Výstupem skenu je tedy 60 výroků ohodnocených na škále 1–5.

Výsledky mají podobu **grafů** a jsou rozděleny na 3 části podle míry detailu:

1. Pohled na _celkovou úroveň_ digitální vyspělosti organizace
2. Srovnání _úrovní klíčových oblastí_
3. Srovnání _úrovní klíčových témat_ v rámci jednotlivých oblastí

{% mark %} **Cílem skenu je posoudit, nakolik jsou pilíře Kultura, Dovednosti a Nástroje v rovnováze, tedy jestli dosahují stejné úrovně v rámci organizace jako celku, v rámci jednotlivých oblastí a témat.** {% /mark %}

Při čtení grafů se snažte identifikovat **oblasti** a **témata**, ve kterých existuje **největší nerovnováha mezi jednotlivými pilíři**. Díky tomu budete schopni posoudit, na co přesně se při zvyšování digitální vyspělosti vaší organizace zaměřit.

A teď už se pojďme podívat, jak je na tom vaše organizace. **Doporučujeme vzít si k ruce papír a tužku, abyste si rovnou mohli zapisovat svá zjištění.**

## Část první: Celková úroveň digitální vyspělosti

**Graf č. 1 ukazuje, jak často vaše organizace dosahuje jednotlivých úrovní.**

{% score_distribution_chart caption="1. Celková úroveň digitální vyspělosti" data=$data /%}

- _Nevyužitý potenciál_ ukazuje počet odpovědí s hodnotou 1 („Vůbec neodpovídá“).
- _Inspirativní přístup_ ukazuje počet odpovědí s hodnotou 5 („Naprosto odpovídá“).
- Ostatní sloupce ukazují počty odpovědí s hodnotami 2, 3, 4.

**V ideálním případě by všechny odpovědi měly spadat do kategorie _Solidní základ_ a výše.**

- {% mark %} Pokud převažují odpovědi typu _Nevyužitý potenciál_ a _Dobrý začátek_, rovnou lze konstatovat, že zvyšování digitální vyspělosti by se mělo stát hlavní prioritou vaší organizace. {% /mark %}
- Pokud převažují odpovědi typu _Solidní základ_ a výše, je třeba se nejprve podívat na další grafy.

**Graf č. 2 ukazuje celkovou úroveň jednotlivých pilířů.**

{% axis_score_chart caption="2. Srovnání celkové úrovně pilířů" data=$data /%}

_Jedná se o prostý součet hodnot napříč všemi výroky (nikoli o počet zaznamenaných odpovědí určité hodnoty jako u grafu č. 1). Maximální počet bodů v jednom pilíři může být 100._

**Úrovně pilířů by měly být co nejvyrovnanější.**

**Graf č. 3 ukazuje, jak celkovou úroveň digitální vyspělosti ovlivňuje úroveň jednotlivých pilířů.**

{% stacked_axis_score_chart caption="3. Vliv pilířů na celkovou úroveň digitální vyspělosti" data=$data /%}

- Podívejte se, **jaký pilíř se nejčastěji vyskytuje ve sloupci _Nevyužitý potenciál_ a _Dobrý začátek_**. Z posílení tohoto pilíře by se měla stát okamžitá priorita.
- Pokud nejvyšších hodnot dosahuje **sloupec _Solidní základ_ a vyšší**, přesto se na rozložení pilířů podívejte – a **zpozorněte, pokud některý pilíř opakovaně zaostává za ostatními**. I tento pilíř byste měli co nejdříve posílit.

## Část druhá: Úroveň pilířů v jednotlivých oblastech

**Graf č. 4 ukazuje celkovou úroveň klíčových oblastí.**

{% score_over_area_chart caption="4. Srovnání celkové úrovně klíčových oblastí" data=$data /%}

Opět platí, že cílem je co největší rovnováha. **Pokud některá oblast dosahuje výrazně nižších hodnot, je třeba věnovat jí zvýšenou pozornost.** Grafy ve třetí části vám pomohou určit, na jaká konkrétní témata se v dané oblasti zaměřit.

**Graf č. 5 ukazuje, jak celkovou úroveň klíčových oblastí ovlivňuje úroveň jednotlivých pilířů.**

{% score_over_area_and_axis_chart caption="5. Srovnání úrovně pilířů v jednotlivých oblastech" data=$data /%}

Zpozorněte, pokud **některý z pilířů dosahuje v rámci některé oblasti výrazně nižší úrovně než ostatní pilíře**, zejména pokud k tomu dochází opakovaně napříč oblastmi.

## Část třetí: Úroveň témat v jednotlivých oblastech

V poslední části najdete detailní pohled na klíčová témata v jednotlivých oblastech. **Grafy rovnou ukazují, jak se do úrovně jednotlivých témat propisuje úroveň pilířů.**

{% mark %} Vypište si na papír všechna témata, která splňují tato kritéria: {% /mark %}

- **Celková hodnota za téma je 8 a méně.**
- **Pilíř v rámci tématu dosahuje hodnoty 1 („Nevyužitý potenciál“) nebo 2 („Dobrý začátek“)** – poznamenejte si také, o jaký pilíř se jedná.

Pokud je témat hodně, seřaďte je od nejnižší hodnoty a věnujte jim pozornost v tomto pořadí.

{% topic_drilldown_chart caption="6. Úroveň témat v oblasti Komunikace & Spolupráce" data=$data area=0 /%}

{% topic_drilldown_chart caption="7. Úroveň témat v oblasti Procesy & Automatizace" data=$data area=1 /%}

{% topic_drilldown_chart caption="8. Úroveň témat v oblasti Bezpečnost & Flexibilita" data=$data area=2 /%}

{% topic_drilldown_chart caption="9. Úroveň témat v oblasti Učení & Rozvoj" data=$data area=3 /%}

## Promyšlení dalšího postupu

**Jak zaznělo na začátku, úroveň pilířů by měla být co nejvyrovnanější** – v rámci jednotlivých témat, oblastí i celé organizace.

{% mark %} **Co přesně je třeba dělat pro zvýšení digitální vyspělosti organizace záleží na tom, který pilíř vyšel v rámci oblasti nebo tématu jako nejslabší:** {% /mark %}

- **Nejslabší {% mark %} pilíř Kultura: {% /mark %}**

  - Znamená, že **hlavní překážkou** pro další zvyšování digitální vyspělosti je obecně **vztah k tématu digitálních technologií**.
  - Vhodné kroky: například **podpora** tématu digitalizace **ze strany nejvyššího vedení nebo vytvoření [týmových dohod](https://www.digiskills.cz/files/20231128/1701183043_639008.pdf)**.
  - Konkrétní témata, na která se zaměřit, vyčtete z grafů ve třetí části.

- **Nejslabší {% mark %} pilíř Dovednosti: {% /mark %}**

  - **Hlavní překážkou** jsou **kompetence lidí**.
  - Vhodné kroky: například **školení nebo jiné vzdělávání** v oblastech a tématech s nejnižší úrovní.
  - Co by mělo být obsahem vzdělávání, vyčtete z grafů ve třetí části.

- **Nejslabší {% mark %} pilíř Nástroje: {% /mark %}**
  - **Hlavní překážkou** je **nedostatečná digitální infrastruktura**.
  - Vhodné kroky: například **zmapování procesů a potřeb** v oblastech a tématech s nejnižší úrovní s cílem pojmenovat kritéria pro výběr nového nástroje.
  - Kde s mapováním začít a na co se zaměřit, vyčtete z grafů ve třetí části.

{% box %}

## Máte téma, ale nevíte, co dál? Zkonzultujte další postup na Tržišti

**_Tržiště_ je volně přístupné internetové fórum**, které provozuje organizace Česko.Digital. Neziskové organizace zde mohou **bezplatně poptávat dobrovolnickou i placenou pomoc** se vším, co se týká digitálních technologií.

Zavítejte sem, pokud:

- váháte, jak na základě výsledků skenu postupovat dál,
- nebo už máte konkrétní zadání a **sháníte někoho, kdo vám pomůže s jeho realizací**.

{% mark %} **Vytvořte nový příspěvek, popište, s čím potřebujete pomoct a počkejte na reakce.** {% /mark %}

{% button href="https://trziste.diskutuj.digital" title="Navštivte Tržiště" /%}

{% /box %}
