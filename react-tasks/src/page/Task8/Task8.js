import { Link } from "react-router-dom"

function Task8() {

    const arr = [1,2,3,4,5,6,67];

    const min = Math.min(...arr);
    const max = Math.max(...arr);


    return (


        <>
            <h1>Задача:7</h1>
            <p>Реализуйте компонент, который принимает статичный массив чисел и выводит
минимальное и максимальное значения на странице.</p>

<p>минимальное значение:{min}</p>
<p>максимальное значение:{max}</p>
            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task8