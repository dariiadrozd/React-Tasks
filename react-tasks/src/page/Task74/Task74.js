import { Link } from "react-router-dom"
import { useState, useEffect, useRef, useMemo } from "react"

function Task73() {

    const [num, setNum] = useState(0)

    function changeBtn() {
        setNum(num + 1)
    }

    return (
        <>
            <h1>Задача 74</h1>

            <p>Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку
                счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
                оптимизировать обработчик клика на кнопке.</p>

            <button onClick={changeBtn}>click</button>
            <p>{num}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task73