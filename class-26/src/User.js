import { useEffect } from "react";


function User(props) {

    useEffect(() => {
        console.warn("useEffect " + props.count);
    }, [props.count, props.data])

    return(
        <div>
            <h1>User component</h1>
            <h4>Data : {props.data}</h4>
            <h4>Count : {props.count}</h4>
        </div>
    )
}

export default User;