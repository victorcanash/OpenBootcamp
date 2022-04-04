import React from 'react';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {

    const navigate= useNavigate();

    return (
        <div>
            <h1>Register Page</h1>
            <div>
                <button className="btn btn-primary" onClick={ () => navigate('/login') }>
                    Login
                </button>
            </div>
        </div>
    );
}

export default RegisterPage;
