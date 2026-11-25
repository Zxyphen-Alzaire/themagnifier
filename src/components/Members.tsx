import { MEMBERS } from "../data";
import { SectionHead } from "./About";

export default function Members() {
  const [lead, ...rest] = MEMBERS;
  return (
    <section id="members" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <SectionHead
        kicker="Section D"
        title="Editorial Board"
        intro="The students behind every headline, layout and photograph."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-12">
        {/* featured: Editor-in-Chief */}
        <article className="group lg:col-span-5">
          <div className="relative overflow-hidden bg-ink">
            <img
              src={lead.img}
              alt={`Portrait of ${lead.name}`}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute left-0 top-5 bg-brand px-3 py-1.5 font-sans text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white">
              Head of the Board
            </span>
          </div>
          <p className="kicker mt-5">{lead.role}</p>
          <h3 className="mt-1 font-display text-3xl font-black md:text-4xl">
            {lead.name}
          </h3>
          <p className="mt-2 max-w-md text-ink/70">
            Leads the editorial direction of The Magnifier and ensures every issue meets
            the highest standards of accuracy and fairness.
          </p>
        </article>

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:col-span-7">
          {rest.map((m) => (
            <article key={m.name} className="group">
              <div className="overflow-hidden bg-ink">
                <img
                  src={m.img}
                  alt={`Portrait of ${m.name}`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-3 border-t-2 border-ink pt-2">
                <p className="kicker !text-[0.62rem]">{m.role}</p>
                <h3 className="mt-0.5 font-display text-lg font-bold leading-tight">
                  {m.name}
                </h3>
                <p className="font-sans text-xs text-ink/50">{m.desk} Desk</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-12 border-t border-rule pt-5 text-center font-sans text-xs uppercase tracking-[0.16em] text-ink/50">
        Guided by our faculty advisers and the school administration
      </p>
    </section>
  );
}
