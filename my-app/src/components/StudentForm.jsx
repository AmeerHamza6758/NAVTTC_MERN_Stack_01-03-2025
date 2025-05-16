import React, { useState } from 'react';
import Catie from '../assets/download.jpeg';
function StudentForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState()
    const [error, setError] = useState({})

    function validate() {
       let errorData = {}
        if (!name.trim()) {
            errorData.name = 'Please enter your name..!'
        } else if (name.length < 3) {
            errorData.name = "Name must be more than 4 characters long..!"
        }
        if (!email) {
            errorData.email = 'Please enter your Email...'
        } else if (!email.includes('@')) {
            errorData.email = 'Not a valid email..!'
        }
        setError(errorData)
    }

    // conditon ? (true) : (false)
    // conditon && (true)

    function handleSubmit(e) {
        e.preventDefault()
        if (validate()) {
            console.log(`Form Submitted name:${name} and email: ${email} and phone: ${phone}`)
        }
    }

    return (
        <div>
            <h1>Student Registration FORM </h1>
            <img src={Catie} alt="Ameer" />
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter Your name:</label> <br />
                <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} /><br />
                {error.name && <p style={{ color: 'red' }}>{error.name}</p>} <br />

                <label htmlFor="email">Enter your email:</label><br />
                <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                {error.email && <p style={{ color: 'red' }}>{error.email}</p>} <br />

                <label htmlFor="phone">Enter your phone:</label><br />
                <input type="number" id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} /><br /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default StudentForm;