import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { Task80Context } from "../../Context/Context";

function Task82() {

const [count, setCount] = useState(0)

// function reducer(state, action){
//     switch(action){
//         case 'increment':
//             return state +1
//             case 'decrement':
//                 return state -1
//                 case 'delete':
//                     return state 0
//                     default 
//     }
// }


    return (
        <>
            <h1>Задача 82</h1>

            <p>Создайте компонент счетчика, который может увеличивать, уменьшать,
                сбрасывать значение при нажатии на соответствующие кнопки.</p>

         <h1>{count}</h1>
         <button onClick={()=> setCount(count + 1)}>+1</button>
         <button onClick={()=> setCount(count - 1)}>-1</button>
         <button onClick={()=> setCount(0)}>delete</button>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task82;