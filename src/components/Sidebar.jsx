import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  Folder,
  Layers,
  Mail,
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Projects", path: "/projects", icon: Folder },
  { name: "What I Do", path: "/what-i-do", icon: Layers },
  { name: "Contact", path: "/contact", icon: Mail },
];

export default function Sidebar() {
  {/* DESKTOP SIDEBAR */}
<div
  className="
    hidden md:flex
    fixed right-6 top-1/2 -translate-y-1/2
    flex-col gap-4
    bg-white/5 backdrop-blur-lg
    border border-white/10
    rounded-2xl p-3
    z-50
  "
>
  {/* icons */}
</div>

  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-3 py-4 shadow-xl">

        {navItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `group relative flex items-center justify-center
               w-12 h-12 rounded-full transition-all duration-300
               ${
                 isActive
                   ? "bg-blue-600 text-white shadow-lg"
                   : "text-gray-300 hover:bg-white/10"
               }`
            }
          >
            {/* ICON */}
            <Icon size={20} />

            {/* TOOLTIP */}
            <span
              className="
                absolute right-16
                whitespace-nowrap
                px-3 py-1.5 text-sm rounded-md
                bg-black/80 text-white
                opacity-0 translate-x-2
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-300
                pointer-events-none
              "
            >
              {name}
            </span>
          </NavLink>
        ))}

      </div>
    </aside>
  );
}
