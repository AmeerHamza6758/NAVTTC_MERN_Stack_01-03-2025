import React from 'react'

function ChildA({ onIncrease }) {
    console.log('Child-component');
    return (
        <><div>ChildA</div>
            <button onClick={onIncrease}>Click to increase</button>
            <br />
        </>

    )
}

export default React.memo(ChildA)