import React, { Component } from 'react';
import Navbar from './components/Navbar';
import AllCards from './components/AllCards';
import images from './images/imagesDatabase';
import Card from '@material-ui/core/Card';

class App extends Component {

  selectRandomImage() {
    var randomNumber = Math.floor(Math.random() * images.length);
    var randomImage = images[randomNumber];
    return randomImage;
  }

  render() {
    var randomImage = this.selectRandomImage(); 
    return (
    <div style={{backgroundImage: "url(" + randomImage.image + ")", height: '100vh', backgroundSize: 'cover'}}>
      <Navbar></Navbar>
      <AllCards></AllCards>
      <Card 
        style={{
          marginRight: '98em', 
          marginLeft: '2em', 
          marginTop: '8em', 
          backgroundColor:'#3f51b5', 
          color: 'white'}}>
            Photo by <span style={{fontWeight: 'bold'}}>{randomImage.author}</span> on <a style={{color: 'inherit'}} href="http://unsplash.com">unsplash</a>
      </Card>
    </div>
    );
  }
}
 
export default App;
