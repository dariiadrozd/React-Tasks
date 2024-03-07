import { useContext, useReducer, useState } from "react";
import { Link } from "react-router-dom";




// function Task85() {

//     const colors = ['red', 'blue', 'purple', 'pink']
//     const [color, setColor] = useState('black')

//     function changeColor(e) {
//         setColor(e.target.textContent)
//     }

//     return (
//         <>
//             <h1>Задача 85</h1>

//             <p>Вам предоставлен массив цветов, таких как red, blue, purple, pink. При клике на
//                 кнопку ваша задача изменить цвет заголовка на цвет, соответствующий нажатой
//                 кнопке.</p>

//             {colors.map((el) => <p onClick={changeColor}>{el}</p>)}

//             <h1 style={{ color }}>color</h1>



//             <p><Link to='/'>HomePage</Link></p>
//         </>
//     );
// }

// export default Task85;

function reducer(state, obj) {
    switch (obj.action) {
        case 'changeColor':
            return obj.text
    }
}

function Task85() {

    const [color, dispatch] = useReducer(reducer, '')
    const colors = ['red', 'blue', 'purple', 'pink'];

    return (
        <>
            <h1>Задача 85</h1>

            <p>Вам предоставлен массив цветов, таких как red, blue, purple, pink. При клике на
                кнопку ваша задача изменить цвет заголовка на цвет, соответствующий нажатой
                кнопке.</p>

         

            {colors.map((el) => <p onClick={(el) => dispatch({ action: 'changeColor', text: el.target.textContent })}>{el}</p>)}
            <h1 style={{ color }}>color</h1>


            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task85;