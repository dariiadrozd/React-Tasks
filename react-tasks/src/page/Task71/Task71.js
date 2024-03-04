import { Link } from "react-router-dom"
import { useState } from "react"
// import axios from 'axios';

function Task71() {
    const [inp, setInp] = useState(0)

 function changeVal(e){
    setInp(e.target.value)
 }
    return (
        <>
            <h1>Задача 71</h1>

            <p>Список задач с использованием useState: Создайте компонент списка задач, который позволяет пользователю добавлять и удалять задачи из списка.</p>


            <input onChange={changeInp} type="text" />
            

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task71