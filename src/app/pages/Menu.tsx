import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Flame, Award, Heart, Star } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import chorizoImage from "../../assets/43fbe543ddc162d59d08fb5fdfd06a0688de875b.png";
import chuzosImage from "../../assets/812232e732661985c20e5910f9304c21e49f6efe.png";
import ribsImage from "../../assets/ca6944e744bd7454b1415679e38bba20c24f08ad.png";
import llaneraImage from "../../assets/41772505c4ced3f11422b660595efcb58948ec2d.png";

// Menu page - Artisanal Tradition section moved to Home page
export function Menu() {
  const { t } = useLanguage();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const menuItems = [
    {
      category: t("menu.category.chorizos"),
      icon: <Award className="w-6 h-6" />,
      items: [
        {
          name: t("menu.item.chorizo.name"),
          description: t("menu.item.chorizo.desc"),
          details: t("menu.item.chorizo.details"),
          image: chorizoImage,
          featured: true,
          badge: t("menu.item.chorizo.badge"),
          price: "$10.000 COP",
        },
      ],
    },
    {
      category: t("menu.category.pork"),
      icon: <Flame className="w-6 h-6" />,
      description: t("menu.category.pork.desc"),
      items: [
        {
          name: t("menu.item.skewers.name"),
          description: t("menu.item.skewers.desc"),
          details: t("menu.item.skewers.details"),
          image: chuzosImage,
          featured: false,
          price: "$15.000 COP",
        },
        {
          name: t("menu.item.grilled.name"),
          description: t("menu.item.grilled.desc"),
          details: t("menu.item.grilled.details"),
          image: llaneraImage,
          featured: false,
          price: "$20.000 COP",
        },
        {
          name: t("menu.item.ribs.name"),
          description: t("menu.item.ribs.desc"),
          details: t("menu.item.ribs.details"),
          image: ribsImage,
          featured: true,
          badge: t("menu.item.ribs.badge"),
          price: "$25.000 COP",
        },
      ],
    },
    {
      category: t("menu.category.drinks"),
      icon: <Star className="w-6 h-6" />,
      description: t("menu.category.drinks.desc"),
      items: [
        {
          name: t("menu.item.drinks.name"),
          description: t("menu.item.drinks.desc"),
          details: t("menu.item.drinks.details"),
          image: "https://images.unsplash.com/photo-1598406506391-b3e522c3dc1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NhJTIwY29sYSUyMGdsYXNzJTIwYm90dGxlfGVufDF8fHx8MTc3MjQ4MzU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          featured: false,
        },
      ],
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
              <Flame className="w-5 h-5 text-secondary" />
              <span className="text-accent font-semibold">{t("menu.hero.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("menu.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-accent max-w-3xl mx-auto leading-relaxed">
              {t("menu.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuItems.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              {...fadeInUp}
              className="mb-24 last:mb-0"
            >
              {/* Category Header with Visual Separator */}
              {categoryIndex > 0 && (
                <div className="relative mb-20">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-secondary/30"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-gradient-to-b from-white to-accent/30 px-8 py-2">
                      <Flame className="w-10 h-10 text-secondary" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Enhanced Category Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-4 mb-6 bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 px-8 py-4 rounded-2xl">
                  <div className="p-4 bg-secondary/20 rounded-xl text-secondary">
                    {category.icon}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {category.category}
                  </h2>
                </div>
                {category.description && (
                  <p className="text-xl text-foreground/70 italic max-w-3xl mx-auto font-medium">
                    {category.description}
                  </p>
                )}
              </div>

              <div className={`grid gap-10 ${category.items.length === 1 ? 'lg:grid-cols-1 max-w-5xl mx-auto' : 'grid-cols-1 max-w-5xl mx-auto'}`}>
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.1 }}
                    className={`group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-secondary/20 ${ 
                      item.featured ? "ring-4 ring-secondary ring-offset-4" : ""
                    }`}
                  >
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative min-h-[400px] md:min-h-[450px] overflow-hidden bg-primary/5">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.name}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {item.badge && (
                            <div className="absolute top-6 left-6 bg-gradient-to-r from-secondary to-secondary/90 text-white px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 ring-4 ring-white/50">
                              <Star className="w-5 h-5 fill-white" />
                              <span className="text-base">{item.badge}</span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                        <div className="space-y-5">
                          {/* Item Name and Price */}
                          <div>
                            <h3 className={`text-2xl md:text-3xl font-bold text-primary group-hover:text-secondary transition-colors leading-tight mb-3`}>
                              {item.name}
                            </h3>
                            {item.price && (
                              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-lg">
                                <Flame className="w-4 h-4 text-secondary" />
                                <span className="text-xl md:text-2xl font-bold text-secondary">
                                  {item.price}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="w-12 h-0.5 bg-secondary/30 rounded-full"></div>
                          
                          {/* Description */}
                          <p className={`text-foreground/80 leading-relaxed text-lg md:text-xl`}>
                            {item.description}
                          </p>
                          
                          {/* Details Box */}
                          <div className="flex items-start gap-3 bg-gradient-to-r from-accent/60 to-accent/40 p-5 rounded-xl border-l-4 border-secondary shadow-sm">
                            <Heart className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                            <p className={`text-base md:text-lg text-foreground/90 font-medium leading-relaxed`}>
                              {item.details}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Note Section */}
      <motion.section {...fadeInUp} className="py-12 bg-secondary/5 border-y-2 border-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
            <Flame className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-2 text-primary">{t("menu.note.title")}</h3>
              <p className="text-foreground/80 leading-relaxed">
                {t("menu.note.text")} <strong>{t("menu.note.highlight")}</strong>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section {...fadeInUp} className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Flame className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("menu.cta.title")}
          </h2>
          <p className="text-xl md:text-2xl text-accent mb-10 leading-relaxed">
            {t("menu.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+573136815351"
              className="inline-flex items-center justify-center gap-3 bg-secondary text-white px-8 py-4 rounded-xl hover:bg-secondary/90 transition-all transform hover:scale-105 shadow-xl text-lg font-semibold"
            >
              <Flame className="w-6 h-6" />
              <span>{t("menu.cta.button")}</span>
            </a>
            <a
              href="https://maps.app.goo.gl/R6hybRQ16hiGvkPH7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-xl hover:bg-accent transition-all transform hover:scale-105 shadow-xl text-lg font-semibold"
            >
              <span>{t("menu.cta.location")}</span>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}