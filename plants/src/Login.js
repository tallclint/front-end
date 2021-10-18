import React, { useState } from 'react'
import * as yup from 'yup'


export default function Login() {
    
    const initialLoginValues = {
        username: "",
        password: ""
    }
    const [loginValues, setLoginValues] = useState(initialLoginValues)
    
    
    const validate = () => {
    
    }
    
    const change = e => {
        
    
    } 
    return (
        <>
            <h1>Login</h1>
            <form id="login-form">
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
            </form>
        </>
    )
}
