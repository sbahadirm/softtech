import React from "react";

class HomePage extends React.Component{

    constructor(props){
        super(props);

    }

    render(){

        return(
            <div className="container">
            <div className="text-center mt-5">
                <h1>Softtech Java Bootcamp</h1>
                <p>Fullstack Proje Uygulaması</p>
                <p>React & Spring Boot</p>
            </div>
        </div>
        );
    }
}

export default HomePage;