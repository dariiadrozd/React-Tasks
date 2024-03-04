import { Link } from "react-router-dom"
import { useState } from "react"
import axios from 'axios';

function Task52() {

    const [inpVal, setInpVal] = useState('')
    const [answer, setAnswer] = useState('')

    async function getAnswer(){
        const data = await axios.get('https://yesno.wtf/api')
        setAnswer(data.data.answer)
    }


    return (
        <>
            <h1>Задача 52</h1>

            <p>Форма с отправкой запроса к API с использованием useState: Создайте
                компонент, который предоставляет input, button. После ввода данных в input по нажатию кнопку необходимо отправлять асинхронный запрос к API https://yesno.wtf/api с получением рандомно сгенерированного “да/нет”. Отобразить результат в заголовок. Таким образом у вас получается игра в предсказателя: где пользователь вводит вопрос в input, а далее получает ответ на заданный вопрос.</p>

          <input type="text" 
          placeholder="введите вопрос"
          onChange={(e)=> setInpVal(e.target.value)}
          />
          <button onClick={getAnswer}>получить ответ</button>
          <p>
            {inpVal} : {answer}
          </p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task52