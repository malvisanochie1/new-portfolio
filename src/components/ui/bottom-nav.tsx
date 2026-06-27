"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, User, Code2, Briefcase } from "lucide-react";
import { useSmoothScroll } from "@/components/ui/hooks/useSmoothScroll";

const tabs = [
  { name: "Home",      href: "#home",      icon: Home },
  { name: "Skills",    href: "#skills",    icon: Code2 },
  { name: "About",     href: "#about",     icon: User },
  { name: "Portfolio", href: "#portfolio", icon: Briefcase },
] as const;

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState("#home");
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const sectionIds = tabs.map(({ href }) => href.slice(1));
    const visible = new Set<string>();
    const observed = new Set<string>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = `#${entry.target.id}`;
          if (entry.isIntersecting) visible.add(id);
          else visible.delete(id);
        });
        const first = tabs.find(({ href }) => visible.has(href));
        if (first) setActiveSection(first.href);
      },
      { rootMargin: "-80px 0px -50% 0px", threshold: 0 },
    );

    const attachNew = () => {
      let allFound = true;
      sectionIds.forEach((id) => {
        if (!observed.has(id)) {
          const el = document.getElementById(id);
          if (el) { io.observe(el); observed.add(id); }
          else allFound = false;
        }
      });
      return allFound;
    };

    const allFound = attachNew();

    let mo: MutationObserver | null = null;
    if (!allFound) {
      mo = new MutationObserver(() => { if (attachNew()) mo?.disconnect(); });
      mo.observe(document.body, { childList: true, subtree: true });
    }

    return () => { io.disconnect(); mo?.disconnect(); };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    /* Mobile only — hidden on md and above */
    <nav
      aria-label="Bottom navigation"
      className="fixed bottom-0 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden w-full sm:px-2 "
    >
      <div className="flex items-center justify-between gap-1 bg-gray-900/35 backdrop-blur-sm border border-gray-800 sm:rounded-full px-2 py-2 shadow-2xl shadow-black/50 !w-full sm:max-w-lg mx-auto">
        {tabs.map(({ name, href, icon: Icon }) => {
          const active = activeSection === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              aria-current={active ? "page" : undefined}
              className={`flex flex-col items-center justify-center gap-0.5 px-4 sm:px-6 py-2 rounded-full transition-all duration-200  select-none font-bold ${
                active
                  ? "text-white shadow-sm shadow-pink-500/50 bg-slate-900/50"
                  : "text-gray-200 hover:text-gray-200 active:scale-95"
              }`}
            >
              <Icon
                className={`w-5 h-5 font-bold ${active ? "text-pink-500/70" : "text-white"}`}
                strokeWidth={active ? 2.5  : 1.8}
              />
              <span className="text-[10px] font-semibold leading-none tracking-wide">
                {name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
