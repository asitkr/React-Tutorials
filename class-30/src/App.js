import './App.css';
import Table from 'react-bootstrap/Table';

function App() {

  const users = [
    {name: "Ashit", email: "abc@gmail.com", contact: 222},
    {name: "Utkarsh", email: "fgh@gmail.com", contact: 333},
    {name: "Vibhanshu", email: "pqr@gmail.com", contact: 555},
    {name: "Rohan", email: "nop@gmail.com", contact: 777},
    {name: "Ayush", email: "klm@gmail.com", contact: 333},
    {name: "Abhilash", email: "xyz@gmail.com", contact: 999},
    {name: "Sandesh", email: "stv@gmail.com", contact: 333},
  ]

  return (
    <div className="App">
      <h1>List With Bootstrap Table</h1>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <th>Name: </th>
            <th>Email: </th>
            <th>Contact: </th>
          </tr>
          {
            users.map((item, i) =>
              item.contact === 333 ?
                <tr key={i}>
                <td>{i} : {item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
              </tr> :
               null
            )
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
