import './App.css';
import User1 from './User1';
import { User2 } from './User2';

function App() {

  //simply we can create nested function component inise it
  function Header() {
    return(<h1>Header Nested Component</h1>)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>We can use both react and angular in same project?</h1>
        <p>Answer: Yes we can use Angular and ReactJs both in same project Because Angular  is a Framework and ReactJs is a JavaScript Library.</p>
        <User1 />
        <User2 />

        {/* 1st way to call the nested funtional component */}
        <Header />

        {/* 2nd way to call the nested funtional component */}
        {Header()}
      </header>
    </div>
  );
}

export default App;
