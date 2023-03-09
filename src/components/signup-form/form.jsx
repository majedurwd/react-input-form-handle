import React from "react";

import TextInput from "./text-input"

const Form = ({values, handleChange}) => (
    <form>
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

    </form>
)