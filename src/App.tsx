import './App.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Schedule from './components/Schedule';
import About from './components/About';
import Footer from './components/Footer';
import { useState } from 'react';
import Pricing from './components/Pricing';
import PageNotFound from './components/PageNotFound';


function App() {
  let [userInfo, setUserInfo] = useState(
    JSON.parse(sessionStorage.getItem("userInfo") as string) == null
      ? { email: false, isAdmin: false }
      : JSON.parse(sessionStorage.getItem("userInfo") as string)
  );
  return (
    <>

      <Router>
        <Navbar userInfo={userInfo} setUserInfo={setUserInfo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>

    </>

  );
}

export default App;
