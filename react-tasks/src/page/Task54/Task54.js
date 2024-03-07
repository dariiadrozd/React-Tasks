import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios';

function Task54() {

    const [num, setNum] = useState(0);


    useEffect(() => {
        setInterval(() => setNum(num + 1), 1000)
    }, [num])


    return (
        <>
            <h1>Задача 54</h1>

            <p>Счетчик с использованием useState и useEffect: Создайте компонент счетчика, который увеличивает значение счетчика на 1 каждую секунду с использованием useEffect.</p>

            <h1>{num}</h1>
            

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task54