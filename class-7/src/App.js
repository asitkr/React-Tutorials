import './App.css';

//alert("Hello Prasad");

function App() {

  let name = 'Ashit';

  function apple() {
    alert("Hello " + name);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>{name}</h3>
        <h1>Click event and function in ReactJs</h1>

        <button onClick={apple}>Click Me 1</button>

        {/* <button onDoubleClick={() => alert("You Clicked Me Double")}>Double Click Me</button> */}


        {/* <button onDoubleClick={() => apple()}>Double Click Me</button> */}
        {/* We write function apple() this way working But only in Arrow Function allow to work but normally we don't write like apple() This will done in line no-24, just simply write this way funtion_name(apple) This will done in line no-19 */}
      </header>
    </div>
  );
}

export default App;



// Click event and function in ReactJs