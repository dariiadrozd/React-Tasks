import { Link } from "react-router-dom"

function Task3() {
    const str = ['Darya', 'Drozd', 'drozd.d.rus@gmail.com'];
    const newStr = str.filter((el) => {
        return el.includes('@')
    })

    return (
        <>
            <h1>Задача:3</h1>
            <p>На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
                странице только те строки, которые содержат знак @</p>

            <p>Старый массив: {str}</p>
            <p>Новый массив: {newStr}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task3