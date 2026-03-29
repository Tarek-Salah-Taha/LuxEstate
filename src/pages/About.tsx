import { useLanguage } from "@/i18n/LanguageContext";
import Layout from "@/components/Layout";
import teamImage from "@/assets/team.jpg";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Target, title: t.about.mission, text: t.about.missionText },
    { icon: Eye, title: t.about.vision, text: t.about.visionText },
    { icon: Heart, title: t.about.values, text: t.about.valuesText },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">{t.about.pageSubtitle}</span>
          <h1 className="font-heading text-5xl font-bold text-foreground mt-3">{t.about.pageTitle}</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">{t.about.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.about.description}</p>
              <p className="text-muted-foreground leading-relaxed">{t.about.description2}</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={teamImage} alt="Our team" loading="lazy" className="w-full h-full object-cover" width={1200} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 md:p-8 text-center hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
