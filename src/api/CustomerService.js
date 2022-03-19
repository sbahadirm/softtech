import axios from "axios";

class CustomerService{

    findAllCustomers(){

        const url = "/api/v1/customers"

        return axios.get(url);
    }

   
}

export default new CustomerService();