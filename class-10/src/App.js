import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  constructor(){
    super();
    this.state = {
      firstName: "Ashit",
      lastName: "Sinha",
    }
  }

  updateName() {
    this.setState({firstName: "Rohan", lastName: "Raj"})
  }
  
  render() {
    return (
      <div className="App App-header">
        <h5>CLass Component</h5>
        <h1>Name: {this.state.firstName} {this.state.lastName}</h1>
        <button onClick={() => this.updateName()}>Click Here To Change Name</button>

        <Counter />
      </div>
    );
  }
}

export default App;
