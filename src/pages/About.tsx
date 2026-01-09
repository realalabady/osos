import { motion } from "framer-motion";
import { Shield, Award, Handshake, Lock } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const values = [
    { key: "integrity", icon: Shield },
    { key: "excellence", icon: Award },
    { key: "commitment", icon: Handshake },
    { key: "confidentiality", icon: Lock },
  ];

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
              {t("about.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light leading-relaxed">
              {t("about.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <div className="h-0.5 w-12 bg-accent" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              {t("about.intro.title")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              {t("about.intro.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <div className="h-0.5 w-12 bg-accent" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              {t("about.philosophy.title")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              {t("about.philosophy.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6">
              <div className="h-0.5 w-12 bg-accent mx-auto" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t("about.values.title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map(({ key, icon: Icon }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card p-8 rounded-xl border border-border/50 hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {t(`about.values.${key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    {t(`about.values.${key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
