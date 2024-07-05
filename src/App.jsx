/* eslint-disable no-unused-vars */
import { View } from "@aws-amplify/ui-react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import Navbar from './components/Navbar';

function App({ signOut, user }) {
  useEffect(() => {
    setTimeout(() => {
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        if (link.href.match(/.*elfsight.*/)) {
          link.style.display = 'none';
        }
      });
    }, 5000); // 5000 milliseconds = 5 seconds
  }, []);


  return (
    <View className="App bg-gray-200 min-h-screen">
      <Router>
        {/* <Navbar /> */}
        <Navbar />
        {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/authe" element={<Authe />} />
        </Routes> */}
      {/* <Carousel businessKey={"ChIJQw1FN----------------"} apiKey={"AIzaSy-----------------------------------------"}/> */}
        
        <div className="elfsight-app-4495d092-b640-4aa1-88ec-ab5fb0a2961a" data-elfsight-app-lazy></div>
       {/*  <Footer /> */}
      </Router>
      {/* <Button onClick={signOut}>Sign Out</Button> */}
    </View>
  )
}

export default App
