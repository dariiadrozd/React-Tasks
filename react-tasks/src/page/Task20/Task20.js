import { Link } from "react-router-dom"
import { useState } from "react"



function Task20() {

    const [inp, setInp] = useState('');
    
    function changeStateInput(event) {
        setInp(event.target.value)
    }

    return (
        <>
            <h1>Задача:20</h1>
            <p>Создайте компонент с полем ввода и параграфом. При вводе данных в input
                отображать вводимое значение в параграф текущей страницы</p>


            <input onChange={changeStateInput}></input>
            <p>Result:{inp}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task20