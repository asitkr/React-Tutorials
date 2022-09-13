function Students(props) {

    console.log(props);

    return(
        <div>
            <h3>Name: {props.name}</h3>
            {/* <h5>Email: {props.email}</h5>
            <h5>Age: {props.age}</h5>
            <h5>City: {props.city}</h5>
            <h5>Phone: {props.phone}</h5>
            <p>Address: {props.other.states}</p>
            <h2><b>Mobile Number: {props.other.mob}</b></h2> */}
        </div>
    )
}

export default Students;