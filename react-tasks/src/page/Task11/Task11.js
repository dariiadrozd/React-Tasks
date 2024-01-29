import { Link } from "react-router-dom"
import style from './style.module.css'

function Task11() {
const arr = [1,'fghj',2,'dfghj',5,'cvbnm']

const result = arr.map((el)=>{
    if(isNaN(el)){
return (<p className={style.color1}>{el}</p>)
    }else{
        return (<p className={style.color2}>{el}</p>)
    }
})
    return (
        <>
            <h1>Задача:11</h1>
            <p>Создайте компонент, который принимает статичный массив чисел и строк. Если элемент - число, то отобразите его в параграфе с зеленым цветом текста, если
строка - с синим.</p>

<p>{result}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task11