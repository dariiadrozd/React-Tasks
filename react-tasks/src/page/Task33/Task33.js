import { Link } from "react-router-dom"
import { useState } from "react"

function Task33() {
    const [flage, setFlag] = useState(false)
    // const [word, setWord] = useState('')

    // function clickButton() {
    //     if (!flage) {
    //         setWord('Hi')
    //         setFlag(false)
    //     } else {
    //         setWord('')
    //         setFlag(true)
    //     }
    // }
    function clickButton() {
        if (flage === true) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }
    return (
        <>
            <h1>Задача 33</h1>

            <p> есть кнопка с названием ,,поздороваться,,. по клику на кнопку твоя задача отобразить в h1 ,,привет,,. при повторном клике на кнопку ,,поздороваться,, убирать ,,привет,, из h1 </p>

            <h1>{flage ? 'hi' : ''}</h1>

            <button onClick={clickButton}>поздороваться</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task33