//✅ 2. Wrap Your App with the Provider
// In the App Router, you wrap your provider in app/layout.tsx
// // app/layout.tsx
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My App',
    description: 'Using Context API in Next.js App Router',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
