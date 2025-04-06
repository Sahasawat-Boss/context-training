'use client'
import { useState } from "react"

const Input = () => {
    const [text, setText] = useState('Please Input...');

    return (
        <div>
            <h1>Input</h1>
            <input type="text" className="border rounded" placeholder="Type Here"
            onChange={(e) =>setText(e.target.value) }/>
            
            <button onClick={() =>setText('')} className="btn">Reset</button>
            <br />
            <p>{text}</p>
        </div>
    )
}

export default Input