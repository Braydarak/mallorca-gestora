import { useMemo } from "react";
import { useTranslation } from "react-i18next";

type MarketPointProps = {
  title: string;
  description: string;
  index: string;
};

function MarketPoint({ title, description, index }: MarketPointProps) {
  return (
    <div className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#364f38]/10 text-sm font-bold text-[#364f38]">
          {index}
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">
            {title}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-slate-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function State() {
  const { t } = useTranslation();
  const points = useMemo<MarketPointProps[]>(
    () => [
      {
        index: "1",
        title: t("stateSection.points.demand.title"),
        description: t("stateSection.points.demand.description"),
      },
      {
        index: "2",
        title: t("stateSection.points.supply.title"),
        description: t("stateSection.points.supply.description"),
      },
      {
        index: "3",
        title: t("stateSection.points.growth.title"),
        description: t("stateSection.points.growth.description"),
      },
      {
        index: "4",
        title: t("stateSection.points.environment.title"),
        description: t("stateSection.points.environment.description"),
      },
    ],
    [t],
  );

  return (
    <section
      id="market"
      className="relative w-full overflow-hidden bg-[#364f38] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/12 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-[380px] w-[380px] rounded-full bg-black/15 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[440px] w-[440px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1126px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t("stateSection.title")}
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
              {t("stateSection.description")}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2">
            {points.map((point) => (
              <MarketPoint
                key={point.index}
                index={point.index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
