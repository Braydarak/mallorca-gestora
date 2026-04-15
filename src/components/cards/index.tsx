type ProjectCardProps = {
  name: string;
  description: string;
  image?: string;
};

export function ProjectCard({ name, description, image }: ProjectCardProps) {
  const shortDescription =
    description.length > 190
      ? `${description.slice(0, 190).trimEnd()}...`
      : description;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-44 w-full overflow-hidden bg-[#364f38]/10">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            draggable={false}
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-[#364f38]/20 via-white to-[#364f38]/10" />
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">
              {name}
            </h3>
          </div>
        </div>

        <p className="mt-4 text-base leading-relaxed text-slate-700">
          {shortDescription}
        </p>

        <div className="mt-auto pt-6">
          <button
            type="button"
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-[#364f38]/25 bg-[#364f38] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#2f4431] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#364f38]/40"
          >
            Ver proyecto
          </button>
        </div>
      </div>
    </article>
  );
}
