import './App.css';
import User from './User';

// Two function componets are in same file and no need to export or import it
function Header() {
  return(
    <h1>Header Component</h1>
  );
}

function App() {
  return (
    <div className="App">

      {/* Header Components */}
      <Header />

      <header className="App-header">
        {/* <User></User> 
            2nd Way You can Write Functional component
        */}


        {/* 1st way You can Write Functional component */}
        <User />

        {/* If we use this components more than once it means Components
          Any number of times we can use it like this way */}
        {/* <User />
        <User />
        <User />
        <User />
        <User />  */}
      </header>
    </div>
  );
}

export default App;
