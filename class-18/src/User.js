

function User(props) {

    return(
        <div>
            <h1>User Component </h1>
            <br/>
            <button onClick={props.data}>Click Here</button>
            {/* <br/><br/>
            <button onClick={() => props.data()}>Click me</button> */}
        </div>
    )
}

export default User;