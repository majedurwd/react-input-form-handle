import React from "react";
import Proptypes from "prop-types"



class SignupForm extends React.Component {

    state = {
        values: {
            name: "",
            email: "",
            password: "",
            gender: "",
            birthDate: ""
        }
    }

    render() {
        return (
            <div>
                <h1>Sign-up Form</h1>

            </div>
        )
    }
}