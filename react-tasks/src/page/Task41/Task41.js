import { Link } from "react-router-dom"
import { useState } from "react"

function Task41() {

    const [flag, setFlag] = useState('')

    function aboutClick() {
        setFlag('о нас')
    }

    function priceClick() {
        setFlag('цена')
    }

    function homePageClick() {
        setFlag('главная страница')
    }

    return (
        <>
            <h1>Задача 41</h1>

            <p>у вас есть 3 кнопки: о нас, цена, главная страница
                h1  содержит текст активной(нажатой) кнопки
                (если нажали на ,,цена,, отображать слово ,,цена,, в h1) </p>

            <h1>{flag}</h1>

            <button onClick={aboutClick}>о нас</button>
            <button onClick={priceClick}>цена</button>
            <button onClick={homePageClick}>главная страница</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task41