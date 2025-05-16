import React, { useState } from 'react'
import './Navbar.css'
function Navbar() {
    const [myName, setMyName] = useState("Ameer Hamza")

    return (
        <div>
            {/* <h1>Hello Navbar</h1>
            <h1>Hey, my name is : {myName}</h1> */}
        </div>
    )
}

export default Navbar