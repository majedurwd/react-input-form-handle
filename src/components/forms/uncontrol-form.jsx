import React from "react";

class UncontrolledForm extends React.Component {

    handleSubmit = event => {
        event.preventDefault()
        const data = {}
        data.name = event.target.name.value
        data.email = event.target.email.value
        data.password = event.target.password.value
        console.log(data)
        event.target.reset()
    }

    render() {
        return (
            <div className="uncontrolform">
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="form-control my-2"
                        type="text"
                        name="name"
                        placeholder="Majedur"
                    />
                    <input
                        className="form-control my-2"
                        type="email"
                        name="email"
                        placeholder="majedur@test.com"
                    />
                    <input
                        className="form-control my-2"
                        type="password"
                        name="password"
                        placeholder="******"
                    />
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default UncontrolledForm