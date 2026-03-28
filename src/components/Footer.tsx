import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-heading font-bold text-gold-gradient mb-4">LuxEstate</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">{t.footer.quickLinks}</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.home}</Link>
              <Link to="/properties" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.properties}</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.about}</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.contact}</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">{t.footer.contactInfo}</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />{t.contact.addressValue}</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" />{t.contact.phoneValue}</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" />{t.contact.emailValue}</span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">{t.footer.newsletter}</h4>
            <p className="text-sm text-muted-foreground mb-4">{t.footer.newsletterText}</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 bg-secondary text-foreground text-sm px-4 py-2 rounded-md border border-border focus:border-primary focus:outline-none"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                {t.footer.subscribe}
              </button>
            </div>
          </div>
        </div>

        <div className="gold-border-b mt-12 pt-8 text-center text-sm text-muted-foreground">
          © 2026 LuxEstate. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
