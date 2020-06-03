import React, { Component } from 'react';
import Navbar from './components/Navbar';
import AllCards from './components/AllCards';
import images from './images/imagesDatabase';

class App extends Component {

  selectRandomImage() {
    var randomNumber = Math.floor(Math.random() * images.length);
    var randomImage = images[randomNumber];
    return randomImage.image;
  }

  render() { 
    return (
    <div style={{backgroundImage: "url(" + this.selectRandomImage() + ")", height: '100vh', backgroundSize: 'cover'}}>
      <Navbar></Navbar>
      <AllCards></AllCards>
    </div>
    );
  }
}
 
export default App;
