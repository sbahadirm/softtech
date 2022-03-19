import React from "react";
import Combobox from "../Combobox";

class AccountTypeCombobox extends React.Component{

    render(){
        return(
            <Combobox
                fieldName = {this.props.fieldName}
                notNull= {true}
                items = {[{id: "DRAWING", name: "Vadesiz"}, {id: "DEPOSIT", name: "Vadeli"}]}
            ></Combobox>
        )
    }
}

export default AccountTypeCombobox;