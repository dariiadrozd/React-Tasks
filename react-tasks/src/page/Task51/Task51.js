import { Link } from "react-router-dom"
import { useState } from "react"
// import axios from 'axios';

function Task51() {

const [flag, setFlag] = useState(false)


    return (
        <>
            <h1>Задача 51</h1>

            <p>Отображение навигации с использованием useState: По нажатию на кнопку
                “бургер” отображать блок навигации из 4 параграфов.</p>

<button onClick={()=> setFlag(!flag)}>бургер</button>

{flag &&(
    <div>
        <p>paragraf 1</p>
        <p>paragraf 2</p>
        <p>paragraf 3</p>
        <p>paragraf 4</p>
        <p>paragraf 5</p>
    </div>
)}

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task51