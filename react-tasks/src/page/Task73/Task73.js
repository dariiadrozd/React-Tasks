// import { Link } from "react-router-dom"
// import { useState, useEffect, useRef, useMemo } from "react"
// import axios from 'axios'

// function Task73() {

//     async function getStringIp() {
//         const response = await axios.get(' https://api.ipify.org/?format=json')
//         return response.data.ip
//     }

//     const getIp = useMemo(async() => {
//         const res = await getStringIp()
//         return res
//     },[])

//     return (
//         <>
//             <h1>Задача 73</h1>

//             <p>Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес должен быть получен с использованием useMemo при монтировании компонента и кэширован для избегания повторных запросов к API при обновлении других частей компонента. https://api.ipify.org/?format=json</p>

//             <h1>{getIp}</h1>
//             <p><Link to='/'>HomePage</Link></p>
//         </>
//     )
// }

// export default Task73