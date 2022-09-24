import Table from 'react-bootstrap/Table';
import './App.css';

function App() {

  const users = [
    {name: "Ashit", email: "abc@gmail.com", address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {name: "Utkarsh", email: "fgh@gmail.com", address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {name: "Vibhanshu", email: "pqr@gmail.com", address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {name: "Rohan", email: "nop@gmail.com", address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {name: "Ayush", email: "klm@gmail.com", address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {name: "Abhilash", email: "xyz@gmail.com", address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {name: "Sandesh", email: "stv@gmail.com", address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
  ]

  return (
    <div className="App">
      <h1>List with Nested Array</h1>
      <Table striped bordered hover variant="dark">
        <tbody>
        <tr>
          <th>SNo. </th>
          <th>Name: </th>
          <th>Email: </th>
          <th>Address: </th>
        </tr>
        {
          users.map((item, i) =>
            <tr key={i}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                {/* Table */}
                <Table variant="dark">
                  <tbody>
                    <tr>
                      <th>H.N</th>
                      <th>City</th>
                      <th>Country</th>
                    </tr>
                    {
                      item.address.map((data, key) =>
                        <tr key={key}>
                          <td>{data.hm}</td>
                          <td>{data.city}</td>
                          <td>{data.country}</td>
                        </tr>
                      )
                    }
                  </tbody>
                </Table>
              </td>
            </tr>
          )
        }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
