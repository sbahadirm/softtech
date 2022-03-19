import React from "react";
import CreditActivityService from "../../api/CreditActivityService";
import PageTitle from "../gen/PageTitle";

class CreditActivityListPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            accountActivityList: [],
            startDate: "",
            endDate: ""
        }

        this.handlerChange = this.handlerChange.bind(this);
    }

    componentDidMount() {
        this.getAccountActivityList();
    }

    getAccountActivityList() {

        CreditActivityService.findAllActivities(152, "2022-01-01", "2022-12-31")
            .then(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
    }

    handleResponse(response) {
        this.setState({ accountActivityList: response.data.data })
    }

    handleError(error) {
        console.log("hesaplar çekilirken hata oluştu");
    }

    handleSearch(){
        CreditActivityService.findAllActivities(152, this.state.startDate, this.state.endDate)
            .then(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
    }

    handlerChange(event){
        
        this.setState({[event.target.name]: event.target.value})

        console.log(this.state)
    }

    render() {

        return (
            <div className="row col-md-6 offset-md-3">
                <PageTitle title="Hesap Aktiviteleri"></PageTitle>

                <label htmlFor="inputStartDate" className="sr-only">İlk Tarih</label>
                <input
                    type="date"
                    id="inputStartDate"
                    className="form-control"
                    placeholder="İlk Tarih"
                    required=""
                    autoFocus=""
                    value={this.state.startDate}
                    name="startDate"
                    onChange={this.handlerChange}
                    />

                <label htmlFor="inputEndDate" className="sr-only">Son Tarih</label>
                <input
                    type="date"
                    id="inputEndDate"
                    className="form-control"
                    placeholder="Son Tarih"
                    required=""
                    autoFocus=""
                    value={this.state.endDate}
                    name="endDate"
                    onChange={this.handlerChange}

                />

                <button onClick={() => this.handleSearch()}>Arama</button>


                {this.state.accountActivityList.map((accountActivity, i) => (

                    <div className="col-lg-4" key={i}>
                        <div className="card mb-4 shadow-sm">
                            <h6>{accountActivity.crdCreditCardId}</h6>
                            <h6>{accountActivity.amount}</h6>
                            <h6>{accountActivity.transactionDate} </h6>
                            <h6>{accountActivity.description} </h6>
                            <h6>{accountActivity.cardActivityType} </h6>

                        </div>
                    </div>
                ))}


            </div>
        );
    }
}

export default CreditActivityListPage;