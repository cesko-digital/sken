import { ScoreChart } from "@/src/model";
import {
  AxisScoreChart,
  ScoreDistributionChart,
  ScoreOverAreaAndAxisChart,
  ScoreOverAreaChart,
  StackedAxisScoreChart,
  TopicDrillDownChart,
} from "./Charts";

type Props = {
  data: ScoreChart;
};

/** Show digital maturity assessment with text and charts */
export const ChartsSummaryPage = (props: Props) => (
  <div className="flex flex-col gap-20">
    <Intro {...props} />
    <Overview {...props} />
    <AxisDrillDown {...props} />
    <TopicDrillDown {...props} />
    <Outro {...props} />
    <MarketplacePromo {...props} />
  </div>
);

type Section = (props: Props) => React.ReactNode;

const Intro: Section = () => (
  <section>
    <Text>
      <p>
        Výsledky mají podobu <em>grafů</em> a jsou rozděleny na 3 části podle
        míry detailu:
      </p>
      <ol className="list-disc">
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
        Při čtení grafů se snažte identifikovat <em>oblasti</em> a{" "}
        <em>témata</em>, ve kterých existuje{" "}
        <em>největší nerovnováha mezi jednotlivými pilíři</em>. Díky tomu budete
        schopni posoudit, na co přesně se při zvyšování digitální vyspělosti
        vaší organizace zaměřit.
      </p>
      <p>
        A teď už se pojďme podívat, jak je na tom vaše organizace.{" "}
        <em>
          Doporučujeme vzít si k ruce papír a tužku, abyste si rovnou mohli
          zapisovat svá zjištění.
        </em>
      </p>
    </Text>
  </section>
);

const Overview: Section = ({ data }) => (
  <section>
    <h2 className="typo-head2">
      Část první: Celková úroveň digitální vyspělosti
    </h2>

    <SubSection>
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
      <Text>
        <ul className="list-disc">
          <li>
            <i>Nevyužitý potenciál</i> ukazuje počet odpovědí s hodnotou 1
            („Vůbec neodpovídá“).
          </li>
          <li>
            <i>Inspirativní přístup</i> ukazuje počet odpovědí s hodnotou 5
            („Naprosto odpovídá“).
          </li>
          <li>Ostatní sloupce ukazují počty odpovědí s hodnotami 2, 3, 4.</li>
        </ul>
        <p>
          <em>
            V ideálním případě by všechny odpovědi měly spadat do kategorie{" "}
            <i>Solidní základ</i> a výše.
          </em>
        </p>
        <ul className="list-disc">
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
              Pokud převažují odpovědi typu <i>Solidní základ</i> a výše, je
              třeba se nejprve podívat na další grafy.
            </p>
          </li>
        </ul>
      </Text>
    </SubSection>

    <SubSection>
      <p>
        <em>Graf č. 2 ukazuje celkovou úroveň jednotlivých pilířů.</em>
      </p>
      <AxisScoreChart caption="2. Srovnání celkové úrovně pilířů" data={data} />
      <Text>
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
      </Text>
    </SubSection>

    <SubSection>
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
      <Text>
        <ul className="list-disc">
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
      </Text>
    </SubSection>
  </section>
);

const AxisDrillDown: Section = ({ data }) => (
  <section>
    <h2 className="typo-head2">
      Část druhá: Úroveň pilířů v jednotlivých oblastech
    </h2>
    <SubSection>
      <p>
        <em>Graf č. 4 ukazuje celkovou úroveň klíčových oblastí.</em>
      </p>
      <ScoreOverAreaChart
        caption="4. Srovnání celkové úrovně klíčových oblastí"
        data={data}
      />
      <Text>
        <p>
          Opět platí, že cílem je co největší rovnováha.{" "}
          <em>
            Pokud některá oblast dosahuje výrazně nižších hodnot, je třeba
            věnovat jí zvýšenou pozornost.
          </em>
          Grafy ve třetí části vám pomohou určit, na jaká konkrétní témata se v
          dané oblasti zaměřit.
        </p>
      </Text>
    </SubSection>
    <SubSection>
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
      <Text>
        <p>
          Zpozorněte, pokud{" "}
          <em>
            některý z pilířů dosahuje v rámci některé oblasti výrazně nižší
            úrovně než ostatní pilíře
          </em>
          , zejména pokud k tomu dochází opakovaně napříč oblastmi.
        </p>
      </Text>
    </SubSection>
  </section>
);

const TopicDrillDown: Section = ({ data }) => (
  <section>
    <h2 className="typo-head2">
      Část třetí: Úroveň témat v jednotlivých oblastech
    </h2>

    <Text>
      <p>
        V poslední části najdete detailní pohled na klíčová témata v
        jednotlivých oblastech.{" "}
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
              Pilíř v rámci tématu dosahuje hodnoty 1 („Nevyužitý potenciál“)
              nebo 2 („Dobrý začátek“)
            </em>{" "}
            – poznamenejte si také, o jaký pilíř se jedná.
          </p>
        </li>
      </ul>
      <p>
        Pokud je témat hodně, seřaďte je od nejnižší hodnoty a věnujte jim
        pozornost v tomto pořadí.
      </p>
    </Text>

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
    <Text>
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
              Znamená, že <em>hlavní překážkou</em> pro další zvyšování
              digitální vyspělosti je obecně{" "}
              <em>vztah k tématu digitálních technologií</em>.
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
                Co by mělo být obsahem vzdělávání, vyčtete z grafů ve třetí
                části.
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
                oblastech a tématech s nejnižší úrovní s cílem pojmenovat
                kritéria pro výběr nového nástroje.
              </p>
            </li>
            <li>
              <p>
                Kde s mapováním začít a na co se zaměřit, vyčtete z grafů ve
                třetí části.
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </Text>
  </section>
);

const MarketplacePromo: Section = () => (
  <section className="p-10 bg-light-gray border-[1px] border-gray-300">
    <div className="max-w-prose m-auto">
      <h2 className="typo-head2">
        Máte téma, ale nevíte, co dál? Zkonzultujte další postup na Tržišti
      </h2>
      <Text>
        <p>
          <em>
            <i>Tržiště</i> je volně přístupné internetové fórum
          </em>
          , které provozuje organizace Česko.Digital. Neziskové organizace zde
          mohou <em>bezplatně poptávat dobrovolnickou i placenou pomoc</em> se
          vším, co se týká digitálních technologií.
        </p>
        <p>Zavítejte sem, pokud:</p>
        <ul className="list-disc">
          <li>váháte, jak na základě výsledků skenu postupovat dál,</li>
          <li>
            nebo už máte konkrétní zadání a{" "}
            <em>sháníte někoho, kdo vám pomůže s jeho realizací</em>.
          </li>
        </ul>
        <p>
          <mark>
            <em>
              Vytvořte nový příspěvek, popište, s čím potřebujete pomoct a
              počkejte na reakce.
            </em>
          </mark>
        </p>
      </Text>
      <p className="mt-10 text-center">
        <a
          href="https://trziste.diskutuj.digital"
          className="inline-block button"
        >
          Navštivte Tržiště
        </a>
      </p>
    </div>
  </section>
);

type Wrapper = ({ children }: { children: React.ReactNode }) => React.ReactNode;

const Text: Wrapper = ({ children }) => (
  <div className="flex flex-col gap-4">{children}</div>
);

const SubSection: Wrapper = ({ children }) => (
  <div className="not-last:mb-10">{children}</div>
);
