import React, { useState } from 'react'
import * as yup from 'yup'
import { yupLoginSchema as schema } from './yupLoginSchema'


export default function Login() {
    
    const initialLoginValues = {
        username: "",
        password: "",
    }
    const [loginValues, setLoginValues] = useState(initialLoginValues)
    
    // VALIDATION //
    const validate = (credentials) => {
        // Validate / authenticate credentials onSubmit
    }
    // ON CHANGE //
    const change = e => {
        const { name, value } = e.target
        // Update state with the changes
        setLoginValues({ ...loginValues, [name]: value})
    } 
    // ON SUBMIT //
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
