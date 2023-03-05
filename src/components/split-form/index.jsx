import React from "react";
import PropTypes from "prop-types"

const TextInput = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input
            className="form-control my-2"
            type={props.type}
            name={props.name}
            id={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    </div>
)

TextInput.protoType = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

TextInput.defaultProps = {
    type: "text",
    placeholder: "",
    label: "",
}

class SplitForm extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
    };

    handleChangle = (event) => {
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
        const { name, email, password } = this.state;
        return (
            <div className="controlform">
                <form onSubmit={this.handleSubmit}>
                    <TextInput
                        name="name"
                        label="Enter Name"
                        placeholder="Majedur Rhaman"
                        value={name}
                        onChange={this.handleChangle}
                    />
                    <TextInput
                        name="email"
                        type="email"
                        label="Enter Email"
                        placeholder="majedur@demo.com"
                        value={email}
                        onChange={this.handleChangle}
                    />
                    <TextInput
                        name="password"
                        type="password"
                        label="Enter Password"
                        placeholder="******"
                        value={password}
                        onChange={this.handleChangle}
                    />
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default SplitForm;
