import './App.css';


// React Nested Functional Components
const Name = (props) => {
  return(
    <div>
      <h1>Name: {props.personData.name}</h1>
      <Wife personData={ props.personData } />
    </div>
  )
}

const Wife = (props) => {
  return(
    <div>
      <h1>Wife Name: {props.personData.wifeName}</h1>
      <Parent personData={ props.personData } />
    </div>
  )
}

const Parent = (props) => {
  return(
    <div>
      <h1>Parent Name: {props.personData.parentName}</h1>
      <Child personData= { props.personData } />
    </div>
  )
}

const Child = (props) => {
  return(
    <div>
      <h1>Child Name: {props.personData.childName}</h1>
      <GrandChild personData= { props.personData } />
    </div>
  )
}

const GrandChild = (props) => {
  return(
    <div>
      <h1>Grand Child Name: {props.personData.grandChildName}</h1>
    </div>
  )
}


function App() {

  const personData = {
    name: "Amitab Bachchan",
    wifeName: "Jaya Bachchan",
    parentName: "Harivansh Rai Bachchan",
    childName: "Abhishek Bachchan",
    grandChildName: "Aaradhya Bachchan",
  }

  return (
    <div className="App">
      <Name personData= { personData } />
    </div>
  );
}

export default App;
