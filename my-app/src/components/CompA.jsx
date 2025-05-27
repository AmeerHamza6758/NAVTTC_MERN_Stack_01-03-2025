import React, { useContext, useEffect, useState } from 'react'
import CompoB from './CompoB'
import { MyContext } from '../services/MyContext'
import { useSelector } from 'react-redux'

function CompA() {
    const [username, setUserName] = useState('Ameer')
    const [loading, setLoading] = useState()
    useEffect(() => {
        setLoading(true)
        // functionality
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])

    const { count } = useContext(MyContext)


    // redux selector
    const { value, name } = useSelector((state) => state.counter)
    return (
        <>
            <h1>Component A count is : {value}</h1>
            <h2>Name is : {name}</h2>
            {/* {loading ? <h1>Loading...!</h1> :
                <div>In COMPO A Username is : {username}</div>} */}
            {/* <CompoB username={username} /> */}
        </>
    )
}

export default CompA