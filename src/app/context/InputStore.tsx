'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type InputContextType = {
    text: string;
    setText: (value: string) => void;
};

const InputContext = createContext<InputContextType | undefined>(undefined);

export const InputProvider2 = ({ children }: { children: ReactNode }) => {
    const [text, setText] = useState('');

    return (
        <InputContext.Provider value={{ text, setText }}>
            {children}
        </InputContext.Provider>
    );
};

export const useInputContext = () => {
    const context = useContext(InputContext);
    if (!context) throw new Error('useInputContext must be used within InputProvider2');
    return context;
};
