import { Link } from "react-router-dom"
import { useState } from "react"



function Task24() {

    const [flage, setFlage] = useState(false)
    const [inp, setInp] = useState('')
    function changeInp(event) {
        setInp(event.target.value)
    }

    function sayHi() {
        setFlage(true)
    }

    return (
        <>
            <h1>Задача:24</h1>
            <p>Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в
                поле и нажатии на кнопку, компонент должен отображать приветственное
                сообщение с именем, введенным пользователем</p>

            <input onChange={changeInp}></input>
            <button onClick={sayHi}>Привет</button>
            <p>Result:{flage ? 'привет ' + inp : null}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task24