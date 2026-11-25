import { GOALS, PILLARS } from "../data";

export default function About() {
  return (
    <>
      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHead kicker="Section A" title="About The Magnifier" />

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="dropcap text-xl leading-[1.75] text-ink/90">
              The Magnifier is the official school publication of Biliran Science High
              School. Written, designed and edited entirely by students, it reports on
              campus life, celebrates academic and creative excellence, and holds a
              steady lens to the issues that matter to our learners.
            </p>
            <p className="mt-6 text-lg leading-[1.75] text-ink/80">
              Our name is our promise: to look closer. We believe every story is worth
              examining carefully, from the science fair and the sports field to the
              quiet concerns of a student that deserve to be heard. Guided by our
              advisers and the ethics of campus journalism, we publish with accuracy,
              fairness and courage.
            </p>
            <p className="mt-6 text-lg leading-[1.75] text-ink/80">
              As the school's institutional voice, The Magnifier is a record of our
              community's history, a training ground for future writers, artists and
              broadcasters, and a bridge between students, teachers, parents and
              alumni.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="relative border-y-4 border-ink py-8">
              <span
                aria-hidden
                className="absolute -top-1 left-0 font-display text-8xl font-black leading-none text-brand/20"
              >
                “
              </span>
              <blockquote className="relative pt-6 font-display text-2xl font-bold italic leading-snug md:text-3xl">
                A school paper isn't just about what happened. It's about making sure
                every student feels seen.
              </blockquote>
              <p className="kicker mt-5">— Editorial Vision</p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-px bg-rule font-sans">
              {[
                ["Published by", "Student Journalists"],
                ["Home", "Biliran Science High School"],
                ["Coverage", "News · Features · Sports · Science"],
                ["Formats", "Print & Digital"],
              ].map(([k, v]) => (
                <div key={k} className="bg-paper p-4">
                  <dt className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink/50">
                    {k}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        {/* pillars */}
        <div className="mt-16 grid gap-px border-y border-ink bg-ink md:grid-cols-3">
          {PILLARS.map((p) => (
            <article key={p.n} className="bg-paper p-7">
              <span className="font-display text-5xl font-black text-brand">{p.n}</span>
              <h3 className="mt-2 font-display text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/75">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* GOAL */}
      <section id="goal" className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker !text-[#ff6b70]">Section B</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight md:text-6xl">
              Our <span className="italic text-[#ff6b70]">Goal</span>
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-paper/80">
              To be the most trusted student voice on campus, a publication that
              informs with honesty, questions with respect, and empowers young
              journalists to lead with integrity.
            </p>
            <div className="mt-8 h-1 w-20 bg-brand" />
          </div>

          <ol className="lg:col-span-7">
            {GOALS.map((g, i) => (
              <li
                key={i}
                className="flex gap-5 border-t border-paper/20 py-6 last:border-b"
              >
                <span className="font-display text-3xl font-black italic text-[#ff6b70]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-lg leading-relaxed text-paper/90">{g}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export function SectionHead({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="border-b-4 border-ink pb-5">
      <p className="kicker">{kicker}</p>
      <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display text-4xl font-black leading-tight md:text-6xl">
          {title}
        </h2>
        {intro && <p className="max-w-md text-ink/70 md:text-right">{intro}</p>}
      </div>
    </div>
  );
}
