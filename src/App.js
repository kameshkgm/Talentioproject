import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Order from './Components/Order';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!isLoginPage&&<footer className="footer">
        <p>Designed by SK groups</p>
      </footer>}
    </div>
  );
}

export default App;
