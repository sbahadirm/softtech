import React from "react";
import AccountService from "../../api/AccountService";
import PageTitle from "../gen/PageTitle";

class AccountListPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            accountList: []
        }
    }

    componentDidMount() {
        this.getAccountList();
    }

    getAccountList() {

        AccountService.findAllAccounts()
            .then(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
    }

    handleResponse(response) {
        this.setState({ accountList: response.data.data })
    }

    handleError(error) {
        console.log("hesaplar çekilirken hata oluştu");
    }

    handleCancelAccount(account){
        console.log(account);

        AccountService.cancelAccount(account)
            .then(response => this.handleCancelResponse(response))
            .catch(error => this.handleCancelError(error))
    }

    handleCancelResponse(response) {
        this.componentDidMount();
    }

    handleCancelError(error) {
        console.log("hesaplar iptal edilirken hata oluştu");
    }

    render() {

        return (
            <div className="row col-md-6 offset-md-3">
                <PageTitle title="Hesaplar"></PageTitle>

                {this.state.accountList.map((account, i) => (

                    <div className="col-lg-4" key={i}>
                        <div className="card mb-4 shadow-sm">
                            <h6>{account.ibanNo}</h6>
                            <h6>{account.currentBalance} {account.currencyType}</h6>

                            <button onClick={() => this.handleCancelAccount(account)}>Hesabı İptal Et</button>
                        </div>
                    </div>
                ))}


            </div>
        );
    }
}

export default AccountListPage;