import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: t("contact.form.success"),
      duration: 5000,
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
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
              {t("contact.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light leading-relaxed">
              {t("contact.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="mb-10">
                <div className="inline-block mb-4">
                  <div className="h-0.5 w-12 bg-accent" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t("contact.form.title")}
                </h2>
                <p className="text-muted-foreground text-lg font-light">
                  {t("contact.form.description")}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      {t("contact.form.name")}
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-card h-12 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-card h-12 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      {t("contact.form.phone")}
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-card h-12 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      {t("contact.form.subject")}
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-card h-12 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-card resize-none border-border/50 focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-base font-medium shadow-lg hover:shadow-xl transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? t("common.loading")
                    : t("contact.form.submit")}
                  <Send className="w-5 h-5 ms-2" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <div className="inline-block mb-4">
                  <div className="h-0.5 w-12 bg-accent" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  {t("contact.info.title")}
                </h2>
              </div>

              <div className="space-y-6">
                <div className="group flex items-start gap-5 p-6 rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300 bg-card">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2 text-lg">
                      {t("contact.info.address")}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {t("common.location")}
                      <br />
                      {t("common.address")}
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-5 p-6 rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300 bg-card">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2 text-lg">
                      {t("contact.info.phone")}
                    </h3>
                    <a
                      href="tel:0575760600"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors font-light"
                    >
                      {t("common.phone")}
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-5 p-6 rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300 bg-card">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2 text-lg">
                      {t("contact.info.hours")}
                    </h3>
                    <p className="text-muted-foreground text-sm font-light">
                      {t("contact.info.hoursValue")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl h-72 flex items-center justify-center border border-border/50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-center text-muted-foreground relative z-10">
                  <MapPin className="w-16 h-16 mx-auto mb-3 opacity-20 group-hover:opacity-30 transition-opacity" />
                  <p className="text-sm font-medium">Dhahran, Saudi Arabia</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
