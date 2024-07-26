// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import Footer from './components/Footer.jsx';
import SvgFile from './components/SvgFile.jsx'
import Theme from './components/Theme.jsx'
import MainBody from './components/MainBody.jsx';
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className="App">
      <SvgFile/>
      <Theme/>
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Navbar/>
        <MainBody/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
