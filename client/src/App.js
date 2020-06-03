import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userEvents: []
    }
  }

  componentDidMount() {
    axios.get('/home')
      .then(res => {
        this.setState({userEvents: res.data.userEvents});
        console.log(this.state.userEvents);
      });
  }

  render() { 
    return (
    <div>
      {this.state.userEvents.map((details, index) => (
        <li key={index}>{details.eventName}, {details.eventLoc}</li>
      ))}
    </div>
    );
  }
}
 
export default App;
