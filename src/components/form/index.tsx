export default function Form() {
  return (
    <form
      className="relative overflow-hidden rounded-2xl border border-[#364f38]/15 bg-white p-6 shadow-[0_10px_35px_-20px_rgba(15,23,42,0.35)] sm:p-8"
      onSubmit={(event) => event.preventDefault()}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#364f38]/8 to-transparent"
        aria-hidden="true"
      />

      <div className="relative grid gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364f38]">
            Contacto directo
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            Contanos tu objetivo de inversión
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Completá el formulario y armamos una propuesta alineada a tu perfil.
          </p>
        </div>

        <div>
          <label
            htmlFor="contact-name"
            className="text-sm font-semibold tracking-wide text-slate-800"
          >
            Nombre completo
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Tu nombre"
            className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#364f38]/60 focus:ring-4 focus:ring-[#364f38]/15"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-email"
              className="text-sm font-semibold tracking-wide text-slate-800"
            >
              Correo electrónico
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="tu@correo.com"
              className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#364f38]/60 focus:ring-4 focus:ring-[#364f38]/15"
            />
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="text-sm font-semibold tracking-wide text-slate-800"
            >
              Teléfono
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="+34 ..."
              className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#364f38]/60 focus:ring-4 focus:ring-[#364f38]/15"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="text-sm font-semibold tracking-wide text-slate-800"
          >
            Mensaje
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Contanos sobre tu consulta, importe estimado y zona de interés..."
            className="mt-2 w-full resize-none rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#364f38]/60 focus:ring-4 focus:ring-[#364f38]/15"
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#364f38]/25 bg-[#364f38] px-5 py-3.5 text-base font-semibold text-white transition hover:bg-[#2f4431] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#364f38]/40"
        >
          <span>Enviar consulta</span>
          <span aria-hidden="true">→</span>
        </button>

        <p className="text-center text-xs leading-relaxed text-slate-500">
          Al enviar este formulario aceptás ser contactado para responder tu
          consulta.
        </p>
      </div>
    </form>
  );
}
