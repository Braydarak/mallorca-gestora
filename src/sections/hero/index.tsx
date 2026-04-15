import { useMemo } from "react";
import { useTranslation } from "react-i18next";

type NavItem = {
  label: string;
  href: string;
};

function HeroLink({ href, label }: NavItem) {
  return (
    <a
      href={href}
      className="inline-flex w-full items-center justify-center rounded-md bg-white/10 px-5 py-3 text-lg font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto sm:rounded-none sm:bg-transparent sm:px-4 sm:py-2.5 sm:backdrop-blur-none sm:hover:bg-transparent sm:hover:underline sm:hover:decoration-white/80 sm:underline-offset-4 sm:text-2xl lg:text-3xl"
    >
      {label}
    </a>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const navItems: NavItem[] = useMemo(
    () => [
      { label: t("hero.nav.about"), href: "#about-us" },
      { label: t("hero.nav.investment"), href: "#investment" },
      { label: t("hero.nav.projects"), href: "#projects" },
      { label: t("hero.nav.contact"), href: "#contact" },
    ],
    [t],
  );

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
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/25 to-black/70" />
      </div>

      <div className="relative flex min-h-svh items-center justify-center px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex w-full max-w-[1126px] flex-col items-center gap-8 sm:gap-10">
          <a
            href="#"
            className="flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <img
              src="/logo.png"
              alt={t("hero.logoAlt")}
              className="h-16 w-auto select-none sm:h-28 lg:h-40 filter-[brightness(0)_invert(1)]"
              draggable={false}
            />
          </a>

          <p className="max-w-152 rounded-lg bg-black/25 px-5 py-5 text-center text-sm font-medium leading-relaxed text-white/92 backdrop-blur-sm sm:max-w-4xl sm:px-8 sm:py-6 sm:text-lg lg:text-xl">
            {t("hero.description")}
          </p>

          <nav
            className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
            aria-label={t("hero.aria.nav")}
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
