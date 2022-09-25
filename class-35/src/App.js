import React, { Component } from 'react';
import './App.css';
import User from './User';

// Pure component in ReactJs

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  
  render() {

    return (
      <div className="App">
        {/* <h1>Pure component in ReactJs</h1> */}

        <User count={this.state.count} />
        <button onClick={() => this.setState({count: this.state.count+1})}>Click me to check Pure Component</button>
      </div>
    );
  }
}

export default App;
