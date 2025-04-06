'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

const InputFromCTX = createContext<any>(null);

export const InputProvider = ({ children }: { children: ReactNode }) => {
    const [text, setText] = useState('');

    return (
        <InputFromCTX.Provider value={{ text, setText }}>
            {children}
        </InputFromCTX.Provider>
    );
};

export const useInputFromCTX = () => useContext(InputFromCTX);
