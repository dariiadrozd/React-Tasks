import { Link } from "react-router-dom"
import { useState } from "react"



function Task25() {

    const [flage, setFlage] = useState('')

    function clickButton() {
        if (flage) {
            setFlage(false)
        } else {
            setFlage(true)
        }
    }

    return (
        <>
            <h1>Задача:25</h1>
            <p>Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку
                текст должен появляться или исчезать</p>

                <button onClick={clickButton}>показать /скрыть текст</button>
            <p>{flage ? 'скрой меня' : null}</p>
            

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task25