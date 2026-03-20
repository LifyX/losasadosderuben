import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Heart, Users, Award, Flame, Clock, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router";
import porkCuttingImage from "../../assets/41e40b2f3853d9ce26dcb103c87f8fb2b4950419.png";
import santaRosaImage from "../../assets/26632a39a59eeb93299acc99a8b5a19f54326e58.png";
import familyImage from "../../assets/7d7fa370643405c22f649078e88ad673ec042f60.png";

export function About() {
  const { t } = useLanguage();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("about.value1.title"),
      description: t("about.value1.desc"),
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t("about.value2.title"),
      description: t("about.value2.desc"),
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: t("about.value3.title"),
      description: t("about.value3.desc"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("about.value4.title"),
      description: t("about.value4.desc"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/30">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/20 px-6 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5 text-secondary" />
              <span className="text-accent font-semibold">{t("about.hero.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("about.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-accent max-w-3xl mx-auto leading-relaxed">
              {t("about.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div {...fadeInUp}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={santaRosaImage}
                  alt="Santa Rosa de Cabal"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-secondary font-semibold">{t("about.story.badge1")}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {t("about.story.title1")}
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t("about.story.text1")}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t("about.story.text2")}
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="space-y-6 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-secondary font-semibold">{t("about.story.badge2")}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {t("about.story.title2")}
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t("about.story.text3")}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t("about.story.text4")}
              </p>
              <div className="bg-accent/50 p-6 rounded-xl border-l-4 border-secondary">
                <p className="text-foreground/90 italic font-medium">
                  {t("about.story.quote")}
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={porkCuttingImage}
                  alt="Cortes de cerdo fresco"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-2 rounded-full mb-6">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-secondary font-semibold">{t("about.values.badge")}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                {t("about.values.title")}
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                {t("about.values.subtitle")}
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-accent/30 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-foreground/70 text-center leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Family Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <ImageWithFallback
                  src={familyImage}
                  alt="Familia colombiana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 text-primary-foreground flex flex-col justify-center">
                <Users className="w-16 h-16 text-secondary mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t("about.family.title")}
                </h2>
                <p className="text-accent text-lg leading-relaxed mb-6">
                  {t("about.family.text1")}
                </p>
                <p className="text-accent text-lg leading-relaxed mb-6">
                  {t("about.family.text2")}
                </p>
                <p className="text-accent text-lg leading-relaxed font-semibold">
                  {t("about.family.text3")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section {...fadeInUp} className="py-20 md:py-28 bg-gradient-to-br from-secondary via-secondary to-secondary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Flame className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("about.cta.title")}
          </h2>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-90">
            {t("about.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-3 bg-white text-secondary px-8 py-4 rounded-xl hover:bg-accent transition-all transform hover:scale-105 shadow-xl text-lg font-semibold"
            >
              <Award className="w-6 h-6" />
              <span>{t("about.cta.menu")}</span>
            </Link>
            <a
              href="https://maps.app.goo.gl/R6hybRQ16hiGvkPH7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all transform hover:scale-105 shadow-xl text-lg font-semibold"
            >
              <MapPin className="w-6 h-6" />
              <span>{t("about.cta.location")}</span>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}