import React from "react";
import PageTitle from "../gen/PageTitle";

class ErrorPage extends React.Component{

    constructor(props){
        super(props);

    }

    render(){

        return(
            <div>
                <PageTitle title="Aradığınız sayfa bulunamadı!"></PageTitle>
            </div>
        );
    }
}

export default ErrorPage;