import React from "react";

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Ashit"
        }

        console.log("Constructor called");
    }

    render() {

        console.log(this.state.name)

        return(
            <div>
                <h1>User Component {this.state.name}</h1>
                <button onClick={() => this.setState({name: "RAM"})}>Click ME</button>
            </div>
        )
    }
}

export default User;