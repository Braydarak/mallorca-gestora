import { useEffect, useId, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import LenguajeSelector, { type LanguageCode } from "../lenguajeSelector";
import { supportedLanguages } from "../../i18n";

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
  const { t, i18n } = useTranslation();
  const menuId = useId();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;
  const language = supportedLanguages.includes(currentLanguage as LanguageCode)
    ? (currentLanguage as LanguageCode)
    : "es";
  const [timeText, setTimeText] = useState(() => {
    return new Intl.DateTimeFormat("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date());
  });

  const leftItems = useMemo<NavItem[]>(
    () => [
      { label: t("header.nav.investment"), href: "#investment" },
      { label: t("header.nav.projects"), href: "#projects" },
    ],
    [t],
  );

  const rightItems = useMemo<NavItem[]>(
    () => [
      { label: t("header.nav.about"), href: "#about-us" },
      { label: t("header.nav.contact"), href: "#contact" },
    ],
    [t],
  );

  const mobileItems = useMemo(
    () => [...leftItems, ...rightItems],
    [leftItems, rightItems],
  );

  const languageOptions = useMemo<LanguageCode[]>(
    () => ["es", "en", "ca", "de"],
    [],
  );

  useEffect(() => {
    const localeByLanguage: Record<LanguageCode, string> = {
      es: "es-ES",
      en: "en-GB",
      ca: "ca-ES",
      de: "de-DE",
    };

    const formatter = new Intl.DateTimeFormat(localeByLanguage[language], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const update = () => setTimeText(formatter.format(new Date()));
    update();

    const intervalId = window.setInterval(update, 1000);
    return () => window.clearInterval(intervalId);
  }, [language]);

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
              <span className="sr-only">{t("header.menu.open")}</span>
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
              aria-label={t("header.aria.leftNav")}
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
              alt={t("header.logoAlt")}
              className="h-10 w-auto select-none sm:h-11 filter-[brightness(0)_invert(1)]"
              draggable={false}
            />
          </a>

          <div className="flex items-center justify-end gap-2">
            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label={t("header.aria.rightNav")}
            >
              {rightItems.map((item) => (
                <HeaderLink key={item.label} {...item} />
              ))}
            </nav>
            <div className="w-20 lg:hidden">
              <LenguajeSelector
                value={language}
                onChange={(nextLanguage) => {
                  void i18n.changeLanguage(nextLanguage);
                }}
              />
            </div>
          </div>
        </div>

        <div className="hidden items-center justify-between py-2 lg:flex">
          <div className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-white/90 tabular-nums">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="shrink-0 opacity-90"
            >
              <path
                d="M12 7V12L15 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{timeText}</span>
          </div>
          <div className="inline-flex items-center gap-1">
            {languageOptions.map((option) => {
              const isActive = option === language;

              return (
                <button
                  key={option}
                  type="button"
                  aria-label={t("header.aria.changeTo", {
                    language: t(`language.names.${option}`),
                  })}
                  aria-pressed={isActive}
                  className={[
                    "rounded-md px-2.5 py-1 text-sm font-semibold uppercase tracking-wider transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#364f38]",
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white",
                  ].join(" ")}
                  onClick={() => {
                    void i18n.changeLanguage(option);
                  }}
                >
                  {option.toUpperCase()}
                </button>
              );
            })}
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
          <nav
            className="grid gap-2 pt-3"
            aria-label={t("header.aria.mobileNav")}
          >
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
