// Learn useCallback -memo -usememo hook

//usememo hook memorize a funtion value, we use it if the funtion taking 1ms time.
//useCallback hook memorize a funtion , we use it to avoid re-render of other components that deends on parent component. When function call everytime new instance
//  will be created so re-render occurs to parent and it's child comonents.
// React.memo memorize a comonent.
import React, { useCallback, useMemo, useState } from 'react'
import ChildA from './ChildA'

function ParentA() {
    const [count, setCount] = useState(0)
    // UseMemo Hook
    function sumUpTo(n) {
        console.log('sumUpTo', n);
        let sum = 0
        for (let i = 1; i <= n; i++) {
            sum += i
        }
    }
    console.time()

    let sum5000 = useMemo(function () {
        return sumUpTo(5000)
    }, [])
    // let sum1000 = sumUpTo(1000)

    // UseCallback
    // const handleCount = () => {
    //     setCount(count + 1)
    // }
    // Always use useCallback when we pass function to child components, to avoid re-renders.

    const handleCount = useCallback(function () {
        setCount((prev) => { return prev + 1 })
    }, [])
    console.log('parent-component');
    return (
        <div>
            <h2>ParentA</h2>
            <h1>Count:{count}</h1>
            <ChildA onIncrease={handleCount} />
        </div>
    )
}

export default ParentA