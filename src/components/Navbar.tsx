import { useLanguage } from "@/hooks/use-language";
import { languages } from "@/lib/languages";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { TranslationKeys } from "@/lib/translations";

const navLinkKeys: { to: string; key: keyof TranslationKeys }[] = [
  { to: "/", key: "nav_home" },
  { to: "/about", key: "nav_about" },
  { to: "/donate", key: "nav_donate" },
  { to: "/track", key: "nav_track" },
  { to: "/history", key: "nav_history" },
  { to: "/contact", key: "nav_contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const currentLang = languages.find((l) => l.code === language);

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-saffron flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            Anna<span className="text-primary">Seva</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinkKeys.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-muted ${
                location.pathname === link.to
                  ? "text-primary bg-saffron-light"
                  : "text-muted-foreground"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm font-medium text-muted-foreground"
            >
              <Globe className="w-4 h-4" />
              <span>{currentLang?.native}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute right-0 top-full mt-1 w-48 bg-card border rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors flex items-center justify-between ${
                        language === lang.code ? "text-primary font-semibold bg-saffron-light" : "text-foreground"
                      }`}
                    >
                      <span>{lang.native}</span>
                      <span className="text-xs text-muted-foreground">{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={toggleDark}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-muted-foreground" />}
          </button>
          <Link to="/signin">
            <Button variant="outline" size="sm">{t("nav_signin")}</Button>
          </Link>
          <Link to="/donate">
            <Button size="sm" className="bg-gradient-saffron text-primary-foreground hover:opacity-90">
              {t("nav_donate_now")}
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Language */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Globe className="w-5 h-5 text-muted-foreground" />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute right-0 top-full mt-1 w-48 bg-card border rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors flex items-center justify-between ${
                        language === lang.code ? "text-primary font-semibold bg-saffron-light" : "text-foreground"
                      }`}
                    >
                      <span>{lang.native}</span>
                      <span className="text-xs text-muted-foreground">{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-muted-foreground" />}
          </button>
          <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-t"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinkKeys.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-primary bg-saffron-light"
                      : "text-muted-foreground"
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="flex gap-2 mt-2">
                <Link to="/signin" className="flex-1" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">{t("nav_signin")}</Button>
                </Link>
                <Link to="/donate" className="flex-1" onClick={() => setIsOpen(false)}>
                  <Button size="sm" className="w-full bg-gradient-saffron text-primary-foreground">{t("nav_donate_now")}</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
