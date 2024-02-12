import { Link } from "react-router-dom"
import { useState } from "react"

function Task35() {

    const [flag, setFlag] = useState(false);
    function clickButton() {
        if (!flag) {
            setFlag(true)
        } else {
            setFlag(false)
        }
    }

    return (
        <>
            <h1>Задача 35</h1>
            <p> Текст кнопки открыто меняется на закрыто по нажатию на себя </p>

            <button onClick={clickButton}>{flag ? 'open' : 'close'}</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task35