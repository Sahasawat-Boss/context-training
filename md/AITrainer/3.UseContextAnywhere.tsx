//✅ 3. Use the Context Anywhere (Client Component)
// In the App Router, components that use context must be client components.

// components/ThemeToggleButton.tsx
'use client';

import { useTheme } from "./context/ThemeContext";

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 border rounded mt-4"
        >
            Theme: {theme} (click to toggle)
        </button>
    );
};

export default ThemeToggleButton;
