import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { HistoryPage } from "./pages/HistoryPage";

// Placeholder pages
const AboutPage = () => (
  <div className="min-h-screen pt-24 pb-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">About Us</h1>
      <p className="text-lg text-slate-600">Content coming soon...</p>
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="min-h-screen pt-24 pb-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">Our Services</h1>
      <p className="text-lg text-slate-600">Content coming soon...</p>
    </div>
  </div>
);

const EventsPage = () => (
  <div className="min-h-screen pt-24 pb-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">Events</h1>
      <p className="text-lg text-slate-600">Content coming soon...</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen pt-24 pb-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">Contact Us</h1>
      <p className="text-lg text-slate-600">Content coming soon...</p>
    </div>
  </div>
);

const DonatePage = () => (
  <div className="min-h-screen pt-24 pb-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">Donate</h1>
      <p className="text-lg text-slate-600">Content coming soon...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
