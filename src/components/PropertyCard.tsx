import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Bed, Bath, Maximize, ArrowRight } from "lucide-react";
import { Property } from "@/data/properties";

const PropertyCard = ({ property }: { property: Property }) => {
  const { lang, t } = useLanguage();

  return (
    <Link to={`/properties/${property.id}`} className="group block h-full">
      <div className="bg-card rounded-2xl overflow-hidden border border-border/40 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full bg-gradient-to-b from-card to-background">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={property.image}
            alt={property.title[lang]}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="absolute top-4 start-4">
            <span className="bg-background/80 backdrop-blur-md text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-primary/20 shadow-lg">
              {t.properties[`filter${property.type.charAt(0).toUpperCase() + property.type.slice(1)}` as keyof typeof t.properties]}
            </span>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {property.title[lang]}
          </h3>
          <p className="text-sm text-muted-foreground mb-5 line-clamp-1">{property.location[lang]}</p>
          <div className="flex items-center gap-5 text-sm font-medium text-foreground/80 mb-6 bg-secondary/50 rounded-lg p-3 w-fit border border-white/5">
            {property.beds > 0 && (
              <span className="flex items-center gap-2" title="Bedrooms"><Bed className="w-4 h-4 text-primary" />{property.beds}</span>
            )}
            <span className="flex items-center gap-2" title="Bathrooms"><Bath className="w-4 h-4 text-primary" />{property.baths}</span>
            <span className="flex items-center gap-2" title="Area"><Maximize className="w-4 h-4 text-primary" />{property.sqft.toLocaleString()} <span className="text-xs text-muted-foreground">sqft</span></span>
          </div>
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/30">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-1">{t.properties.price}</span>
              <span className="text-primary font-bold text-2xl tracking-tight">${property.price.toLocaleString()}</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <ArrowRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
