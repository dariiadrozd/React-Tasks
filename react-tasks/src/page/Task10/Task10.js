import { Link } from "react-router-dom"
import img_1 from './assets/code.png'
import img_2 from './assets/code2.png'

function Task10() {

    const arr = [
        {
            title: 'Оливъе',
            description: 'Салат',
            image: img_1
        },
        {
            title: 'Борщ',
            description: 'Суп',
            image: img_2
        },
        {
            title: 'Шаурма',
            description: 'Вредная гадость, но вкусная блин',
            image: img_1
        }

    ]
    const res = arr.map((el) => {
        return (
            <div style={{ padding: '10px', margin: '10px' }}>
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <img src={el.image}></img>
            </div>
        )

    })
    return (
        <>
            <h1>Задача:10</h1>
            <p>Реализуйте компонент, который принимает массив объектов с полями title –
                название рецепта, description – описание рецепта и image – картинка блюда. Для каждого объекта создайте карточку с заголовком, описанием и изображением. Добавьте немного стилей</p>

            <div>
                <p>{res}</p>
            </div>

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}
export default Task10