import React, { useState } from "react";

function Student() {

    const [data, setData] = useState('');
    const [print, setPrint] = useState(false);

    return(
        <div>
            <input type="text" onChange={(e) => setData(e.target.value)} />
            {
                print ? <h1>data : {data}</h1> : null
            }
            <button onClick={() => setPrint(true)}>Click Me</button>
        </div>
    )
}

export default Student;