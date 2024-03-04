import { Link } from "react-router-dom"
import { useState, useEffect, useRef, useMemo } from "react"

function Task72() {

    const [str, setStr] = useState('')

    function keepString(e) {
        setStr(e.target.value)
    }

    const reverseString = useMemo(() => {
        return str.split('').reduce().join('')
    })

    return (
        <>
            <h1>Задача 72</h1>

            <p>Напишите программу, которая принимает строку от пользователя и выводит ее в обратном порядке. Используй хук useState для хранения строки и хук useMemo для кэширования результата.</p>

            <input onChange={keepString}></input>
            <h1>{reverseString}</h1>
            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task72