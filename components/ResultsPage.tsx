import { formUrl } from "@/src/utils";
import { ScoreChart } from "@/src/model";
import Image from "next/image";
import {
  AxisScoreChart,
  ScoreDistributionChart,
  ScoreOverAreaAndAxisChart,
  ScoreOverAreaChart,
  StackedAxisScoreChart,
  TopicDrillDownChart,
} from "./Charts";

type Props = {
  responseType: "individual" | "group";
  organisationName: string;
  data: ScoreChart;
};

/** Show digital maturity assessment with text and charts */
export const ResultsPage = (props: Props) => (
  <div className="max-w-[1024px] m-auto flex flex-col gap-20">
    <Intro {...props} />
    <Overview {...props} />
    <AxisDrillDown {...props} />
    <TopicDrillDown {...props} />
    <Outro {...props} />
    <MarketplacePromo {...props} />
  </div>
);

type Section = (props: Props) => React.ReactNode;

const Intro: Section = ({ responseType, organisationName }) => (
  <section>
    {responseType === "individual" && (
      <h1 className="typo-head1">
        Výsledky skenu digitální vyspělosti pro {organisationName}
      </h1>
    )}
    {responseType === "group" && (
      <h1 className="typo-head1">
        Průměrné výsledky skenu digitální vyspělosti pro {organisationName}
      </h1>
    )}
    <p>
      <em>
        Než se podíváte na samotné výsledky, pojďte si rychle připomenout, jak
        sken funguje.
      </em>
    </p>
    <p>
      Sken vychází z předpokladu, že lidé v organizaci dosahují{" "}
      <em>špičkových výsledků</em> pouze pokud se vzájemně doplňují a podporují
      3 pilíře: <em>Kultura, Dovednosti a Nástroje</em>.
    </p>
    <p>
      (Pokud s vámi tyto výsledky někdo sdílel a chtěli byste získat něco
      podobného pro vaši organizaci,{" "}
      <a href={formUrl}>stačí vyplnit náš formulář</a>.)
    </p>
    <Image
      src="https://assets.cesko.digital/11f81f04.jpg"
      width={2309}
      height={1732}
      alt=""
    />
    <p>
      Sken funguje na principu <i>benchmarkování</i>: nabízí výroky, které
      popisují, jak může organizace fungovat. Úkolem vyplňující osoby je{" "}
      <em>
        posoudit, nakolik nabízený popis odpovídá reálnému fungování skenované
        organizace
      </em>
      .
    </p>
    <p>Odpovědi se zaznamenávají jako hodnoty na škále 1–5, kde:</p>
    <ul>
      <li>1 = výrok vůbec neodpovídá</li>
      <li>5 = výrok naprosto odpovídá</li>
    </ul>
    <p>
      Jinými slovy,{" "}
      <em>
        čím vyšší hodnota, tím blíže má aktuální stav organizace ke stavu
        popsanému ve výroku
      </em>
      .
    </p>
    <p>PV rámci vyhodnocení jsou pak hodnoty interpretovány následovně:</p>
    <ul>
      <li>1 = Nevyužitý potenciál</li>
      <li>2 = Dobrý začátek</li>
      <li>3 = Solidní základ</li>
      <li>4 = Vynikající praxe</li>
      <li>5 = Inspirativní přístup</li>
    </ul>
    <p>
      Sken mapuje <em>4 klíčové oblasti digitální vyspělosti</em>:
    </p>
    <ul>
      <li>Komunikace & Spolupráce</li>
      <li>Procesy & Automatizace</li>
      <li>Bezpečnost & Flexibilita</li>
      <li>Učení & Rozvoj</li>
    </ul>
    <p>
      <em>
        V každé oblasti sken navíc mapuje 5 klíčových témat. Každé téma se vždy
        posuzuje optikou všech 3 pilířů.
      </em>{" "}
      Výstupem skenu je tedy 60 výroků ohodnocených na škále 1–5.
    </p>
    <p>
      Výsledky mají podobu <em>grafů</em> a jsou rozděleny na 3 části podle míry
      detailu:
    </p>
    <ol>
      <li>
        Pohled na <i>celkovou úroveň</i> digitální vyspělosti organizace
      </li>
      <li>
        Srovnání <i>úrovní klíčových oblastí</i>
      </li>
      <li>
        Srovnání <i>úrovní klíčových témat</i> v rámci jednotlivých oblastí
      </li>
    </ol>
    <p>
      <mark>
        <em>
          Cílem skenu je posoudit, nakolik jsou pilíře Kultura, Dovednosti a
          Nástroje v rovnováze, tedy jestli dosahují stejné úrovně v rámci
          organizace jako celku, v rámci jednotlivých oblastí a témat.
        </em>
      </mark>
    </p>
    <p>
      Při čtení grafů se snažte identifikovat <em>oblasti</em> a <em>témata</em>
      , ve kterých existuje{" "}
      <em>největší nerovnováha mezi jednotlivými pilíři</em>. Díky tomu budete
      schopni posoudit, na co přesně se při zvyšování digitální vyspělosti vaší
      organizace zaměřit.
    </p>
    <p>
      A teď už se pojďme podívat, jak je na tom vaše organizace.{" "}
      <em>
        Doporučujeme vzít si k ruce papír a tužku, abyste si rovnou mohli
        zapisovat svá zjištění.
      </em>
    </p>
  </section>
);

const Overview: Section = ({ data }) => (
  <section>
    <h2 className="typo-head2">
      Část první: Celková úroveň digitální vyspělosti
    </h2>
    <div>
      <p>
        <em>
          Graf č. 1 ukazuje, jak často vaše organizace dosahuje jednotlivých
          úrovní.
        </em>
      </p>
      <ScoreDistributionChart
        caption="1. Celková úroveň digitální vyspělosti"
        data={data}
      />
      <ul>
        <li>
          <i>Nevyužitý potenciál</i> ukazuje počet odpovědí s hodnotou 1 („Vůbec
          neodpovídá“).
        </li>
        <li>
          <li>Inspirativní přístup</li> ukazuje počet odpovědí s hodnotou 5
          („Naprosto odpovídá“).
        </li>
        <li>Ostatní sloupce ukazují počty odpovědí s hodnotami 2, 3, 4.</li>
      </ul>
      <p>
        <em>
          V ideálním případě by všechny odpovědi měly spadat do kategorie
          <i>Solidní základ</i> a výše.
        </em>
      </p>
      <ul>
        <li>
          <p>
            <mark>
              Pokud převažují odpovědi typu <i>Nevyužitý potenciál</i> a{" "}
              <i>Dobrý začátek</i>, rovnou lze konstatovat, že zvyšování
              digitální vyspělosti by se mělo stát hlavní prioritou vaší
              organizace.
            </mark>
          </p>
        </li>
        <li>
          <p>
            Pokud převažují odpovědi typu <i>Solidní základ</i> a výše, je třeba
            se nejprve podívat na další grafy.
          </p>
        </li>
      </ul>
    </div>
    <div>
      <p>
        <em>Graf č. 2 ukazuje celkovou úroveň jednotlivých pilířů.</em>
      </p>
      <AxisScoreChart caption="2. Srovnání celkové úrovně pilířů" data={data} />
      <p>
        <i>
          Jedná se o prostý součet hodnot napříč všemi výroky (nikoli o počet
          zaznamenaných odpovědí určité hodnoty jako u grafu č. 1). Maximální
          počet bodů v jednom pilíři může být 100.
        </i>
      </p>
      <p>
        <em>Úrovně pilířů by měly být co nejvyrovnanější.</em>
      </p>
    </div>
    <div>
      <p>
        <em>
          Graf č. 3 ukazuje, jak celkovou úroveň digitální vyspělosti ovlivňuje
          úroveň jednotlivých pilířů.
        </em>
      </p>
      <StackedAxisScoreChart
        caption="3. Vliv pilířů na celkovou úroveň digitální vyspělosti"
        data={data}
      />
      <ul>
        <li>
          Podívejte se,{" "}
          <em>
            jaký pilíř se nejčastěji vyskytuje ve sloupci
            <i>Nevyužitý potenciál</i> a <i>Dobrý začátek</i>
          </em>
          . Z posílení tohoto pilíře by se měla stát okamžitá priorita.
        </li>
        <li>
          Pokud nejvyšších hodnot dosahuje{" "}
          <em>
            sloupec <i>Solidní základ</i> a vyšší
          </em>
          , přesto se na rozložení pilířů podívejte – a{" "}
          <em>
            zpozorněte, pokud některý pilíř opakovaně zaostává za ostatními
          </em>
          . I tento pilíř byste měli co nejdříve posílit.
        </li>
      </ul>
    </div>
  </section>
);

const AxisDrillDown: Section = ({ data }) => (
  <section>
    <h2 className="typo-head2">
      Část druhá: Úroveň pilířů v jednotlivých oblastech
    </h2>
    <div>
      <p>
        <em>Graf č. 4 ukazuje celkovou úroveň klíčových oblastí.</em>
      </p>
      <ScoreOverAreaChart
        caption="4. Srovnání celkové úrovně klíčových oblastí"
        data={data}
      />
      <p>
        Opět platí, že cílem je co největší rovnováha.{" "}
        <em>
          Pokud některá oblast dosahuje výrazně nižších hodnot, je třeba věnovat
          jí zvýšenou pozornost.
        </em>
        Grafy ve třetí části vám pomohou určit, na jaká konkrétní témata se v
        dané oblasti zaměřit.
      </p>
    </div>
    <div>
      <p>
        <em>
          Graf č. 5 ukazuje, jak celkovou úroveň klíčových oblastí ovlivňuje
          úroveň jednotlivých pilířů.
        </em>
      </p>
      <ScoreOverAreaAndAxisChart
        caption="5. Srovnání úrovně pilířů v jednotlivých oblastech"
        data={data}
      />
      <p>
        Zpozorněte, pokud{" "}
        <em>
          některý z pilířů dosahuje v rámci některé oblasti výrazně nižší úrovně
          než ostatní pilíře
        </em>
        , zejména pokud k tomu dochází opakovaně napříč oblastmi.
      </p>
    </div>
  </section>
);

const TopicDrillDown: Section = ({ data }) => (
  <section>
    <h2 className="typo-head2">
      Část třetí: Úroveň témat v jednotlivých oblastech
    </h2>
    <p>
      V poslední části najdete detailní pohled na klíčová témata v jednotlivých
      oblastech.{" "}
      <em>
        Grafy rovnou ukazují, jak se do úrovně jednotlivých témat propisuje
        úroveň pilířů.
      </em>
    </p>
    <p>
      <mark>
        Vypište si na papír všechna témata, která splňují tato kritéria:
      </mark>
    </p>
    <ul className="list-disc">
      <li>
        <p>
          <em>Celková hodnota za téma je 8 a méně.</em>
        </p>
      </li>
      <li>
        <p>
          <em>
            Pilíř v rámci tématu dosahuje hodnoty 1 („Nevyužitý potenciál“) nebo
            2 („Dobrý začátek“)
          </em>{" "}
          – poznamenejte si také, o jaký pilíř se jedná.
        </p>
      </li>
      <p>
        Pokud je témat hodně, seřaďte je od nejnižší hodnoty a věnujte jim
        pozornost v tomto pořadí.
      </p>
    </ul>
    <TopicDrillDownChart
      caption="6. Úroveň témat v oblasti Komunikace & Spolupráce"
      data={data}
      area={0}
    />
    <TopicDrillDownChart
      caption="7. Úroveň témat v oblasti Procesy & Automatizace"
      data={data}
      area={1}
    />
    <TopicDrillDownChart
      caption="8. Úroveň témat v oblasti Bezpečnost & Flexibilita"
      data={data}
      area={2}
    />
    <TopicDrillDownChart
      caption="9. Úroveň témat v oblasti Učení & Rozvoj"
      data={data}
      area={3}
    />
  </section>
);

const Outro: Section = () => (
  <section>
    <h2 className="typo-head2">Promyšlení dalšího postupu</h2>
    <p>
      <em>
        Jak zaznělo na začátku, úroveň pilířů by měla být co nejvyrovnanější
      </em>{" "}
      – v rámci jednotlivých témat, oblastí i celé organizace.
    </p>
    <p>
      <mark>
        <em>
          Co přesně je třeba dělat pro zvýšení digitální vyspělosti organizace
          záleží na tom, který pilíř vyšel v rámci oblasti nebo tématu jako
          nejslabší:
        </em>
      </mark>
    </p>
    <ul className="list-disc">
      <li>
        <p>
          <em>
            Nejslabší <mark>pilíř Kultura:</mark>
          </em>
        </p>
        <ul className="list-disc ml-5">
          <li>
            Znamená, že <em>hlavní překážkou</em> pro další zvyšování digitální
            vyspělosti je obecně <em>vztah k tématu digitálních technologií</em>
            .
          </li>
          <li>
            Vhodné kroky: například <em>podpora</em> tématu digitalizace{" "}
            <em>
              ze strany nejvyššího vedení nebo vytvoření{" "}
              <a
                href="https://www.digiskills.cz/files/20231128/1701183043_639008.pdf"
                className="typo-link"
              >
                týmových dohod
              </a>
            </em>
            .
          </li>
          <li>
            Konkrétní témata, na která se zaměřit, vyčtete z grafů ve třetí
            části.
          </li>
        </ul>
      </li>
      <li>
        <p>
          <em>
            Nejslabší <mark>pilíř Dovednosti:</mark>
          </em>
        </p>
        <ul className="list-disc ml-5">
          <li>
            <p>
              <em>Hlavní překážkou jsou kompetence lidí.</em>
            </p>
          </li>
          <li>
            <p>
              Vhodné kroky: například <em>školení nebo jiné vzdělávání</em> v
              oblastech a tématech s nejnižší úrovní.
            </p>
          </li>
          <li>
            <p>
              Co by mělo být obsahem vzdělávání, vyčtete z grafů ve třetí části.
            </p>
          </li>
        </ul>
      </li>
      <li>
        <p>
          <em>
            Nejslabší <mark>pilíř Nástroje:</mark>
          </em>
        </p>
        <ul className="list-disc ml-5">
          <li>
            <p>
              <em>
                Hlavní překážkou je nedostatečná digitální infrastruktura.
              </em>
            </p>
          </li>
          <li>
            <p>
              Vhodné kroky: například <em>zmapování procesů a potřeb</em> v
              oblastech a tématech s nejnižší úrovní s cílem pojmenovat kritéria
              pro výběr nového nástroje.
            </p>
          </li>
          <li>
            <p>
              Kde s mapováním začít a na co se zaměřit, vyčtete z grafů ve třetí
              části.
            </p>
          </li>
        </ul>
      </li>
    </ul>
  </section>
);

const MarketplacePromo: Section = () => (
  <section>
    <h2 className="typo-head2">
      Máte téma, ale nevíte, co dál? Zkonzultujte další postup na Tržišti
    </h2>
    <p>
      <em>
        <i>Tržiště</i> je volně přístupné internetové fórum
      </em>
      , které provozuje organizace Česko.Digital. Neziskové organizace zde mohou{" "}
      <em>bezplatně poptávat dobrovolnickou i placenou pomoc</em> se vším, co se
      týká digitálních technologií.
    </p>
    <p>Zavítejte sem, pokud:</p>
    <ul>
      <li>váháte, jak na základě výsledků skenu postupovat dál,</li>
      <li>
        nebo už máte konkrétní zadání a{" "}
        <em>sháníte někoho, kdo vám pomůže s jeho realizací</em>.
      </li>
    </ul>
    <p>
      <mark>
        <em>
          Vytvořte nový příspěvek, popište, s čím potřebujete pomoct a počkejte
          na reakce.
        </em>
      </mark>
    </p>
    <p>
      <a href="https://trziste.diskutuj.digital">Navštivte Tržiště</a>
    </p>
  </section>
);
