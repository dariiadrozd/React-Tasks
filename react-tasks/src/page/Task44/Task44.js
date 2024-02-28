import { Link } from "react-router-dom"
import { useState } from "react"

function Task44() {

    const [value, setValue] = useState(0)

function doCount(){
    setValue(value+1)
}

function doCountMinus(){
    setValue(value - 1)
}

    return (
        <>
            <h1>Задача 44</h1>

            <p>Счетчик с использованием useState: Создай компонент React, который отображает
                числовое значение и кнопки "+1" и "-1". Используйте хук useState для управления состоянием счетчика. При нажатии на кнопки, значение счетчика должно увеличиваться или уменьшаться.</p>

<div>{value}</div>
<button onClick={doCount}>+1</button>
<button onClick={doCountMinus}>-1</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task44