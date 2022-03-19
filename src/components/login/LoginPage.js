import React from "react";
import { Navigate } from "react-router-dom";
import AuthenticationService from "../../api/AuthenticationService";
import PageTitle from "../gen/PageTitle";

class LoginPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            identityNo:"",
            password: ""
        }

        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerChange(event){
        
        this.setState({[event.target.name]: event.target.value})

        console.log(this.state)
    }

    handleFormSubmit = (e) => {

        e.preventDefault();

        AuthenticationService.login(this.state.identityNo, this.state.password)
            .then(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
    }

    handleResponse(response){

        console.log(response);

        sessionStorage.setItem('token', response.data.data)
        sessionStorage.setItem('identityNo', this.state.identityNo);

        this.props.login();
    }

    handleError(error){

        console.log(error);
    }

    render(){

        if(sessionStorage.getItem('token')){
            return <Navigate to='/'></Navigate>
        }

        return(
            // <PageTitle title="Giriş Yap"></PageTitle>


            <div className="container">
                <div className="text-center mt-5">
                    <div className="row col-md-4 offset-md-4">

                        <form className="form-signin" onSubmit={this.handleFormSubmit}>

                            <img className="mb-4" 
                            src="https://pbs.twimg.com/profile_images/1326419899145711617/IeuwNOBK_400x400.jpg" 
                            alt="" width="72" height="72" />
                            <h1 className="h3 mb-3 font-weight-normal">Giriş</h1>

                            <label htmlFor="inputEmail" className="sr-only">TC Kimlik No</label>
                            <input
                                type="number"
                                id="inputEmail"
                                className="form-control"
                                placeholder="TCKN"
                                required=""
                                autoFocus=""
                                value={this.state.identityNo}
                                name="identityNo"
                                onChange={this.handlerChange}
                            />

                            <label htmlFor="inputPassword" className="sr-only">Şifre</label>
                            <input
                                type="password"
                                id="inputPassword"
                                className="form-control"
                                placeholder="Şifre"
                                required=""
                                value={this.state.password}
                                name="password"
                                onChange={this.handlerChange}
                            />

                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Beni Hatırla
                                </label>
                            </div>

                            <input type="submit" className="btn btn-danger btn-block" value="Kaydet" />
                            <p className="mt-5 mb-3 text-muted">© 2022</p>
                        </form>
                    </div>
                </div>
            </div>
      

        );
    }
}

export default LoginPage;