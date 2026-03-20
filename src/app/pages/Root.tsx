import { Outlet, useLocation } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingButtons } from "../components/FloatingButtons";
import { LocalBusinessSchema } from "../components/LocalBusinessSchema";
import { DocumentHead } from "../components/DocumentHead";
import { LanguageProvider } from "../contexts/LanguageContext";
import { useEffect } from "react";

// Root layout wrapping all pages with LanguageProvider
export function Root() {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <DocumentHead />
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </LanguageProvider>
  );
}
