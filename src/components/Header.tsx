import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV } from "../data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header id="top">
      {/* top utility strip */}
      <div className="bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em]">
          <span>{today}</span>
          <span className="hidden sm:inline">Biliran Science High School · Biliran, Philippines</span>
          <span className="text-brand">Est. 2018</span>
        </div>
      </div>

      {/* masthead */}
      <div className="mx-auto max-w-6xl px-5 pt-8 pb-6 text-center">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
          <Logo spin className="h-24 w-24 shrink-0 drop-shadow-md md:h-32 md:w-32" />
          <div>
            <p className="kicker mb-1">The Official School Publication</p>
            <h1 className="font-display text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
              The <span className="italic text-brand">Magnifier</span>
            </h1>
            <p className="mt-3 font-serif text-lg italic text-ink/70 md:text-xl">
              Looking closer. Telling the truth. Giving every voice a page.
            </p>
          </div>
        </div>
      </div>

      {/* sticky nav */}
      <nav
        aria-label="Primary"
        className={`sticky top-0 z-50 border-y-[3px] border-double border-ink bg-paper/95 backdrop-blur transition-shadow ${
          stuck ? "shadow-md" : ""
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
          <a
            href="#top"
            className={`items-center gap-2 py-2 font-display text-lg font-black ${
              stuck ? "flex" : "flex md:hidden"
            }`}
          >
            <Logo className="h-7 w-7" />
            <span>
              The <span className="text-brand italic">Magnifier</span>
            </span>
          </a>

          <ul
            className={`hidden items-center gap-1 font-sans text-[0.78rem] font-bold uppercase tracking-[0.14em] md:flex ${
              stuck ? "" : "mx-auto"
            }`}
          >
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="block px-3 py-3.5 transition-colors hover:text-brand"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="ml-auto py-3 font-sans text-xs font-bold uppercase tracking-widest md:hidden"
          >
            {open ? "Close ✕" : "Menu ☰"}
          </button>
        </div>

        {open && (
          <ul className="border-t border-rule bg-paper px-5 pb-3 font-sans text-sm font-bold uppercase tracking-[0.14em] md:hidden">
            {NAV.map((n) => (
              <li key={n.href} className="border-b border-rule last:border-0">
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 hover:text-brand"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
