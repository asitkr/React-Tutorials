import React from 'react';
import './App.css';
import Student from './Student';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.show ? <Student /> : <h1>Component Will Unmount Remove</h1> 
        }
        
        <button onClick={() => this.setState({show: !this.state.show})}>Toggle to Show and Hide</button>
      </div>
    );
  }
}

export default App;
