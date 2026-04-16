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
      hero: {
        nav: {
          about: "Sobre Nosotros",
          investment: "Oportunidades",
          projects: "Proyectos",
          contact: "Contacto",
        },
        description:
          "Una oficina privada de inversión inmobiliaria enfocada en la creación de valor, la ejecución disciplinada de proyectos y la gestión estratégica de activos.",
        aria: {
          nav: "Navegación",
        },
        logoAlt: "Mallorca Gestora",
      },
      aboutUs: {
        title: "Sobre nosotros",
        companyName: "Mallorca Gestora de Capital",
        intro: {
          first:
            "Mallorca Gestora de Capital es una oficina familiar privada enfocada en la inversión y el desarrollo inmobiliario en España, con una orientación estratégica en las Islas Baleares.",
          second:
            "Identificamos, estructuramos y gestionamos oportunidades de alto valor, combinando capital, experiencia y una visión clara para impulsar inversiones sólidas y rigurosamente ejecutadas.",
        },
        pills: {
          integrated: {
            title: "Desarrollo integrado",
            description:
              "Supervisamos cada fase del proyecto para garantizar control, calidad y eficiencia.",
          },
          selective: {
            title: "Inversión selectiva",
            description:
              "Priorizamos oportunidades cuidadosamente analizadas, con fundamentos sólidos y alto potencial de revalorización.",
          },
        },
      },
      goals: {
        title: "Misión y visión",
        intro: {
          first:
            "Preservar y hacer crecer el capital mediante inversiones inmobiliarias disciplinadas, combinando visión estratégica, conocimiento técnico y una gestión cercana y activa.",
          second:
            "Nos enfocamos en crear valor a través de proyectos bien estructurados y cuidadosamente ejecutados.",
        },
        cards: {
          experience: {
            title: "Experiencia",
            description:
              "Trayectoria sólida en el sector inmobiliario, construcción y gestión de inversiones, para tomar decisiones informadas y estratégicas.",
          },
          transparency: {
            title: "Transparencia",
            description:
              "Estructuras claras, intereses alineados y visibilidad total en cada etapa de la inversión.",
          },
          reliability: {
            title: "Fiabilidad",
            description:
              "Un enfoque serio, comprometido y orientado a resultados, enfocado en ofrecer un desempeño consistente.",
          },
          objective: {
            title: "Objetivo y perspectiva",
            description:
              "Nuestra visión es ser reconocidos como una oficina familiar inmobiliaria de confianza, conocida por una disciplina de inversión, una ejecución sólida y retornos de capital consistentes.",
          },
        },
      },
      investmentSection: {
        title: "Oportunidades de inversión",
        description:
          "Proyectos seleccionados con análisis previo, enfoque operativo y potencial de creación de valor.",
        aria: {
          prev: "Oportunidad anterior",
          next: "Siguiente oportunidad",
        },
        cta: "Ver oportunidad",
      },
      projectSection: {
        title: "Resumen de proyectos realizados",
        description:
          "Una selección de proyectos completados que reflejan ejecución disciplinada, estándares de calidad y creación de valor.",
        aria: {
          prev: "Proyecto anterior",
          next: "Siguiente proyecto",
        },
        cta: "Ver proyecto",
      },
      stateSection: {
        title: "Mercado inmobiliario español",
        description:
          "Factores clave que impulsan la creación de valor a largo plazo en España, con un enfoque estratégico en las Islas Baleares.",
        points: {
          demand: {
            title: "Alta demanda",
            description:
              "Demanda fuerte y sostenida de compradores nacionales e internacionales, especialmente en ubicaciones prime y costeras.",
          },
          supply: {
            title: "Oferta limitada",
            description:
              "La disponibilidad de suelo restringida y las limitaciones regulatorias generan una escasez estructural, impulsando el crecimiento del valor.",
          },
          growth: {
            title: "Crecimiento del capital",
            description:
              "El inmobiliario se mantiene como una clase de activo resiliente, preservando el capital y aumentando su valor de forma consistente en el tiempo.",
          },
          environment: {
            title: "Entorno de inversión atractivo",
            description:
              "España ofrece un mercado estable y atractivo. Aunque Baleares es un foco clave, las oportunidades en el resto del país permiten diversificar y acceder a activos con alto potencial.",
          },
        },
      },
      contactSection: {
        title: "Contacto",
        intro: {
          first:
            "Si querés conocer más sobre nuestros proyectos, oportunidades o enfoque de inversión, completá el formulario y te contactamos.",
          second:
            "Acompañamos a cada inversor con un enfoque personalizado, desde la primera conversación hasta la ejecución de cada operación.",
        },
        cards: {
          responseTime: {
            title: "Tiempo de respuesta",
            description:
              "Respondemos consultas en un plazo estimado de 24 a 48 horas hábiles.",
          },
          include: {
            title: "Qué incluir en tu mensaje",
            description:
              "Tipo de inversión, importe aproximado, zona de interés y objetivo de rentabilidad.",
          },
          coverage: {
            title: "Cobertura",
            description:
              "Baleares como foco principal, con oportunidades selectivas en distintos mercados de España.",
          },
        },
      },
      contactForm: {
        eyebrow: "Contacto directo",
        title: "Contanos tu objetivo de inversión",
        description:
          "Completá el formulario y armamos una propuesta alineada a tu perfil.",
        fields: {
          name: {
            label: "Nombre completo",
            placeholder: "Tu nombre",
          },
          email: {
            label: "Correo electrónico",
            placeholder: "tu@correo.com",
          },
          phone: {
            label: "Teléfono",
            placeholder: "+34 ...",
          },
          message: {
            label: "Mensaje",
            placeholder:
              "Contanos sobre tu consulta, importe estimado y zona de interés...",
          },
        },
        submit: "Enviar consulta",
        consent:
          "Al enviar este formulario aceptás ser contactado para responder tu consulta.",
      },
      footer: {
        logoAlt: "Mallorca Gestora",
        description:
          "Una oficina privada de inversión inmobiliaria enfocada en la creación de valor, la ejecución disciplinada de proyectos y la gestión estratégica de activos.",
        aria: {
          legalNav: "Legal",
        },
        links: {
          legalNotice: "Aviso legal",
          cookiesPolicy: "Política de cookies",
          privacy: "Privacidad",
        },
        copyright: "© {{year}} Mallorca Gestora",
      },
      cookies: {
        title: "Política de cookies",
        loadingDocument: "Cargando documento…",
        loadError: "No se pudo cargar el documento de cookies.",
      },
      legalNotice: {
        title: "Aviso legal",
        loadingDocument: "Cargando documento…",
        loadError: "No se pudo cargar el documento de aviso legal.",
      },
      privacy: {
        title: "Política de privacidad",
        intro:
          "En Mallorca Gestora de Capital nos comprometemos a proteger tus datos personales y a tratar la información de forma segura y transparente.",
        controllerTitle: "Responsable del tratamiento",
        controllerText:
          "El responsable del tratamiento es Mallorca Gestora de Capital. Podés contactarnos a través de los canales publicados en este sitio.",
        purposesTitle: "Finalidades del tratamiento",
        purposesText:
          "Tratamos tus datos para gestionar consultas, coordinar reuniones, responder solicitudes y mejorar la atención al usuario.",
        legalBasisTitle: "Base legal",
        legalBasisText:
          "La base legal puede ser tu consentimiento, la ejecución de medidas precontractuales o nuestro interés legítimo en atender tu solicitud.",
        recipientsTitle: "Destinatarios",
        recipientsText:
          "No cedemos tus datos a terceros salvo obligación legal o cuando sea necesario para prestar el servicio, aplicando las garantías correspondientes.",
        rightsTitle: "Derechos",
        rightsText:
          "Podés solicitar acceso, rectificación, supresión, oposición, limitación y portabilidad de tus datos, según corresponda.",
        retentionTitle: "Conservación",
        retentionText:
          "Conservaremos tus datos durante el tiempo necesario para cumplir la finalidad para la que fueron recabados y para atender obligaciones legales.",
        cookiesTitle: "Cookies",
        cookiesText: "Para más información consultá nuestra",
        dataCategoriesTitle: "Categorías de datos",
        dataCategoriesText:
          "Podemos tratar datos identificativos y de contacto, así como información que nos brindes en tus mensajes.",
        securityTitle: "Seguridad",
        securityText:
          "Aplicamos medidas técnicas y organizativas para proteger la información y evitar accesos no autorizados.",
        userResponsibilitiesTitle: "Responsabilidad del usuario",
        userResponsibilitiesText:
          "El usuario declara que los datos proporcionados son veraces y se compromete a mantenerlos actualizados.",
        contactTitle: "Contacto",
        contactText:
          "Para ejercer tus derechos o realizar consultas sobre privacidad, escribinos mediante el formulario de contacto.",
        changesTitle: "Cambios en la política",
        changesText:
          "Podemos actualizar esta política para reflejar cambios legales o de funcionamiento. La versión vigente estará disponible en este sitio.",
      },
      investmentDetails: {
        loading: "Cargando oportunidad...",
        back: "Volver",
        summary: {
          acquisitionCost: "Coste de adquisición",
          constructionTotal: "Construcción total",
          totalInvestment: "Inversión total",
          estimatedProfit: "Beneficio estimado",
        },
        options: {
          title: "Escenarios y métricas clave",
          note: "Referencia estimada basada en la información disponible.",
        },
        descriptionTitle: "Descripción",
        nextStep: {
          title: "Próximo paso",
          description:
            "Si esta oportunidad encaja con tu perfil, podés enviarnos una consulta y te compartimos el detalle operativo, plazos y estructura de inversión.",
          cta: "Consultar por esta oportunidad",
        },
        notFound: {
          title: "No encontramos la oportunidad",
          description:
            "Volvé a oportunidades de inversión y seleccioná una operación disponible.",
          homeCta: "Ir al inicio",
        },
        other: {
          title: "Otras oportunidades de inversión",
          description:
            "Explorá alternativas disponibles y compará estrategias.",
          aria: {
            prev: "Oportunidad anterior",
            next: "Siguiente oportunidad",
          },
          cta: "Ver oportunidad",
        },
      },
      projectDetails: {
        loading: "Cargando proyecto...",
        back: "Volver",
        summary: {
          acquisitionCost: "Coste de adquisición",
          constructionTotal: "Construcción total",
          totalInvestment: "Inversión total",
          saleTotal: "Venta total",
          totalProfit: "Beneficio total",
        },
        more: {
          title: "¿Querés saber más?",
          description:
            "Si te interesa este proyecto y querés conocer más detalles, escribinos y coordinamos una llamada.",
          cta: "Contactar",
        },
        descriptionTitle: "Descripción",
        notFound: {
          title: "No encontramos el proyecto",
          description: "Volvé al inicio y seleccioná un proyecto finalizado.",
          homeCta: "Ir al inicio",
        },
        other: {
          title: "Otros proyectos finalizados",
          description: "Explorá el resto de proyectos completados.",
          aria: {
            prev: "Proyecto anterior",
            next: "Siguiente proyecto",
          },
          cta: "Ver proyecto",
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
      hero: {
        nav: {
          about: "About Us",
          investment: "Opportunities",
          projects: "Projects",
          contact: "Contact",
        },
        description:
          "A private real estate investment office focused on value creation, disciplined project execution, and strategic asset management.",
        aria: {
          nav: "Navigation",
        },
        logoAlt: "Mallorca Gestora",
      },
      aboutUs: {
        title: "About Us",
        companyName: "Mallorca Gestora de Capital",
        intro: {
          first:
            "Mallorca Gestora de Capital is a private family office focused on real estate investment and development in Spain, with a strategic orientation toward the Balearic Islands.",
          second:
            "We identify, structure, and manage high-value opportunities, combining capital, experience, and a clear vision to drive solid, rigorously executed investments.",
        },
        pills: {
          integrated: {
            title: "Integrated development",
            description:
              "We oversee each project phase to ensure control, quality, and efficiency.",
          },
          selective: {
            title: "Selective investment",
            description:
              "We prioritize carefully analyzed opportunities with solid fundamentals and strong appreciation potential.",
          },
        },
      },
      goals: {
        title: "Mission and Vision",
        intro: {
          first:
            "Preserve and grow capital through disciplined real estate investments, combining strategic vision, technical knowledge, and close, active management.",
          second:
            "We focus on creating value through well-structured and carefully executed projects.",
        },
        cards: {
          experience: {
            title: "Experience",
            description:
              "Solid track record in real estate, construction, and investment management to support informed, strategic decision-making.",
          },
          transparency: {
            title: "Transparency",
            description:
              "Clear structures, aligned interests, and full visibility at every stage of the investment.",
          },
          reliability: {
            title: "Reliability",
            description:
              "A serious, committed, and results-oriented approach focused on delivering consistent performance.",
          },
          objective: {
            title: "Objective and Perspective",
            description:
              "Our vision is to be recognized as a trusted family real estate office, known for investment discipline, strong execution, and consistent capital returns.",
          },
        },
      },
      investmentSection: {
        title: "Investment Opportunities",
        description:
          "Selected projects with prior analysis, operational focus, and value-creation potential.",
        aria: {
          prev: "Previous opportunity",
          next: "Next opportunity",
        },
        cta: "View opportunity",
      },
      projectSection: {
        title: "Summary of completed projects",
        description:
          "A selection of completed projects that reflect disciplined execution, quality standards, and value creation.",
        aria: {
          prev: "Previous project",
          next: "Next project",
        },
        cta: "View project",
      },
      stateSection: {
        title: "Spanish Real Estate Market",
        description:
          "Key factors driving long-term value creation in Spain, with a strategic focus on the Balearic Islands.",
        points: {
          demand: {
            title: "High demand",
            description:
              "Strong and sustained demand from national and international buyers, especially in prime and coastal locations.",
          },
          supply: {
            title: "Limited supply",
            description:
              "Restricted land availability and regulatory constraints create structural scarcity, driving value growth.",
          },
          growth: {
            title: "Capital growth",
            description:
              "Real estate remains a resilient asset class, preserving capital and increasing its value consistently over time.",
          },
          environment: {
            title: "Attractive investment environment",
            description:
              "Spain offers a stable and attractive market. Although the Balearic Islands are a key focus, opportunities across the rest of the country allow diversification and access to high-potential assets.",
          },
        },
      },
      contactSection: {
        title: "Contact",
        intro: {
          first:
            "If you'd like to learn more about our projects, opportunities, or investment approach, complete the form and we'll get in touch.",
          second:
            "We support every investor with a personalized approach, from the first conversation through the execution of each transaction.",
        },
        cards: {
          responseTime: {
            title: "Response time",
            description:
              "We respond to inquiries within an estimated 24 to 48 business hours.",
          },
          include: {
            title: "What to include in your message",
            description:
              "Type of investment, approximate amount, area of interest, and return objective.",
          },
          coverage: {
            title: "Coverage",
            description:
              "The Balearic Islands as a primary focus, with selective opportunities across other Spanish markets.",
          },
        },
      },
      contactForm: {
        eyebrow: "Direct contact",
        title: "Tell us your investment objective",
        description:
          "Complete the form and we'll prepare a proposal aligned with your profile.",
        fields: {
          name: {
            label: "Full name",
            placeholder: "Your name",
          },
          email: {
            label: "Email address",
            placeholder: "you@email.com",
          },
          phone: {
            label: "Phone",
            placeholder: "+34 ...",
          },
          message: {
            label: "Message",
            placeholder:
              "Tell us about your inquiry, estimated amount, and area of interest...",
          },
        },
        submit: "Send inquiry",
        consent:
          "By submitting this form, you agree to be contacted to respond to your inquiry.",
      },
      footer: {
        logoAlt: "Mallorca Gestora",
        description:
          "A private real estate investment office focused on value creation, disciplined project execution, and strategic asset management.",
        aria: {
          legalNav: "Legal",
        },
        links: {
          legalNotice: "Legal notice",
          cookiesPolicy: "Cookie policy",
          privacy: "Privacy",
        },
        copyright: "© {{year}} Mallorca Gestora",
      },
      cookies: {
        title: "Cookie policy",
        loadingDocument: "Loading document…",
        loadError: "The cookie policy document could not be loaded.",
      },
      legalNotice: {
        title: "Legal notice",
        loadingDocument: "Loading document…",
        loadError: "The legal notice document could not be loaded.",
      },
      privacy: {
        title: "Privacy policy",
        intro:
          "At Mallorca Gestora de Capital we are committed to protecting your personal data and processing information securely and transparently.",
        controllerTitle: "Data controller",
        controllerText:
          "The data controller is Mallorca Gestora de Capital. You can contact us through the channels published on this website.",
        purposesTitle: "Purposes of processing",
        purposesText:
          "We process your data to handle inquiries, coordinate meetings, respond to requests, and improve user support.",
        legalBasisTitle: "Legal basis",
        legalBasisText:
          "The legal basis may be your consent, pre-contractual measures, or our legitimate interest in responding to your request.",
        recipientsTitle: "Recipients",
        recipientsText:
          "We do not share your data with third parties except when legally required or when necessary to provide the service, applying appropriate safeguards.",
        rightsTitle: "Your rights",
        rightsText:
          "You may request access, rectification, erasure, objection, restriction, and data portability, as applicable.",
        retentionTitle: "Retention",
        retentionText:
          "We will keep your data for as long as necessary to fulfill the purpose for which it was collected and to meet legal obligations.",
        cookiesTitle: "Cookies",
        cookiesText: "For more information, please see our",
        dataCategoriesTitle: "Data categories",
        dataCategoriesText:
          "We may process identification and contact data, as well as information you provide in your messages.",
        securityTitle: "Security",
        securityText:
          "We apply technical and organizational measures to protect information and prevent unauthorized access.",
        userResponsibilitiesTitle: "User responsibilities",
        userResponsibilitiesText:
          "You confirm that the data provided is accurate and you commit to keeping it up to date.",
        contactTitle: "Contact",
        contactText:
          "To exercise your rights or ask privacy-related questions, contact us via the contact form.",
        changesTitle: "Policy changes",
        changesText:
          "We may update this policy to reflect legal or operational changes. The current version will be available on this website.",
      },
      investmentDetails: {
        loading: "Loading opportunity...",
        back: "Back",
        summary: {
          acquisitionCost: "Acquisition cost",
          constructionTotal: "Total construction",
          totalInvestment: "Total investment",
          estimatedProfit: "Estimated profit",
        },
        options: {
          title: "Scenarios and key metrics",
          note: "Estimated reference based on available information.",
        },
        descriptionTitle: "Description",
        nextStep: {
          title: "Next step",
          description:
            "If this opportunity fits your profile, you can send us an inquiry and we’ll share operational details, timelines, and the investment structure.",
          cta: "Inquire about this opportunity",
        },
        notFound: {
          title: "We couldn't find the opportunity",
          description:
            "Go back to investment opportunities and select an available transaction.",
          homeCta: "Go to home",
        },
        other: {
          title: "Other investment opportunities",
          description: "Explore available alternatives and compare strategies.",
          aria: {
            prev: "Previous opportunity",
            next: "Next opportunity",
          },
          cta: "View opportunity",
        },
      },
      projectDetails: {
        loading: "Loading project...",
        back: "Back",
        summary: {
          acquisitionCost: "Acquisition cost",
          constructionTotal: "Total construction",
          totalInvestment: "Total investment",
          saleTotal: "Total sale",
          totalProfit: "Total profit",
        },
        more: {
          title: "Want to know more?",
          description:
            "If you're interested in this project and would like more details, message us and we'll schedule a call.",
          cta: "Contact",
        },
        descriptionTitle: "Description",
        notFound: {
          title: "We couldn't find the project",
          description: "Go back to home and select a completed project.",
          homeCta: "Go to home",
        },
        other: {
          title: "Other completed projects",
          description: "Explore the rest of the completed projects.",
          aria: {
            prev: "Previous project",
            next: "Next project",
          },
          cta: "View project",
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
      hero: {
        nav: {
          about: "Sobre Nosaltres",
          investment: "Oportunitats",
          projects: "Projectes",
          contact: "Contacte",
        },
        description:
          "Una oficina privada d'inversió immobiliària enfocada en la creació de valor, l'execució disciplinada de projectes i la gestió estratègica d'actius.",
        aria: {
          nav: "Navegació",
        },
        logoAlt: "Mallorca Gestora",
      },
      aboutUs: {
        title: "Sobre nosaltres",
        companyName: "Mallorca Gestora de Capital",
        intro: {
          first:
            "Mallorca Gestora de Capital és una oficina familiar privada enfocada en la inversió i el desenvolupament immobiliari a Espanya, amb una orientació estratègica a les Illes Balears.",
          second:
            "Identifiquem, estructurem i gestionem oportunitats d'alt valor, combinant capital, experiència i una visió clara per impulsar inversions sòlides i executades amb rigor.",
        },
        pills: {
          integrated: {
            title: "Desenvolupament integrat",
            description:
              "Supervisem cada fase del projecte per garantir control, qualitat i eficiència.",
          },
          selective: {
            title: "Inversió selectiva",
            description:
              "Prioritzem oportunitats acuradament analitzades, amb fonaments sòlids i alt potencial de revalorització.",
          },
        },
      },
      goals: {
        title: "Missió i visió",
        intro: {
          first:
            "Preservar i fer créixer el capital mitjançant inversions immobiliàries disciplinades, combinant visió estratègica, coneixement tècnic i una gestió propera i activa.",
          second:
            "Ens enfoquem a crear valor a través de projectes ben estructurats i executats amb cura.",
        },
        cards: {
          experience: {
            title: "Experiència",
            description:
              "Trajectòria sòlida en el sector immobiliari, la construcció i la gestió d'inversions per prendre decisions informades i estratègiques.",
          },
          transparency: {
            title: "Transparència",
            description:
              "Estructures clares, interessos alineats i visibilitat total en cada etapa de la inversió.",
          },
          reliability: {
            title: "Fiabilitat",
            description:
              "Un enfocament seriós, compromès i orientat a resultats, enfocat a oferir un rendiment consistent.",
          },
          objective: {
            title: "Objectiu i perspectiva",
            description:
              "La nostra visió és ser reconeguts com una oficina familiar immobiliària de confiança, coneguda per la disciplina d'inversió, una execució sòlida i retorns de capital consistents.",
          },
        },
      },
      investmentSection: {
        title: "Oportunitats d'inversió",
        description:
          "Projectes seleccionats amb anàlisi prèvia, enfocament operatiu i potencial de creació de valor.",
        aria: {
          prev: "Oportunitat anterior",
          next: "Oportunitat següent",
        },
        cta: "Veure oportunitat",
      },
      projectSection: {
        title: "Resum de projectes realitzats",
        description:
          "Una selecció de projectes completats que reflecteixen execució disciplinada, estàndards de qualitat i creació de valor.",
        aria: {
          prev: "Projecte anterior",
          next: "Projecte següent",
        },
        cta: "Veure projecte",
      },
      stateSection: {
        title: "Mercat immobiliari espanyol",
        description:
          "Factors clau que impulsen la creació de valor a llarg termini a Espanya, amb un enfocament estratègic a les Illes Balears.",
        points: {
          demand: {
            title: "Alta demanda",
            description:
              "Demanda forta i sostinguda de compradors nacionals i internacionals, especialment en ubicacions prime i costaneres.",
          },
          supply: {
            title: "Oferta limitada",
            description:
              "La disponibilitat de sòl restringida i les limitacions reguladores generen una escassetat estructural, impulsant el creixement del valor.",
          },
          growth: {
            title: "Creixement del capital",
            description:
              "L'immobiliari es manté com una classe d'actiu resilient, preservant el capital i augmentant-ne el valor de manera consistent al llarg del temps.",
          },
          environment: {
            title: "Entorn d'inversió atractiu",
            description:
              "Espanya ofereix un mercat estable i atractiu. Tot i que Balears és un focus clau, les oportunitats a la resta del país permeten diversificar i accedir a actius amb alt potencial.",
          },
        },
      },
      contactSection: {
        title: "Contacte",
        intro: {
          first:
            "Si vols conèixer més sobre els nostres projectes, oportunitats o enfocament d'inversió, omple el formulari i et contactarem.",
          second:
            "Acompanyem cada inversor amb un enfocament personalitzat, des de la primera conversa fins a l'execució de cada operació.",
        },
        cards: {
          responseTime: {
            title: "Temps de resposta",
            description:
              "Respondem consultes en un termini estimat de 24 a 48 hores hàbils.",
          },
          include: {
            title: "Què incloure al teu missatge",
            description:
              "Tipus d'inversió, import aproximat, zona d'interès i objectiu de rendibilitat.",
          },
          coverage: {
            title: "Cobertura",
            description:
              "Balears com a focus principal, amb oportunitats selectives en diferents mercats d'Espanya.",
          },
        },
      },
      contactForm: {
        eyebrow: "Contacte directe",
        title: "Explica'ns el teu objectiu d'inversió",
        description:
          "Omple el formulari i preparem una proposta alineada al teu perfil.",
        fields: {
          name: {
            label: "Nom complet",
            placeholder: "El teu nom",
          },
          email: {
            label: "Correu electrònic",
            placeholder: "tu@correu.com",
          },
          phone: {
            label: "Telèfon",
            placeholder: "+34 ...",
          },
          message: {
            label: "Missatge",
            placeholder:
              "Explica'ns la teva consulta, import estimat i zona d'interès...",
          },
        },
        submit: "Enviar consulta",
        consent:
          "En enviar aquest formulari acceptes ser contactat per respondre la teva consulta.",
      },
      footer: {
        logoAlt: "Mallorca Gestora",
        description:
          "Una oficina privada d'inversió immobiliària enfocada en la creació de valor, l'execució disciplinada de projectes i la gestió estratègica d'actius.",
        aria: {
          legalNav: "Legal",
        },
        links: {
          legalNotice: "Avís legal",
          cookiesPolicy: "Política de galetes",
          privacy: "Privacitat",
        },
        copyright: "© {{year}} Mallorca Gestora",
      },
      cookies: {
        title: "Política de galetes",
        loadingDocument: "Carregant document…",
        loadError: "No s’ha pogut carregar el document de galetes.",
      },
      legalNotice: {
        title: "Avís legal",
        loadingDocument: "Carregant document…",
        loadError: "No s’ha pogut carregar el document d’avís legal.",
      },
      privacy: {
        title: "Política de privacitat",
        intro:
          "A Mallorca Gestora de Capital ens comprometem a protegir les teves dades personals i a tractar la informació de manera segura i transparent.",
        controllerTitle: "Responsable del tractament",
        controllerText:
          "El responsable del tractament és Mallorca Gestora de Capital. Pots contactar-nos a través dels canals publicats en aquest lloc web.",
        purposesTitle: "Finalitats del tractament",
        purposesText:
          "Tractem les teves dades per gestionar consultes, coordinar reunions, respondre sol·licituds i millorar l’atenció a l’usuari.",
        legalBasisTitle: "Base legal",
        legalBasisText:
          "La base legal pot ser el teu consentiment, mesures precontractuals o el nostre interès legítim a atendre la teva sol·licitud.",
        recipientsTitle: "Destinataris",
        recipientsText:
          "No cedim les teves dades a tercers excepte obligació legal o quan sigui necessari per prestar el servei, aplicant les garanties corresponents.",
        rightsTitle: "Drets",
        rightsText:
          "Pots sol·licitar accés, rectificació, supressió, oposició, limitació i portabilitat de les teves dades, segons correspongui.",
        retentionTitle: "Conservació",
        retentionText:
          "Conservarem les teves dades durant el temps necessari per complir la finalitat per a la qual es van recollir i per atendre obligacions legals.",
        cookiesTitle: "Cookies",
        cookiesText: "Per a més informació, consulta la nostra",
        dataCategoriesTitle: "Categories de dades",
        dataCategoriesText:
          "Podem tractar dades identificatives i de contacte, així com informació que ens facilitis als teus missatges.",
        securityTitle: "Seguretat",
        securityText:
          "Apliquem mesures tècniques i organitzatives per protegir la informació i evitar accessos no autoritzats.",
        userResponsibilitiesTitle: "Responsabilitat de l’usuari",
        userResponsibilitiesText:
          "L’usuari declara que les dades proporcionades són veraces i es compromet a mantenir-les actualitzades.",
        contactTitle: "Contacte",
        contactText:
          "Per exercir els teus drets o fer consultes sobre privacitat, contacta’ns mitjançant el formulari de contacte.",
        changesTitle: "Canvis a la política",
        changesText:
          "Podem actualitzar aquesta política per reflectir canvis legals o operatius. La versió vigent estarà disponible en aquest lloc web.",
      },
      investmentDetails: {
        loading: "Carregant oportunitat...",
        back: "Tornar",
        summary: {
          acquisitionCost: "Cost d'adquisició",
          constructionTotal: "Construcció total",
          totalInvestment: "Inversió total",
          estimatedProfit: "Benefici estimat",
        },
        options: {
          title: "Escenaris i mètriques clau",
          note: "Referència estimada basada en la informació disponible.",
        },
        descriptionTitle: "Descripció",
        nextStep: {
          title: "Següent pas",
          description:
            "Si aquesta oportunitat encaixa amb el teu perfil, pots enviar-nos una consulta i et compartirem el detall operatiu, terminis i l'estructura d'inversió.",
          cta: "Consultar aquesta oportunitat",
        },
        notFound: {
          title: "No hem trobat l'oportunitat",
          description:
            "Torna a oportunitats d'inversió i selecciona una operació disponible.",
          homeCta: "Anar a l'inici",
        },
        other: {
          title: "Altres oportunitats d'inversió",
          description:
            "Explora alternatives disponibles i compara estratègies.",
          aria: {
            prev: "Oportunitat anterior",
            next: "Oportunitat següent",
          },
          cta: "Veure oportunitat",
        },
      },
      projectDetails: {
        loading: "Carregant projecte...",
        back: "Tornar",
        summary: {
          acquisitionCost: "Cost d'adquisició",
          constructionTotal: "Construcció total",
          totalInvestment: "Inversió total",
          saleTotal: "Venda total",
          totalProfit: "Benefici total",
        },
        more: {
          title: "Vols saber-ne més?",
          description:
            "Si t'interessa aquest projecte i vols conèixer més detalls, escriu-nos i coordinem una trucada.",
          cta: "Contactar",
        },
        descriptionTitle: "Descripció",
        notFound: {
          title: "No hem trobat el projecte",
          description: "Torna a l'inici i selecciona un projecte finalitzat.",
          homeCta: "Anar a l'inici",
        },
        other: {
          title: "Altres projectes finalitzats",
          description: "Explora la resta de projectes completats.",
          aria: {
            prev: "Projecte anterior",
            next: "Projecte següent",
          },
          cta: "Veure projecte",
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
      hero: {
        nav: {
          about: "Über uns",
          investment: "Investitionschancen",
          projects: "Projekte",
          contact: "Kontakt",
        },
        description:
          "Ein privates Immobilien-Investmentbüro mit Fokus auf Wertschöpfung, disziplinierte Projektumsetzung und strategisches Asset-Management.",
        aria: {
          nav: "Navigation",
        },
        logoAlt: "Mallorca Gestora",
      },
      aboutUs: {
        title: "Über uns",
        companyName: "Mallorca Gestora de Capital",
        intro: {
          first:
            "Mallorca Gestora de Capital ist ein privates Family Office mit Fokus auf Immobilieninvestitionen und -entwicklung in Spanien, mit strategischer Ausrichtung auf die Balearen.",
          second:
            "Wir identifizieren, strukturieren und verwalten hochwertige Chancen und verbinden Kapital, Erfahrung und eine klare Vision, um solide und diszipliniert umgesetzte Investitionen voranzutreiben.",
        },
        pills: {
          integrated: {
            title: "Integrierte Entwicklung",
            description:
              "Wir überwachen jede Projektphase, um Kontrolle, Qualität und Effizienz sicherzustellen.",
          },
          selective: {
            title: "Selektive Investitionen",
            description:
              "Wir priorisieren sorgfältig analysierte Chancen mit soliden Grundlagen und hohem Wertsteigerungspotenzial.",
          },
        },
      },
      goals: {
        title: "Mission und Vision",
        intro: {
          first:
            "Kapital durch disziplinierte Immobilieninvestitionen erhalten und steigern, indem strategische Weitsicht, technisches Know-how und ein nahes, aktives Management kombiniert werden.",
          second:
            "Wir konzentrieren uns darauf, durch gut strukturierte und sorgfältig umgesetzte Projekte Wert zu schaffen.",
        },
        cards: {
          experience: {
            title: "Erfahrung",
            description:
              "Fundierte Erfahrung in Immobilien, Bau und Investmentmanagement, um informierte und strategische Entscheidungen zu treffen.",
          },
          transparency: {
            title: "Transparenz",
            description:
              "Klare Strukturen, abgestimmte Interessen und vollständige Transparenz in jeder Phase der Investition.",
          },
          reliability: {
            title: "Verlässlichkeit",
            description:
              "Ein seriöser, engagierter und ergebnisorientierter Ansatz mit Fokus auf beständige Leistung.",
          },
          objective: {
            title: "Ziel und Perspektive",
            description:
              "Unsere Vision ist es, als vertrauenswürdiges Family Office im Immobilienbereich anerkannt zu werden, bekannt für Anlagedisziplin, starke Umsetzung und konstante Kapitalrenditen.",
          },
        },
      },
      investmentSection: {
        title: "Investitionschancen",
        description:
          "Ausgewählte Projekte mit vorheriger Analyse, operativem Fokus und Potenzial zur Wertschöpfung.",
        aria: {
          prev: "Vorherige Investitionschance",
          next: "Nächste Investitionschance",
        },
        cta: "Chance ansehen",
      },
      projectSection: {
        title: "Zusammenfassung abgeschlossener Projekte",
        description:
          "Eine Auswahl abgeschlossener Projekte, die disziplinierte Umsetzung, Qualitätsstandards und Wertschöpfung widerspiegeln.",
        aria: {
          prev: "Vorheriges Projekt",
          next: "Nächstes Projekt",
        },
        cta: "Projekt ansehen",
      },
      stateSection: {
        title: "Spanischer Immobilienmarkt",
        description:
          "Zentrale Faktoren, die in Spanien eine langfristige Wertschöpfung antreiben, mit strategischem Fokus auf die Balearen.",
        points: {
          demand: {
            title: "Hohe Nachfrage",
            description:
              "Starke und anhaltende Nachfrage von nationalen und internationalen Käufern, insbesondere in Top- und Küstenlagen.",
          },
          supply: {
            title: "Begrenztes Angebot",
            description:
              "Begrenzte Flächenverfügbarkeit und regulatorische Einschränkungen schaffen strukturelle Knappheit und treiben das Wertwachstum.",
          },
          growth: {
            title: "Kapitalwachstum",
            description:
              "Immobilien bleiben eine resiliente Anlageklasse, die Kapital erhält und dessen Wert im Zeitverlauf kontinuierlich steigert.",
          },
          environment: {
            title: "Attraktives Investitionsumfeld",
            description:
              "Spanien bietet einen stabilen und attraktiven Markt. Obwohl die Balearen ein zentraler Fokus sind, ermöglichen Chancen im restlichen Land Diversifikation und Zugang zu Assets mit hohem Potenzial.",
          },
        },
      },
      contactSection: {
        title: "Kontakt",
        intro: {
          first:
            "Wenn Sie mehr über unsere Projekte, Chancen oder unseren Investmentansatz erfahren möchten, füllen Sie das Formular aus und wir melden uns bei Ihnen.",
          second:
            "Wir begleiten jeden Investor mit einem personalisierten Ansatz – vom ersten Gespräch bis zur Umsetzung jeder Transaktion.",
        },
        cards: {
          responseTime: {
            title: "Antwortzeit",
            description:
              "Wir beantworten Anfragen innerhalb von voraussichtlich 24 bis 48 Werktstunden.",
          },
          include: {
            title: "Was Ihre Nachricht enthalten sollte",
            description:
              "Art der Investition, ungefährer Betrag, Interessensgebiet und Renditeziel.",
          },
          coverage: {
            title: "Abdeckung",
            description:
              "Die Balearen als primärer Fokus, mit selektiven Chancen in weiteren Märkten Spaniens.",
          },
        },
      },
      contactForm: {
        eyebrow: "Direkter Kontakt",
        title: "Nennen Sie Ihr Anlageziel",
        description:
          "Füllen Sie das Formular aus und wir erstellen ein Angebot, das zu Ihrem Profil passt.",
        fields: {
          name: {
            label: "Vollständiger Name",
            placeholder: "Ihr Name",
          },
          email: {
            label: "E-Mail-Adresse",
            placeholder: "sie@email.com",
          },
          phone: {
            label: "Telefon",
            placeholder: "+34 ...",
          },
          message: {
            label: "Nachricht",
            placeholder:
              "Beschreiben Sie Ihre Anfrage, den geschätzten Betrag und das Interessensgebiet...",
          },
        },
        submit: "Anfrage senden",
        consent:
          "Mit dem Absenden dieses Formulars erklären Sie sich damit einverstanden, kontaktiert zu werden, um Ihre Anfrage zu beantworten.",
      },
      footer: {
        logoAlt: "Mallorca Gestora",
        description:
          "Ein privates Immobilien-Investmentbüro mit Fokus auf Wertschöpfung, disziplinierte Projektumsetzung und strategisches Asset-Management.",
        aria: {
          legalNav: "Rechtliches",
        },
        links: {
          legalNotice: "Impressum",
          cookiesPolicy: "Cookie-Richtlinie",
          privacy: "Datenschutz",
        },
        copyright: "© {{year}} Mallorca Gestora",
      },
      cookies: {
        title: "Cookie-Richtlinie",
        loadingDocument: "Dokument wird geladen…",
        loadError: "Das Cookie-Dokument konnte nicht geladen werden.",
      },
      legalNotice: {
        title: "Impressum",
        loadingDocument: "Dokument wird geladen…",
        loadError: "Das Impressum-Dokument konnte nicht geladen werden.",
      },
      privacy: {
        title: "Datenschutzerklärung",
        intro:
          "Bei Mallorca Gestora de Capital verpflichten wir uns, Ihre personenbezogenen Daten zu schützen und Informationen sicher sowie transparent zu verarbeiten.",
        controllerTitle: "Verantwortlicher",
        controllerText:
          "Verantwortlicher für die Verarbeitung ist Mallorca Gestora de Capital. Sie können uns über die auf dieser Website veröffentlichten Kanäle kontaktieren.",
        purposesTitle: "Zwecke der Verarbeitung",
        purposesText:
          "Wir verarbeiten Ihre Daten, um Anfragen zu bearbeiten, Termine zu koordinieren, auf Anliegen zu antworten und den Support zu verbessern.",
        legalBasisTitle: "Rechtsgrundlage",
        legalBasisText:
          "Rechtsgrundlage können Ihre Einwilligung, vorvertragliche Maßnahmen oder unser berechtigtes Interesse an der Bearbeitung Ihrer Anfrage sein.",
        recipientsTitle: "Empfänger",
        recipientsText:
          "Wir geben Ihre Daten nicht an Dritte weiter, außer bei gesetzlicher Verpflichtung oder wenn dies zur Leistungserbringung erforderlich ist, mit geeigneten Schutzmaßnahmen.",
        rightsTitle: "Ihre Rechte",
        rightsText:
          "Sie können je nach Anwendbarkeit Auskunft, Berichtigung, Löschung, Widerspruch, Einschränkung und Datenübertragbarkeit verlangen.",
        retentionTitle: "Speicherdauer",
        retentionText:
          "Wir speichern Ihre Daten so lange, wie es zur Erfüllung des Erhebungszwecks und zur Einhaltung gesetzlicher Pflichten erforderlich ist.",
        cookiesTitle: "Cookies",
        cookiesText: "Weitere Informationen finden Sie in unserer",
        dataCategoriesTitle: "Datenkategorien",
        dataCategoriesText:
          "Wir können Identifikations- und Kontaktdaten sowie Informationen verarbeiten, die Sie uns in Ihren Nachrichten bereitstellen.",
        securityTitle: "Sicherheit",
        securityText:
          "Wir setzen technische und organisatorische Maßnahmen ein, um Informationen zu schützen und unbefugten Zugriff zu verhindern.",
        userResponsibilitiesTitle: "Pflichten der Nutzer",
        userResponsibilitiesText:
          "Sie bestätigen, dass die bereitgestellten Daten korrekt sind, und verpflichten sich, sie aktuell zu halten.",
        contactTitle: "Kontakt",
        contactText:
          "Zur Ausübung Ihrer Rechte oder bei Fragen zum Datenschutz kontaktieren Sie uns über das Kontaktformular.",
        changesTitle: "Änderungen",
        changesText:
          "Wir können diese Richtlinie aktualisieren, um rechtliche oder operative Änderungen widerzuspiegeln. Die aktuelle Version ist auf dieser Website verfügbar.",
      },
      investmentDetails: {
        loading: "Investitionschance wird geladen...",
        back: "Zurück",
        summary: {
          acquisitionCost: "Erwerbskosten",
          constructionTotal: "Baukosten gesamt",
          totalInvestment: "Gesamtinvestition",
          estimatedProfit: "Geschätzter Gewinn",
        },
        options: {
          title: "Szenarien und Kennzahlen",
          note: "Geschätzter Referenzwert basierend auf den verfügbaren Informationen.",
        },
        descriptionTitle: "Beschreibung",
        nextStep: {
          title: "Nächster Schritt",
          description:
            "Wenn diese Chance zu Ihrem Profil passt, können Sie uns eine Anfrage senden. Wir teilen dann operative Details, Zeitpläne und die Investmentstruktur.",
          cta: "Zu dieser Chance anfragen",
        },
        notFound: {
          title: "Wir konnten die Investitionschance nicht finden",
          description:
            "Gehen Sie zurück zu den Investitionschancen und wählen Sie eine verfügbare Transaktion aus.",
          homeCta: "Zur Startseite",
        },
        other: {
          title: "Weitere Investitionschancen",
          description:
            "Entdecken Sie verfügbare Alternativen und vergleichen Sie Strategien.",
          aria: {
            prev: "Vorherige Investitionschance",
            next: "Nächste Investitionschance",
          },
          cta: "Chance ansehen",
        },
      },
      projectDetails: {
        loading: "Projekt wird geladen...",
        back: "Zurück",
        summary: {
          acquisitionCost: "Erwerbskosten",
          constructionTotal: "Baukosten gesamt",
          totalInvestment: "Gesamtinvestition",
          saleTotal: "Verkauf gesamt",
          totalProfit: "Gesamtgewinn",
        },
        more: {
          title: "Möchten Sie mehr erfahren?",
          description:
            "Wenn Sie sich für dieses Projekt interessieren und mehr Details möchten, schreiben Sie uns und wir vereinbaren ein Gespräch.",
          cta: "Kontakt",
        },
        descriptionTitle: "Beschreibung",
        notFound: {
          title: "Wir konnten das Projekt nicht finden",
          description:
            "Gehen Sie zurück zur Startseite und wählen Sie ein abgeschlossenes Projekt aus.",
          homeCta: "Zur Startseite",
        },
        other: {
          title: "Weitere abgeschlossene Projekte",
          description: "Entdecken Sie die übrigen abgeschlossenen Projekte.",
          aria: {
            prev: "Vorheriges Projekt",
            next: "Nächstes Projekt",
          },
          cta: "Projekt ansehen",
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
