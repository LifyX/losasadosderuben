import { motion } from "motion/react";
import { MapPin, Phone, Clock, Navigation, ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

export function Contact() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
    { question: t("faq.q6"), answer: t("faq.a6") },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("contact.hero.title")}</h1>
            <p className="text-xl text-accent max-w-2xl mx-auto">
              {t("contact.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div {...fadeInUp} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("contact.address.title")}</h3>
              <p className="text-foreground/80 mb-4">
                {t("contact.address.subtitle")}
              </p>
              <p className="text-2xl font-bold text-secondary mb-2">
                Cl. 10 #14-10
              </p>
              <p className="text-foreground/80">
                Santa Rosa de Cabal<br />
                Risaralda, Colombia
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("contact.phone.title")}</h3>
              <p className="text-foreground/80 mb-4">
                {t("contact.phone.subtitle")}
              </p>
              <a
                href="tel:+573136815351"
                className="text-2xl font-bold text-secondary hover:text-secondary/80 transition-colors"
              >
                +57 313 681 5351
              </a>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("contact.hours.title")}</h3>
              <div className="space-y-2 text-foreground/80">
                <div>
                  <p className="font-semibold">{t("contact.hours.weekdays")}</p>
                  <p>{t("contact.hours.weekdaysTime")}</p>
                </div>
                <div>
                  <p className="font-semibold">{t("contact.hours.weekend")}</p>
                  <p>{t("contact.hours.weekendTime")}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div {...fadeInUp} className="bg-white p-4 rounded-lg shadow-lg">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">{t("contact.map.title")}</h2>
              <p className="text-foreground/80">
                {t("contact.map.subtitle")}
              </p>
            </div>
            <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7823456789!2d-75.6234567!3d4.8678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTInMDQuNCJOIDc1wrAzNycyNC40Ilc!5e0!3m2!1ses!2sco!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Los Asados De Ruben"
              />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Cl.+10+%2314-10,+Santa+Rosa+de+Cabal,+Risaralda,+Colombia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
              >
                <MapPin className="w-5 h-5" />
                <span>{t("contact.map.directions")}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <motion.section {...fadeInUp} className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">{t("contact.info.title")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">{t("contact.info.serviceTitle")}</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ {t("contact.info.service1")}</li>
                <li>✓ {t("contact.info.service2")}</li>
                <li>✓ {t("contact.info.service3")}</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">{t("contact.info.paymentTitle")}</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ {t("contact.info.payment1")}</li>
                <li>✓ {t("contact.info.payment2")}</li>
                <li>✓ {t("contact.info.payment3")}</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* WhatsApp CTA */}
      <motion.section {...fadeInUp} className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("contact.whatsapp.title")}</h2>
          <p className="text-xl text-accent mb-8">
            {t("contact.whatsapp.subtitle")}
          </p>
          <a
            href="https://wa.me/573136815351"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#20BA5A] transition-all transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>{t("contact.whatsapp.button")}</span>
          </a>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section {...fadeInUp} className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("faq.title")}</h2>
            <p className="text-lg text-foreground/70">{t("faq.subtitle")}</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg md:text-xl font-bold pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-secondary flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}