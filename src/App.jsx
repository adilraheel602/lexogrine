import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SidebarTabs from "./components/SidebarTabs";
import RevealOnScroll from "./components/RevealOnScroll";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import './index.css';


const App = () => (
  <PageTransition>
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  </PageTransition>
);

export default App;
