import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import LoomToTableSection from "@/components/LoomToTableSection";
import GallerySection from "@/components/GallerySection";
import InviteSection from "@/components/InviteSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PackagesSection />
      <LoomToTableSection />
      <GallerySection />
      <InviteSection />
      <Footer />
    </main>
  );
};

export default Index;
