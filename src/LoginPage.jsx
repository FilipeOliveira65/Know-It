import React from 'react';
import './LoginPage.css'
import Logo from './components/logo';
import StartButton from './components/startButton';

function LoginPage() {
    return (
        <div className="container">
            <Logo/>

            {/* <input type="text" id='userName'/> */}

            <StartButton to='/teste'/>
        </div>
    )
}

export default LoginPage