import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import Layout from "@/components/Layout";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import heroImage from "@/assets/hero-villa.jpg";
import { Building2, Users, Award, Home } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();
  const featured = properties.filter((p) => p.featured);

  const stats = [
    { icon: Home, value: "500+", label: t.stats.properties },
    { icon: Users, value: "1,200+", label: t.stats.clients },
    { icon: Building2, value: "15+", label: t.stats.years },
    { icon: Award, value: "30+", label: t.stats.awards },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Luxury villa" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 animate-fade-in-up">
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            {t.hero.subtitle}
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-foreground/70 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              {t.hero.cta}
            </Link>
            <Link
              to="/contact"
              className="border border-foreground/30 text-foreground px-8 py-3.5 rounded-md font-semibold text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-heading font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">{t.featured.subtitle}</span>
            <h2 className="font-heading text-4xl font-bold text-foreground mt-3">{t.featured.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="border border-primary text-primary px-8 py-3 rounded-md font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {t.featured.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">{t.cta.title}</h2>
          <p className="text-muted-foreground mb-8">{t.cta.description}</p>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity inline-block"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
