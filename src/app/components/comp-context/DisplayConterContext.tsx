'use client';
import { useCounter } from "../../context/CounterContext";

const DisplayCounterContext = () => {
    const { count } = useCounter();

    return (
        <div className="space-y-2 border">
            <p>Display Count from Context: {count}</p>
        </div>
    );
};

export default DisplayCounterContext;
