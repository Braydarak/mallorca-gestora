import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "../../components/cards";

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

export default function ProjectSection() {
  const { t, i18n } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage ?? i18n.language)
    .slice(0, 2)
    .toLowerCase();
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        if (!response.ok) {
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
      }
    };

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const totalPages = Math.ceil(projects.length / cardsPerPage);
  const visibleProjects = projects.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage,
  );
  const isAtFirstPage = currentPage === 0;
  const isAtLastPage = currentPage >= totalPages - 1;

  const handlePrev = () => {
    if (isAtFirstPage) {
      return;
    }

    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isAtLastPage) {
      return;
    }

    setCurrentPage((prev) => prev + 1);
  };

  return (
    <section id="projects" className="w-full bg-white">
      <div className="mx-auto max-w-[1126px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#364f38] sm:text-4xl">
              {t("projectSection.title")}
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
              {t("projectSection.description")}
            </p>
            {totalPages > 1 ? (
              <div className="mx-auto mt-2 inline-flex items-center gap-3 rounded-full border border-[#364f38]/20 bg-[#364f38]/5 px-2 py-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={isAtFirstPage}
                  className="inline-flex items-center justify-center rounded-full border border-[#364f38]/25 bg-white p-2 text-[#364f38] transition hover:bg-[#364f38]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#364f38]/40 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
                  aria-label={t("projectSection.aria.prev")}
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
                  {currentPage + 1} / {totalPages}
                </span>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isAtLastPage}
                  className="inline-flex items-center justify-center rounded-full border border-[#364f38]/25 bg-white p-2 text-[#364f38] transition hover:bg-[#364f38]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#364f38]/40 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
                  aria-label={t("projectSection.aria.next")}
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
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                name={getLocalizedField(
                  project.name,
                  project.translations,
                  currentLanguage,
                  "name",
                )}
                description={getLocalizedField(
                  project.description,
                  project.translations,
                  currentLanguage,
                  "description",
                )}
                image={project.image}
                href={`#/project/${project.id}`}
                ctaLabel={t("projectSection.cta")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
