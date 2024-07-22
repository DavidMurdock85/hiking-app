import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Hikes from "../../pages/Hikes";

const Nav = () => {
  return (
    <Router>
      <nav>
        <ul className="flex flex-row justify-center">
          <li className="m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2">
            <Link to="/about">About</Link>
          </li>
          <li className="m-2">
            <Link to="/hikes">Hiking</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hikes" element={<Hikes />} />
      </Routes>
    </Router>
  );
};

export default Nav;
