import { useState, useEffect } from "react";
import {
  Home,
  User,
  Folder,
  Layers,
  Mail,
} from "lucide-react";

const navItems = [
  { name: "Home", id: "home", icon: Home },
  { name: "About", id: "about", icon: User },
  { name: "Projects", id: "projects", icon: Folder },
  { name: "What I Do", id: "what-i-do", icon: Layers },
  { name: "Contact", id: "contact", icon: Mail },
];

export default function Sidebar({ scrollContainerRef, sectionIds = [] }) {
  const [activeId, setActiveId] = useState("home");

  // Track which section is in view for active state
  useEffect(() => {
    const container = scrollContainerRef?.current;
    if (!container || sectionIds.length === 0) return;

    const updateActive = () => {
      const scrollTop = container.scrollTop;
      const viewportMid = scrollTop + container.clientHeight * 0.4;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= viewportMid) current = id;
      }
      setActiveId(current);
    };

    updateActive();
    container.addEventListener("scroll", updateActive, { passive: true });
    return () => container.removeEventListener("scroll", updateActive);
  }, [scrollContainerRef, sectionIds]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section && scrollContainerRef?.current) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="
      fixed z-50
      bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-6 md:top-1/2 md:-translate-y-1/2
    ">
      {/* Desktop: curved pill + accent; mobile: full-width bar as before */}
      <div className="
        relative
        flex flex-row md:flex-col gap-2 md:gap-3
        justify-center md:justify-start
        bg-white/[0.06] backdrop-blur-xl border-t md:border border-white/10
        rounded-t-2xl md:rounded-full
        px-2 py-3 md:px-3 md:py-5
        shadow-xl md:shadow-[0_0_30px_-5px_rgba(59,130,246,0.25),0_0_15px_rgba(255,255,255,0.05)]
        md:bg-gradient-to-b md:from-white/[0.08] md:to-white/[0.04]
      ">
        {/* Gradient accent strip - desktop only, curved */}
        <span className="
          hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-2/3 rounded-full
          bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-500
          opacity-80
        " />
        {navItems.map(({ name, id, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => scrollToSection(e, id)}
            className={`group relative flex items-center justify-center
               w-11 h-11 md:w-12 md:h-12 rounded-full transition-all duration-300
               ${
                 activeId === id
                   ? "bg-blue-600 text-white shadow-lg"
                   : "text-gray-300 hover:bg-white/10"
               }`}
            aria-label={name}
          >
            <Icon size={20} />

            <span className="
              absolute right-full mr-2 md:right-16 md:mr-0
              whitespace-nowrap px-3 py-1.5 text-sm rounded-md
              bg-black/80 text-white
              opacity-0 translate-x-2
              group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-300 pointer-events-none
              hidden md:inline
            ">
              {name}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}
