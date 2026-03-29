import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#050505] overflow-hidden text-foreground pt-12 md:pt-16 pb-8 border-t border-border/20">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-heading font-extrabold text-foreground mb-4">
              LuxEstate<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{t.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-6 uppercase tracking-wider text-xs">{t.footer.quickLinks}</h4>
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-sm text-muted-foreground w-fit hover:text-primary hover:tracking-wide transition-all duration-300">{t.nav.home}</Link>
              <Link to="/properties" className="text-sm text-muted-foreground w-fit hover:text-primary hover:tracking-wide transition-all duration-300">{t.nav.properties}</Link>
              <Link to="/about" className="text-sm text-muted-foreground w-fit hover:text-primary hover:tracking-wide transition-all duration-300">{t.nav.about}</Link>
              <Link to="/contact" className="text-sm text-muted-foreground w-fit hover:text-primary hover:tracking-wide transition-all duration-300">{t.nav.contact}</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-6 uppercase tracking-wider text-xs">{t.footer.contactInfo}</h4>
            <div className="flex flex-col gap-5 text-sm text-muted-foreground">
              <span className="flex items-start gap-3 group cursor-pointer transition-colors hover:text-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="leading-snug">{t.contact.addressValue}</span>
              </span>
              <span className="flex items-center gap-3 group cursor-pointer transition-colors hover:text-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                <span>{t.contact.phoneValue}</span>
              </span>
              <span className="flex items-center gap-3 group cursor-pointer transition-colors hover:text-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                <span>{t.contact.emailValue}</span>
              </span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-6 uppercase tracking-wider text-xs">{t.footer.newsletter}</h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t.footer.newsletterText}</p>
            <div className="flex bg-[#111] rounded-lg border border-border/30 focus-within:border-primary/70 focus-within:ring-1 focus-within:ring-primary/20 transition-all p-1">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 bg-transparent text-foreground text-sm px-3 py-2 outline-none w-full placeholder:text-muted-foreground/50"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 transition-all shrink-0">
                {t.footer.subscribe}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-muted-foreground">
          <p>© {new Date().getFullYear()} LuxEstate. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
