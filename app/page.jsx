import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specials from "@/components/Specials";
import Marquee from "@/components/Marquee";
import Taste from "@/components/Taste";
import Reviews from "@/components/Reviews";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import OrderBold from "@/components/OrderBold";
import Visit from "@/components/Visit";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specials />
        <Menu />
        <Marquee />
        <Taste />
        <OrderBold />
        <Gallery />
        <Reviews />
        <InstagramSection />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
