import { Link } from "react-router-dom"
import { useState } from "react"

function Task40() {

    const words = ['one', 'two', 'Darya', 'Drozd', 'Ruslanovna'];

    const [randWord, setRandWord] = useState('');

    function clickButton() {
        const result = Math.floor(Math.random() * words.length)
        setRandWord(words[result])
    }


    return (
        <>
            <h1>Задача 40</h1>

            <p> Напишите компонент, который будет показывать случайную строку в h1 по нажатии на кнопку. Слова хранятся в массиве </p>

            <h1>{randWord}</h1>
            <button onClick={clickButton}>show random word</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task40