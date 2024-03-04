import { Link } from "react-router-dom"
import { useState, useEffect, useRef, useMemo, useCallback } from "react"

function Task75() {

    const [arr, setArr] = useState(['One', 'Two', 'Three'])

    const changeBtn = useCallback(function (e) {
        setArr(arr.filter((el) => el != e.target.id))
    },[arr])


    return (
        <>
            <h1>Задача 75</h1>

            <p>Создайте компонент, который отображает список элементов с кнопками
                "Удалить". При нажатии на кнопку элемент должен быть удален из списка.
                Используйте useCallback, чтобы оптимизировать функцию удаления элемента.</p>


            <ul>
                {arr.map((el) => <li>{el} <button id={el} onClick={changeBtn}>delete</button></li>)}
            </ul>
      


            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task75