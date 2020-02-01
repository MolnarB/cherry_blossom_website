import React, { Component } from 'react';
import Footer from '../footer/Footer';
import './App.css';
import Hero from '../hero/Hero';
import Article from '../article/Article';
import About from '../about/About';
import Gallery from '../gallery/Gallery';

class App extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <Article/>
        <Gallery/>
        <About/>
        <Footer/>
      </div>
    );
  }
}

export default App;
