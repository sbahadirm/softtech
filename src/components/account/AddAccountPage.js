import React from "react";
import AccountService from "../../api/AccountService";
import AccountTypeCombobox from "../gen/combobox/accounttype/AccountTypeCombobox";
import CurrencyTypeCombobox from "../gen/combobox/currencytype/CurrencyTypeCombobox";
import PageTitle from "../gen/PageTitle";
import serialize from 'form-serialize';
import CustomerCombobox from "../gen/combobox/customer/CustomerCombobox";


class AccountAddPage extends React.Component {

    handleFormSubmit = (e) => {
        e.preventDefault();
        const newAccount = serialize(e.target, { hash: true })

        this.save(newAccount);

    }

    save(newAccount){

        AccountService.saveAccount(newAccount)
            .then(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
    }

    
    handleResponse(response) {
        
        console.log(response);
    }

    handleError(error) {
        console.log(error.data);
    }

    render(){
        return(
            <div className="container col-md-6 offset-md-3">

            <PageTitle title="Ürün Ekle"></PageTitle>

            <form id="product-form" className="mt-5" onSubmit={this.handleFormSubmit}>

                <div className="form-row">

                    
                    <div className="form-group">
                        <label htmlFor="inputName">Hesap Tipi</label>
                        <AccountTypeCombobox
                            fieldName="accountType"
                        ></AccountTypeCombobox>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputName">Para Birimi</label>
                     
                            <CurrencyTypeCombobox
                                fieldName="currencyType"
                                notNull={true}
                            ></CurrencyTypeCombobox>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputName">Müşteriler</label>
                     
                            <CustomerCombobox
                                fieldName="currencyType"
                                notNull={true}
                            ></CustomerCombobox>
                    </div>
                   
                    <div className="form-group ">
                        <label htmlFor="inputRating">Fiyat</label>
                        <input
                            className="form-control "

                            name="currentBalance" />
                    </div>
                    
                </div>

                <input type="submit" className="btn btn-danger btn-block" value="Kaydet" />
            </form>
        </div>
        );
    }
}

export default AccountAddPage;
