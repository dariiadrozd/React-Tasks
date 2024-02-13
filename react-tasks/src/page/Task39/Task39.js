import { Link } from "react-router-dom"
import { useState } from "react"

function Task39() {

    const [flag, setFlag] = useState({ input1: '', input2: '' });

    function changeInp(e) {
        setFlag({
            ...flag,
            [e.target.name]: e.target.value
        })
    }

    function clickButton() {
        console.log(flag.input1, flag.input2);
    }



    return (
        <>
            <h1>Задача 39</h1>

            <p> получить значение из 2 инпутов и отобразить это в консоль по клику на кнопку (одним useState) </p>

            <h1></h1>

            <input type="text" name="input2" onChange={changeInp} />
            <input type="text" name="input1" onChange={changeInp} />

            <button onClick={clickButton}>show result</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task39