import React from 'react'
import './Card.css'
import { useState } from 'react'

function Card() {
    const [values, setvalues] = useState(["", "", "", "", "", "", "", "", ""])
    const [datas, setdatas] = useState("X")

    let change = (pro) => {
        if (values[pro] !== "") return;

        setvalues((values) => {
            return values.map((final, i) => {
                if (i === pro)
                    return datas;
                else {
                    return final;
                }
            })
        })
        setdatas(datas === "X" ? "O" : "X")
    }
    return (
        <>
            
            <div className='board'>
                {
                    values.map((send, i) => {
                        return <div className='values' onClick={() => change(i)} >{send} </div>
                    })
                }
            </div>
        </>
    )
}

export default Card