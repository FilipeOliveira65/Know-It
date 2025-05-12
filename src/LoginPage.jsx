import React from 'react';
import './LoginPage.css'
import Logo from './components/logo';

function LoginPage() {
    return (
        <div id="container">
            <Logo/>

            <input type="text" id='userName'/>

            <button onClick={() => navigate('/login')} id='startButton'>Iniciar</button>
        </div>
    )
}

export default LoginPage