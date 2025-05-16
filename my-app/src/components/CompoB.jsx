import React, { useContext } from 'react'
import { MyContext } from '../services/MyContext'
function CompoB() {
    const { username, count, classname, addToCart } = useContext(MyContext)
    return (
        <>
            <div>In COMPO B Username is :{username}</div>
            <h2>class name is :{classname}</h2>
            <strong>Count is:{count}</strong>

            <h1 style={{ background: 'yellow' }} onClick={addToCart}>Click ME</h1>
        </>
    )
}

export default CompoB