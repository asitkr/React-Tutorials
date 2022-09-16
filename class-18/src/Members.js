

function Members(props) {

    return(
        <div>
            <h1>User Component </h1>
            <br/>
            <button onClick={() => props.data()}>Click Here</button>
        </div>
    )
}

export default Members;