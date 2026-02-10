import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { HistoryPage } from "./pages/HistoryPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { EventsPage } from "./pages/EventsPage";
import { ContactPage } from "./pages/ContactPage";
import { BlogPage } from "./pages/BlogPage";
import { DonatePage } from "./pages/DonatePage";
import { StatementOfFaithPage } from "./pages/StatementOfFaithPage";
import { LeadershipPage } from "./pages/LeadershipPage";
import { PrivacyPage } from "./pages/PrivacyPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        {/* Spacer for fixed header - responsive height */}
        <div className="h-16 sm:h-20 md:h-24 lg:h-28"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/statement-of-faith" element={<StatementOfFaithPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
