import React from 'react'

import './home.css'

export const Login = ({ history }) => {


    const handleLogin = () => {
        history.replace('/')
    }

    return (
        <div>
            <h1>Login</h1>
            <button className='btn btn-info bt' onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
