import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
// import Login from "./pages/login.jsx";
// import Props from "./pages/Props.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Services from "./pages/Services.jsx";
import LoginPage from "./pages/login.jsx";
import Navbar from "./Components/Global/Navbar.jsx";
import Signup from "./pages/Signup.jsx";
import Grooming from "./pages/Grooming.jsx";
// import LandingPage from "./pages/LandingPage.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLogin from "./Components/Global/GoogleLogin.jsx";
// import LoginPage from "./pages/Login.jsx";
const GoogleWrapper = ()=>{
  return (
    <GoogleOAuthProvider ClientID = "722527548201-9nj83uo5ii4aahuvfmpauh0eicbbg4d5.apps.googleusercontent.com" >
      <GoogleLogin/>

    </GoogleOAuthProvider>
  )
}
// 722527548201-9nj83uo5ii4aahuvfmpauh0eicbbg4d5.apps.googleusercontent.com
ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>

      <Route path="/" element={<GoogleWrapper/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/grooming" element={<Grooming />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);


