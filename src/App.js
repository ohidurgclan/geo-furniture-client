import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Services/Products/Products';
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

