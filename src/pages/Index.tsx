import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedMusic from "@/components/FeaturedMusic";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedMusic />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
