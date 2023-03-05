import React from "react";
import PropTypes from "prop-types"
import TextInput from "./text-input"



const Form = props => (
    <form onSubmit={props.handleSubmit}>
        <TextInput
            name="name"
            label="Enter Name"
            placeholder="Majedur Rhaman"
            value={props.values.name}
            onChange={props.handleChanges}
        />
        <TextInput
            name="email"
            type="email"
            label="Enter Email"
            placeholder="majedur@demo.com"
            value={props.values.email}
            onChange={props.handleChanges}
        />
        <TextInput
            name="password"
            type="password"
            label="Enter Password"
            placeholder="******"
            value={props.values.password}
            onChange={props.handleChanges}
        />
        <button type="submit" className="btn btn-primary">
            Submit
        </button>
    </form>
)

Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChanges: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default Form