import { Link } from "react-router-dom"

function Task2() {
    const num = [1, 2, 3, 4, 5, 6];
    const newNum = num.map((el) => {
        return <h1>{Math.sqrt(el)}</h1>
    })
    return (

        <>
            <h1>Задача:2</h1>
            <p>На входе статичный массив чисел. Ваша задача найти корень каждого числа и
                отобразить на странице в виде h1</p>
            
            <p>Старый массив: {num}</p>
            <p>Новый массив: {newNum}</p>



            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task2