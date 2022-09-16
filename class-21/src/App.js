import './App.css';
import React from 'react';

// ComponentDidUpdate

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }

    //console.warn("constructor");
  }


  componentDidUpdate(preProps, preState, snapshot) {
    //console.warn("componentDidUpdate", preState);
    //console.warn("componentDidUpdate", preState.count === this.state.count);
    console.warn("componentDidUpdate", preState.count, this.state.count);
    //console.warn("componentDidUpdate", preProps);
    //console.warn("componentDidUpdate", snapshot);


    if(preState.count === this.state.count){
      alert("data is already updates")
    }
  }

  
  render() {
    //console.warn("render");

    return (
      <div className="App">
        <h1>Class Component {this.state.count}</h1>
        {/* <button onClick={() => this.setState({count: this.state.count+1})}>Click me</button> */}
        <button onClick={() => this.setState({count: 1})}>Click me</button>
      </div>
    );
  }
}

export default App;
