"use client"

import { useState } from "react"

const CounterComp = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className="border">
            <h1 className="text-xl font-bold ">Counter Comps</h1>
            <p>Count: {counter}</p>

            <button onClick={() => setCounter(counter + 1)} className="btn">increase +</button>
            <button onClick={() => setCounter(counter - 1)} className="btn">reduce -</button>
            <button onClick={() => setCounter(0)} className="btn">Clear</button>
        </div>
    )
}

export default CounterComp


// const [count, setCount] = useState(50);
// const countUp = () => setCount(count + 1);
// const countDown = () => setCount(count - 1);

// return (
//     <section>
//         <button onClick={countUp} className="border rounded-full px-2">Count +</button>
//         <button onClick={countDown} className="border rounded-full px-2">Count -</button>
//         <p>Count: {count}</p>
//     </section>
// )