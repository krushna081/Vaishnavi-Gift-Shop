import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import StickyBottomBar from "./components/StickyBottomBar";
import WelcomePopup from "./components/WelcomePopup";
import QuickActions from "./components/QuickActions";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import Statistics from "./sections/Statistics";
import About from "./sections/About";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import WhyChooseUs from "./sections/WhyChooseUs";
import OrderProcess from "./sections/OrderProcess";
import Reviews from "./sections/Reviews";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#1A000A] pb-16 lg:pb-0">
      <Navbar />
      <Hero />
      <QuickActions />
      <Products />
      <Statistics />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <OrderProcess />
      <Reviews />
      <Contact />
      <Footer />
      <StickyBottomBar />
      <FloatingButtons />
      <WelcomePopup />
      <Analytics />
    </div>
  );
}

export default App;
