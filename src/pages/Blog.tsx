import { motion } from "framer-motion";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isRTL ? "ar-SA" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryLabel = (category: string) => {
    return t(`blog.categories.${category}`);
  };

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
              {t("blog.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light leading-relaxed">
              {t("blog.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card rounded-2xl shadow-sm border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-500 relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />

                <div className="h-56 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="text-5xl font-heading text-muted-foreground/10 font-bold relative z-10">
                    {isRTL ? "مقال" : "Legal"}
                  </div>
                </div>

                <div className="p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3.5 py-1.5 rounded-full">
                      {getCategoryLabel(post.category)}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                    {isRTL ? post.titleAr : post.titleEn}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed font-light">
                    {isRTL ? post.excerptAr : post.excerptEn}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
                  >
                    {t("common.readMore")}
                    <ArrowIcon className="w-4 h-4 ms-1.5" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
