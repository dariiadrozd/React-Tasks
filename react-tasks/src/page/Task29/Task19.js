import { Link } from "react-router-dom"
import { useState } from "react"



function Task29() {

    const [inp, setInp] = useState(0)

    function numPlus() {
        setInp(inp + 1)
    }

    function numMinus(){
        setInp(inp -1 )
    }

    return (
        <>
            <h1>Задача:28</h1>
            <p>Дополните предыдущую задачу. Создайте компонент, который отображает счетчик и кнопку "Сброс". При нажатии на кнопку, счетчик должен сбрасываться в ноль. Используйте useState, чтобы управлять значением счетчика.</p>

            <button onClick={numPlus}>+</button>
            <button onClick={numMinus}>-</button>
            <p>Result:{inp}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task29