import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import Layout from "@/components/Layout";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const Properties = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const filters = [
    { key: "all", label: t.properties.filterAll },
    { key: "villa", label: t.properties.filterVilla },
    { key: "apartment", label: t.properties.filterApartment },
    { key: "penthouse", label: t.properties.filterPenthouse },
    { key: "commercial", label: t.properties.filterCommercial },
  ];

  const filtered = filter === "all" ? properties : properties.filter((p) => p.type === filter);

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">{t.properties.pageSubtitle}</span>
          <h1 className="font-heading text-5xl font-bold text-foreground mt-3">{t.properties.pageTitle}</h1>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === f.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Properties;
