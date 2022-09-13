import React from "react";

class Counter extends React.Component {
    constructor(){
        super();
        this.state = {
            values: 0
        }
    }

    updateValue() {
        this.setState({values: this.state.values + 1})
    }


    render() {
        return(
            <div>
                <h4>Counter Component</h4>
                <h1>{this.state.values}</h1>
                <button onClick={() => this.updateValue()}>To Increase Me +</button>
            </div>
        )
    }
}

export default Counter;