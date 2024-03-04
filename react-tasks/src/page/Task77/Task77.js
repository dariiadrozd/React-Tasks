import { Link } from "react-router-dom"
import { useState, useEffect, useRef, useMemo, useCallback } from "react"

function Task77() {

    const [inp, setInp] = useState('')

    const [str, setStr] = useState(['hi', 'darya', 'lazarski', 'drozd', 'diamond future'])

    function deleteStr(e) {
        setStr(str.filter((el) => el != e.target.id))
    }

    function changeInp(e) {
        setInp(e.target.value)
    }

    function createStr() {
        setStr([...str,inp])
    }

    return (
        <>
            <h1>Задача 77</h1>

            <p>Создайте компонент, который позволяет пользователю добавлять и удалять
                элементы из списка. Используйте useCallback, чтобы оптимизировать функции добавления и удаления элементов.</p>


            <input onChange={changeInp} type="text" />
            <button onClick={createStr}></button>
            {str.map((el) => <ul><li><button id={el} onClick={deleteStr}>delete</button></li></ul>)}

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task77