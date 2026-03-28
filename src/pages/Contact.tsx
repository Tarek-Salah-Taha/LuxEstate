import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import Layout from "@/components/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const info = [
    { icon: MapPin, label: t.contact.address, value: t.contact.addressValue },
    { icon: Phone, label: t.contact.pageTitle, value: t.contact.phoneValue },
    { icon: Mail, label: t.contact.email, value: t.contact.emailValue },
    { icon: Clock, label: t.contact.hours, value: t.contact.hoursValue },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">{t.contact.pageSubtitle}</span>
          <h1 className="font-heading text-5xl font-bold text-foreground mt-3">{t.contact.pageTitle}</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Form */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-3">{t.contact.title}</h2>
              <p className="text-muted-foreground mb-8">{t.contact.description}</p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-sm text-foreground/80 mb-1 block">{t.contact.name}</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-secondary text-foreground px-4 py-3 rounded-md border border-border focus:border-primary focus:outline-none text-sm"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-foreground/80 mb-1 block">{t.contact.email}</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full bg-secondary text-foreground px-4 py-3 rounded-md border border-border focus:border-primary focus:outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-foreground/80 mb-1 block">{t.contact.phone}</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-secondary text-foreground px-4 py-3 rounded-md border border-border focus:border-primary focus:outline-none text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-foreground/80 mb-1 block">{t.contact.message}</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full bg-secondary text-foreground px-4 py-3 rounded-md border border-border focus:border-primary focus:outline-none text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  {t.contact.send}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              {info.map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-6 flex items-start gap-4">
                  <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
