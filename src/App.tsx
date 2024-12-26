import AboutUs from "./components/AboutUs";
import AdCard from "./components/cards/AdCard";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OrderPlacementSection from "./components/OrderPlacementSection";
import Products from "./components/Products";

function App() {
  return (
    <div className="  space-y-12">
      <Navbar />
      <HeroSection />
      <Products />
      <AboutUs />
      <AdCard />
      <OrderPlacementSection />
      <Footer />
    </div>
  );
}

export default App;
