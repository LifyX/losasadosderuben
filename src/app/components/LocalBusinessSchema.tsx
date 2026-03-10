import { useEffect } from "react";

export function LocalBusinessSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Los Asados De Ruben",
      "image": "https://images.unsplash.com/photo-1682996055064-599bec77fc62?w=1200",
      "description": "Chorizos artesanales y asados tradicionales en Santa Rosa de Cabal. Receta original, hechos a mano y preparados al momento.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Cl. 10 #14-10",
        "addressLocality": "Santa Rosa de Cabal",
        "addressRegion": "Risaralda",
        "addressCountry": "CO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "4.8678901",
        "longitude": "-75.6234567"
      },
      "telephone": "+573136815351",
      "priceRange": "$$",
      "servesCuisine": "Colombian",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "11:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "11:00",
          "closes": "19:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      },
      "menu": window.location.origin + "/menu",
      "acceptsReservations": "False"
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}