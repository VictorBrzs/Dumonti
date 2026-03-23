import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { CTA } from "./components/CTA";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Handle anchor link clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            const headerOffset = 80;
            const elementPosition =
              element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition +
              window.pageYOffset -
              headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () =>
      document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CTA />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}