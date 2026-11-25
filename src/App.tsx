import Header from "./components/Header";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Members from "./components/Members";
import Footer from "./components/Footer";

const HERO_IMG =
  "https://images.pexels.com/photos/33317197/pexels-photo-33317197.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400";

const INSIDE = [
  { label: "About & Our Goal", href: "#about", n: "A" },
  { label: "Achievements", href: "#achievements", n: "C" },
  { label: "Meet the Editorial Board", href: "#members", n: "D" },
  { label: "Contact the Newsroom", href: "#contact", n: "E" },
];

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
      <div className="grid gap-8 lg:grid-cols-12">
        <a href="#about" className="group relative block overflow-hidden bg-ink lg:col-span-8">
          <img
            src={HERO_IMG}
            alt="A student journalist interviewed by the press outdoors"
            className="h-72 w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 md:h-[28rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-9">
            <span className="inline-block bg-brand px-2.5 py-1 font-sans text-[0.65rem] font-bold uppercase tracking-[0.16em]">
              Editor's Note
            </span>
            <h2 className="mt-3 font-display text-3xl font-black leading-tight md:text-5xl">
              Every story deserves a closer look.
            </h2>
            <p className="mt-3 hidden max-w-xl text-lg text-white/80 sm:block">
              Meet the student journalists of Biliran Science High School who report,
              write, shoot and design The Magnifier.
            </p>
          </div>
        </a>

        <aside className="lg:col-span-4">
          <h3 className="border-b-4 border-ink pb-2 font-display text-2xl font-black">
            Inside This Edition
          </h3>
          <ul>
            {INSIDE.map((i) => (
              <li key={i.href} className="border-b border-rule">
                <a
                  href={i.href}
                  className="group flex items-center gap-4 py-4 transition-colors hover:text-brand"
                >
                  <span className="font-display text-3xl font-black italic text-brand">
                    {i.n}
                  </span>
                  <span className="flex-1 font-display text-lg font-bold leading-snug">
                    {i.label}
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-ink/60">
            <span className="kicker mr-2">Our Motto</span>
            Look closer. Tell the truth.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Members />
      </main>
      <Footer />
    </div>
  );
}
