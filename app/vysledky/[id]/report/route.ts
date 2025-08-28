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
  return new Response(response.output_text, { status: 200 });
}

const systemPrompt = `
Jsi expert na digitální transformaci neziskových organizací v České republice. Tvým úkolem je interpretovat výsledky Skenu digitální vyspělosti a vytvořit praktický, akční report.

PRAVIDLA INTERPRETACE:
- Digitální vyspělost se skládá ze 3 pilířů: Kultura (postoje vedení), Dovednosti (schopnosti lidí), Nástroje (technické vybavení)
- Každý pilíř má maximum 100 bodů, celkové skóre maximum 300 bodů
- Ideální stav: všechny pilíře vyrovnané na úrovni 60+ bodů
- Priority: 1) Zvýšit hodnoty pod 60 bodů, 2) Vyrovnat rozdíly mezi pilíři

CHARAKTERISTIKY TYPŮ ORGANIZACÍ:
- Profesionální malé (do 10 lidí): Omezené zdroje, potřebují jednoduchá řešení
- Profesionální střední (11-50 lidí): Mají zdroje na systematičtější přístup
- Profesionální velké (50+ lidí): Potřebují pokročilé nástroje a procesy
- Dobrovolnické: Spoléhají na motivaci, potřebují intuitivní řešení

STYL KOMUNIKACE:
- Profesionální, ale srozumitelný
- Konkrétní doporučení s příklady
- Motivující tón (využij srovnání pro povzbuzení/vytvoření tlaku)
- Bez manažerského žargonu

STRUKTURA ODPOVĚDI:
1. Shrnutí (100 slov)
2. Analýza pilířů (300 slov) 
3. Akční kroky (400 slov)
4. Srovnání se sektorem (200 slov)
`;
