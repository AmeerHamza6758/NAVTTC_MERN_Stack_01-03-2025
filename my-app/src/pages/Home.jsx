import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incremet } from '../redux/slice/counterSlice'

function Home() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <h1 style={{ color: 'red' }}>Count:{count}</h1>
            <div style={{ display: 'flex', gap: '20px' }}>
                <button onClick={() => dispatch(incremet())}>Add</button>
                <button onClick={() => dispatch(decrement())}>Remove</button>
            </div>
        </div>
    )
}

export default Home