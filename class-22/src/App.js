import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate() {
    console.warn("shouldComponentUpdate", this.state.count);
    //return true;

    if(this.state.count > 5 && this.state.count < 10){
      return true;
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1> should Component Update {this.state.count}</h1>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Click me</button>
      </div>
    );
  }
}

export default App;
