import React from "react";
import Proptypes from "prop-types"


let initValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
    birthDate: "",
}

class SignupForm extends React.Component {

    state = {
        values: initValues,
        agreement: false
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
        console.log(this.state.values);

        event.target.reset()
        this.setState({ values: initValues, agreement: false })
    }



    render() {
        return (
            <div>
                <h1>Sign-up Form</h1>

            </div>
        )
    }
}