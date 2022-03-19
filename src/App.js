import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreditActivityService from './api/CreditActivityService';
import './App.css';
import AccountListPage from './components/account/AccountListPage';
import AccountAddPage from './components/account/AddAccountPage';
import CreditActivityListPage from './components/account/CreditActivityListPage';
import ErrorPage from './components/error/ErrorPage';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import Menu from './components/menu/Menu';
import Container from './components/test/Container';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isLoggedOn: false
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(){
    this.setState({isLoggedOn: true})
  }

  logout(){
    this.setState({isLoggedOn: false})
    sessionStorage.clear();
  }

  getIsLogged(){

    const token = sessionStorage.getItem('token');

    const isLogged = token ? true : false;

    return isLogged;
  }

  render(){

    const isLogged = this.getIsLogged();

    return (
      <div className="App">
       
        <Menu isLoggedOn={isLogged} logout={this.logout}></Menu>
  
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
          <Route path='/accounts' element={<AccountListPage></AccountListPage>}></Route>
          <Route path='/add-account' element={<AccountAddPage></AccountAddPage>}></Route>
          <Route path='/activities' element={<CreditActivityListPage></CreditActivityListPage>}></Route>

          <Route path='login' element={<LoginPage login={this.login}></LoginPage>}></Route>
          
        </Routes>
  
      </div>
    );
  }
  
}

export default App;
