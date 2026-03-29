import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import Layout from "@/components/Layout";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { ArrowLeft, Bed, Bath, Maximize, MapPin, Check } from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();
  const { lang, t } = useLanguage();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <Layout>
        <div className="py-40 text-center text-muted-foreground">Property not found.</div>
      </Layout>
    );
  }

  const similar = properties.filter((p) => p.id !== property.id && p.type === property.type).slice(0, 3);

  return (
    <Layout>
      {/* Back Link */}
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-6">
        <Link to="/properties" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {t.propertyDetail.backToListings}
        </Link>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-lg overflow-hidden aspect-[21/9]">
          <img src={property.image} alt={property.title[lang]} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main */}
          <div className="lg:col-span-2">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              {t.properties[`filter${property.type.charAt(0).toUpperCase() + property.type.slice(1)}` as keyof typeof t.properties]}
            </span>
            <h1 className="font-heading text-4xl font-bold text-foreground mt-2 mb-2">{property.title[lang]}</h1>
            <p className="flex items-center gap-1 text-muted-foreground mb-8"><MapPin className="w-4 h-4" />{property.location[lang]}</p>

            {/* Stats */}
            <div className="flex gap-4 sm:gap-8 py-6 border-y border-border mb-8 justify-between sm:justify-start">
              {property.beds > 0 && (
                <div className="text-center">
                  <Bed className="w-5 h-5 text-primary mx-auto mb-1" />
                  <div className="font-semibold text-foreground">{property.beds}</div>
                  <div className="text-xs text-muted-foreground">{t.properties.beds}</div>
                </div>
              )}
              <div className="text-center">
                <Bath className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="font-semibold text-foreground">{property.baths}</div>
                <div className="text-xs text-muted-foreground">{t.properties.baths}</div>
              </div>
              <div className="text-center">
                <Maximize className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="font-semibold text-foreground">{property.sqft.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">{t.properties.sqft}</div>
              </div>
            </div>

            {/* Description */}
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">{t.propertyDetail.description}</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">{property.description[lang]}</p>

            {/* Features */}
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">{t.propertyDetail.features}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {property.features[lang].map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-primary" />{f}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-card border border-border rounded-lg p-5 md:p-6 sticky top-24">
              <div className="text-sm text-muted-foreground mb-1">{t.properties.price}</div>
              <div className="text-3xl font-heading font-bold text-primary mb-6">${property.price.toLocaleString()}</div>
              <Link
                to="/contact"
                className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-md font-semibold text-sm tracking-wide hover:bg-gold-light hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                {t.propertyDetail.schedule}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Similar */}
      {similar.length > 0 && (
        <section className="py-12 md:py-16 border-t border-border">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8">{t.propertyDetail.similar}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default PropertyDetail;
