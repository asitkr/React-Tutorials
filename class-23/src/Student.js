import React from "react";

class Student extends React.Component {

    componentWillUnmount() {
        //alert("called");
        console.log("Called")
    }

    render() {
        return(
            <h1>Student Component</h1>
        )
    }
}

export default Student;