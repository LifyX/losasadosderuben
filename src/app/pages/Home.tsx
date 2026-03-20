import { Phone, MapPin, Star, Flame, Award, Users, Heart } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArtisanalBadge } from "../components/ArtisanalBadge";
import { useLanguage } from "../contexts/LanguageContext";
import grillingVideo from "../../assets/bbf6725ba1d15d095e3ce518f6f6a09e9b144a6d.png";
import artisanImage from "../../assets/b704d46e9af5f220a3373e6a2d79a43edb4b45d8.png";
import heroVideo from "../../assets/IMG_2421.mp4";

export function Home() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const reviews = [
    {
      name: t("home.reviews.review1.name"),
      rating: 5,
      text: t("home.reviews.review1.text"),
    },
    {
      name: t("home.reviews.review2.name"),
      rating: 5,
      text: t("home.reviews.review2.text"),
    },
    {
      name: t("home.reviews.review3.name"),
      rating: 5,
      text: t("home.reviews.review3.text"),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
<section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src={heroVideo} type="video/mp4" />
  </video>

  {/* Fallback image (only visible if video fails) */}
  <ImageWithFallback
    src={grillingVideo}
    alt="Chorizos asados al fuego"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10" />

  {/* Hero Content */}
  <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-4">
        <ArtisanalBadge />
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        {t("home.hero.title")}
      </h1>

      <p className="text-xl md:text-2xl text-accent mb-8">
        {t("home.hero.subtitle")}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/nosotros"
          className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg hover:bg-secondary/90 transition-all transform hover:scale-105"
        >
          <span>{t("home.hero.cta1")}</span>
        </a>

        <a
          href="/contacto"
          className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg hover:bg-accent transition-all transform hover:scale-105"
        >
          <span>{t("home.hero.cta2")}</span>
        </a>
      </div>
    </motion.div>
  </div>

</section>

      {/* Artisanal Tradition Section */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-gradient-to-br from-accent/20 via-white to-secondary/5 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-secondary/10 px-6 py-3 rounded-full border-2 border-secondary/30">
              <Award className="w-6 h-6 text-secondary" />
              <span className="text-secondary font-bold text-lg">{t("home.tradition.badge1")}</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary via-secondary/80 to-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50">
                <ImageWithFallback
                  src={artisanImage}
                  alt={t("home.tradition.badge2")}
                  className="w-full h-[450px] lg:h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60"></div>
                
                {/* 100% Artesanal Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-secondary to-secondary/90 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl flex items-center gap-2 ring-4 ring-white/30 backdrop-blur-sm">
                  <Heart className="w-5 h-5 fill-white animate-pulse" />
                  <span className="text-lg">{t("home.tradition.badge3")}</span>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Flame className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{t("home.tradition.badge4")}</p>
                      <p className="text-sm text-white/90">{t("home.tradition.badge5")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Main Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] mb-4">
                  {t("home.about.title").split(" en ")[0]}
                  <span className="block text-secondary mt-2">en {t("home.about.title").split(" en ")[1]}</span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
              </div>
              
              {/* Story Paragraphs */}
              <div className="space-y-5">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-secondary hover:shadow-xl transition-shadow">
                  <p className="text-lg text-foreground/90 leading-relaxed" dangerouslySetInnerHTML={{ 
                    __html: t("home.about.text1")
                      .replace(/a mano/g, '<span class="font-bold text-primary">a mano</span>')
                      .replace(/receta tradicional santarosana/g, '<span class="font-bold text-secondary">receta tradicional santarosana</span>')
                      .replace(/by hand/g, '<span class="font-bold text-primary">by hand</span>')
                      .replace(/traditional santarosano recipe/g, '<span class="font-bold text-secondary">traditional santarosano recipe</span>')
                  }} />
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow">
                  <p className="text-lg text-foreground/90 leading-relaxed" dangerouslySetInnerHTML={{ 
                    __html: t("home.about.text2")
                      .replace(/personalmente por el dueño/g, '<span class="font-bold text-primary">personalmente por el dueño</span>')
                      .replace(/personally crafted by the owner/g, '<span class="font-bold text-primary">personally crafted by the owner</span>')
                  }} />
                </div>
                
                <div className="bg-gradient-to-br from-secondary/10 to-primary/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-secondary/30 hover:shadow-xl transition-shadow">
                  <p className="text-lg font-semibold text-primary leading-relaxed flex items-start gap-3">
                    <Heart className="w-6 h-6 text-secondary flex-shrink-0 mt-1 fill-secondary/20" />
                    <span>{t("home.about.text3")}</span>
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                      <Flame className="w-7 h-7 text-secondary" />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-sm">{t("home.tradition.feature1.title").split(" ")[0]}</p>
                      <p className="font-bold text-primary">{t("home.tradition.feature1.title").split(" ")[1]}</p>
                      <p className="text-xs text-foreground/60 mt-1">{t("home.tradition.feature1.subtitle")}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Award className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-sm">{t("home.tradition.feature2.title").split(" ")[0]}</p>
                      <p className="font-bold text-primary">{t("home.tradition.feature2.title").split(" ").slice(1).join(" ")}</p>
                      <p className="text-xs text-foreground/60 mt-1">{t("home.tradition.feature2.subtitle")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button to Menu */}
              <div className="pt-6">
                <a
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-secondary/90 text-white px-8 py-4 rounded-xl hover:from-secondary/90 hover:to-secondary transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-bold text-lg"
                >
                  <Flame className="w-6 h-6" />
                  <span>{t("home.tradition.cta")}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t("home.why.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Flame className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("home.why.value1.title")}</h3>
              <p className="text-foreground/80">
                {t("home.why.value1.desc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("home.why.value2.title")}</h3>
              <p className="text-foreground/80">
                {t("home.why.value2.desc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("home.why.value3.title")}</h3>
              <p className="text-foreground/80">
                {t("home.why.value3.desc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("home.why.value4.title")}</h3>
              <p className="text-foreground/80">
                {t("home.why.value4.desc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("home.why.value5.title")}</h3>
              <p className="text-foreground/80">
                {t("home.why.value5.desc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("home.why.value6.title")}</h3>
              <p className="text-foreground/80">
                {t("home.why.value6.desc")}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("home.reviews.title")}
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
              ))}
              <span className="text-2xl font-bold ml-2">4.8</span>
            </div>
            <p className="text-muted-foreground mb-6">{t("home.reviews.rating")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/search?q=los+asados+de+ruben+santa+rosa+de+cabal&sca_esv=caf19a2509043654#lrd=0x8e38833d458b4747:0x80774aad755f927e,1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-all transform hover:scale-105"
              >
                <Star className="w-5 h-5" />
                <span>{t("home.reviews.viewAll")}</span>
              </a>
              <a
                href="https://www.google.com/search?q=los+asados+de+ruben+santa+rosa+de+cabal#lrd=0x8e38833d458b4747:0x80774aad755f927e,3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all"
              >
                <Star className="w-5 h-5" />
                <span>{t("home.reviews.leave")}</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-accent p-6 rounded-lg shadow-md"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-bold text-primary">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("home.cta.title")}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t("home.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+573136815351"
              className="inline-flex items-center justify-center gap-2 bg-white text-secondary px-8 py-4 rounded-lg hover:bg-accent transition-all transform hover:scale-105 shadow-lg font-bold"
            >
              <Phone className="w-5 h-5" />
              <span>{t("home.cta.button1")}</span>
            </a>
            <a
              href="/menu"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg font-bold border-2 border-white/20"
            >
              <span>{t("home.cta.button2")}</span>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}