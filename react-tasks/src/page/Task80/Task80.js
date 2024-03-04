import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Task80Context } from "../../Context/Context";

function Task80() {

    const objWeather = useContext(Task80Context)



    return (
        <>
            <h1>Задача 80</h1>

            <p>Разработайте приложение для отображения текущей погоды. Используйте useContext, чтобы хранить информацию о погоде (температура, влажность,
                скорость ветра и т. д.). В компоненте отобразите эту информацию о погоде.</p>

            <h1>{objWeather.temperature}</h1>
            <h1>{objWeather.humidity}</h1>
            <h1>{objWeather.windSpeed}</h1>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task80;