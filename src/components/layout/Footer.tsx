import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import logo from "@/assets/osos.jpeg";

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/services", label: t("nav.services") },
    { path: "/team", label: t("nav.team") },
    { path: "/blog", label: t("nav.blog") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Alanazi Law Logo"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <p className="font-heading font-semibold text-lg">
                  {isRTL ? "أسس الأنظمة للمحاماة" : "OSOS"}
                </p>
                <p className="text-sm text-primary-foreground/70">
                  {t("common.tagline")}
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-md mb-6">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-accent font-semibold">
                ★ {t("common.rating")}
              </span>
              <span className="text-primary-foreground/60 text-sm">
                ({t("common.reviews")})
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              {t("footer.contactInfo")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  {t("common.location")}
                  <br />
                  {t("common.address")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="tel:0575760600"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  dir="ltr"
                >
                  {t("common.phone")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} {t("common.firmName")}.{" "}
            {t("footer.copyright")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
