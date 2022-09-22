import './App.css';

function App() {

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // fruits.map((item) => {
  //   console.log("Fruits Name: " + item);
  // })

  return (
    <div className="App">
      <h1>Map Function</h1>

      {
        fruits.map((data) => 
          <h2>{data}</h2>
        )
      }

      {/* JSX support on map function but not any loop like for, while, do-while */}
      {/* {
        for(let i=0; i<fruits.length; i++){
          <h1>{fruits[i]}</h1>
        }
      } */}
    </div>
  );
}

export default App;
