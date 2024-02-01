import { Link } from "react-router-dom"
import { useState } from "react"



function Task26() {

    const [inp, setInp] = useState(0)

    function numPlus() {
        setInp(inp + 1)
    }

    return (
        <>
            <h1>Задача:26</h1>
            <p>Создайте компонент с кнопкой и параграфом для отображения результата счетчика (изначально счетчик равен 0). Ваша задача так реализовать функционал, чтобы при клике на кнопку автоматически прибавлялась +1 к стейту счетчика</p>

            <button onClick={numPlus}></button>
            <p>Result:{inp}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task26