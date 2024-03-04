import { Link } from "react-router-dom"
import { useState } from "react"
// import axios from 'axios';

function Task50() {

    const [size, setSize] = useState('20')


    return (
        <>
            <h1>Задача 50</h1>

            <p>Изменение размера шрифта с использованием useState: Создайте компонент,
                который предоставляет две кнопки: "Увеличить" и "Уменьшить". При нажатии на
                эти кнопки значение font-size изменяется соответствующим образом на +/– 1px.</p>

            <h1 style={{fontSize: size}}>randome text</h1>
            <button onClick={()=> setSize(+size +1)}>Увеличить</button>
            <button onClick={()=> setSize(+size -1)}>Уменьшить</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task50