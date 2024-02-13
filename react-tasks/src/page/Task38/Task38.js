import { Link } from "react-router-dom"
import { useState } from "react"

function Task38() {

    const [flag, setFlag] = useState('');

    function changeH1(e) {
        setFlag(e.target.value)
    }

    return (
        <>
            <h1>Задача 38</h1>

            <p> отображай в h1 каждое введенное значение из input </p>

            <h1>{flag}</h1>

            <input type="text" onChange={changeH1} />

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task38