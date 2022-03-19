import React from "react";

class PageTitle extends React.Component{

    render(){
        return (
            <h1 className="display-6 p-3 text-center">{this.props.title}</h1>
        )
    }
}

export default PageTitle;