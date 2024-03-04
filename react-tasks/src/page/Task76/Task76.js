import { Link } from "react-router-dom"
import { useState, useEffect, useRef, useMemo, useCallback } from "react"

function Task76() {

    const [color, setColor] = useState()

    function chooseColor(e) {
        setColor(e.target.textContent)
    }


    return (
        <>
            <h1>Задача 76</h1>

            <p>Создайте компонент, который предоставляет пользователю выбор цвета из списка. При выборе цвета, компонент должен отображать выбранный цвет на странице. Используйте useCallback, чтобы оптимизировать функцию выбора
                цвета.</p>

            <h1 style={{ background: color }}>hii</h1>

            <ul>
                <li onClick={chooseColor}>red</li>
                <li onClick={chooseColor}>black</li>
                <li onClick={chooseColor}>blue</li>
            </ul>



            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task76