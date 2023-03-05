import React from "react";


class Inputs extends React.Component {

    state = {
        name: "",
        country: "",
        bio: "",
        brithDay: "",
        gender: "",
        agree: false,
        skills: []
    }
    handleChang = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleCheckBox = event => {
        this.setState({
            agree: event.target.checked
        })
    }

    handleSkillChange = event => {
        if (event.target.checked) {
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        } else {
            const skills = this.state.skills.filter(skill => skill !== event.target.value)
            console.log(skills)
            this.setState({skills})
        }
    }

    render() {
        const {name, country, bio, brithDay, agree, skills} = this.state
        return (
            <div className="form_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="form">
                                <input
                                    className="form-control my-2"
                                    type="text"
                                    name="name"
                                    value={name}
                                    placeholder="Enter your name"
                                    onChange={this.handleChang}
                                />
                                <select
                                    className="form-control my-2"
                                    name="country"
                                    value={country}
                                    onChange={this.handleChang}
                                >
                                    <option>Select Country</option>
                                    <option value="Bangladesh">
                                        Bangladesh
                                    </option>
                                    <option value="India">India</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Srilangka">Srilangka</option>
                                    <option value="China">China</option>
                                    <option value="Nepal">Nepal</option>
                                </select>
                                <textarea
                                    className="form-control my-2"
                                    name="bio"
                                    value={bio}
                                    placeholder="Tell Me About Yourself"
                                    onChange={this.handleChang}
                                ></textarea>
                                <input
                                    className="form-control my-2"
                                    type="date"
                                    name="brithDay"
                                    value={brithDay}
                                    onChange={this.handleChang}
                                />
                                <div className="gender">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        onChange={this.handleChang}
                                    />
                                    Male
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        onChange={this.handleChang}
                                    />
                                    Female
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Other"
                                        onChange={this.handleChang}
                                    />
                                    Other
                                </div>
                                <div className="check-box">
                                    <input
                                        type="checkbox"
                                        name="agree"
                                        checked={agree}
                                        onChange={this.handleCheckBox}
                                    />
                                    I agree to all the terms and conditions
                                </div>
                                <div className="skills">
                                    <h2 className="skills-title">Skills</h2>
                                    <br />
                                    <input
                                        type="checkbox"
                                        name="skill"
                                        value="Java"
                                        checked={skills.includes("Java")}
                                        onChange={this.handleSkillChange}
                                    />
                                    Java
                                    <input
                                        type="checkbox"
                                        name="skill"
                                        value="JavaScript"
                                        checked={skills.includes("JavaScript")}
                                        onChange={this.handleSkillChange}
                                    />
                                    JavaScript
                                    <input
                                        type="checkbox"
                                        name="skill"
                                        value="Python"
                                        checked={skills.includes("Python")}
                                        onChange={this.handleSkillChange}
                                    />
                                    Python
                                    <input
                                        type="checkbox"
                                        name="skill"
                                        value="GoLang"
                                        checked={skills.includes("GoLang")}
                                        onChange={this.handleSkillChange}
                                    />
                                    GoLang
                                    <input
                                        type="checkbox"
                                        name="skill"
                                        value="Ruby"
                                        checked={skills.includes("Ruby")}
                                        onChange={this.handleSkillChange}
                                    />
                                    Ruby
                                </div>
                                <button
                                    onClick={() => console.log(this.state)}
                                    className="btn btn-primary"
                                >
                                    Show Data
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inputs