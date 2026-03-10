import { useEffect } from "react";
import { useLocation } from "react-router";

export function DocumentHead() {
  const location = useLocation();

  useEffect(() => {
    // Default meta information
    const defaultTitle = "Los Asados De Ruben - Chorizos Artesanales en Santa Rosa de Cabal";
    const defaultDescription =
      "Chorizos artesanales y asados tradicionales en Santa Rosa de Cabal, Risaralda. Receta original santarosana, hechos a mano y preparados al momento. ¡Visítanos!";

    // Page-specific titles
    let title = defaultTitle;
    let description = defaultDescription;

    if (location.pathname === "/menu") {
      title = "Menú - Los Asados De Ruben | Chorizos y Asados Artesanales";
      description =
        "Descubre nuestro menú de chorizos artesanales, asados y acompañantes tradicionales. Todos preparados con receta santarosana original.";
    } else if (location.pathname === "/contacto") {
      title = "Contacto y Ubicación - Los Asados De Ruben | Santa Rosa de Cabal";
      description =
        "Visítanos en Cl. 10 #14-10, Santa Rosa de Cabal, Risaralda. Horarios, teléfono y cómo llegar a Los Asados De Ruben.";
    }

    // Update document title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords =
      "chorizos artesanales, chorizo santarosano, asados, Santa Rosa de Cabal, restaurante, comida tradicional, Colombia, Risaralda";
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    } else {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      metaKeywords.setAttribute("content", keywords);
      document.head.appendChild(metaKeywords);
    }

    // Update or create Open Graph tags
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant" },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1682996055064-599bec77fc62?w=1200",
      },
      { property: "og:locale", content: "es_CO" },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      }
    });
  }, [location.pathname]);

  return null;
}