import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import liftyxLogo from "../../assets/0b42223d9f55b7c8c03c00d28143a564ebd703f2.png";
import restaurantLogo from "../../assets/0317080f99089df2b5a6e317d3c57784231215a2.png";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img 
                src={restaurantLogo} 
                alt="Los Asados De Ruben Logo" 
                className="h-20 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <p className="text-accent text-sm mb-4 leading-relaxed max-w-sm mx-auto md:mx-0">
              {t("footer.about.text")}
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-4 text-accent flex items-center gap-2 justify-center md:justify-start">
              <span className="w-8 h-0.5 bg-secondary"></span>
              {t("footer.contact.title")}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-center md:text-left text-accent/90 leading-relaxed">
                  Cl. 10 #14-10<br />
                  Santa Rosa de Cabal, Risaralda<br />
                  Colombia
                </span>
              </div>
              <a 
                href="tel:+573136815351"
                className="flex flex-col md:flex-row items-center gap-3 group hover:text-secondary transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-accent/90">+57 313 681 5351</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-4 text-accent flex items-center gap-2 justify-center md:justify-start">
              <span className="w-8 h-0.5 bg-secondary"></span>
              {t("footer.hours.title")}
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-center md:text-left text-accent/90 space-y-1.5">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="text-accent">{t("footer.hours.weekday")}</span>
                    <span className="text-accent/60">·</span>
                    <span>{t("footer.hours.weekday.time")}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="text-accent">{t("footer.hours.weekend")}</span>
                    <span className="text-accent/60">·</span>
                    <span>{t("footer.hours.weekend.time")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 text-sm text-accent/80">
            <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Los Asados De Ruben. {t("footer.rights")}</p>
            <div className="flex items-center gap-2">
              <span className="text-accent/80">{t("footer.crafted")}</span>
              <a 
                href="https://liftyx.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity transform hover:scale-105"
              >
                <img src={liftyxLogo} alt="Liftyx" className="h-6 drop-shadow-md" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}