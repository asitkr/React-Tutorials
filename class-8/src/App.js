import './App.css';

function App() {

  const style1 = {
    backgroundColor: "#2196F3", 
  }

  const style2 = {
      color: "white", 
  }

  let name = "Ashit";

  function apple() {
    name = "Rohan";
    alert(name);
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      <button style={{...style1, ...style2}} onClick={apple}>Click me</button>
      <button style={{backgroundColor: "#f1f1f1", color: "grey", padding: "10%", cursor: "pointer"}} onClick={apple}>Click me Here</button>
    </div>
  );
}

export default App;
