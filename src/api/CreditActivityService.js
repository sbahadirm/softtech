import axios from "axios";

class CreditActivityService{

    findAllActivities(id, startDate, endDate){

        const url = "api/v1/credit-cards/" + id + "/activities?startDate=" 
        + startDate + "&endDate=" + endDate;

        return axios.get(url);
    }

   
}

export default new CreditActivityService();