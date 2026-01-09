import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "/src/components/Navbar";
import Home from "./pages/Home";
import Features from "/src/pages/Features";
import Footer from "/src/components/Footer";

import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
