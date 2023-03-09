import React from "react";
import PropTypes from "prop-types"

import TextInput from "./text-input"

const Form = ({ values, agreement, handleChange, handleAgreement, handleSubmit }) => {
    return (  
        <form onSubmit={handleSubmit}>
            <TextInput
                name="name"
                label="Name"
                placeholder="Mr. Majed"
                value={values.name}
                onChange={handleChange}
            />
            <TextInput
                name="email"
                type="email"
                label="Email"
                placeholder="majed@example.com"
                value={values.email}
                onChange={handleChange}
            />
            <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="******"
                value={values.password}
                onChange={handleChange}
            />
            <TextInput
                name="birthDate"
                type="date"
                label="BirthDate"
                value={values.birthDate}
                onChange={handleChange}
            />
            <div className="form-group">
                <label>
                    <input
                        className="form-control"
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                    />
                    Male
                </label>
                <label>
                    <input
                        className="form-control"
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleChange}
                    />
                    Female
                </label>
                <label>
                    <input
                        className="form-control"
                        type="radio"
                        name="gender"
                        value="Other"
                        onChange={handleChange}
                    />
                    Other
                </label>
            </div>
            <div className="form-group">
                <label>
                    <input
                        className="form-control"
                        type="checkbox"
                        name="agreement"
                        checked={agreement}
                        onChange={handleAgreement}
                    />
                </label>
            </div>
            <button className="btn primary-btn" type="submit">Create User</button>
        </form>
    )
}

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form

