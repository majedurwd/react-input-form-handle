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

export default TextInput
