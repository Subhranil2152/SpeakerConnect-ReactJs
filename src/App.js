
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Landing from './components/Landing';


export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home /> }/>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
    )
  }
}

