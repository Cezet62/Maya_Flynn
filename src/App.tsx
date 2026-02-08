import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import NutritionalCooking from './pages/NutritionalCooking';
import FoodAsMedicine from './pages/FoodAsMedicine';
import './i18n/i18n';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nutritional-cooking" element={<NutritionalCooking />} />
          <Route path="/food-as-medicine" element={<FoodAsMedicine />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
