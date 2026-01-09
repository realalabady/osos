import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <motion.div
        className="text-center px-4 relative z-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative inline-block mb-8"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl" />
          <h1 className="relative font-heading text-9xl md:text-[12rem] font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-block mb-6">
            <div className="h-0.5 w-16 bg-accent mx-auto" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t("notFound.title")}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto leading-relaxed font-light">
            {t("notFound.description")}
          </p>
          <Button
            asChild
            size="lg"
            className="h-14 px-10 text-base font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <Link to="/">
              <Home className="w-5 h-5 me-2" />
              {t("notFound.button")}
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
