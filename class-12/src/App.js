import React from 'react';
import './App.css';
import Student from './Student';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Ashit"
    }
  }
  

  render() {
    return (
      <div className="App">

        <Student name={this.state.name} email={'abc@gmail.com'}> <h1>Passing Html Elements</h1> </Student>
        {/* <Student name={"Rohan"} email={'rohan@gmail.com'} /> */}
  
        <button onClick={() => this.setState({name: "Rohan"})}>Change Name to click</button>
      </div>
    );
  }
}

export default App;
