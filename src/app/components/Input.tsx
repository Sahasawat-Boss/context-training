'use client'
import { useState } from "react"

const Input = () => {
    const defaultText = '';
    const [text, setText] = useState(defaultText);

    return (
        <div className="border">
            <h1>Input</h1>
            <input type="text" className="border p-1" placeholder="Type Here"
                value={text} onChange={(e) => setText(e.target.value)} />

            <button onClick={() => setText(defaultText)} className="btn">Reset</button>
            <br />
            <p>Text: {text}</p>
        </div>
    )
}

export default Input