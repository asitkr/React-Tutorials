import './App.css';
import React, { createRef } from 'react';

// Ref with Example

class App extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  // componentDidMount() {
  //   console.warn(this.inputRef.current.value = "1000")
  // }

  getValue(){
    //get value for input field
    console.warn(this.inputRef.current.value)
    this.inputRef.current.style.color = "red";
    this.inputRef.current.style.backgroundColor = "yellow";
    this.inputRefcurrent.focus();
  }
  
  render() {
    return (
      <div className="App">
        <h1>Ref with Example</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.getValue()}>Click</button>
      </div>
    );
  }
}

export default App;
