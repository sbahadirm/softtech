import React from "react";
import CustomerService from "../../../../api/CustomerService";
import Combobox from "../Combobox";

class CustomerCombobox extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount(){

        CustomerService.findAllCustomers()
            .then(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
    }

    handleResponse(response){
        this.setState({items: response.data.data})
    }

    handleError(error){
        console.log(error.data)
    }

    render(){
        return(
            <Combobox
                fieldName = {this.props.fieldName}
                notNull= {this.props.notNull}
                items = {this.state.items}
            ></Combobox>
        )
    }
}

export default CustomerCombobox;