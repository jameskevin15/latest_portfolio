'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

export const Header = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "mywork", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(section === "home" ? "home" : section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home", id: "home" },
    { href: "#mywork", label: "Projects", id: "mywork" },
    { href: "#about", label: "About", id: "about" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`nav-item ${
              active === item.id
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
