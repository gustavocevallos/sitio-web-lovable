import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Story from "@/components/Story";
import OrderProcess from "@/components/OrderProcess";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Story />
      <OrderProcess />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
