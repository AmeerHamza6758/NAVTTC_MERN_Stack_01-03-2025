import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router'
function Navbar() {
    const [myName, setMyName] = useState("Ameer Hamza")
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }
    return (
        <div style={{ display: 'flex', background: 'green' }}>
            <div>ICON</div>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', cursor: 'pointer' }}>
                <li onClick={goToHome}>Home</li>
                <Link to="/sales"> <li>Sales</li></Link>
                <Link to="/products"> <li>Products</li></Link>
                <Link to="/contact_us"> <li>Contact_us</li></Link>
            </ul>
            <div></div>
        </div>
    )
}

export default Navbar