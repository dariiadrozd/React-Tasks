import { Link } from "react-router-dom"
import { useState } from "react"

function Task46() {

    const [text, setText] = useState(false)

    function clickButton() {
        setText(!text)
    }


    return (
        <>
            <h1>Задача 46</h1>

            <p>Отображение текста с использованием useState: Создайте компонент, который предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать" отображается текст, а при нажатии на "Скрыть" текст скрывается.</p>


            <button onClick={clickButton}>показать</button>
            <button onClick={clickButton}>скрыть</button>

            {text ? <p>привет</p> : null}
            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task46