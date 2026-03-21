"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Főoldal" },
  { href: "/events", label: "Események" },
  { href: "/about", label: "Rólunk" },
  { href: "/contact", label: "Kapcsolat" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      // ✅ VÁLTOZÁS: backdrop-blur-md törölve, navbar-blur CSS class + transform-gpu hozzáadva
      className={`fixed top-0 w-full z-50 transform-gpu transition-all duration-500 navbar-blur ${
        scrolled
          ? "bg-gray-900/80 shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-white font-extrabold text-xl tracking-tight">
            American <span className="text-indigo-400">Cars</span> Brothers
          </span>
        </Link>

        {/* Desktop menü */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {pathname === link.href && (
                  <motion.span
                    layoutId="pill"
                    className="absolute inset-0 bg-indigo-600/40 rounded-lg border border-indigo-500/50"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA gomb */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-indigo-500/30"
          >
            Kapcsolat
          </Link>
        </div>

        {/* Hamburger gomb */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobil menü */}
      <AnimatePresence>
        {open && (
          <motion.div
            // ✅ VÁLTOZÁS: height animáció cserélve y pozícióra (Safari kompatibilis)
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            // ✅ VÁLTOZÁS: backdrop-blur-md törölve, navbar-blur CSS class hozzáadva
            className="md:hidden bg-gray-900/95 navbar-blur border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      pathname === link.href
                        ? "bg-indigo-600/30 text-white border border-indigo-500/40"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl text-center transition-all"
                >
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
