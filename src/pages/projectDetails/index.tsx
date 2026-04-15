import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "../../components/cards";
import Contact from "../../sections/contact";
import Line from "../../components/line";

type Project = {
  id: number;
  name: string;
  description: string;
  image?: string;
  total_investment?: string;
  acquisition_cost?: string;
  construction_total?: string;
  sale_total?: string;
  total_profit?: string;
  translations?: Partial<
    Record<
      string,
      {
        name?: string;
        description?: string;
      }
    >
  >;
};

type ProjectsResponse = {
  projects: Project[];
};

function getLocalizedField(
  fallback: string,
  translations:
    | Partial<
        Record<
          string,
          {
            name?: string;
            description?: string;
          }
        >
      >
    | undefined,
  language: string,
  field: "name" | "description",
) {
  return (
    translations?.[language]?.[field] ?? translations?.es?.[field] ?? fallback
  );
}

function getProjectIdFromHash(hash: string) {
  const match = hash.match(/^#\/project\/(\d+)(?:\/)?$/);
  if (!match) {
    return null;
  }

  const parsed = Number(match[1]);
  return Number.isFinite(parsed) ? parsed : null;
}

function parseMoney(value?: string) {
  if (!value) {
    return null;
  }

  const normalized = value.replace(/\./g, "").replace(",", ".");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatEuros(locale: string, value?: string) {
  const parsed = parseMoney(value);
  if (parsed === null) {
    return value ?? "—";
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(parsed);
}

type ProjectDetailsProps = {
  projectId?: number;
};

export default function ProjectDetails({ projectId }: ProjectDetailsProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage ?? i18n.language)
    .slice(0, 2)
    .toLowerCase();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [otherCurrentPage, setOtherCurrentPage] = useState(0);
  const otherCardsPerPage = 3;
  const locale = useMemo(() => {
    const currentLanguage = (i18n.resolvedLanguage ?? i18n.language)
      .slice(0, 2)
      .toLowerCase();
    const localeByLanguage: Record<string, string> = {
      es: "es-ES",
      en: "en-GB",
      ca: "ca-ES",
      de: "de-DE",
    };

    return localeByLanguage[currentLanguage] ?? "es-ES";
  }, [i18n.language, i18n.resolvedLanguage]);

  const resolvedId = useMemo(() => {
    if (typeof projectId === "number") {
      return projectId;
    }

    return getProjectIdFromHash(window.location.hash);
  }, [projectId]);

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("/projects.json");
        if (!response.ok) {
          if (isMounted) {
            setProjects([]);
          }
          return;
        }

        const data = (await response.json()) as ProjectsResponse;
        if (isMounted) {
          setProjects(data.projects ?? []);
        }
      } catch {
        if (isMounted) {
          setProjects([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const project = useMemo(() => {
    if (!resolvedId) {
      return null;
    }

    return projects.find((item) => item.id === resolvedId) ?? null;
  }, [projects, resolvedId]);

  const otherProjects = useMemo(() => {
    if (!resolvedId) {
      return projects;
    }

    return projects.filter((item) => item.id !== resolvedId);
  }, [projects, resolvedId]);

  useEffect(() => {
    setOtherCurrentPage(0);
  }, [resolvedId]);

  const otherTotalPages = Math.ceil(otherProjects.length / otherCardsPerPage);
  const visibleOtherProjects = otherProjects.slice(
    otherCurrentPage * otherCardsPerPage,
    otherCurrentPage * otherCardsPerPage + otherCardsPerPage,
  );
  const otherIsAtFirstPage = otherCurrentPage === 0;
  const otherIsAtLastPage = otherCurrentPage >= otherTotalPages - 1;

  const handleOtherPrev = () => {
    if (otherIsAtFirstPage) {
      return;
    }

    setOtherCurrentPage((prev) => prev - 1);
  };

  const handleOtherNext = () => {
    if (otherIsAtLastPage) {
      return;
    }

    setOtherCurrentPage((prev) => prev + 1);
  };

  return (
    <main className="w-full bg-white">
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-4 sm:px-6 sm:py-16 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-5xl">
            {isLoading ? (
              <div className="mt-10 rounded-2xl border border-black/10 bg-white p-8 text-center shadow-sm">
                <p className="text-sm font-semibold text-slate-700">
                  {t("projectDetails.loading")}
                </p>
              </div>
            ) : project ? (
              <div className="mt-10 lg:mt-14">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#364f38]/20 bg-[#364f38]/5 px-4 py-2 text-sm font-semibold text-[#364f38] transition hover:bg-[#364f38]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#364f38]/40 sm:order-2"
                  >
                    <span aria-hidden="true">←</span>
                    {t("projectDetails.back")}
                  </a>

                  <div className="flex items-baseline justify-between gap-4 sm:order-1 sm:justify-start sm:gap-4">
                    <h1 className="text-3xl font-bold tracking-tight text-[#364f38] sm:text-4xl">
                      {getLocalizedField(
                        project.name,
                        project.translations,
                        currentLanguage,
                        "name",
                      )}
                    </h1>
                  </div>
                </div>

                <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
                  <div className="lg:col-start-1 lg:row-start-1">
                    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                      <div className="relative aspect-4/3 w-full bg-[#364f38]/10">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.name}
                            className="h-full w-full object-cover"
                            draggable={false}
                          />
                        ) : (
                          <div className="absolute inset-0 bg-linear-to-br from-[#364f38]/20 via-white to-[#364f38]/10" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-start-2 lg:row-start-1">
                    <div className="grid gap-4 rounded-2xl border border-[#364f38]/15 bg-white p-6 shadow-sm sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364f38]">
                          {t("projectDetails.summary.acquisitionCost")}
                        </p>
                        <p className="mt-1 text-base font-semibold text-slate-900">
                          {formatEuros(locale, project.acquisition_cost)}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364f38]">
                          {t("projectDetails.summary.constructionTotal")}
                        </p>
                        <p className="mt-1 text-base font-semibold text-slate-900">
                          {formatEuros(locale, project.construction_total)}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364f38]">
                          {t("projectDetails.summary.totalInvestment")}
                        </p>
                        <p className="mt-1 text-base font-semibold text-slate-900">
                          {formatEuros(locale, project.total_investment)}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364f38]">
                          {t("projectDetails.summary.saleTotal")}
                        </p>
                        <p className="mt-1 text-base font-semibold text-slate-900">
                          {formatEuros(locale, project.sale_total)}
                        </p>
                      </div>

                      <div className="sm:col-span-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364f38]">
                          {t("projectDetails.summary.totalProfit")}
                        </p>
                        <p className="mt-1 text-base font-semibold text-slate-900">
                          {formatEuros(locale, project.total_profit)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 rounded-2xl border border-[#364f38]/15 bg-[#364f38]/5 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364f38]">
                        {t("projectDetails.more.title")}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">
                        {t("projectDetails.more.description")}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="mt-4 inline-flex items-center justify-center rounded-xl border border-[#364f38]/25 bg-[#364f38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2f4431] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#364f38]/40"
                      >
                        {t("projectDetails.more.cta")}
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-start-1 lg:row-start-2">
                    <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
                      {getLocalizedField(
                        project.description,
                        project.translations,
                        currentLanguage,
                        "description",
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-10 rounded-2xl border border-black/10 bg-white p-8 text-center shadow-sm">
                <h1 className="text-xl font-bold tracking-tight text-slate-900">
                  {t("projectDetails.notFound.title")}
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {t("projectDetails.notFound.description")}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center justify-center rounded-xl border border-[#364f38]/25 bg-[#364f38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2f4431] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#364f38]/40"
                >
                  {t("projectDetails.notFound.homeCta")}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {otherProjects.length ? (
        <section className="w-full bg-white">
          <div className="mx-auto max-w-[1126px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-5xl">
              <div className="flex flex-col gap-3 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-[#364f38] sm:text-3xl">
                  {t("projectDetails.other.title")}
                </h2>
                <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                  {t("projectDetails.other.description")}
                </p>
                {otherTotalPages > 1 ? (
                  <div className="mx-auto mt-2 inline-flex items-center gap-3 rounded-full border border-[#364f38]/20 bg-[#364f38]/5 px-2 py-2">
                    <button
                      type="button"
                      onClick={handleOtherPrev}
                      disabled={otherIsAtFirstPage}
                      className="inline-flex items-center justify-center rounded-full border border-[#364f38]/25 bg-white p-2 text-[#364f38] transition hover:bg-[#364f38]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#364f38]/40 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
                      aria-label={t("projectDetails.other.aria.prev")}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M15 6L9 12L15 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <span className="min-w-[88px] text-center text-xs font-semibold tracking-wide text-[#364f38]">
                      {otherCurrentPage + 1} / {otherTotalPages}
                    </span>

                    <button
                      type="button"
                      onClick={handleOtherNext}
                      disabled={otherIsAtLastPage}
                      className="inline-flex items-center justify-center rounded-full border border-[#364f38]/25 bg-white p-2 text-[#364f38] transition hover:bg-[#364f38]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#364f38]/40 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
                      aria-label={t("projectDetails.other.aria.next")}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M9 6L15 12L9 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                ) : null}
              </div>

              <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-3">
                {visibleOtherProjects.map((item) => (
                  <ProjectCard
                    key={item.id}
                    name={getLocalizedField(
                      item.name,
                      item.translations,
                      currentLanguage,
                      "name",
                    )}
                    description={getLocalizedField(
                      item.description,
                      item.translations,
                      currentLanguage,
                      "description",
                    )}
                    image={item.image}
                    href={`#/project/${item.id}`}
                    ctaLabel={t("projectDetails.other.cta")}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <Line />

      <Contact />
    </main>
  );
}
