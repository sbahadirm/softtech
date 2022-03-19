import axios from "axios";

class AuthenticationService{

    // {
    //     "identityNo": 11111111111,
    //     "password": "123"
    //   }
    login(identityNo, password){

        const data = {
            identityNo: identityNo,
            password: password
        }

        const url = "/auth/login"

        return axios.post(url, data);
    }

}

export default new AuthenticationService();