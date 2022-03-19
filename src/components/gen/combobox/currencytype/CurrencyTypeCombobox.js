import React from "react";
import Combobox from "../Combobox";

class CurrencyTypeCombobox extends React.Component{

    render(){
        return(
            <Combobox
                fieldName = {this.props.fieldName}
                notNull= {this.props.notNull}
                items = {[
                            {id: "TL", name: "TL"}, 
                            {id: "EURO", name: "Euro"},
                            {id: "DOLLAR", name: "Dolar"}
                        ]}
            ></Combobox>
        )
    }
}

export default CurrencyTypeCombobox;