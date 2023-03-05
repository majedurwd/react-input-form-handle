import React from "react";

class ControlledForm extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
    };

    handleChangle = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({name: "", email: "", password: ""})
    };

    render() {
        const {name, email, password} = this.state
        return (
            <div className="controlform">
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="form-control my-2"
                        type="text"
                        name="name"
                        placeholder="Majedur"
                        value={name}
                        onChange={this.handleChangle}
                    />
                    <input
                        className="form-control my-2"
                        type="email"
                        name="email"
                        placeholder="majedur@test.com"
                        value={email}
                        onChange={this.handleChangle}
                    />
                    <input
                        className="form-control my-2"
                        type="password"
                        name="password"
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

export default ControlledForm;
