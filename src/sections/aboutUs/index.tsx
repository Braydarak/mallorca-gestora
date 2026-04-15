import { useMemo } from "react";
import { useTranslation } from "react-i18next";

type PillProps = {
  title: string;
  description: string;
};

function Pill({ title, description }: PillProps) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold tracking-tight text-[#364f38]">
        {title}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-slate-700">
        {description}
      </p>
    </div>
  );
}

export default function AboutUs() {
  const { t } = useTranslation();
  const pills = useMemo<PillProps[]>(
    () => [
      {
        title: t("aboutUs.pills.integrated.title"),
        description: t("aboutUs.pills.integrated.description"),
      },
      {
        title: t("aboutUs.pills.selective.title"),
        description: t("aboutUs.pills.selective.description"),
      },
    ],
    [t],
  );

  return (
    <section id="about-us" className="w-full bg-white">
      <div className="mx-auto max-w-[1126px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#364f38] sm:text-4xl">
          {t("aboutUs.title")}
        </h2>

        <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          <div className="text-left">
            <p className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              {t("aboutUs.companyName")}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
              {t("aboutUs.intro.first")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              {t("aboutUs.intro.second")}
            </p>
          </div>

          <div className="grid gap-6">
            <img
              src="./img.jpeg"
              alt=""
              className="h-56 w-full rounded-2xl shadow-sm sm:h-72"
              style={{ objectPosition: "50% 40%" }}
              draggable={false}
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2">
          {pills.map((pill) => (
            <Pill
              key={pill.title}
              title={pill.title}
              description={pill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
