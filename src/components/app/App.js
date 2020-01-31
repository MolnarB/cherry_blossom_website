import React, { Component } from 'react';
import Footer from '../footer/Footer';
import './App.css';
import Hero from '../hero/Hero';
import Article from '../article/Article';

class App extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <Article/>
        <Footer/>
      </div>
    );
  }
}

export default App;
