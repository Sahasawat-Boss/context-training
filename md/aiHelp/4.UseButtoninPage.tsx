//✅ 4. Use the Button in a Page

// app/page.tsx
import ThemeToggleButton from "./3.UseContextAnywhere";

export default function Home() {
    return (
        <main className="p-4">
            <h1 className="text-xl font-bold">Welcome to My Context Demo</h1>
            <ThemeToggleButton />
        </main>
    );
}
