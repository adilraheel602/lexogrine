import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import OurWork from "./pages/OurWork";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Workshops from "./pages/Workshops";
import GetQuote from "./pages/GetQuote";
import "./index.css";

// 🔁 Wrapper that re-triggers PageTransition on every route change
const PageWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <PageTransition key={location.pathname} />
      {children}
    </>
  );
};

const AppContent = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/get-quote" element={<GetQuote />} />
        </Routes>
      </PageWrapper>
      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
