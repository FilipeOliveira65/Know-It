import {useNavigate } from 'react-router-dom';

function StartButton() {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate('/login')} id='startButton'>Iniciar</button>
        </>
    )
}

export default StartButton