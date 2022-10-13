import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Link to='/'>Home</Link> <br/>
        <Link to='/about'>About</Link> <br/>
        <Link to='/contact'>Contact</Link> <br/>
        <Link to='/services'>Services</Link> <br/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
