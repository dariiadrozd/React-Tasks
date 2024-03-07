import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios';

function Task55() {

    const [val, setVal] = useState('');

async function getInfo(){
    const data = await axios.get('https://api.ipify.org/?format=json')
    setVal(data.data.ip)
}

    useEffect(() => {
       getInfo()
    }, [])


    return (
        <>
            <h1>Задача 55</h1>

            <p>Запрос к API с использованием useState и useEffect: Создайте компонент, который выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные данные в заголовок.</p>

            <h1>{val}</h1>
            

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task55