import React from 'react';

const StatCard = ({ number, label, description, color = "blue" }) => {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    green: "bg-green-50 border-green-200 text-green-800",
    orange: "bg-orange-50 border-orange-200 text-orange-800",
    purple: "bg-purple-50 border-purple-200 text-purple-800",
    red: "bg-red-50 border-red-200 text-red-800"
  };

  return (
    <div className={`p-6 rounded-lg border-2 ${colorClasses[color]} mb-4`}>
      <div className="text-3xl font-bold mb-2">{number}</div>
      <div className="text-lg font-semibold mb-1">{label}</div>
      {description && <div className="text-sm opacity-80">{description}</div>}
    </div>
  );
};

const DataTable = ({ headers, rows, caption }) => {
  return (
    <div className="overflow-x-auto mb-6">
      {caption && <p className="text-sm text-gray-600 mb-2">{caption}</p>}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header, i) => (
              <th key={i} className="border border-gray-300 px-4 py-2 text-left font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {row.map((cell, j) => (
                <td key={j} className="border border-gray-300 px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ScoreCard = ({ title, score, category, description, isStrong = false }) => {
  const bgColor = isStrong ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200";
  const textColor = isStrong ? "text-green-800" : "text-red-800";

  return (
    <div className={`p-4 rounded-lg border ${bgColor} mb-4`}>
      <div className="flex items-center justify-between mb-2">
        <h4 className={`typo-head4 ${textColor}`}>{title}</h4>
        <span className={`text-2xl font-bold ${textColor}`}>{score}</span>
      </div>
      <div className="text-sm text-gray-600 mb-2 italic">{category}</div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default function Report() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-balance">
          Většina neziskovek má solidní základ, ale jen 1 % dosahuje digitální špičky
        </h2>
        <p className="text-lg opacity-90 text-balance">
          Sonda do digitální vyspělosti 164 českých neziskových organizací odhalila jasné vzorce: silnou kulturu, slabé nástroje a velký potenciál
        </p>
      </div>

      {/* Key Statistics */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <StatCard number="164" label="analyzovaných organizací" color="blue" />
        <StatCard number="57%" label="má solidní základ" color="green" />
        <StatCard number="1%" label="dosahuje špičky" color="purple" />
      </div>

      {/* Sonda do digitální vyspělosti */}
      <section className="mb-12">
        <h2 className="typo-head2">Sonda do digitální vyspělosti</h2>
        <div>
          <p className="mb-4">
            Zjištění prezentovaná na tomto webu vycházejí z dat o <strong>164 neziskových organizacích</strong>,
            které jsme získali pomocí <strong>Skenu digitální vyspělosti</strong>. Tento nástroj mapuje aktuální
            stav organizace ve třech klíčových pilířích: <strong>kultura</strong> (postoje vedení),
            <strong>dovednosti</strong> (schopnosti lidí) a <strong>nástroje</strong> (technické vybavení).
          </p>
          <p>
            Cílem bylo zmapovat současný stav českého neziskového sektoru a identifikovat
            <strong> klíčové výzvy a příležitosti</strong> v oblasti digitalizace. Výsledky poskytují
            cenné poznatky o tom, kde sektor stojí a kam by se měl ubírat.
          </p>
          <p className="mt-4">
            <a
              href="#metodika"
              className="typo-link"
            >
              Více o způsobu sběru dat a metodice
            </a>
          </p>
        </div>
      </section>

      {/* Český neziskový sektor */}
      <section className="mb-12">
        <h2 className="typo-head2">Český neziskový sektor stojí na solidních základech s velkým potenciálem rozvoje</h2>
        <p className="mb-6">
          Pouze <strong>1 % organizací</strong> dosahuje inspirativní úrovně digitální vyspělosti a dalších
          <strong> 12 % vynikající praxe</strong>. Většina organizací (<strong>57 %</strong>) má
          <strong> solidní základy</strong>, ale má prostor pro výrazné zlepšení. Přibližně <strong>30 % organizací</strong> potřebuje výraznější podporu v digitalizaci.
        </p>

        <DataTable
          headers={["Úroveň digitální vyspělosti", "Počet organizací", "Podíl", "Kritérium"]}
          rows={[
            ["Inspirativní přístup", "1", "1%", "80% výroků s hodnocením 4.5+"],
            ["Vynikající praxe", "20", "12%", "75% výroků s hodnocením 4.0+"],
            ["Solidní základ", "93", "57%", "Průměr 3.0+ ve všech výrocích"],
            ["Dobrý začátek", "35", "21%", "Průměr 2.5+ ve všech výrocích"],
            ["Nevyužitý potenciál", "15", "9%", "Průměr pod 2.5 ve všech výrocích"]
          ]}
        />
      </section>

      {/* Silná kultura, slabé nástroje */}
      <section className="mb-12">
        <h2 className="typo-head2">Silná kultura, slabé nástroje: nerovnováha digitální vyspělosti</h2>
        <p className="mb-6">
          Analýza tří pilířů digitální vyspělosti odhalila <strong>jasnou hierarchii</strong>:
          <strong> Kultura</strong> (3,89 bodu) &gt; <strong>Dovednosti</strong> (3,29 bodu) &gt;
          <strong> Nástroje</strong> (2,73 bodu). Tento vzorec platí <strong>univerzálně napříč
          všemi typy</strong> organizací bez výjimky.
        </p>

        <h3 className="typo-head3">Hodnocení pilířů digitální vyspělosti</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <StatCard
            number="3,89"
            label="Kultura"
            description="postoje vedení (78%)"
            color="green"
          />
          <StatCard
            number="3,29"
            label="Dovednosti"
            description="schopnosti lidí (66%)"
            color="orange"
          />
          <StatCard
            number="2,73"
            label="Nástroje"
            description="technické vybavení (55%)"
            color="red"
          />
        </div>

        <h3 className="typo-head3">Srovnání podle typů organizací</h3>
        <DataTable
          headers={["Typ organizace", "Kultura", "Dovednosti", "Nástroje"]}
          rows={[
            ["Profesionální velké", "3,89", "3,32", "2,92"],
            ["Profesionální střední", "3,84", "3,20", "2,66"],
            ["Profesionální malé", "3,93", "3,20", "2,51"],
            ["Dobrovolnické velké", "3,83", "3,33", "2,79"],
            ["Dobrovolnické malé", "4,14", "3,64", "2,69"],
            ["Občanské organizace*", "3,75", "3,00", "2,25"]
          ]}
          caption="*Malý vzorek (4 organizace) - závěry mají omezenou vypovídací hodnotu."
        />

        <h3 className="typo-head3">Co to znamená</h3>
        <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          Vedení organizací chápe důležitost digitalizace, ale chybějí
          <strong> praktické dovednosti zaměstnanců</strong> a především <strong>technické nástroje</strong>.
          Investice do nástrojů a vzdělávání by měly být <strong>prioritou</strong>.
        </p>
      </section>

      {/* Oblast činnosti */}
      <section className="mb-12">
        <h2 className="typo-head2">Oblast činnosti jako prediktor digitální vyspělosti</h2>
        <div className="mb-6">
          <p className="mb-4">
            Analýza potvrdila, že <strong>oblast činnosti je silnějším prediktorem</strong> digitální vyspělosti
            než typ organizace. Rozptyl mezi oblastmi činnosti (<strong>10,6 bodu</strong>) je výrazně vyšší
            než mezi typy organizací (<strong>6,0 bodu</strong>).
          </p>
          <p className="mb-4">
            Analýza sedmi hlavních oblastí činnosti (s <strong>10 a více organizacemi</strong>) odhalila významné rozdíly v digitální vyspělosti. <strong>Největší rozdíl</strong> mezi nejlepšími a nejslabšími oblastmi činí <strong>30 bodů</strong>.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h4 className="typo-head4">Odchylky od průměru podle oblastí činnosti</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-green-200 rounded">
              <span>Lidská práva</span>
              <span className="font-bold text-green-800">+8,4%</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-green-100 rounded">
              <span>Vzdělávání</span>
              <span className="font-bold text-green-700">+6,8%</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-green-50 rounded">
              <span>Ochrana přírody</span>
              <span className="font-bold text-green-600">+3,6%</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
              <span>Sociální služby</span>
              <span className="font-bold text-gray-600">+1,3%</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-red-50 rounded">
              <span>Jiné</span>
              <span className="font-bold text-red-600">-3,3%</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-red-100 rounded">
              <span>Aktivity pro mládež</span>
              <span className="font-bold text-red-700">-4,4%</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-red-200 rounded">
              <span>Komunitní aktivity</span>
              <span className="font-bold text-red-800">-6,6%</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h4 className="typo-head4 text-green-800">Digitální lídři</h4>
            <p className="text-sm">
              Organizace zaměřené na systémovou práci (lidská práva, vzdělávání, ochrana přírody)
              potřebují pokročilejší digitální nástroje pro koordinaci, komunikaci a advokacii.
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h4 className="typo-head4 text-red-800">Digitálně zaostávající</h4>
            <p className="text-sm">
              Organizace zaměřené na přímé lokální služby (komunitní aktivity, aktivity pro mládež)
              čelí menšímu tlaku na digitalizaci kvůli charakteru své práce.
            </p>
          </div>
        </div>

        <h3 className="typo-head3">Co to znamená</h3>
        <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          Charakter činnosti organizace významně ovlivňuje digitální vyspělost. Při plánování digitalizace je třeba zohlednit <strong>specifika oboru</strong>. <strong>Systémově zaměřené organizace</strong> by měly investovat do pokročilejších nástrojů, zatímco <strong>lokálně zaměřené organizace</strong> mohou začít se základními řešeními.
        </p>
      </section>

      {/* Týmová spolupráce */}
      <section className="mb-12">
        <h2 className="typo-head2">Týmová spolupráce ano, analytické nástroje ne</h2>
        <p className="mb-6">
          Analýza výroků odhalila <strong>jasné vzorce napříč sektorem</strong>. Sektor má dobré základy
          v <strong>kultuře a základních procesech</strong>, ale výrazně zaostává v
          <strong> pokročilých analytických nástrojích</strong>. Čísla v následujících kartách ukazují průměrné hodnocení jednotlivých výroků všemi organizacemi.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg border mb-6">
          <h4 className="typo-head4">Způsob hodnocení výroků</h4>
          <p className="text-sm mb-3">
            Sken digitální vyspělosti obsahuje 60 výroků, které popisují optimální způsoby fungování neziskových organizací. Organizace při vyplňování hodnotily výroky na škále 1–5, kde 1 = výrok vůbec neodpovídá aktuálnímu stavu organizace a 5 = výrok naprosto odpovídá aktuálnímu stavu organizace.
          </p>
          <p className="text-sm">
            Výroky jsou rozděleny do 4 tematických oblastí: Komunikace & Spolupráce, Procesy & Automatizace, Bezpečnost & Flexibilita a Učení & Rozvoj.
          </p>
          <p className="text-sm mt-2">
            Každá oblast je hodnocena ze 3 perspektiv: Kultura (postoje vedení), Dovednosti (schopnosti lidí) a Nástroje (technické vybavení).
          </p>
        </div>

        <div className="mb-8">
          <h3 className="typo-head3 text-green-700">Nejsilnější stránky sektoru</h3>
          <div className="space-y-4">
            <ScoreCard
              title="Evidence a transparentnost"
              score="4,18"
              category="Procesy & Automatizace"
              description="Většina lidí na vedoucích pozicích je přesvědčena, že systematická evidence lidí, majetku, dokumentů a financí je základem pro transparentní a zodpovědné řízení organizace"
              isStrong={true}
            />
            <ScoreCard
              title="Týmová spolupráce"
              score="4,17"
              category="Komunikace & Spolupráce"
              description="Většina lidí na vedoucích pozicích je přesvědčena, že nejlepší výsledky vznikají při týmové spolupráci"
              isStrong={true}
            />
            <ScoreCard
              title="Zálohování dat"
              score="4,14"
              category="Bezpečnost & Flexibilita"
              description="Většina lidí na vedoucích pozicích je přesvědčena, že pravidelné zálohování je nezbytnou pojistkou proti technickým selháním a lidským chybám"
              isStrong={true}
            />
            <ScoreCard
              title="Zápisy ze schůzek"
              score="4,12"
              category="Komunikace & Spolupráce"
              description="Většina lidí na vedoucích pozicích je přesvědčena, že zapisování na schůzkách je způsob, jak předejít nedorozuměním a zrychlit budoucí rozhodování"
              isStrong={true}
            />
            <ScoreCard
              title="Vzdálená práce"
              score="4,10"
              category="Bezpečnost & Flexibilita"
              description="Většina lidí na relevantních pozicích umí samostatně plánovat svou práci, na dálku udržovat kontakt s týmem a produktivně pracovat mimo kancelář"
              isStrong={true}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="typo-head3 text-red-700">Nejslabší stránky sektoru</h3>
          <div className="space-y-4">
            <ScoreCard
              title="Analytické nástroje"
              score="1,55"
              category="Procesy & Automatizace"
              description="Máme nástroj nebo sadu nástrojů, kterou používáme pro volné procházení, analýzu a vizualizaci dat o dopadu aktivit organizace, aniž bychom museli data ručně importovat z jednotlivých databází nebo nástrojů"
              isStrong={false}
            />
            <ScoreCard
              title="Měření návratnosti investic"
              score="1,56"
              category="Učení & Rozvoj"
              description="Máme nástroje, které používáme pro sledování nákladů na technologie, měření jejich přínosů a výpočet návratnosti investic do digitálního rozvoje"
              isStrong={false}
            />
            <ScoreCard
              title="Sledování času"
              score="1,56"
              category="Učení & Rozvoj"
              description="Máme nástroje pro měření času stráveného na úkolech, které používáme pro automatické sbírání dat o tom, jak dlouho co trvá"
              isStrong={false}
            />
            <ScoreCard
              title="Propojení systémů"
              score="1,90"
              category="Procesy & Automatizace"
              description="Máme propojené nástroje, takže se všechna data zadávají pouze jednou a automaticky se synchronizují do všech dalších relevantních aplikací"
              isStrong={false}
            />
            <ScoreCard
              title="Bezpečné učení"
              score="2,05"
              category="Učení & Rozvoj"
              description="Máme přístup k online vzdělávání a k testovacímu prostředí, které používáme pro zkoušení nových nástrojů"
              isStrong={false}
            />
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
          <h4 className="typo-head4 text-yellow-800">Klíčové pozorování</h4>
          <p className="text-sm">
            Sektor výrazně zaostává v <strong>pokročilých analytických nástrojích</strong>,
            <strong> automatizaci</strong> a <strong>měření výkonu</strong>. Tyto oblasti představují
            <strong> největší příležitost pro zlepšení</strong> a měly by být prioritou při plánování
            investic do digitalizace.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg text-center mb-12">
        <h3 className="typo-head3">Sondou to nekončí, ale začíná</h3>
        <p className="mb-6">
          Máme nápady, jak neziskovkám pomáhat v klíčových tématech. Pomozte nám pochopit,
          jakou formu pomoci oceníte nejvíce a jaké kroky by pro vaši organizaci byly nejpřínosnější.
        </p>
        <p className='my-2'>
        <a className="button button-light" href="https://forms.fillout.com/t/pzoWoXPD8tus" target='_blank'>
          Vyplnit dotazník
        </a>
        </p>
      </div>

      {/* Správa IT */}
      <section className="mb-12">
        <h2 className="typo-head2">Správa IT infrastruktury rozhoduje o digitální vyspělosti</h2>
        <p className="mb-6">
          Analýza souvislostí mezi provozními charakteristikami a digitální vyspělostí odhalila
          <strong> tři klíčové faktory</strong>, které nejvíce ovlivňují úroveň digitalizace organizace.
        </p>

        <DataTable
          headers={["Charakteristika", "Rozdíl v digitální vyspělosti", "Praktický dopad"]}
          rows={[
            ["Správa IT infrastruktury", "41 bodů", "Organizace s interní IT pozicí (214 bodů) vs. organizace, které IT neřeší (173 bodů)"],
            ["Vyhrazené prostředky na IT", "26 bodů", "Organizace s vyhrazenými prostředky (213 bodů) vs. bez nich (187 bodů)"],
            ["Využívání dotací", "18 bodů", "Organizace využívající dotace (205 bodů) vs. nevyužívající (187 bodů)"]
          ]}
        />

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <h4 className="typo-head4 text-blue-800">Hlavní zjištění</h4>
          <p className="text-sm">
            Investice do <strong>systematické správy IT</strong> (vlastní specialista nebo kvalitní externí služba)
            a <strong>vyhrazování prostředků na IT</strong> v rozpočtu jsou klíčové kroky pro zvýšení digitální vyspělosti.
          </p>
        </div>
      </section>

      {/* Celostátní organizace */}
      <section className="mb-12">
        <h2 className="typo-head2">Celostátní organizace mají systematičtější přístup k digitalizaci</h2>
        <p className="mb-6">
          Analýza <strong>66 celostátně působících</strong> a <strong>98 regionálních</strong> organizací
          odhalila významné rozdíly v přístupu k digitalizaci a charakteru činnosti.
        </p>

        <DataTable
          headers={["Charakteristika", "Celostátní organizace", "Regionální organizace"]}
          rows={[
            ["Digitální vyspělost", "202 bodů", "196 bodů"],
            ["Vyhrazené prostředky na IT", "49%", "38%"],
            ["Interní IT pozice", "15%", "22%"],
            ["Externí IT služby", "32%", "19%"],
            ["Dominantní oblast činnosti", "Diverzifikované (max. 15%)", "Sociální služby (40%)"]
          ]}
        />

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <h4 className="typo-head4 text-blue-800">Co z toho vyplývá</h4>
          <p className="text-sm">
            <strong>Celostátní organizace</strong> častěji využívají externí IT služby a mají
            <strong> systematičtější přístup k IT investicím</strong>. <strong>Regionální organizace</strong>
            častěji spoléhají na vlastní IT specialisty a zaměřují se na <strong>přímé služby</strong>.
            Obě cesty jsou validní, ale vyžadují různé přístupy k digitální podpoře.
          </p>
        </div>
      </section>

      {/* Strategická doporučení */}
      <section className="mb-12">
        <h2 className="typo-head2">Strategická doporučení pro zvýšení digitální vyspělosti sektoru</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="typo-head4">Investice do IT infrastruktury</h4>
              <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside">
                <li>Podporovat vytváření interních IT pozic</li>
                <li>Prosazovat vyhrazování prostředků na IT</li>
                <li>Nabízet grantové programy na digitalizaci</li>
              </ul>
            </div>

            <div>
              <h4 className="typo-head4">Rozvoj dovedností</h4>
              <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside">
                <li>Vzdělávací programy pro zaměstnance</li>
                <li>Výměna zkušeností mezi organizacemi</li>
                <li>Mentoring programy</li>
              </ul>
            </div>

            <div>
              <h4 className="typo-head4">Pokročilé nástroje</h4>
              <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside">
                <li>Nástroje pro analýzu dat a měření dopadu</li>
                <li>Automatizace rutinních procesů</li>
                <li>Sdílené zdroje pro menší organizace</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="typo-head4">Diferenciovaná podpora</h4>
              <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside">
                <li>Přizpůsobit podporu specifickým potřebám</li>
                <li>Systémové organizace - pokročilé nástroje</li>
                <li>Lokální organizace - základní dovednosti</li>
              </ul>
            </div>

            <div>
              <h4 className="typo-head4">Grantová politika</h4>
              <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside">
                <li>Rozšířit dostupnost grantů</li>
                <li>Dlouhodobé programy transformace</li>
                <li>Systematický přístup k digitalizaci</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metodika */}
      <section className="mb-12" id="metodika">
        <h2 className="typo-head2">Metodika a struktura vzorku</h2>
        <div className="space-y-6">
          <div>
            <h3 className="typo-head3">Sken digitální vyspělosti</h3>
            <p className="text-sm text-gray-600 mb-4">
              Data byla získána prostřednictvím Skenu digitální vyspělosti, který hodnotí organizace
              ve čtyřech tematických oblastech: <strong>Komunikace & Spolupráce</strong>,
              <strong> Procesy & Automatizace</strong>, <strong>Bezpečnost & Flexibilita</strong>,
              a <strong>Učení & Rozvoj</strong>. Každá oblast je posuzována ze tří perspektiv: <strong>Kultura</strong> (postoje vedení), <strong>Dovednosti</strong> (schopnosti lidí), a <strong>Nástroje</strong> (technické vybavení).
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Sken obsahuje 60 výroků, které respondenti hodnotí na škále 1–5, kde 1 = výrok vůbec neodpovídá aktuálnímu stavu organizace a 5 = výrok naprosto odpovídá aktuálnímu stavu organizace.
            </p>
            <p className="text-sm">
              <a
                href="https://docs.google.com/spreadsheets/d/1Jba9Tc-zqiPvaITtFw67Qta07aWirSzPixlpz_3ABHs/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="typo-link"
              >
                Podívejte se na kompletní seznam hodnocených výroků
              </a>
            </p>
          </div>

          <div>
            <h3 className="typo-head3">Typologie organizací</h3>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Profesionální organizace</strong> = činnost organizace zajišťují převážně lidé, kteří jsou za to placení
            </p>
            <ul className="text-sm text-gray-600 mb-4 list-disc list-inside">
              <li><strong>Malé:</strong> do 10 lidí</li>
              <li><strong>Střední:</strong> 11–50 lidí</li>
              <li><strong>Velké:</strong> více než 50 lidí</li>
            </ul>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Dobrovolnické organizace</strong> = činnost organizace zajišťují převážně lidé, kteří za to nejsou placení, s podporou malého placeného týmu
            </p>
            <ul className="text-sm text-gray-600 mb-4 list-disc list-inside">
              <li><strong>Malé:</strong> do 10 lidí</li>
              <li><strong>Velké:</strong> více než 10 lidí</li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Občanské organizace</strong> = činnost organizace zajišťují pouze lidé, kteří za to nejsou placení
            </p>
          </div>

          <div>
            <h3 className="typo-head3">Struktura vzorku</h3>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Celkový vzorek:</strong> 164 organizací (data sbírána v červnu 2025)
            </p>
            <ul className="text-sm text-gray-600 mb-4 list-disc list-inside">
              <li><strong>Průměrné celkové skóre:</strong> 198 bodů (medián: 196 bodů)</li>
              <li><strong>Rozsah skóre:</strong> 73–290 bodů</li>
            </ul>

            <h4 className="typo-head4">Podle typu organizace:</h4>
            <DataTable
              headers={["Typ organizace", "Počet", "Průměrné skóre", "Medián"]}
              rows={[
                ["Profesionální střední", "69", "191", "189"],
                ["Profesionální velké", "38", "208", "205"],
                ["Profesionální malé", "27", "188", "185"],
                ["Dobrovolnické velké", "16", "198", "195"],
                ["Dobrovolnické malé", "10", "205", "203"],
                ["Občanské organizace*", "4", "168", "165"]
              ]}
              caption="*Malý vzorek (4 organizace) - závěry mají omezenou vypovídací hodnotu."
            />

            <h4 className="typo-head4">Podle oblasti činnosti (hlavní oblasti):</h4>
            <DataTable
              headers={["Oblast činnosti", "Počet", "Průměrné skóre", "Medián"]}
              rows={[
                ["Sociální služby", "46", "201", "198"],
                ["Ochrana přírody a životního prostředí", "16", "205", "202"],
                ["Jiné vzdělávací a školící aktivity", "14", "212", "210"],
                ["Aktivity pro mládež", "13", "190", "188"],
                ["Aktivity v oblasti lidských práv", "10", "215", "213"],
                ["Komunitní aktivity a rozvoj území", "10", "185", "183"]
              ]}
            />
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h4 className="typo-head4 text-yellow-800">Metodické limity</h4>
            <p className="text-sm mb-3">
              <strong>Reprezentativnost vzorku:</strong> Vzorek není reprezentativní pro celý český neziskový sektor. Účast byla dobrovolná, což může vést k nadreprezentaci digitálně aktivnějších organizací.
            </p>
            <p className="text-sm mb-3">
              <strong>Samohodnocení:</strong> Data vycházejí ze samohodnocení organizací bez externího ověření, což může vést k nadhodnocení nebo podhodnocení skutečného stavu.
            </p>
            <p className="text-sm mb-3">
              <strong>Velikost segmentů:</strong> Některé segmenty obsahují malý počet organizací (např. občanské organizace, některé kraje a oblasti činnosti pod 10 organizací), což omezuje zobecnitelnost závěrů pro tyto skupiny.
            </p>
            <p className="text-sm">
              <strong>Časový rámec:</strong> Data byla sbírána v červnu 2025 a odrážejí stav organizací v tomto období.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}