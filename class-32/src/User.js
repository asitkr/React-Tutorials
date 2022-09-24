function User(props) {
    console.log(props.data.name);

    return(
        <div>
            <span>Name : {props.data.name}</span>
            <span>Email : {props.data.email}</span>
            <span>Contact : {props.data.contact}</span>
        </div>
    )
}

export default User;