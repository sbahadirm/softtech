import React from "react";

class Container extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            testState: "initialState"
        }
    }

    handleClick(){
        this.setState({testState: "newState"})
    }

    render(){

        return(
            <div>Container</div>
        );
    }
}

export default Container;