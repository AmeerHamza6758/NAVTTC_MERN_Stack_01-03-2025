import React, { useState } from 'react'
import { salesCardData } from '../../helpers/dummyData'
function Sales() {
    return (
        <>
            {salesCardData.map((item) => (
                <div>
                    <h2>{item.id}</h2>
                    <h1 style={{ color: 'red' }}>{item.title}</h1>
                    <img height='100' width='100' src={item.img} alt="" />
                    <p style={{ color: 'blue' }}>{item.desc}</p>
                </div>
            ))}
        </>
    )
}

export default Sales