import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import Footer from '../footer/Footer';
import './App.css';
import Hero from '../hero/Hero';
import About from '../about/About';
import Gallery from '../gallery/Gallery';
import History from '../history/History';
import ListOfArticles from '../listOfArticle/ListOfArticles';


class App extends Component {

  render() {
    return (
      <div>
        <Hero/>
        <History/>
        <ListOfArticles/>
        <Gallery/>
        <About/>
        <Footer/>
      </div>
    );
  }
}

export default App;
