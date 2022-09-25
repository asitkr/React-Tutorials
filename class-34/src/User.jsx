function User(props) {

    const name = "Ashit Kumar Sinha";

    return(
        <div>
            <h1>User Component <b>Send Data Child to Parent Component</b></h1>
            <button onClick={() => props.name(name)}>Click me</button>
        </div>
    )
}

export default User;