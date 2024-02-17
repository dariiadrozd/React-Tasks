import { Link } from "react-router-dom"
import { useState } from "react"

function Task42() {

    const [flag, setFlag] = useState('')
    const [result, setResult] = useState(null)

    function changeInp(e) {
        setFlag(e.target.value)
    }

    function clickButton() {
        try {
            const count = eval(flag)
            setResult(count)
        } catch (error) {
            setResult('error')
        }
    }

    return (
        <>
            <h1>Задача 42</h1>

            <p>сделайте инпут в который вводится математическое выражение
                по клику на кнопку посчитать результат мат выражения (eval()) и отобразить  результат в h1</p>

            <input type="text" onChange={changeInp} />
            <button onClick={clickButton}>посчитать</button>
            <h1>result:{result}</h1>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task42