import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Mail, MapPin, Twitter } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import logo from "@/assets/osos.jpeg";

const Header = () => {
  const { t, currentLanguage, toggleLanguage, isRTL } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/services", label: t("nav.services") },
    { path: "/team", label: t("nav.team") },
    { path: "/blog", label: t("nav.blog") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#2b1a0f] text-[#f5f0eb]">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm w-full">
            {/* Left - Contact Info */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="mailto:info@osos.law"
                className="flex items-center gap-2 hover:text-[#d4a574] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@osos.law</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>
                  {isRTL ? "الرياض، السعودية" : "Riyadh, Saudi Arabia"}
                </span>
              </div>
            </div>

            {/* Right - CTA & Social */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                size="sm"
                className="bg-[#d4a574] text-[#2b1a0f] hover:bg-[#c49760] h-8 text-xs"
              >
                <Link to="/contact">
                  {isRTL ? "استشارة مجانية" : "Free Consultation"}
                </Link>
              </Button>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:text-[#d4a574] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:text-[#d4a574] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 left-0 right-0 z-50">
        <div
          className={`w-full px-6 py-2 backdrop-blur-md transition-all duration-300 ${
            isScrolled
              ? "bg-[#f5f0eb]/95 shadow-lg"
              : "bg-[#2b1a0f]/90 shadow-lg"
          }`}
        >
          <div className="container mx-auto">
            <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src={logo}
                alt="Alanazi Law Logo"
                className="w-14 h-14 rounded-lg object-cover"
              />
              <div className="hidden sm:block">
                <p
                  className={`font-heading font-bold text-base leading-tight transition-colors duration-300 ${
                    isScrolled ? "text-[#2b1a0f]" : "text-[#f5f0eb]"
                  }`}
                >
                  {isRTL ? "أسس الأنظمة للمحاماة " : "OSOS"}
                </p>
                <p
                  className={`text-xs transition-colors duration-300 ${
                    isScrolled ? "text-[#5c4a3a]" : "text-[#f5f0eb]/70"
                  }`}
                >
                  {t("common.tagline")}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 text-sm font-medium transition-all rounded-lg ${
                    isScrolled
                      ? isActive(link.path)
                        ? "text-[#2b1a0f] bg-[#e8ddd0] shadow-sm"
                        : "text-[#5c4a3a] hover:text-[#2b1a0f] hover:bg-[#f5f0eb]"
                      : isActive(link.path)
                      ? "text-[#f5f0eb] bg-[#f5f0eb]/20 shadow-sm"
                      : "text-[#f5f0eb]/80 hover:text-[#f5f0eb] hover:bg-[#f5f0eb]/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all rounded-lg ${
                  isScrolled
                    ? "text-[#5c4a3a] hover:text-[#2b1a0f] hover:bg-[#f5f0eb]"
                    : "text-[#f5f0eb]/80 hover:text-[#f5f0eb] hover:bg-[#f5f0eb]/10"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>{currentLanguage === "ar" ? "EN" : "عربي"}</span>
              </button>

              <Button
                asChild
                className={`hidden md:inline-flex rounded-lg shadow-md transition-all ${
                  isScrolled
                    ? ""
                    : "bg-[#f5f0eb] text-[#2b1a0f] hover:bg-[#f5f0eb]/90"
                }`}
                size="sm"
              >
                <Link to="/contact">{t("common.contactUs")}</Link>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all ${
                  isScrolled
                    ? "text-[#2b1a0f] hover:bg-[#e8ddd0]"
                    : "text-[#f5f0eb] hover:bg-[#f5f0eb]/10"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`lg:hidden border-t overflow-hidden mt-4 pt-4 transition-colors duration-300 ${
                  isScrolled ? "border-[#d4c4b0]" : "border-[#f5f0eb]/10"
                }`}
              >
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium transition-all rounded-lg ${
                        isScrolled
                          ? isActive(link.path)
                            ? "text-[#2b1a0f] bg-[#e8ddd0] shadow-sm"
                            : "text-[#5c4a3a] hover:text-[#2b1a0f] hover:bg-[#f5f0eb]"
                          : isActive(link.path)
                          ? "text-[#f5f0eb] bg-[#f5f0eb]/20 shadow-sm"
                          : "text-[#f5f0eb]/80 hover:text-[#f5f0eb] hover:bg-[#f5f0eb]/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
