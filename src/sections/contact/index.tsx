import Form from "../../components/form";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

type InfoCard = {
  title: string;
  description: string;
};

export default function Contact() {
  const { t } = useTranslation();
  const infoCards = useMemo<InfoCard[]>(
    () => [
      {
        title: t("contactSection.cards.responseTime.title"),
        description: t("contactSection.cards.responseTime.description"),
      },
      {
        title: t("contactSection.cards.include.title"),
        description: t("contactSection.cards.include.description"),
      },
      {
        title: t("contactSection.cards.coverage.title"),
        description: t("contactSection.cards.coverage.description"),
      },
    ],
    [t],
  );

  return (
    <section id="contact" className="w-full bg-white">
      <div className="mx-auto max-w-[1126px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#364f38] sm:text-4xl">
              {t("contactSection.title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              {t("contactSection.intro.first")}
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              {t("contactSection.intro.second")}
            </p>

            <div className="mt-8 grid gap-4">
              {infoCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-[#364f38]/15 bg-white p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364f38]">
                    {card.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
}
