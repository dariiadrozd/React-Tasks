import { Link } from "react-router-dom"
import { useState } from "react"

function Task37() {

    const [num, setNum] = useState(0);

    function clickButton() {
        setNum(num + 1)
    }

    return (
        <>
            <h1>Задача 37</h1>
            <h1>{num}</h1>
            <p> Создай компонент, который будет отслеживать количество кликов по кнопке и отображать это количество</p>
            <button onClick={clickButton}>click me</button>


            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task37