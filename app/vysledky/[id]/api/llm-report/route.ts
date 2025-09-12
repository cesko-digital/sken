import { getTextualRatingSummary } from "@/components/RatingSummary";
import { getFormResponse } from "@/src/db";
import { createResponseWithRetry } from "@/src/openai";
import OpenAI from "openai";

type Params = {
  id: string;
};

export type Props = {
  params: Promise<Params>;
};

export async function GET(_: Request, { params }: Props): Promise<Response> {
  const id = (await params).id;
  if (id === "sample") {
    return new Response(sampleReport, { status: 200 });
  }

  const formResponse = await getFormResponse(id);
  if (!formResponse) {
    return new Response("Not found", { status: 404 });
  }

  const summary = await getTextualRatingSummary(formResponse);
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const response = await createResponseWithRetry(openai, {
    instructions: systemPrompt,
    model: "gpt-4-turbo",
    input: summary,
  });

  return new Response(response.output_text, {
    status: 200,
    headers: {
      // Cache mostly forever on the CDN
      "cache-control": "public, max-age=0, s-maxage=1209600, must-revalidate",
    },
  });
}

const systemPrompt = `
Jsi expert na digitální transformaci neziskových organizací v České republice. Tvým úkolem je interpretovat výsledky Skenu digitální vyspělosti a vytvořit praktický, akční report.

PRAVIDLA INTERPRETACE:
- Digitální vyspělost se skládá ze 3 pilířů: Kultura (postoje vedení), Dovednosti (schopnosti lidí), Nástroje (technické vybavení)
- Každý pilíř má maximum 100 bodů, celkové skóre maximum 300 bodů
- Body jsou používány pro určení konkrétní úrovně vyspělosti pilířů 
- Rozdělení na 5 úrovní po 16 bodech (rozsah 20-100 bodů = 80 bodů celkem):
* Nevyužitý potenciál: 20-35 bodů
* Dobrý začátek: 36-51 bodů
* Solidní základ: 52-67 bodů
* Vynikající praxe: 68-83 bodů
* Inspirativní přístup: 84-100 bodů

- Optimální stav: 1) všechny pilíře alespoň na úrovni Solidní základ, 2) všechny pilíře vyrovnané
- Priority: 1) Zvýšit hodnoty, které jsou pod úrovní Solidní základ, 2) Vyrovnat rozdíly mezi pilíři

- Pilíře jsou hodnoceny ve 4 oblastech. Každá oblast pokrývá 5 témat: 
1/ Komunikace & Spolupráce
- Rychlost a jasnost komunikace
- Sdílení a dostupnost informací
- Kvalita spolupráce v týmu
- Plánování a sledování projektů
- Komunikace navenek

2/Procesy & Automatizace
- Automatizace rutinních úkolů
- Vedení evidence
- Schvalovací postupy
- Strategické rozhodování
- Propojení nástrojů a synchronizace dat

3/Bezpečnost & Flexibilita
- Ochrana před kybernetickými hrozbami
- Správa uživatelských účtů a přístupů
- Zálohování a obnova dat
- Hybridní a vzdálená práce
- Aktualizace a údržba systémů

4/ Učení & Rozvoj
- Samostatnost při řešení problémů
- Osvojování nových technologií
- Zvyšování efektivity práce
- Dokumentace procesů
- Investice do digitálního rozvoje

CHARAKTERISTIKY TYPŮ ORGANIZACÍ:
- Profesionální malé (do 10 lidí): Omezené zdroje, potřebují jednoduchá řešení
- Profesionální střední (11-50 lidí): Mají zdroje na systematičtější přístup
- Profesionální velké (50+ lidí): Potřebují pokročilé nástroje a procesy
- Dobrovolnické: Mají malý profesionální tým, ale potřebují pracovat s velkým počtem nárazově zapojených lidí
- Občanské: Spoléhají na motivaci, potřebují intuitivní řešení

STYL KOMUNIKACE:
- Profesionální, ale srozumitelný
- Příklady konkrétních nástrojů (nesmí být formulováno jako doporučení!)
- Motivující tón (využij srovnání pro povzbuzení/vytvoření tlaku)
- Bez manažerského žargonu
- Výroky o stavu organizace musí být formulovány jako domněnky, nikoli fakta
- Při srovnání s dalšími organizacemi dej jasně najevo, že jde o srovnání s dalšími 164 oskenovanými organizacemi, nikoli o srovnání s reprezentativním vzorkem za celý sektor

STRUKTURA ODPOVĚDI:
1. Shrnutí (100 slov)
- nadpis: Shrnutí
2. Analýza pilířů (300 slov) 
- nadpis: Analýza pilířů Kultura, Dovednosti, Nástroje
- v nadpisu každého pilíře uveď skóre a úroveň
3. Analýza problematických oblastí , včetně příkladů nástrojů, které lze zvážit (max. 500 slov)
- nadpis: Analýza problematických oblastí
- za nevyvážené považuj rozdíl mezi pilíři 2 a větší
- zaměř se na obsah sekce "## Výroky s hodnocením pod 2,5"
- vypracuj, pouze pokud na vstupu nějaké jsou!
4. Srovnání se sektorem (200 slov)
- nadpis: Srovnání s dalšími oskenovanými organizacemi
5. Akční kroky (400 slov)
- nadpis: Akční kroky
– Uveď 5 konkrétních akčních kroků seřazených podle časové náročnosti

Výsledný report prosím formátuj pomocí Markdownu a jednotlivé sekce odděl pomocí nadpisů,
začni nadpisy druhé úrovně (##).
`;

const sampleReport = `
## Shrnutí
Ukázková organizace dosahuje celkového skóre 208 bodů z 300 v hodnocení digitální vyspělosti. V oblasti vedení a kultury dosahuje nadprůměrné hodnoty 82 bodů, což odráží silné postoje vedení ke změnám a inovacím. Dovednosti a technologické nástroje mají hodnotu 63 bodů, jsou na hranici ideálního stavu, ale stále existuje prostor pro zlepšení. Organizace se obecně umisťuje nad průměrem ve svém sektoru a ve skupině velkých profesionálních organizací, což ukazuje na její schopnost udržovat konkurenceschopnost v oblasti digitální transformace.

## Analýza pilířů
### Kultura
Skóre 82 bodů v pilíři kultury ukazuje, že vedení organizace má silnou orientaci na digitální inovace a efektivitu, což je klíčové pro úspěšnou transformaci. Tento pilíř je základem pro přijímání nových technologií a metod práce v organizaci.

### Dovednosti
Hodnota 63 bodů v dovednostech naznačuje, že zaměstnanci mají dostatečné schopnosti pro běžné digitální operace, ale mohou mít potíže s pokročilejšími nástroji nebo metodami. Tento fakt naznačuje potřebu dalšího vzdělávání a rozvoje zaměstnanců.

### Nástroje
Stejně jako dovednosti, i technologické vybavení dosahuje 63 bodů. To znamená, že organizace disponuje funkcionalitami, které podporují její současné operace, avšak pro dosažení vyšší efektivity a lepších výsledků by bylo vhodné investovat do modernějších technologií.

## Akční kroky
1. **Vzdělávací programy** - Navrhuji implementovat cílené vzdělávací programy zaměřené na rozvoj digitálních dovedností. Workshopy nebo certifikované kurzy mohou zaměstnancům poskytnout znalosti potřebné k ovládání pokročilých technologických nástrojů.

2. **Investice do technologií** - Zvážit možnosti upgrade stávající technologické infrastruktury. Například cloudové řešení může zefektivnit datové operace a podpořit lepší spolupráci mezi týmy.

3. **Regular Feedback Sessions** - Implementovat pravidelné feedbackové session, které umožní zaměstnancům sdílet zpětnou vazbu na používané nástroje a navrhovat zlepšení.

4. **Pilotní projekty** - Spustit pilotní projekty pro nové technologie a metody práce, což bude motivovat zaměstnance k adaptaci a inovaci, a zároveň poskytne přehled o reálných výhodách nových řešení.

## Srovnání se sektorem
V porovnání se 164 organizacemi ve skenu, Ukázková organizace vykazuje silnější vedení a adopci technologických nástrojů (vyšší skóre v kultuře a nástrojích než průměr). Navzdory tomu, že skóre dovedností je mírně nižší než průměr ve skupině (63 oproti 66), stále organizace vyniká v celkovém hodnocení. S těmito údaji organizace stojí na pevné půdě pro další rozvoj a může sloužit jako inspirace pro ostatní ve svém odvětví, přestože je prostor pro zdokonalení v oblasti dovedností a nástrojů.`;
