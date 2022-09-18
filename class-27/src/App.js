import './styles.css'
import './App.css';
import Style from './custom.module.css';

function App() {
  return (
    <div className="App">
      <h1 className='primary'>I am React Js</h1>
      <h3 style={{backgroundColor: "green", color: "whitesmoke"}}>JavaScript</h3>
      <p className={Style.success}>Modular Css</p>
    </div>
  );
}

export default App;
