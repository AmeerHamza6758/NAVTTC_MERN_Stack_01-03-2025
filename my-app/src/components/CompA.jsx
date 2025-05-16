import React, { useContext, useEffect, useState } from 'react'
import CompoB from './CompoB'
import { MyContext } from '../services/MyContext'

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
    return (
        <>
            <h1>Component A count is : {count}</h1>
            {/* {loading ? <h1>Loading...!</h1> :
                <div>In COMPO A Username is : {username}</div>} */}
            {/* <CompoB username={username} /> */}
        </>
    )
}

export default CompA