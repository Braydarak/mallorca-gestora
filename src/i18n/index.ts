import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const supportedLanguages = ["es", "en", "ca", "de"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

const resources = {
  es: {
    translation: {
      header: {
        menu: {
          open: "Abrir menú",
        },
        nav: {
          investment: "Oportunidades",
          projects: "Proyectos",
          about: "Sobre Nosotros",
          contact: "Contacto",
        },
        aria: {
          leftNav: "Navegación izquierda",
          rightNav: "Navegación derecha",
          mobileNav: "Navegación móvil",
          changeTo: "Cambiar a {{language}}",
        },
        logoAlt: "Mallorca Gestora",
      },
      language: {
        names: {
          es: "Español",
          en: "Inglés",
          ca: "Catalán",
          de: "Alemán",
        },
      },
    },
  },
  en: {
    translation: {
      header: {
        menu: {
          open: "Open menu",
        },
        nav: {
          investment: "Opportunities",
          projects: "Projects",
          about: "About Us",
          contact: "Contact",
        },
        aria: {
          leftNav: "Left navigation",
          rightNav: "Right navigation",
          mobileNav: "Mobile navigation",
          changeTo: "Switch to {{language}}",
        },
        logoAlt: "Mallorca Gestora",
      },
      language: {
        names: {
          es: "Spanish",
          en: "English",
          ca: "Catalan",
          de: "German",
        },
      },
    },
  },
  ca: {
    translation: {
      header: {
        menu: {
          open: "Obrir menú",
        },
        nav: {
          investment: "Oportunitats",
          projects: "Projectes",
          about: "Sobre Nosaltres",
          contact: "Contacte",
        },
        aria: {
          leftNav: "Navegació esquerra",
          rightNav: "Navegació dreta",
          mobileNav: "Navegació mòbil",
          changeTo: "Canviar a {{language}}",
        },
        logoAlt: "Mallorca Gestora",
      },
      language: {
        names: {
          es: "Espanyol",
          en: "Anglès",
          ca: "Català",
          de: "Alemany",
        },
      },
    },
  },
  de: {
    translation: {
      header: {
        menu: {
          open: "Menü öffnen",
        },
        nav: {
          investment: "Investitionschancen",
          projects: "Projekte",
          about: "Über uns",
          contact: "Kontakt",
        },
        aria: {
          leftNav: "Linke Navigation",
          rightNav: "Rechte Navigation",
          mobileNav: "Mobile Navigation",
          changeTo: "Wechseln zu {{language}}",
        },
        logoAlt: "Mallorca Gestora",
      },
      language: {
        names: {
          es: "Spanisch",
          en: "Englisch",
          ca: "Katalanisch",
          de: "Deutsch",
        },
      },
    },
  },
} as const;

const browserLang = navigator.language?.slice(0, 2).toLowerCase() ?? "es";
const initialLanguage = supportedLanguages.includes(
  browserLang as SupportedLanguage,
)
  ? (browserLang as SupportedLanguage)
  : "es";

void i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
