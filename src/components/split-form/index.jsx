import React from "react";
import Form from "./form";

class SplitForm extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
    };

    handleChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({ name: "", email: "", password: "" });
    };

    render() {
        return (
            <div className="controlform">
                < Form
                    values={this.state}
                    handleChanges={this.handleChanges}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default SplitForm;
