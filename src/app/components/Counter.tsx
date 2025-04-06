"use client"

import { useState } from "react"

const CounterComp = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className="border">
            <h1 className="text-xl font-semibold ">Counter Comps</h1>
            <p>Count: {counter}</p>

            <button onClick={() => setCounter(counter + 1)} className="btn">increase +</button>
            <button onClick={() => setCounter(counter - 1)} className="btn">reduce -</button>
            <button onClick={() => setCounter(0)} className="btn">Clear</button>
        </div>
    )
}

export default CounterComp