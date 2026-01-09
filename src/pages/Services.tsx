import { motion } from "framer-motion";
import { Scale, Building2, Gavel, Shield, Users } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  Building2,
  Gavel,
  FileText: Shield,
  Users,
};

const Services = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 py-32 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block mb-6">
              <div className="h-0.5 w-16 bg-accent mx-auto" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
              {t("services.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light leading-relaxed">
              {t("services.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Scale;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="group flex flex-col md:flex-row items-start gap-8 lg:gap-12 p-10 rounded-2xl border border-border/50 hover:shadow-2xl transition-all duration-500 bg-card relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-32 translate-x-32 group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 relative z-10">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-5 leading-tight">
                      {t(service.titleKey)}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed font-light">
                      {t(service.descriptionKey)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
