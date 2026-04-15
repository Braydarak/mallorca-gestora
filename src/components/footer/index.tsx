export default function Footer() {
  return (
    <footer className="w-full bg-[#364f38] text-white">
      <div className="mx-auto max-w-[1126px] px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 py-10">
          <div className="flex flex-col items-center gap-5">
            <img
              src="/logo.png"
              alt="Mallorca Gestora"
              className="h-8 w-auto select-none sm:h-9 filter-[brightness(0)_invert(1)]"
              draggable={false}
            />

            <p className="max-w-3xl text-center text-base leading-relaxed text-white/90 sm:text-lg">
              Una oficina privada de inversión inmobiliaria enfocada en la
              creación de valor, la ejecución disciplinada de proyectos y la
              gestión estratégica de activos.
            </p>

            <nav
              aria-label="Legal"
              className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            >
              <a
                href="#aviso-legal"
                className="text-sm font-semibold tracking-wide text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#364f38]"
              >
                Aviso legal
              </a>
              <a
                href="#politica-de-cookies"
                className="text-sm font-semibold tracking-wide text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#364f38]"
              >
                Política de cookies
              </a>
              <a
                href="#privacidad"
                className="text-sm font-semibold tracking-wide text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#364f38]"
              >
                Privacidad
              </a>
            </nav>

            <p className="text-center text-sm font-medium tracking-wide text-white/70">
              © {new Date().getFullYear()} Mallorca Gestora
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
