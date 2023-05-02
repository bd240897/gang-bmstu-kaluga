import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = event => {
        setEmail(event.target.value);
    };

    const handlePassword = event => {
        setPassword(event.target.value);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <h3>Login</h3>
            </div>
            <div>
                <input
                    value={email}
                    onChange={handleEmail}
                    placeholder="Type your e-mail"
                />
            </div>
            <div>
                <input
                    type="password"
                    value={password}
                    onChange={handlePassword}
                    placeholder="Type your password"
                />
            </div>
            <button>
                Submit
            </button>
            <div style={{ fontSize: '12px' }}>
                Dont't have an account?
                {' '}
                Register <span style={{ color: '#293462', fontWeight: 'bold' }}>here</span>
            </div>
        </div>
    );
};

export default Login;
