import { Link } from "react-router-dom"
import { useState } from "react"

function Task34() {
    const [flag, setFlag] = useState(true);


    function clickButton() {
        if (flag) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }

    return (
        <>
            <h1>Задача 34</h1>
            <p> есть кнопка с названием ,,добавить цвет,,. по клику на кнопку твоя задача поменять цвет шрифта h1. при повторном клике цвет вернуть в первоначальное состояние  </p>

            <h1 style={{ color: (flag ? 'red' : 'green') }}>Привет</h1>
            <button onClick={clickButton}>Change color</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task34