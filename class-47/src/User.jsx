import React, { useEffect, useRef } from 'react';

function User(props) {
    const lastValue = useRef();

    useEffect(() => {
        lastValue.current = props.count;
    })

    const previousProps = lastValue.current;

    return (
        <div>
            <h1>User Component current value {props.count}</h1>
            <h1>Previous Value {previousProps}</h1>
            <h1>Diffrence {props.count - previousProps} </h1>
        </div>
    );
}

export default User;