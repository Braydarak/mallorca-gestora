type ValueCardProps = {
  title: string;
  description: string;
};

function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/15">
      <h3 className="text-lg font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-white/85">
        {description}
      </p>
    </div>
  );
}

export default function Goals() {
  return (
    <section
      id="goals"
      className="relative w-full overflow-hidden bg-[#364f38] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/12 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-[380px] w-[380px] rounded-full bg-black/15 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[440px] w-[440px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1126px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Misión y visión
          </h2>

          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:items-start lg:gap-12">
            <div className="text-left">
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                Preservar y hacer crecer el capital mediante inversiones
                inmobiliarias disciplinadas, combinando visión estratégica,
                conocimiento técnico y una gestión cercana y activa.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
                Nos enfocamos en crear valor a través de proyectos bien
                estructurados y cuidadosamente ejecutados.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-1">
              <ValueCard
                title="Experiencia"
                description="Trayectoria sólida en el sector inmobiliario, construcción y gestión de inversiones, para tomar decisiones informadas y estratégicas."
              />
              <ValueCard
                title="Transparencia"
                description="Estructuras claras, intereses alineados y visibilidad total en cada etapa de la inversión."
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2">
            <ValueCard
              title="Fiabilidad"
              description="Un enfoque serio, comprometido y orientado a resultados, enfocado en ofrecer un desempeño consistente."
            />
            <ValueCard
              title="Objetivo y perspectiva"
              description="Nuestra visión es ser reconocidos como una oficina familiar inmobiliaria de confianza, conocida por una disciplina de inversión, una ejecución sólida y retornos de capital consistentes."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
