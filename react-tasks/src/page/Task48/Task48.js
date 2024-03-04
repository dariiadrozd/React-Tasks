import { Link } from "react-router-dom"
import { useState } from "react"
// import axios from 'axios';

function Task48() {

    const [array, setArray] = useState(['read', 'sleep', 'play', 'run']);

    const [inpVal, setInpVal] = useState('')

    function changeInp(e) {
        setInpVal(e.target.value)
    }

    function addTask() {
        setArray([...array, inpVal])
    }

    function removeTask(e) {
        const arrayWithoutActive = array.filter((el) => el != e.target.id);
        setArray(arrayWithoutActive)
    }

    return (
        <>
            <h1>Задача 48</h1>

            <p>Список задач с использованием useState: Создайте компонент списка задач, который позволяет пользователю добавлять и удалять задачи из списка.</p>

            <div>{array.map((el) => <div><p>{el} <button id={el} onClick={removeTask}>delete</button></p></div>)}</div>
            <input onChange={changeInp} type="text" />
            <button onClick={addTask}>Add</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task48