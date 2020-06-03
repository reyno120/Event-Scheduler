import React, { Component } from 'react';
import Navbar from './components/Navbar';
import AllCards from './components/AllCards';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() { 
    return (
    <div>
      <Navbar></Navbar>
      <AllCards></AllCards>
      {/* {this.state.userEvents.map((details, index) => (
        <li key={index}>{details.eventName}, {details.eventLoc}</li>
      ))} */}
    </div>
    );
  }
}
 
export default App;
