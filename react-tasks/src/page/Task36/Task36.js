import { Link } from "react-router-dom"
import { useState } from "react"

function Task36() {

    const [flag, setFlag] = useState(false);

    function clickButton() {
        if (!flag) {
            setFlag(true)
        } else {
            setFlag(false)
        }
    }

    return (
        <>
            <h1>Задача 36</h1>
            <p> Сделай компонент выезжающего меню из 3 параграфов. по нажатию на кнопку ,,открыть,, отображаешь меню.  </p>

            <button onClick={clickButton}>{flag ? 'open' : 'close'}</button>
            {flag &&(<div>
                <p>параграф 1</p>
                <p>параграф 2</p>
                <p>параграф 3</p>
            </div>)}

            <p><Link to='/'>HomePage</Link></p>
        </>
    )
}

export default Task36