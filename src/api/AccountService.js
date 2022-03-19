import axios from "axios";

class AccountService{

    findAllAccounts(){

        const url = "/api/v1/accounts"

        return axios.get(url);
    }

    saveAccount(newAccount){

        const url = "/api/v1/accounts"

        return axios.post(url, newAccount);
    }

    cancelAccount(account){

        const url = "/api/v1/accounts/cancel/" + account.id;

        return axios.patch(url, account.id);

    }
}

export default new AccountService();