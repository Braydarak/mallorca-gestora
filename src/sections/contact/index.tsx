import Form from "../../components/form";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-white">
      <div className="mx-auto max-w-[1126px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#364f38] sm:text-4xl">
              Contacto
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              Si querés conocer más sobre nuestros proyectos, oportunidades o
              enfoque de inversión, completá el formulario y te contactamos.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              Acompañamos a cada inversor con un enfoque personalizado, desde la
              primera conversación hasta la ejecución de cada operación.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-xl border border-[#364f38]/15 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364f38]">
                  Tiempo de respuesta
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  Respondemos consultas en un plazo estimado de 24 a 48 horas
                  hábiles.
                </p>
              </div>

              <div className="rounded-xl border border-[#364f38]/15 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364f38]">
                  Qué incluir en tu mensaje
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  Tipo de inversión, importe aproximado, zona de interés y
                  objetivo de rentabilidad.
                </p>
              </div>

              <div className="rounded-xl border border-[#364f38]/15 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364f38]">
                  Cobertura
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  Baleares como foco principal, con oportunidades selectivas en
                  distintos mercados de España.
                </p>
              </div>
            </div>
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
}
