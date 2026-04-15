type MarketPointProps = {
  title: string;
  description: string;
  index: string;
};

function MarketPoint({ title, description, index }: MarketPointProps) {
  return (
    <div className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#364f38]/10 text-sm font-bold text-[#364f38]">
          {index}
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">
            {title}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-slate-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function State() {
  return (
    <section id="market" className="w-full bg-white">
      <div className="mx-auto max-w-[1126px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#364f38] sm:text-4xl">
              Mercado inmobiliario español
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Factores clave que impulsan la creación de valor a largo plazo en
              España, con un enfoque estratégico en las Islas Baleares.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2">
            <MarketPoint
              index="1"
              title="Alta demanda"
              description="Demanda fuerte y sostenida de compradores nacionales e internacionales, especialmente en ubicaciones prime y costeras."
            />
            <MarketPoint
              index="2"
              title="Oferta limitada"
              description="La disponibilidad de suelo restringida y las limitaciones regulatorias generan una escasez estructural, impulsando el crecimiento del valor."
            />
            <MarketPoint
              index="3"
              title="Crecimiento del capital"
              description="El inmobiliario se mantiene como una clase de activo resiliente, preservando el capital y aumentando su valor de forma consistente en el tiempo."
            />
            <MarketPoint
              index="4"
              title="Entorno de inversión atractivo"
              description="España ofrece un mercado estable y atractivo. Aunque Baleares es un foco clave, las oportunidades en el resto del país permiten diversificar y acceder a activos con alto potencial."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
