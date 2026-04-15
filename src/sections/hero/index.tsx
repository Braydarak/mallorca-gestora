type NavItem = {
  label: string;
  href: string;
};

function HeroLink({ href, label }: NavItem) {
  return (
    <a
      href={href}
      className="rounded-md px-4 py-2.5 text-lg font-semibold tracking-wide text-white transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-3xl"
    >
      {label}
    </a>
  );
}

export default function Hero() {
  const navItems: NavItem[] = [
    { label: "Inicio", href: "#" },
    { label: "Sobre Nosotros", href: "#about-us" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative flex min-h-svh items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-[1126px] flex-col items-center gap-10">
          <a
            href="#"
            className="flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <img
              src="/logo.png"
              alt="Mallorca Gestora"
              className="h-20 w-auto select-none sm:h-40 filter-[brightness(0)_invert(1)]"
              draggable={false}
            />
          </a>

          <p className="max-w-4xl rounded-lg bg-black/20 px-6 py-5 text-center text-base font-medium leading-relaxed text-white/90 backdrop-blur-sm sm:px-8 sm:py-6 sm:text-lg lg:text-xl">
            Una oficina privada de inversión inmobiliaria enfocada en la
            creación de valor, la ejecución disciplinada de proyectos y la
            gestión estratégica de activos.
          </p>

          <nav
            className="flex flex-wrap items-center justify-center gap-3"
            aria-label="Navegación"
          >
            {navItems.map((item) => (
              <HeroLink key={item.label} {...item} />
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
