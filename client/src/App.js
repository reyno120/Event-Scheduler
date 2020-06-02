import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.callBackend()
      .then(res => this.setState({ data: res.expresss }));
  }

  callBackend = async () => {
    const res = await fetch('/test');
    const body = await res.json();

    return body;
  }

  render() { 
    return (  
      <h1>{this.state.data}</h1>
    );
  }
}
 
export default App;
