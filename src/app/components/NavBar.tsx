"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Accueil", href: "#home" },
  { name: "Compétences", href: "#skills" },
  { name: "Parcours", href: "#formation" },
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
  mx-4
  my-4 sm:my-6 md:my-8
  rounded-lg border border-green-400/50
  lg:mx-40
  md:mx-[22px]
  sm:mx-8
  backdrop-blur-lg shadow-lg
"

    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home">
            <Image
              src="/logodp.png"
              alt="Logo Christopher De Pasqual"
              width={82}
              height={82}
            />
          </a>

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
