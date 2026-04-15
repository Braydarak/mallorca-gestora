import { useEffect, useState } from "react";
import { ProjectCard } from "../../components/cards";

type InvestmentOption = {
  name: string;
  price: string;
};

type InvestmentOpportunity = {
  id: number;
  name: string;
  location: string;
  description: string;
  image?: string;
  adquisitionCost?: string;
  construction_total?: string;
  total_investment?: string;
  options?: InvestmentOption[];
  total_profit?: string;
};

type InvestmentOpsResponse = {
  investmentOps: InvestmentOpportunity[];
};

export default function InvestmentSection() {
  const [opportunities, setOpportunities] = useState<InvestmentOpportunity[]>(
    [],
  );
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;

  useEffect(() => {
    let isMounted = true;

    const loadOpportunities = async () => {
      try {
        const response = await fetch("/investmentOps.json");
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as InvestmentOpsResponse;
        if (isMounted) {
          setOpportunities(data.investmentOps ?? []);
        }
      } catch {
        if (isMounted) {
          setOpportunities([]);
        }
      }
    };

    loadOpportunities();

    return () => {
      isMounted = false;
    };
  }, []);

  const totalPages = Math.ceil(opportunities.length / cardsPerPage);
  const visibleOpportunities = opportunities.slice(
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
    <section id="investment" className="w-full bg-white">
      <div className="mx-auto max-w-[1126px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#364f38] sm:text-4xl">
              Oportunidades de inversión
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Proyectos seleccionados con análisis previo, enfoque operativo y
              potencial de creación de valor.
            </p>
            {totalPages > 1 ? (
              <div className="mx-auto mt-2 inline-flex items-center gap-3 rounded-full border border-[#364f38]/20 bg-[#364f38]/5 px-2 py-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={isAtFirstPage}
                  className="inline-flex items-center justify-center rounded-full border border-[#364f38]/25 bg-white p-2 text-[#364f38] transition hover:bg-[#364f38]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#364f38]/40 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
                  aria-label="Oportunidad anterior"
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
                  aria-label="Siguiente oportunidad"
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
            {visibleOpportunities.map((opportunity) => (
              <ProjectCard
                key={opportunity.id}
                name={opportunity.name}
                description={opportunity.description}
                image={opportunity.image}
                href={`#/investment/${opportunity.id}`}
                ctaLabel="Ver oportunidad"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
