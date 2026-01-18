import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Service } from "./pages/Service";
import { ServiceDetail } from "./pages/ServiceDetail";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
        <Route path="/service/:slug" element={<ServiceDetailPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
