// src/components/InputCTX.tsx
'use client';

import { useInputContext } from "@/app/context/InputStore";

const InputCTX = () => {
    const { text, setText } = useInputContext();

    return (
        <div className="p-6">
            <input
                type="text"
                className="border p-3"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />
            <p className="mt-3">You typed: {text}</p>
        </div>
    );
};

export default InputCTX;
