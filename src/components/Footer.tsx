import Logo from "./Logo";
import { NAV } from "../data";

const SOCIALS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    path: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  },
  {
    name: "X / Twitter",
    href: "https://x.com",
    path: "M18.2 2.3h3.3l-7.2 8.3L22.8 22h-6.6l-5.2-6.8L5 22H1.7l7.7-8.8L1.2 2.3H8l4.7 6.2 5.5-6.2zm-1.2 17.7h1.8L7.1 4.2H5.2L17 20z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <Logo className="h-20 w-20 shrink-0" />
              <div>
                <p className="font-display text-3xl font-black leading-none">
                  The <span className="italic text-[#ff6b70]">Magnifier</span>
                </p>
                <p className="mt-1.5 font-sans text-[0.65rem] font-bold uppercase tracking-[0.16em] text-paper/60">
                  Official School Publication
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm leading-relaxed text-paper/70">
              Looking closer. Telling the truth. Giving every voice a page.
            </p>
            <ul className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="flex h-10 w-10 items-center justify-center border border-paper/30 transition hover:border-brand hover:bg-brand"
                  >
                    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="kicker !text-[#ff6b70]">The School</h4>
            <address className="mt-4 space-y-1 not-italic leading-relaxed text-paper/80">
              <p className="font-display text-lg font-bold text-paper">
                Biliran Science High School
              </p>
              <p>Biliran Province</p>
              <p>Eastern Visayas, Philippines</p>
              <p className="pt-2 text-sm text-paper/50">
                Office hours: Mon – Fri, 8:00 AM – 5:00 PM
              </p>
            </address>
          </div>

          <div className="lg:col-span-3">
            <h4 className="kicker !text-[#ff6b70]">Contact the Newsroom</h4>
            <ul className="mt-4 space-y-2 leading-relaxed text-paper/80">
              <li>
                <a
                  href="mailto:themagnifier@example.com"
                  className="underline decoration-paper/30 underline-offset-4 hover:text-white hover:decoration-brand"
                >
                  themagnifier@example.com
                </a>
              </li>
              <li>+63 900 000 0000</li>
              <li className="text-sm text-paper/50">
                Story tips, letters to the editor and article submissions are always
                welcome.
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="kicker !text-[#ff6b70]">Sections</h4>
            <ul className="mt-4 space-y-2 font-sans text-sm text-paper/80">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-white hover:underline">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/20 pt-6 font-sans text-xs text-paper/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} The Magnifier · Biliran Science High School. All rights reserved.</p>
          <p>Written, designed and edited by students.</p>
        </div>
      </div>
    </footer>
  );
}
