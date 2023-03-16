import React from "react";
import PropTypes from "prop-types"

import TextInput from "./text-input"

const Form = ({ values, agreement, handleChange, handleAgreement, handleSubmit, errors }) => {
    return (  
        <form onSubmit={handleSubmit}>
            <TextInput
                name="name"
                label="Name"
                placeholder="Mr. Majed"
                value={values.name}
                error={errors.name}
                onChange={handleChange}
            />
            <TextInput
                name="email"
                type="email"
                label="Email"
                placeholder="majed@example.com"
                value={values.email}
                error={errors.email}
                onChange={handleChange}
            />
            <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="******"
                value={values.password}
                error={errors.password}
                onChange={handleChange}
            />
            <TextInput
                name="birthDate"
                type="date"
                label="BirthDate"
                value={values.birthDate}
                error={errors.birthDate}
                onChange={handleChange}
            />
            <div className="form-group mb-3">
                <label className="me-3">
                    <input
                        className="form-group me-2"
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                    />
                    Male
                </label>
                <label className="me-3">
                    <input
                        className="form-group me-2"
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleChange}
                    />
                    Female
                </label>
                <label className="me-3">
                    <input
                        className="form-group me-2"
                        type="radio"
                        name="gender"
                        value="Other"
                        onChange={handleChange}
                    />
                    Other
                </label>
                {errors.gender && <div className="invalid-feedback">{ errors.gender }</div>}
            </div>
            <div className="form-group">
                <label>
                    <input
                        className="form-group me-2"
                        type="checkbox"
                        name="agreement"
                        checked={agreement}
                        onChange={handleAgreement}
                    />
                    Agree for all terms ans condition
                </label>
            </div>
            <button className="btn btn-primary my-3" disabled={!agreement} type="submit">
                Create User
            </button>
        </form>
    )
}

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form

