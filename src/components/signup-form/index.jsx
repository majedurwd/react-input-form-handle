import React from "react";

import Form from "./form"


let initValues = {
    name: "",
    email: "",
    password: "",
    birthDate: "",
    gender: "",
}

class SignupForm extends React.Component {

    state = {
        values: initValues,
        agreement: false,
        errors: {}
    }

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    }

    handleAgreement = event => {
        this.setState({
            agreement: event.target.checked
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { errors, isValid } = this.validate()
        if (isValid) {
            console.log(this.state.values);
            event.target.reset()
            this.setState({ values: initValues, agreement: false, errors: {} })
        } else {
            this.setState({errors})
        }
    }

    validate = () => {
        const errors = {}
        const { values: { name, email, password, birthDate, gender }, agreement } = this.state
        if (!name) {
            errors.name = "Please Enter Your Name"
        }

        if (!email) {
            errors.email = "Please Enter Your Email"
        }

        if (!password) {
            errors.password = "Please Enter Your Password"
        }

        if (!birthDate) {
            errors.birthDate = "Please Enter Your Birth Date"
        }

        if (!gender) {
            errors.gender = "Please Enter Your Gender"
        }

        return {
            errors,
            agreement,
            isValid: Object.keys(errors).length === 0
        }
    }



    render() {
        return (
            <div>
                <h1>Sign-up Form</h1>
                <Form
                    values={this.state.values}
                    agreement={this.state.agreement}
                    errors={this.state.errors}
                    handleChange={this.handleChange}
                    handleAgreement={this.handleAgreement}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default SignupForm