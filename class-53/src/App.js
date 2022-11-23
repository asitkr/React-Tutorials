import { useMemo, useState } from 'react';
import './App.css';

function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function increment1() {
    setCount1(count1 + 1)
  }

  function increment2() {
    setCount2(count2 + 1);
  }

  // function isEven() {
  //   let i = 0;
  //   while(i < 20000000000) {
  //     i++;
  //     if(i === 200000000){
  //       return count1%2 === 0
  //     }
  //   } 
  // }

  const useEvene = useMemo(() => {
    let i = 0;
    while(i < 20000000000) {
      i++;
      if(i === 200000000){
        return count1%2 === 0
      }
    } 
  }, [count1])

  // console.log(isEven());

  return (
    <div className="App">
      <h1>useMemo Hook</h1>
      <button onClick={increment1}>Count 1 - {count1}</button>
      { useEvene ? " Even " : " Odd "}
      <button onClick={increment2}>Count 2 - {count2}</button>
    </div>
  );
}

export default App;
