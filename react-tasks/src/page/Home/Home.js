import { Link } from "react-router-dom"

function Home(){
    return(
        <>
        <h1>Задания:</h1>
        <p><Link to = "/task1">Задача:1</Link></p>
        <p><Link to = "/task2">Задача:2</Link></p>
        <p><Link to = "/task3">Задача:3</Link></p>
        <p><Link to = "/task4">Задача:4</Link></p>
        <p><Link to = "/task5">Задача:5</Link></p>
        <p><Link to = "/task6">Задача:6</Link></p>
        </>
    )
}
export default Home