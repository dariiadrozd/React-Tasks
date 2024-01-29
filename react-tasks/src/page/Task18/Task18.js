import { Link } from "react-router-dom"



function Task18() {

    const color = ['red', 'white', 'blue']

    function check(e) {
        e.target.style = `background-color:${color[Math.random(Math.round)]}`
    }

    return (
        <>
            <h1>Задача:18</h1>
            <p>Реализуйте компонент с кнопкой, которая при каждом нажатии меняет свой цвет
                в соответствии с массивом цветов ['red', 'white', 'blue']. Используйте рандомный
                выбор цвета из массива при каждом клике.</p>


            <button onClick={check}>click me</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task18