import React, { useEffect, useState } from 'react'
import CompoB from './CompoB'

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

    return (
        <>
            {loading ? <h1>Loading...!</h1> :
                <div>In COMPO A Username is : {username}</div>}
            {/* <CompoB username={username} /> */}
        </>
    )
}

export default CompA