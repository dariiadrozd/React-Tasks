import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios';

function Task53() {

    const [changeInp, setChangeInp] = useState('')

    function changeStateInput(e) {
        setChangeInp(e.target.value)
    }

    useEffect(() => {
        // changeStateInput()
        console.log(changeInp);
    },[changeInp])


    return (
        <>
            <h1>Задача 53</h1>

            <p>Форма ввода с использованием useState и useEffect: Создайте компонент React,
                который содержит форму с полем ввода. Используйте хук useState для хранения значения введенного текста и хук useEffect для отслеживания изменений этого значения. При каждом изменении значения в поле ввода, выводить его в консоль с помощью useEffect.</p>

<input onChange={setChangeInp} type="text" />

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task53