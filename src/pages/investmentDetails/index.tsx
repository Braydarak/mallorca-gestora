import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "../../components/cards";
import Contact from "../../sections/contact";
import Line from "../../components/line";

type InvestmentOption = {
  name: string;
  price: string;
  translations?: Partial<Record<string, string>>;
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
  translations?: Partial<
    Record<
      string,
      {
        name?: string;
        location?: string;
        description?: string;
      }
    >
  >;
};

type InvestmentOpsResponse = {
  investmentOps: InvestmentOpportunity[];
};

function getLocalizedField(
  fallback: string,
  translations:
    | Partial<
        Record<
          string,
          {
            name?: string;
            location?: string;
            description?: string;
          }
        >
      >
    | undefined,
  language: string,
  field: "name" | "location" | "description",
) {
  return (
    translations?.[language]?.[field] ?? translations?.es?.[field] ?? fallback
  );
}

function getLocalizedOptionName(
  fallback: string,
  translations: Partial<Record<string, string>> | undefined,
  language: string,
) {
  return translations?.[language] ?? translations?.es ?? fallback;
}

function getOpportunityIdFromHash(hash: string) {
  const match = hash.match(/^#\/investment\/(\d+)(?:\/)?$/);
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

type InvestmentDetailsProps = {
  opportunityId?: number;
};

export default function InvestmentDetails({
  opportunityId,
}: InvestmentDetailsProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage ?? i18n.language)
    .slice(0, 2)
    .toLowerCase();
  const [opportunities, setOpportunities] = useState<InvestmentOpportunity[]>(
    [],
  );
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
    if (typeof opportunityId === "number") {
      return opportunityId;
    }

    return getOpportunityIdFromHash(window.location.hash);
  }, [opportunityId]);

  useEffect(() => {
    let isMounted = true;

    const loadOpportunities = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("/investmentOps.json");
        if (!response.ok) {
          if (isMounted) {
            setOpportunities([]);
          }
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
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadOpportunities();

    return () => {
      isMounted = false;
    };
  }, []);

  const opportunity = useMemo(() => {
    if (!resolvedId) {
      return null;
    }

    return opportunities.find((item) => item.id === resolvedId) ?? null;
  }, [opportunities, resolvedId]);

  const otherOpportunities = useMemo(() => {
    if (!resolvedId) {
      return opportunities;
    }

    return opportunities.filter((item) => item.id !== resolvedId);
  }, [opportunities, resolvedId]);

  useEffect(() => {
    setOtherCurrentPage(0);
  }, [resolvedId]);

  const otherTotalPages = Math.ceil(
    otherOpportunities.length / otherCardsPerPage,
  );
  const visibleOtherOpportunities = otherOpportunities.slice(
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
                  {t("investmentDetails.loading")}
                </p>
              </div>
            ) : opportunity ? (
              <div className="mt-10 lg:mt-14">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#364f38]/20 bg-[#364f38]/5 px-4 py-2 text-sm font-semibold text-[#364f38] transition hover:bg-[#364f38]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#364f38]/40 sm:order-2"
                  >
                    <span aria-hidden="true">←</span>
                    {t("investmentDetails.back")}
                  </a>

                  <div className="flex items-baseline justify-between gap-4 sm:order-1 sm:justify-start sm:gap-4">
                    <h1 className="text-3xl font-bold tracking-tight text-[#364f38] sm:text-4xl">
                      {getLocalizedField(
                        opportunity.name,
                        opportunity.translations,
                        currentLanguage,
                        "name",
                      )}
                    </h1>
                    <p className="shrink-0 text-right text-sm font-semibold text-slate-600">
                      {getLocalizedField(
                        opportunity.location,
                        opportunity.translations,
                        currentLanguage,
                        "location",
                      )}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
                  <div className="lg:col-start-1 lg:row-start-1">
                    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                      <div className="relative aspect-4/3 w-full bg-[#364f38]/10">
                        {opportunity.image ? (
                          <img
                            src={opportunity.image}
                            alt={opportunity.name}
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
                          {t("investmentDetails.summary.acquisitionCost")}
                        </p>
                        <p className="mt-1 text-base font-semibold text-slate-900">
                          {formatEuros(locale, opportunity.adquisitionCost)}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364f38]">
                          {t("investmentDetails.summary.constructionTotal")}
                        </p>
                        <p className="mt-1 text-base font-semibold text-slate-900">
                          {formatEuros(locale, opportunity.construction_total)}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364f38]">
                          {t("investmentDetails.summary.totalInvestment")}
                        </p>
                        <p className="mt-1 text-base font-semibold text-slate-900">
                          {formatEuros(locale, opportunity.total_investment)}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364f38]">
                          {t("investmentDetails.summary.estimatedProfit")}
                        </p>
                        <p className="mt-1 text-base font-semibold text-slate-900">
                          {formatEuros(locale, opportunity.total_profit)}
                        </p>
                      </div>
                    </div>

                    {opportunity.options?.length ? (
                      <div className="mt-8">
                        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
                          {t("investmentDetails.options.title")}
                        </h2>

                        <div className="mt-4 grid gap-4">
                          {opportunity.options.map((option) => (
                            <div
                              key={`${opportunity.id}-${option.name}`}
                              className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
                            >
                              <div>
                                <p className="text-sm font-semibold text-slate-900">
                                  {getLocalizedOptionName(
                                    option.name,
                                    option.translations,
                                    currentLanguage,
                                  )}
                                </p>
                                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                                  {t("investmentDetails.options.note")}
                                </p>
                              </div>
                              <p className="shrink-0 text-base font-bold text-[#364f38]">
                                {formatEuros(locale, option.price)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="lg:col-start-1 lg:row-start-2">
                    <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
                      {getLocalizedField(
                        opportunity.description,
                        opportunity.translations,
                        currentLanguage,
                        "description",
                      )}
                    </p>
                  </div>

                  <div className="lg:col-start-2 lg:row-start-2">
                    <div className="rounded-2xl border border-[#364f38]/15 bg-[#364f38]/5 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364f38]">
                        {t("investmentDetails.nextStep.title")}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">
                        {t("investmentDetails.nextStep.description")}
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
                        {t("investmentDetails.nextStep.cta")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-10 rounded-2xl border border-black/10 bg-white p-8 text-center shadow-sm">
                <h1 className="text-xl font-bold tracking-tight text-slate-900">
                  {t("investmentDetails.notFound.title")}
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {t("investmentDetails.notFound.description")}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center justify-center rounded-xl border border-[#364f38]/25 bg-[#364f38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2f4431] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#364f38]/40"
                >
                  {t("investmentDetails.notFound.homeCta")}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <Line />

      <Contact />

      {otherOpportunities.length ? (
        <section className="w-full bg-white">
          <div className="mx-auto max-w-[1126px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-5xl">
              <div className="flex flex-col gap-3 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-[#364f38] sm:text-3xl">
                  {t("investmentDetails.other.title")}
                </h2>
                <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                  {t("investmentDetails.other.description")}
                </p>
                {otherTotalPages > 1 ? (
                  <div className="mx-auto mt-2 inline-flex items-center gap-3 rounded-full border border-[#364f38]/20 bg-[#364f38]/5 px-2 py-2">
                    <button
                      type="button"
                      onClick={handleOtherPrev}
                      disabled={otherIsAtFirstPage}
                      className="inline-flex items-center justify-center rounded-full border border-[#364f38]/25 bg-white p-2 text-[#364f38] transition hover:bg-[#364f38]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#364f38]/40 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
                      aria-label={t("investmentDetails.other.aria.prev")}
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
                      aria-label={t("investmentDetails.other.aria.next")}
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
                {visibleOtherOpportunities.map((item) => (
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
                    href={`#/investment/${item.id}`}
                    ctaLabel={t("investmentDetails.other.cta")}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
