import React from "react";
import { Form } from "react-bootstrap";

class Combobox extends React.Component {

    render() {

        return (
            <Form.Select name={this.props.fieldName}>

                {!this.props.notNull ? <option value={null}>Seçiniz..</option> : ""}

                {this.props.items.map(item => {
                    return <option key={item.id} value={item.id} >{item.name}</option>
                })}
                
            </Form.Select>
        )
    }
}

export default Combobox;