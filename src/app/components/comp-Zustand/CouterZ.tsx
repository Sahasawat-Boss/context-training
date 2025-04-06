'use client';

import useCounterStore from "@/app/store/CounterZStore";

export default function  CounterZ() {
    const count = useCounterStore((state) => state.count);
    const increase = useCounterStore((state) => state.increase);
    const reset = useCounterStore((state) => state.reset);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Zustand + TypeScript</h1>
            <p className="mb-2 text-lg">Count: {count}</p>
            <button onClick={increase} className="bg-green-500 text-white px-4 py-2 mr-2 rounded">
                Increase
            </button>
            <button onClick={reset} className="bg-gray-500 text-white px-4 py-2 rounded">
                Reset
            </button>
        </div>
    );
}