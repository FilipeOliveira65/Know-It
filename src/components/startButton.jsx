import {useNavigate } from 'react-router-dom';

function StartButton({to}) {
    const navigate = useNavigate();

    const handleClick = () => {
        if(to) {
            console.log(`Going to: ${to}`)
            navigate(to)
        } else (
            console.warn("Oops, we got an error.")
        )
    }

    return (
        <>
            <button onClick={() => {handleClick()}} className='startButton'>Iniciar</button>
        </>
    )
}

export default StartButton