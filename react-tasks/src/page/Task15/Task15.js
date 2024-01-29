import { Link } from "react-router-dom"


function Task15() {

    const pwd = '12567'
    const pwd2 = '12345'

    function show() {
        try {
            if (!/^[\w\d\!\@\#\&\^\*\.]{8,}$/gm.test(pwd)) throw new Error('неподходящий пароль')
            if (!/^[\w\d\!\@\#\&\^\*\.]{8,}$/gm.test(pwd2)) throw new Error('неподходящий пароль')
            if (pwd === pwd2) {
                console.log(true);
            } else {
                console.log(false);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <h1>Задача:15</h1>
            <p>На входе 2 статичные переменные пароля. По клику на кнопку необходимо
                реализовать метод валидации. Написать регулярное выражение: пароль от 8
                символов, содержит числа, буквы, !@#$^&*. Результат отобразить в консоль</p>

            <button onClick={show}>click me</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task15