import React from "react";
import classes from "./app.module.css";

// import Inputs from "./components/inputs"
// import UnControlledForm from "./components/forms/uncontrol-form"
// import ControlledForm from "./components/forms/control-form";
// import SplitForm from "./components/split-form";
import SignupForm from "./components/signup-form";

const App = () => {
    return (
        <div className={classes.wrapper}>
            <div className="container">
                <h2 className={classes.heading}>Working With Forms in React</h2>
                {/* <Inputs /> */}
                {/* <UnControlledForm /> */}
                {/* <ControlledForm /> */}
                {/* <SplitForm /> */}
                <SignupForm />

            </div>
        </div>
    );
}

export default App