import React, { PureComponent } from 'react';
import './App.css';

// Pure component in ReactJs

class User extends PureComponent {
  
  render() {

    console.warn("Render")

    return (
      <div className="App">
        <h1>User Component {this.props.count}</h1>
      </div>
    );
  }
}

export default User;
