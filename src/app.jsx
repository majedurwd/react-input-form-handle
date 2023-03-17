import React from "react";
import classes from "./app.module.css";

// import Inputs from "./components/inputs"
// import UnControlledForm from "./components/forms/uncontrol-form"
// import ControlledForm from "./components/forms/control-form";
// import SplitForm from "./components/split-form";
import SignupForm from "./components/signup-form";

class App extends React.Component {
    state = {
        users: []
    }

    createUser = user => {
        user.id = new Date().getTime().toString()
        this.setState({
            users: [...this.state.users, user]
        })
    }

    render() {
        return (
            <div className={classes.wrapper}>
                <div className="container">
                    <h2 className={classes.heading}>Working With Forms in React</h2>
                    {/* <Inputs /> */}
                    {/* <UnControlledForm /> */}
                    {/* <ControlledForm /> */}
                    {/* <SplitForm /> */}
                    <SignupForm createUser={this.createUser} />
                    <div>
                        <h3>All Registered User</h3>
                        <ul className="list-group">
                            {this.state.users.map(user => (
                                <li key={user.id} className="list-group-item">
                                    {user.name} - {user.email}
                                </li>
                            ))}
                        </ul>
                    </div>
    
                </div>
            </div>
        );
    }
}

export default App