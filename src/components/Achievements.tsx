import { STATS, TIMELINE } from "../data";
import { SectionHead } from "./About";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-paper-dark">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHead
          kicker="Section C"
          title="Achievements"
          intro="Awards, press conference recognitions and milestones from our newsroom."
        />

        {/* stats */}
        <div className="mt-10 grid grid-cols-2 border-b border-l border-ink md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="border-r border-t border-ink p-6 text-center">
              <p className="font-display text-5xl font-black text-brand md:text-6xl">
                {s.value}
              </p>
              <p className="mt-2 font-sans text-[0.68rem] font-bold uppercase tracking-[0.14em]">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* timeline */}
        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute bottom-0 left-[0.6rem] top-0 w-px bg-ink md:left-1/2"
          />
          <ol className="space-y-10">
            {TIMELINE.map((t, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={t.year}
                  className="relative grid md:grid-cols-2 md:gap-16"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 h-[1.3rem] w-[1.3rem] rounded-full border-4 border-paper-dark bg-brand ring-1 ring-ink md:left-1/2 md:-translate-x-1/2"
                  />
                  <article
                    className={`ml-10 border border-ink bg-paper p-6 shadow-[6px_6px_0_0_#121212] md:ml-0 ${
                      left ? "md:col-start-1 md:text-right" : "md:col-start-2"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 ${
                        left ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="font-display text-4xl font-black text-brand">
                        {t.year}
                      </span>
                      <span className="border border-ink px-2 py-0.5 font-sans text-[0.62rem] font-bold uppercase tracking-[0.16em]">
                        {t.tag}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold leading-snug md:text-2xl">
                      {t.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink/75">{t.text}</p>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
