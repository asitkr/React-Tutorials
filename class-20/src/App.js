import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ashit"
    }

    console.warn("constructor");
  }

  componentDidMount() {
    console.warn("componentDidMount");
  }
  
  render() {
    console.warn("render");

    return (
      <div className="App">
        <h1>Component Did Mount {this.state.name}</h1>
        <button onClick={() => {this.setState({name: "Pandey"})}}>Click</button>
      </div>
    );
  }
}

export default App;
