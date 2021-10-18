import React, { useState } from 'react'
import * as yup from 'yup'


export default function Login() {
    
    const initialLoginValues = {
        username: "",
        password: "",
    }
    const [loginValues, setLoginValues] = useState(initialLoginValues)
    
    // YUP validation on submit //
    const validate = e => {
        
    }
    
    const change = e => {
        const { name, value } = e.target
        // Update state with the changes
        setLoginValues({ ...loginValues, [name]: value})
    } 

    const submit = e => {
        e.preventDefault()
        const loginCredentials = {
            username: loginValues.username,
            password: loginValues.password,
        }
        validate(loginCredentials)        
    }

    return (
        <>
            <h1>Login</h1>
            <form id="login-form" onSubmit={submit}>
                <label>
                    <input
                        type="text"
                        name="username"
                        value={loginValues.value}
                        onChange={change}
                        placeholder="Enter username"
                    />
                </label>
                <label>
                    <input
                        type="password"
                        name="password"
                        onChange={change}
                        placeholder="Enter password"
                    />
                </label>
                <button onClick={validate}>Login</button>
            </form>
        </>
    )
}
