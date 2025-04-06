'use client';

import { useCounter } from "../../context/CounterContext";

const CounterContext = () => {
    const { count, setCount } = useCounter();

    return (
        <div className="space-y-2 border">
            <h1></h1>
            <p>Count: {count}</p>
            <div className="flex gap-3">
                <button onClick={() => setCount(count + 1)} className="btn">Increase</button>
                <button onClick={() => setCount(0)} className="btn">Reset</button>
            </div>
        </div>
    );
};

export default CounterContext;
