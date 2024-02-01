import { Link } from "react-router-dom"
import { useState } from "react"



function Task27() {

    const [inp, setInp] = useState(0)

    function numPlus() {
        setInp(inp + 1)
    }

    function numMinus(){
        setInp(inp -1 )
    }

    return (
        <>
            <h1>Задача:27</h1>
            <p>Дополните предыдущую задачу. Создайте компонент с 2 кнопками и параграфом для отображения результата счетчика (изначально счетчик равен 0). Ваша задача так реализовать функционал, чтобы при клике на кнопку +1 автоматически прибавлялась +1 к стейту счетчика, а при клике на кнопку -1, происходило вычитание значения 1</p>

            <button onClick={numPlus}>+</button>
            <button onClick={numMinus}>-</button>
            <p>Result:{inp}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task27