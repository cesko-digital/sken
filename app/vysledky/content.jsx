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
        <h4 className={`font-semibold ${textColor}`}>{title}</h4>
        <span className={`text-2xl font-bold ${textColor}`}>{score}</span>
      </div>
      <div className="text-sm text-gray-600 mb-2 italic">{category}</div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default function NeziskovkyReport() {
  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">
          Většina neziskovek má solidní základ, ale jen 1 % dosahuje digitální špičky
        </h1>
        <p className="text-lg opacity-90">
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
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sonda do digitální vyspělosti</h2>
        <div>
          <p className="mb-4">
            Zjištění prezentovaná na tomto webu vycházejí z dat o <strong>164 neziskových organizacích</strong>,
            které jsme získali pomocí <strong>Skenu digitální vyspělosti</strong>. Tento nástroj mapuje aktuální
            stav organizace ve třech klíčových pilířích: <strong>kultura</strong> (postoje vedení),
            <strong>dovednosti</strong> (schopnosti lidí) a <strong>nástroje</strong> (technické vybavení).
          </p>
          <p>
            Cílem bylo zmapovat současný stav českého neziskového sektoru a identifikovat
            <strong> klíčové výzvy a příležitosti</strong> v oblasti digitalizace.
          </p>
        </div>
      </section>

      {/* Český neziskový sektor */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Český neziskový sektor stojí na solidních základech</h2>
        <p className="mb-6">
          Pouze <strong>1 % organizací</strong> dosahuje inspirativní úrovně digitální vyspělosti a dalších
          <strong> 12 % vynikající praxe</strong>. Většina organizací (<strong>57 %</strong>) má
          <strong> solidní základy</strong>, ale má prostor pro výrazné zlepšení.
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
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Silná kultura, slabé nástroje</h2>
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

        <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-6">
          <strong>Co to znamená:</strong> Vedení organizací chápe důležitost digitalizace, ale chybějí
          <strong> praktické dovednosti zaměstnanců</strong> a především <strong>technické nástroje</strong>.
          Investice do nástrojů a vzdělávání by měly být <strong>prioritou</strong>.
        </p>

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
      </section>

      {/* Oblast činnosti */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Oblast činnosti jako prediktor digitální vyspělosti</h2>
        <div className="mb-6">
          <p className="mb-4">
            Analýza potvrdila, že <strong>oblast činnosti je silnějším prediktorem</strong> digitální vyspělosti
            než typ organizace. Rozptyl mezi oblastmi činnosti (<strong>10,6 bodu</strong>) je výrazně vyšší
            než mezi typy organizací (<strong>6,0 bodu</strong>).
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-4">Odchylky od průměru podle oblastí činnosti</h4>
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

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h4 className="font-semibold text-green-800 mb-2">Digitální lídři</h4>
            <p className="text-sm">
              Organizace zaměřené na systémovou práci (lidská práva, vzdělávání, ochrana přírody)
              potřebují pokročilejší digitální nástroje pro koordinaci, komunikaci a advokacii.
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h4 className="font-semibold text-red-800 mb-2">Digitálně zaostávající</h4>
            <p className="text-sm">
              Organizace zaměřené na přímé lokální služby (komunitní aktivity, aktivity pro mládež)
              čelí menšímu tlaku na digitalizaci kvůli charakteru své práce.
            </p>
          </div>
        </div>
      </section>

      {/* Týmová spolupráce */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Týmová spolupráce ano, analytické nástroje ne</h2>
        <p className="mb-6">
          Analýza výroků odhalila <strong>jasné vzorce napříč sektorem</strong>. Sektor má dobré základy
          v <strong>kultuře a základních procesech</strong>, ale výrazně zaostává v
          <strong> pokročilých analytických nástrojích</strong>.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-green-700">Nejsilnější stránky sektoru</h3>
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
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-red-700">Nejslabší stránky sektoru</h3>
          <div className="space-y-4">
            <ScoreCard
              title="Analytické nástroje"
              score="1,55"
              category="Procesy & Automatizace"
              description="Máme nástroj nebo sadu nástrojů, kterou používáme pro volné procházení, analýzu a vizualizaci dat o dopadu aktivit organizace"
              isStrong={false}
            />
            <ScoreCard
              title="Měření návratnosti investic"
              score="1,56"
              category="Učení & Rozvoj"
              description="Máme nástroje, které používáme pro sledování nákladů na technologie, měření jejich přínosů a výpočet návratnosti investic"
              isStrong={false}
            />
            <ScoreCard
              title="Sledování času"
              score="1,56"
              category="Učení & Rozvoj"
              description="Máme nástroje pro měření času stráveného na úkolech, které používáme pro automatické sbírání dat"
              isStrong={false}
            />
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
          <h4 className="font-semibold text-yellow-800 mb-2">Klíčové pozorování</h4>
          <p className="text-sm">
            Sektor výrazně zaostává v <strong>pokročilých analytických nástrojích</strong>,
            <strong> automatizaci</strong> a <strong>měření výkonu</strong>. Tyto oblasti představují
            <strong> největší příležitost pro zlepšení</strong> a měly by být prioritou při plánování
            investic do digitalizace.
          </p>
        </div>
      </section>

      {/* Správa IT */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Správa IT infrastruktury rozhoduje</h2>
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
          <h4 className="font-semibold text-blue-800 mb-2">Hlavní zjištění</h4>
          <p className="text-sm">
            Investice do <strong>systematické správy IT</strong> (vlastní specialista nebo kvalitní externí služba)
            a <strong>vyhrazování prostředků na IT</strong> v rozpočtu jsou klíčové kroky pro zvýšení digitální vyspělosti.
          </p>
        </div>
      </section>

      {/* Strategická doporučení */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Strategická doporučení</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Investice do IT infrastruktury</h4>
              <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside">
                <li>Podporovat vytváření interních IT pozic</li>
                <li>Prosazovat vyhrazování prostředků na IT</li>
                <li>Nabízet grantové programy na digitalizaci</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Rozvoj dovedností</h4>
              <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside">
                <li>Vzdělávací programy pro zaměstnance</li>
                <li>Výměna zkušeností mezi organizacemi</li>
                <li>Mentoring programy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Pokročilé nástroje</h4>
              <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside">
                <li>Nástroje pro analýzu dat a měření dopadu</li>
                <li>Automatizace rutinních procesů</li>
                <li>Sdílené zdroje pro menší organizace</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Diferenciovaná podpora</h4>
              <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside">
                <li>Přizpůsobit podporu specifickým potřebám</li>
                <li>Systémové organizace - pokročilé nástroje</li>
                <li>Lokální organizace - základní dovednosti</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Grantová politika</h4>
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
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Metodika a struktura vzorku</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Sken digitální vyspělosti</h3>
            <p className="text-sm text-gray-600 mb-4">
              Data byla získána prostřednictvím Skenu digitální vyspělosti, který hodnotí organizace
              ve čtyřech tematických oblastech: <strong>Komunikace & Spolupráce</strong>,
              <strong> Procesy & Automatizace</strong>, <strong>Bezpečnost & Flexibilita</strong>,
              a <strong>Učení & Rozvoj</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Struktura vzorku</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <StatCard
                number="164"
                label="organizací"
                description="data sbírána v červnu 2025"
                color="blue"
              />
              <StatCard
                number="198"
                label="průměrné skóre"
                description="medián: 196 bodů"
                color="green"
              />
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h4 className="font-semibold text-yellow-800 mb-2">Metodické limity</h4>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Vzorek není reprezentativní pro celý český neziskový sektor</li>
              <li>Data vycházejí ze samohodnocení organizací</li>
              <li>Některé segmenty obsahují malý počet organizací</li>
              <li>Data odrážejí stav organizací v červnu 2025</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-4">Sondou to nekončí, ale začíná</h3>
        <p className="mb-4">
          Máme nápady, jak neziskovkám pomáhat v klíčových tématech. Pomozte nám pochopit,
          jakou formu pomoci oceníte nejvíce.
        </p>
        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Vyplnit dotazník
        </button>
      </div>
    </div>
  );
}