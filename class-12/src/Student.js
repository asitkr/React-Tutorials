import React from "react";

class Student extends React.Component {

    render() {

        console.log(this.props);

        return(
            <div style={{color: 'red', background: 'yellow', padding: 20}}>
                <h1>Students Name: {this.props.name} </h1>
                <h1>Students Email: {this.props.email} </h1>

                <h1>{this.props.children}</h1>
            </div>
        )
    }
}

export default Student;