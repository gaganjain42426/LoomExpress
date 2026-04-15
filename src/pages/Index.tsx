import { Helmet } from "react-helmet-async";
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

const SITE_URL = "https://www.vimlaloomcraftexperience.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristAttraction",
      "@id": `${SITE_URL}/#tourist-attraction`,
      name: "Vimla LoomCraft Experience",
      description:
        "Experience authentic heritage rug weaving with master artisan Vimla in Banskho village, Rajasthan. A 400-year-old handloom tradition brought to life through hands-on workshops and cultural immersion.",
      url: SITE_URL,
      image: OG_IMAGE,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Banskho",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "27.0238",
        longitude: "75.8267",
      },
      touristType: ["Cultural tourism", "Heritage craft", "Experiential travel"],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#local-business`,
      name: "Vimla LoomCraft Experience",
      description:
        "Hands-on heritage rug weaving workshops with master artisan Vimla in Banskho village, Rajasthan, India.",
      url: SITE_URL,
      image: OG_IMAGE,
      telephone: "",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Banskho Village",
        addressLocality: "Banskho",
        addressRegion: "Rajasthan",
        postalCode: "303102",
        addressCountry: "IN",
      },
      priceRange: "₹₹",
      openingHours: "Mo-Su 08:00-18:00",
    },
  ],
};

const Index = () => (
  <>
    <Helmet>
      <title>Vimla LoomCraft Experience | Heritage Rug Weaving in Banskho, Rajasthan</title>
      <meta
        name="description"
        content="Experience authentic heritage rug weaving with master artisan Vimla in Banskho village, Rajasthan. Book a hands-on loom craft workshop and cultural immersion experience."
      />
      <link rel="canonical" href={SITE_URL} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta
        property="og:title"
        content="Vimla LoomCraft Experience | Heritage Rug Weaving in Banskho, Rajasthan"
      />
      <meta
        property="og:description"
        content="Experience authentic heritage rug weaving with master artisan Vimla in Banskho village, Rajasthan. Book a hands-on loom craft workshop and cultural immersion experience."
      />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Vimla LoomCraft Experience" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={SITE_URL} />
      <meta
        name="twitter:title"
        content="Vimla LoomCraft Experience | Heritage Rug Weaving in Banskho, Rajasthan"
      />
      <meta
        name="twitter:description"
        content="Experience authentic heritage rug weaving with master artisan Vimla in Banskho village, Rajasthan. Book a hands-on loom craft workshop and cultural immersion experience."
      />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
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
  </>
);

export default Index;
