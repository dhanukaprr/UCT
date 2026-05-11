import { motion } from 'motion/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F5] font-sans text-zinc-900">
      <Navbar />
      <main className="flex-grow">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours/*" element={<Tours />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
