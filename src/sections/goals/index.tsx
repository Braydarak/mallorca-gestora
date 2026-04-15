import { useMemo } from "react";
import { useTranslation } from "react-i18next";

type ValueCardProps = {
  title: string;
  description: string;
};

function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/15">
      <h3 className="text-lg font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-white/85">
        {description}
      </p>
    </div>
  );
}

export default function Goals() {
  const { t } = useTranslation();
  const topCards = useMemo<ValueCardProps[]>(
    () => [
      {
        title: t("goals.cards.experience.title"),
        description: t("goals.cards.experience.description"),
      },
      {
        title: t("goals.cards.transparency.title"),
        description: t("goals.cards.transparency.description"),
      },
    ],
    [t],
  );
  const bottomCards = useMemo<ValueCardProps[]>(
    () => [
      {
        title: t("goals.cards.reliability.title"),
        description: t("goals.cards.reliability.description"),
      },
      {
        title: t("goals.cards.objective.title"),
        description: t("goals.cards.objective.description"),
      },
    ],
    [t],
  );

  return (
    <section
      id="goals"
      className="relative w-full overflow-hidden bg-[#364f38] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/12 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-[380px] w-[380px] rounded-full bg-black/15 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[440px] w-[440px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1126px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("goals.title")}
          </h2>

          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:items-start lg:gap-12">
            <div className="text-left">
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                {t("goals.intro.first")}
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
                {t("goals.intro.second")}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-1">
              {topCards.map((card) => (
                <ValueCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2">
            {bottomCards.map((card) => (
              <ValueCard
                key={card.title}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
