import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const legalLinks = useMemo(
    () => [
      { href: "#aviso-legal", label: t("footer.links.legalNotice") },
      { href: "#politica-de-cookies", label: t("footer.links.cookiesPolicy") },
      { href: "#privacidad", label: t("footer.links.privacy") },
    ],
    [t],
  );

  return (
    <footer className="w-full bg-[#364f38] text-white">
      <div className="mx-auto max-w-[1126px] px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 py-10">
          <div className="flex flex-col items-center gap-5">
            <img
              src="/logo.png"
              alt={t("footer.logoAlt")}
              className="h-8 w-auto select-none sm:h-9 filter-[brightness(0)_invert(1)]"
              draggable={false}
            />

            <p className="max-w-3xl text-center text-base leading-relaxed text-white/90 sm:text-lg">
              {t("footer.description")}
            </p>

            <nav
              aria-label={t("footer.aria.legalNav")}
              className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            >
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold tracking-wide text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#364f38]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <p className="text-center text-sm font-medium tracking-wide text-white/70">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
