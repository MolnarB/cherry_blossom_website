import React, { Component } from 'react';
import Footer from '../footer/Footer';
import './App.css';
import Hero from '../hero/Hero';
import About from '../about/About';
import Gallery from '../gallery/Gallery';
import History from '../history/History';
import ListOfArticles from '../listOfArticle/ListOfArticles';
import Header from '../header/Header';



class App extends Component {



  render() {
    return (
      <div>
        <Header/>
        <Hero/>
        <History/>
        <Gallery/>
        <ListOfArticles/>
        <About/>
        <Footer/>
      </div>

      

    );
  }
}

export default App;
