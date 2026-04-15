import heroImg from "../../assets/hero.png";

type PillProps = {
  title: string;
  description: string;
};

function Pill({ title, description }: PillProps) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold tracking-tight text-[#364f38]">
        {title}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-slate-700">
        {description}
      </p>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section id="about-us" className="w-full bg-white">
      <div className="mx-auto max-w-[1126px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#364f38] sm:text-4xl">
          Sobre nosotros
        </h2>

        <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          <div className="text-left">
            <p className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Mallorca Gestora de Capital
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
              Mallorca Gestora de Capital es una oficina familiar privada
              enfocada en la inversión y el desarrollo inmobiliario en España,
              con una orientación estratégica en las Islas Baleares.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              Identificamos, estructuramos y gestionamos oportunidades de alto
              valor, combinando capital, experiencia y una visión clara para
              impulsar inversiones sólidas y rigurosamente ejecutadas.
            </p>
          </div>

          <div className="grid gap-6">
            <img
              src={heroImg}
              alt=""
              className="h-56 w-full rounded-2xl object-cover shadow-sm sm:h-72"
              style={{ objectPosition: "50% 40%" }}
              draggable={false}
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2">
          <Pill
            title="Desarrollo integrado"
            description="Supervisamos cada fase del proyecto para garantizar control, calidad y eficiencia."
          />
          <Pill
            title="Inversión selectiva"
            description="Priorizamos oportunidades cuidadosamente analizadas, con fundamentos sólidos y alto potencial de revalorización."
          />
        </div>
      </div>
    </section>
  );
}
