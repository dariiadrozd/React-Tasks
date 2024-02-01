import { Link } from "react-router-dom"
import { useState } from "react"



function Task21() {

    const [inp, setInp] = useState('')

    function changeStateInput(event) {
        setInp(event.target.value)
    }

    function checkPalindrom() {
        if (inp === inp.split("").reverse().join("")) {
            console.log(true)
        } else {
            console.log(false);
        }
    }

    return (
        <>
            <h1>Задача:21</h1>
            <p>Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input и проверить вводимую строку на палиндром. Результат
                отображать в консоль</p>


            <input onChange={changeStateInput}></input>
            <button onClick={checkPalindrom}>click me</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task21