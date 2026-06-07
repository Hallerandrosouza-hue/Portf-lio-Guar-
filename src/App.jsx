import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import SobrePage from './pages/SobrePage.jsx';
import ServicosPage from './pages/ServicosPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import DepoimentosPage from './pages/DepoimentosPage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/depoimentos" element={<DepoimentosPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
    </Router>
  );
}

export default App;