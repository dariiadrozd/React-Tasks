import { Link } from "react-router-dom"
import { useState } from "react"



function Task22() {

    const [inp, setInp] = useState('')

    function changeValue(event) {
        setInp(event.target.value)
    }

    function checkEmail() {
        const reg = /^[\w\d]+@[\w\d\.]+$/gm;
        if (!reg.test(inp)) {
            console.log(false);
        } else {
            console.log(true);
        }
    }


    return (
        <>
            <h1>Задача:22</h1>
            <p>Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
                данные из input и проверить вводимую строку на почту. Результат отображать в
                консоль</p>

            <input onChange={changeValue}></input>
            <button onClick={checkEmail}></button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task22