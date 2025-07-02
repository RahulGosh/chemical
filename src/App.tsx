import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BusinessSegments from './pages/BusinessSegments';
import Manufacturing from './pages/Manufacturing';
import ApiManufacturing from './pages/ApiManufacturing';
import InvestorRelations from './pages/InvestorRelations';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductRange from './pages/productRange';
import ExecutiveLeadership from './pages/executiveLeadership';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-inter">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business-segments" element={<BusinessSegments />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/api-manufacturing" element={<ApiManufacturing />} />
            <Route path="/investor-relations" element={<InvestorRelations />} />
            <Route path="/product-range" element={<ProductRange />} />
            <Route path="/executive-leadership" element={<ExecutiveLeadership />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/careers" element={<Careers />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;