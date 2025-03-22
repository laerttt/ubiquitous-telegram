import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Headroom from "react-headroom";
import Services from "./Services";
import "./css/App.css";
import Footer from "./Footer";
// import About from './About';

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
        </Routes>
      </div>
      <Footer style={{ zIndex: 1000 }} />
    </Router>
  );
}

export default App;
