import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profil from "./pages/Profil";

function App() {
  return (
    <Router>
      <Navbar />
      <p>Bonjour sur la navbar</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Profil />} />
      </Routes>
    </Router>
  );
}

export default App;
