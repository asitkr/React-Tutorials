import { Button } from 'react-bootstrap';
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <h1>Install Bootstrap</h1>
      <Button onClick={() => alert("Hello Bootstrap")}>Click Me</Button>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
      <br/>
      <hr/>
      <User />
    </div>
  );
}

export default App;
