import { Link } from "react-router-dom"
import { useState } from "react"

function Task45() {

    const [inp, inpValue] = useState('')

    function getValue(event) {
        inpValue(event.target.value)
    }


    return (
        <>
            <h1>Задача 45</h1>

            <p>Форма с использованием useState: Создайте компонент текстового поля, который позволяет пользователю вводить текст и отображает его в реальном времени.</p>
            <h1>{inp}</h1>
            <input onChange={getValue}></input>
            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task45