import { useId, useMemo, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

function HeaderLink({ href, label }: NavItem) {
  return (
    <a
      href={href}
      className="rounded-md px-3 py-2 text-base font-semibold tracking-wide text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#364f38]"
    >
      {label}
    </a>
  );
}

export default function Header() {
  const menuId = useId();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leftItems = useMemo<NavItem[]>(
    () => [
      { label: "Oportunidades", href: "#investment" },
      { label: "Proyectos", href: "#projects" },
    ],
    [],
  );

  const rightItems = useMemo<NavItem[]>(
    () => [
      { label: "Sobre Nosotros", href: "#about-us" },
      { label: "Contacto", href: "#contact" },
    ],
    [],
  );

  const mobileItems = useMemo(
    () => [...leftItems, ...rightItems],
    [leftItems, rightItems],
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-[#364f38] text-white shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)]">
      <div className="mx-auto max-w-[1126px] px-4 sm:px-6 lg:px-8">
        <div className="grid h-20 grid-cols-3 items-center border-b border-white/10">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#364f38] lg:hidden"
              aria-controls={menuId}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <span className="sr-only">Abrir menú</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>

            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Navegación izquierda"
            >
              {leftItems.map((item) => (
                <HeaderLink key={item.label} {...item} />
              ))}
            </nav>
          </div>

          <a
            href="#"
            className="flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#364f38]"
          >
            <img
              src="/logo.png"
              alt="Mallorca Gestora"
              className="h-10 w-auto select-none sm:h-11 filter-[brightness(0)_invert(1)]"
              draggable={false}
            />
          </a>

          <div className="flex items-center justify-end">
            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Navegación derecha"
            >
              {rightItems.map((item) => (
                <HeaderLink key={item.label} {...item} />
              ))}
            </nav>
          </div>
        </div>

        <div
          id={menuId}
          className={[
            "lg:hidden",
            "overflow-hidden",
            "transition-[max-height,opacity] duration-200 ease-out",
            isMobileMenuOpen
              ? "max-h-96 pb-4 opacity-100"
              : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <nav className="grid gap-2 pt-3" aria-label="Navegación móvil">
            {mobileItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-base font-semibold tracking-wide text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#364f38]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
