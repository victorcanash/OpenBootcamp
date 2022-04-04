import React from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

    const navigate= useNavigate();

    return (
        <div>
            <h1>Login Page</h1>
            <div>
                <button className="btn btn-primary" onClick={ () => navigate('/register') }>
                    Register
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
