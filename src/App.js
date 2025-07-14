import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ThankYouPage from "./pages/ThankYouPage";
import HabitAppPage from "./pages/HabitAppPage";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/app" element={<HabitAppPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
