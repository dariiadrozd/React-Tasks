import { useContext } from "react";
import { Link } from "react-router-dom";
import { Task78Context } from "../../Context/Context";


function Task78() {
    const obj = useContext(Task78Context)
    return (
        <>
            <h1>Задача 78</h1>

            <p>Создайте простое приложение для аутентификации пользователя. Используйте
                useContext, чтобы хранить информацию о текущем пользователе.</p>

            <h1>{obj.id}</h1>
            <h1>{obj.name}</h1>
            <h1>{obj.surname}</h1>
            <h1>{obj.email}</h1>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task78;