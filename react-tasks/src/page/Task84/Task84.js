import { useContext, useReducer, useState } from "react";
import { Link } from "react-router-dom";


function reducer(state, obj) {
    switch (obj.action) {
        case 'changeInp':
            return obj.text
        default:
            break
    }
}


function Task84() {

    const [inp, dispatch] = useReducer(reducer, '')

    return (
        <>
            <h1>Задача 84</h1>

            <p>Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on» и «off».
                По клику на кнопку текст меняется на противоположный</p>

            <input type="text" onChange={(e) => dispatch({ action: 'changeInp', text: e.target.value })} />
            <h1>{inp}</h1>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task84;