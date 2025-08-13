"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Accueil", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Mon Parcours", href: "#formation" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      for (const item of navItems) {
        const section = document.querySelector(item.href) as HTMLElement;
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActive(item.href);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (href: string) =>
    `px-3 py-2 font-medium text-white rounded-lg transition-colors duration-200 hover:shadow-lg hover:shadow-blue-500/40 ${
      active === href ? "" : ""
    }`;

  return (
    <nav
      className="
  mb-4 sm:mb-6 md:mb-8
  mt-4 sm:mt-6 md:mt-8
  rounded-lg border border-green-400/50
  lg:mx-40
  md:mx-[22px]
  sm:mx-4
  backdrop-blur-lg shadow-lg
"

    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-white font-bold text-xl">DP</div>

          {/* Menu desktop */}
          <div className="hidden sm:flex space-x-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className={linkClasses(item.href)}>
                {item.name}
              </a>
            ))}
          </div>

          {/* Bouton mobile */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block ${linkClasses(item.href)}`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
// import { FC } from "react";
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


// type NavigationItem = {
//   name: string;
//   href: string;
//   current: boolean;
// };

// const navigation: NavigationItem[] = [
//   { name: "Acceuil", href: "#page", current: true },
//   { name: "Projets", href: "#projects", current: false },
//   { name: "Blog", href: "#", current: false },
//   { name: "Contact", href: "#", current: false },
// ];

// function classNames(...classes: (string | undefined | null | false)[]): string {
//   return classes.filter(Boolean).join(" ");
// }

// const NavBar: FC = () => {
//   return (
//     <div className="min-h-full">
//       <Disclosure as="nav">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex h-16 items-center justify-between">
            
//             {/* Left - bouton burger (mobile uniquement) */}
//             <div className="flex items-center sm:hidden">
//               <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
//                 <span className="sr-only">Ouvrir le menu</span>
//                 <Bars3Icon
//                   aria-hidden="true"
//                   className="block size-6 group-data-open:hidden"
//                 />
//                 <XMarkIcon
//                   aria-hidden="true"
//                   className="hidden size-6 group-data-open:block"
//                 />
//               </DisclosureButton>
//             </div>

//             {/* Center - logo + nav */}
//             <div className="flex items-center justify-center flex-grow">
//               <div className="shrink-0">
//                 <img
//                   alt="Your Company"
//                   src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
//                   className="h-8 w-8"
//                 />
//               </div>
//               <div className="hidden sm:flex ml-10 space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? "page" : undefined}
//                     className={classNames(
//                       item.current
//                         ? "bg-gray-900 text-white"
//                         : "text-gray-300 hover:bg-white/5 hover:text-white",
//                       "rounded-md px-3 py-2 text-sm font-medium"
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Right - vide pour l'instant */}
//             <div className="flex items-center"></div>
//           </div>
//         </div>

//         {/* Mobile panel */}
//         <DisclosurePanel className="sm:hidden">
//           <div className="space-y-1 px-2 pt-2 pb-3">
//             {navigation.map((item) => (
//               <DisclosureButton
//                 key={item.name}
//                 as="a"
//                 href={item.href}
//                 aria-current={item.current ? "page" : undefined}
//                 className={classNames(
//                   item.current
//                     ? "bg-gray-900 text-white"
//                     : "text-gray-300 hover:bg-white/5 hover:text-white",
//                   "block rounded-md px-3 py-2 text-base font-medium"
//                 )}
//               >
//                 {item.name}
//               </DisclosureButton>
//             ))}
//           </div>
//         </DisclosurePanel>
//       </Disclosure>
//     </div>
//   );
// };

// export default NavBar;

