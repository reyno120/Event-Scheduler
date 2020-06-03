import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: {}
    }
  }

  componentDidMount() {
    this.callBackend()
      .then(res => this.setState({ event: res.events.eventName }));
  }

  callBackend = async () => {
    const res = await fetch('/test');
    const body = await res.json();

    return body;
  }

  render() { 
    return (
    <div>
      <h1>test</h1>
      {this.state.event.map((eventDetail) => {
        return <h1>{eventDetail.eventName}</h1>
      })}
    </div>
    );
  }
}
 
export default App;
