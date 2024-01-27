import { Link } from "react-router-dom"

function Task1() {
    const num = [1, 2, 3, 4, 5, 6, 7, 8]
    const newNum = num.map((el) => {
        return el ** 2;
    })
    return (
        <>
            <h1>Задача:1</h1>
            <p>На входе статичный массив чисел. Ваша задача каждое число массива возвести в
                квадрат и отобразить на странице</p>

            <p>Старый массив:{num}</p>
            <p>Новый массив: {newNum}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task1