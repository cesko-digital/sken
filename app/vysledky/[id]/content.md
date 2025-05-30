# Výsledky skenu digitální vyspělosti pro {% $organisationName %}

## Část první: Celková úroveň digitální vyspělosti

{% score_distribution_chart data=$data /%}

Graf č. 1 ukazuje, jak často skenovaná organizace dosahuje jednotlivých úrovní

{% axis_score_chart data=$data /%}

{% stacked_axis_score_chart data=$data /%}

## Část druhá: Úroveň pilířů v jednotlivých oblastech

{% score_over_area_chart data=$data /%}

Opět platí, že cílem je co největší rovnováha. **Pokud některá oblast dosahuje výrazně nižších hodnot, je třeba věnovat ji zvýšenou pozornost.** Grafy ve třetí části vám pomohou určit, na jaká konkrétní témata se v dané oblasti zaměřit.

{% score_over_area_and_axis_chart data=$data /%}

Zpozorněte, pokud **některý z pilířů dosahuje v rámci některé oblasti výrazně nižší úrovně než ostatní pilíře**, zejména pokud k tomu dochází opakovaně napříč oblastmi.

## Část třetí: Úroveň témat v jednotlivých oblastech

V poslední části najdete detailní pohled na klíčová témata v jednotlivých oblastech. **Grafy rovnou ukazují, jak se do úrovně jednotlivých témat propisuje úroveň pilířů.**

Vypište si na papír všechna témata, která splňují tato kritéria:
- celková hodnota za téma je 8 a méně;
- pilíř v rámci tématu dosahuje hodnoty 1 („Nevyužitý potenciál‘) nebo 2 („Dobrý začátek“). Poznamenejte si také, o jaký pilíř se jedná.

Pokud je témat hodně, seřaďte je od nejnižší hodnoty a věnujte jim pozornost v tomto pořadí.

{% topic_drilldown_chart data=$data area=0 /%}

{% topic_drilldown_chart data=$data area=1 /%}

{% topic_drilldown_chart data=$data area=2 /%}

{% topic_drilldown_chart data=$data area=3 /%}

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
