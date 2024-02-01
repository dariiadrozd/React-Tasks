import { Link } from "react-router-dom"
import { useState } from "react"



function Task23() {

    const [input1, setInp1] = useState('')
    const [input2, setInp2] = useState('')

    function changeValue1(event) {
        setInp1(event.target.value)
    }
    function changeValue2(event) {
        setInp2(event.target.value)
    }

    function compareInp() {
        console.log(input1 === input2);
    }

    return (
        <>
            <h1>Задача:23</h1>
            <p>Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку собрать
                данные из двух input (2 разных state). Сравнить значения 2 input на равенство.
                Результат отображать в консоль</p>

            <input onChange={changeValue1}></input>
            <input onChange={changeValue2}></input>
            <button onClick={compareInp}></button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task23