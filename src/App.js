import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Headroom from "react-headroom";
import Services from "./Services";
import About from "./About"; 
import "./css/App.css";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Headroom style={{ zIndex: 1000 }}>
        <Header />
      </Headroom>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} /> {/* ✅ Add this line */}
        </Routes>
      </div>
      <Footer style={{ zIndex: 1000 }} />
    </Router>
  );
}

export default App;
