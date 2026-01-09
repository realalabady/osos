import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { teamMembers } from "@/data/team";

const Team = () => {
  const { t, currentLanguage, isRTL } = useLanguage();

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
              {t("team.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light leading-relaxed">
              {t("team.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-20 font-light leading-relaxed"
          >
            {t("team.intro")}
          </motion.p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group bg-card rounded-2xl shadow-sm border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-500 relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />

                <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <User className="w-24 h-24 text-muted-foreground/20 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="p-6 text-center relative z-10">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1.5 leading-tight">
                    {isRTL ? member.nameAr : member.nameEn}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-4">
                    {isRTL ? member.titleAr : member.titleEn}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    {isRTL ? member.bioAr : member.bioEn}
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

export default Team;
