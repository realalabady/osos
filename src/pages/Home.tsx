import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Scale,
  Building2,
  Gavel,
  Shield,
  Users,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import logo from "@/assets/osos.jpeg";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  Building2,
  Gavel,
  FileText: Shield,
  Users,
};

const Home = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-[#2b1a0f]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#2b1a0f]"
      >
        {/* Background Image - Desktop */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/good one.png')",
          }}
        />
        
        {/* Background Image - Mobile */}
        <div 
          className="md:hidden absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/mobile-size.jpg')",
          }}
        />
        
        {/* Animated dark overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.8, delay: 0.4 }}
          className="absolute inset-0 bg-black/20 z-10" 
        />
        
        {/* Animated subtle gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="absolute inset-0 bg-gradient-to-b from-[#2b1a0f]/10 via-transparent to-[#2b1a0f]/30 z-10"
        />
      </motion.section>

      {/* Core Values Section - Al-Asiri Inspired */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("home.intro.title")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              {t("home.intro.description")}
            </p>
          </motion.div>

          {/* Three Core Values with Icons */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                key: "experience",
                icon: Scale,
                titleKey: "home.whyUs.experience.title",
                descKey: "home.whyUs.experience.description",
              },
              {
                key: "trust",
                icon: Shield,
                titleKey: "home.whyUs.trust.title",
                descKey: "home.whyUs.trust.description",
              },
              {
                key: "results",
                icon: TrendingUp,
                titleKey: "home.whyUs.results.title",
                descKey: "home.whyUs.results.description",
              },
            ].map(({ key, icon: Icon, titleKey, descKey }) => (
              <motion.div
                key={key}
                variants={fadeIn}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
                  {t(titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {t(descKey)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <div className="h-0.5 w-12 bg-accent mx-auto" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("home.services.title")}
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light">
              {t("home.services.subtitle")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.slice(0, 3).map((service, index) => {
              const Icon = iconMap[service.icon] || Scale;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeIn}
                  className="group bg-card p-10 rounded-xl shadow-sm hover:shadow-2xl border border-border/50 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Background Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4 leading-tight">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {t(service.descriptionKey)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 font-medium border-2"
            >
              <Link to="/services">
                {t("common.viewAll")}
                <ArrowIcon className="w-4 h-4 ms-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              {t("home.cta.title")}
            </h2>
            <p className="text-primary-foreground/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              {t("home.cta.description")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl hover:shadow-accent/50 transition-all duration-300 h-14 px-10 text-base font-medium"
            >
              <Link to="/contact">
                {t("home.cta.button")}
                <ArrowIcon className="w-5 h-5 ms-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
