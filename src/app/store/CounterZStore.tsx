import { create } from 'zustand';

type CounterState = {
    count: number;
    increase: () => void;
    reduce: () => void;
    reset: () => void;
};

const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    reduce: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 })
}));

export default useCounterStore;


// 'use client';

// import useCounterStore from "@/app/store/CounterZStore";

// export default function CounterZ() {
//     const count = useCounterStore((state) => state.count);
//     const increase = useCounterStore((state) => state.increase);
//     const reduce = useCounterStore((state) => state.reduce)
//     const reset = useCounterStore((state) => state.reset);

//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-bold mb-4">Zustand + TypeScript</h1>
//             <p className="mb-2 text-lg">Count: {count}</p>
//             <button onClick={increase} className="btn">
//                 Increase
//             </button>
//             <button onClick={reduce} className="btn">
//                 Reduce
//             </button>
//             <button onClick={reset} className="btn">
//                 Reset
//             </button>
//         </div>
//     );
// }
//==============================================================================================

