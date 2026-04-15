import { useEffect, useId, useMemo, useRef, useState } from "react";

export type LanguageCode = "es" | "en" | "ca" | "de";

type LenguajeSelectorProps = {
  value: LanguageCode;
  onChange: (value: LanguageCode) => void;
  className?: string;
};

export default function LenguajeSelector({
  value,
  onChange,
  className,
}: LenguajeSelectorProps) {
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const options = useMemo(
    () =>
      [
        { code: "es" as const, label: "Español" },
        { code: "en" as const, label: "English" },
        { code: "ca" as const, label: "Català" },
        { code: "de" as const, label: "Deutsch" },
      ] satisfies Array<{ code: LanguageCode; label: string }>,
    [],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const root = rootRef.current;
      if (!root) return;
      if (event.target instanceof Node && root.contains(event.target)) return;
      setIsOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const selected = options.find((option) => option.code === value);

  return (
    <div
      ref={rootRef}
      className={["relative", className].filter(Boolean).join(" ")}
    >
      <span className="sr-only">Seleccionar idioma</span>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={menuId}
        className="flex w-full items-center justify-between gap-1.5 rounded-md border border-white/15 bg-white/10 px-2 py-1.5 text-sm font-semibold tracking-wide text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#364f38]"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true">{value.toUpperCase()}</span>
          <span className="sr-only">{selected?.label ?? value}</span>
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={[
            "shrink-0 opacity-90 transition-transform",
            isOpen ? "rotate-180" : "",
          ].join(" ")}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen ? (
        <div
          id={menuId}
          role="listbox"
          aria-label="Idiomas"
          className="absolute right-0 z-50 mt-2 w-full overflow-hidden rounded-md border border-white/15 bg-[#2f4431] shadow-[0_18px_35px_-18px_rgba(0,0,0,0.7)]"
        >
          <div className="grid py-1">
            {options.map((option) => {
              const isSelected = option.code === value;

              return (
                <button
                  key={option.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={[
                    "flex w-full items-center justify-between px-2 py-1.5 text-left text-sm font-semibold tracking-wide transition-colors",
                    isSelected
                      ? "bg-white/12 text-white"
                      : "text-white/90 hover:bg-white/10 hover:text-white",
                  ].join(" ")}
                  onClick={() => {
                    onChange(option.code);
                    setIsOpen(false);
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    <span aria-hidden="true">{option.code.toUpperCase()}</span>
                    <span className="sr-only">{option.label}</span>
                  </span>
                  {isSelected ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="opacity-95"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
