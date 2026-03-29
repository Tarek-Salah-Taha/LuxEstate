import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Home } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4 md:px-6">
        <h1 className="mb-4 text-8xl font-heading font-extrabold text-gold-gradient tracking-wider drop-shadow-md">404</h1>
        <p className="mb-8 md:mb-10 text-lg md:text-xl text-muted-foreground uppercase tracking-widest font-semibold">{t.notFound.pageNotFound}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-gold-light hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          {t.notFound.returnToHome}
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
