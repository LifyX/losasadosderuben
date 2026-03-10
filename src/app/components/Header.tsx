import { Link, useLocation } from "react-router";
import { Phone, Menu as MenuIcon, X, Languages } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import logo from "../../assets/0317080f99089df2b5a6e317d3c57784231215a2.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/menu", label: t("nav.menu") },
    { path: "/nosotros", label: t("nav.about") },
    { path: "/contacto", label: t("nav.contact") },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogoClick = () => {
    scrollToTop();
  };

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Go to homepage"
          >
            <img
              src={logo}
              alt="Los Asados De Ruben"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "text-secondary"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="relative flex items-center gap-1 p-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all justify-center"
            >
              <span className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                language === "es"
                  ? "bg-secondary text-white shadow-sm"
                  : "text-primary-foreground/60"
              }`}>
                ES
              </span>
              <span className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                language === "en"
                  ? "bg-secondary text-white shadow-sm"
                  : "text-primary-foreground/60"
              }`}>
                EN
              </span>
            </button>

            <a
              href="https://wa.me/573136815351"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{t("nav.call")}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-primary border-t border-primary-foreground/20"
          >
            <nav className="flex flex-col px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-secondary"
                      : "text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Languages className="w-5 h-5" />
                <span className="font-medium">{language === "es" ? "ES" : "EN"}</span>
              </button>
              <a
                href="https://wa.me/573136815351"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-secondary text-white px-4 py-3 rounded-lg hover:bg-secondary/90 transition-colors justify-center"
              >
                <Phone className="w-4 h-4" />
                <span>{t("nav.callNow")}</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}