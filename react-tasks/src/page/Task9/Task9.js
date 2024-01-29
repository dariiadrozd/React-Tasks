import { Link } from "react-router-dom"

function Task9() {

    const arr = ['Darya', 'dROZD', 'something', 'sdfghjkllkjhfffg'];

    const res = arr.filter(el => el.length < 10)
    return (


        <>
            <h1>Задача:9</h1>
            <p>Создайте компонент, который принимает массив строк и фильтрует строки,
                оставляя только те, длина которых не превышает 10 символов.</p>

            <p>массив строк: {res}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task9