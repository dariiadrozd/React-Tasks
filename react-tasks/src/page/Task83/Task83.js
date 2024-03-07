import { useContext, useReducer, useState } from "react";
import { Link } from "react-router-dom";
// import { Task80Context } from "../../Context/Context";

// function Task83() {

//     const [flag, setFlag] = useState(false)


//     return (
//         <>
//             <h1>Задача 83</h1>

//             <p>Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on» и «off».
//                 По клику на кнопку текст меняется на противоположный</p>


//             <button onClick={() => flag ? setFlag(false) : setFlag(true)}>{flag ? 'on' : 'off'}</button>

//             <p><Link to='/'>HomePage</Link></p>
//         </>
//     );
// }

// export default Task83;



function reducer(state, action) {
    switch (action) {
        case 'changeFlage':
            return state ? false : true
    }
}

function Task83() {

    const [flag, dispatch] = useReducer(reducer, false)

    return (
        <>
            <h1>Задача 83</h1>

            <p>Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on» и «off».
                По клику на кнопку текст меняется на противоположный</p>


            <button onClick={() => dispatch('changeFlage')}>{!flag ? 'on' : 'off'}</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task83;