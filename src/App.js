import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Fryzjerzy from './pages/Fryzjerzy';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* 🔹 Always visible on every page */}
         <Sidebar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Fryzjerzy" element={<Fryzjerzy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;