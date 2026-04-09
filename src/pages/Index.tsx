import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import PackagesSection from "@/components/PackagesSection";
import ItinerarySection from "@/components/ItinerarySection";
import LoomToTableSection from "@/components/LoomToTableSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="min-h-screen">
    <Navbar />
    <HeroSection />
    <SocialProofBar />
    <PackagesSection />
    <ItinerarySection />
    <LoomToTableSection />
    <TestimonialsSection />
    <GallerySection />
    <PhotoGallerySection />
    <AboutSection />
    <FAQSection />
    <ContactSection />
    <InstagramSection />
    <Footer />
  </main>
);

export default Index;
