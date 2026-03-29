import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import Layout from "@/components/Layout";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import heroImage from "@/assets/hero-villa.jpg";
import { Building2, Users, Award, Home, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// CountUp Component for stats
const CountUp = ({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

const Index = () => {
  const { t } = useLanguage();
  const featured = properties.filter((p) => p.featured);

  const stats = [
    { icon: Home, value: 500, suffix: "+", label: t.stats.properties },
    { icon: Users, value: 1200, suffix: "+", label: t.stats.clients },
    { icon: Building2, value: 15, suffix: "+", label: t.stats.years },
    { icon: Award, value: 30, suffix: "+", label: t.stats.awards },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={heroImage} alt="Luxury villa" className="w-full h-full object-cover" width={1920} height={1080} />
          {/* Enhanced atmospheric gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/30 to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent mix-blend-screen" />
        </motion.div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 md:px-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <span className="text-white font-bold tracking-[0.4em] text-xs md:text-sm uppercase bg-white/5 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full flex items-center gap-4 shadow-lg shadow-black/20">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,55,0.8)] animate-pulse" />
              {t.hero.subtitle}
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,55,0.8)] animate-pulse" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-8 leading-[1.05] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] tracking-tight py-5"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-lg md:text-2xl font-light mb-12 max-w-3xl mx-auto drop-shadow-lg leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-36"
          >
            <Link
              to="/properties"
              className="bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-bold text-sm md:text-base tracking-[0.2em] uppercase hover:bg-gold-light hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] transition-all duration-500 flex items-center justify-center gap-3 w-full sm:w-auto group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10">{t.hero.cta}</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform duration-300" />
            </Link>

            <Link
              to="/contact"
              className="bg-white/5 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-sm md:text-base tracking-[0.2em] uppercase hover:bg-white hover:text-black hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] transition-all duration-500 flex items-center justify-center w-full sm:w-auto group"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-20 -mt-24 mb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-card/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl shadow-black/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />
            {stats.map((stat, i) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
                key={i}
                className="relative z-10 p-4 sm:p-6 flex flex-col items-center group cursor-default"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-3 text-shadow-sm group-hover:text-primary transition-colors duration-300 drop-shadow-md">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 md:py-32 relative overflow-hidden bg-background">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-50 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 relative"
          >
            <div className="inline-block mb-4">
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase bg-primary/10 border border-primary/20 px-6 py-2 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.15)] flex items-center justify-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {t.featured.subtitle}
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-extrabold text-foreground mt-6 leading-tight drop-shadow-lg">
              {t.featured.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {featured.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2, type: "spring", stiffness: 80 }}
              >
                <PropertyCard property={p} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-20"
          >
            <Link
              to="/properties"
              className="inline-flex items-center gap-4 bg-transparent border border-primary/30 text-foreground px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-primary/5 hover:border-primary hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10">{t.featured.viewAll}</span>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 relative z-10">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-180 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-card/40 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6"
            >
              {t.cta.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              {t.cta.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-gold-light hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 inline-flex items-center gap-3 group/btn relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10">{t.cta.button}</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 rtl:rotate-180 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
