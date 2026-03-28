import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Bed, Bath, Maximize } from "lucide-react";
import { Property } from "@/data/properties";

const PropertyCard = ({ property }: { property: Property }) => {
  const { lang, t } = useLanguage();

  return (
    <Link to={`/properties/${property.id}`} className="group block">
      <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all duration-300">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={property.image}
            alt={property.title[lang]}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 start-4">
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              {t.properties[`filter${property.type.charAt(0).toUpperCase() + property.type.slice(1)}` as keyof typeof t.properties]}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
            {property.title[lang]}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{property.location[lang]}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            {property.beds > 0 && (
              <span className="flex items-center gap-1"><Bed className="w-4 h-4" />{property.beds}</span>
            )}
            <span className="flex items-center gap-1"><Bath className="w-4 h-4" />{property.baths}</span>
            <span className="flex items-center gap-1"><Maximize className="w-4 h-4" />{property.sqft.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-primary font-bold text-lg">${property.price.toLocaleString()}</span>
            <span className="text-sm text-primary font-medium group-hover:underline">{t.properties.viewDetails} →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
