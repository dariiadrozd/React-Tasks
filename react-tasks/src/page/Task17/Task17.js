import { Link } from "react-router-dom"


function Task17() {

    function check(e) {
        if (e.key === 'Enter') {
            console.log(e.target.value === e.target.value.split("").reverse().join("") ? true : false);
        }
    }

    return (
        <>
            <h1>Задача:17</h1>
            <p>По событию изменения input отображать в консоль каждое вводимое значение</p>


            <input onKeyDown={check}></input>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task17