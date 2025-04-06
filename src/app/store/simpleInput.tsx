import { create } from 'zustand';

type InputStore = {
    text: string;
    setText: (value: string) => void;
};

export const useSimpleInputZStore = create<InputStore>((set) => ({
    text: '',
    setText: (value) => set({ text: value }),
}));
