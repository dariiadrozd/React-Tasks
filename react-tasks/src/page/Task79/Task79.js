import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Task79Context } from "../../Context/Context";

function Task79() {
  const {language, setLanguage} = useContext(Task79Context)

    function clickButton(e) {
        setLanguage(e.target.textContent)
    }

    const obj = {
        Ru: 'Привет',
        En: 'Hello',
        Pl: 'Cześć'
    }

    return (
        <>
            <h1>Задача 79</h1>

            <p>Разработайте приложение, в котором пользователь может выбирать язык интерфейса (например, английский и испанский). Используйте useContext, чтобы хранить текущий выбранный язык и переводить текст на выбранный язык в
                компонентах.</p>

            <h1>{obj[language]}</h1>
            <button onClick={clickButton}>Ru</button>
            <button onClick={clickButton}>En</button>
            <button onClick={clickButton}>Pl</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task79;