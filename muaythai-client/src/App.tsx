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
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';



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
          <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
          <Route path="/register" element={<Register setUserInfo={setUserInfo} />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>

    </>

  );
}

export default App;
