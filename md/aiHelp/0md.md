# 🧩 What is the Context API?
The Context API is built into React (and therefore works in Next.js), and it lets you share data globally without prop drilling (passing props through every component).

Common use cases:

- User authentication

- Theme (dark/light mode)

- Language toggle

- Global state like shopping cart, sidebar toggle, etc.

-----

## 📝 Context API in Next.js (App Router) - Summary

- Context API lets you share data (state) globally across components without prop drilling.

- In Next.js App Router, you must use 'use client' in components and context files that use hooks like useState, useContext.

## 🔧 Steps to Use Context:
1. Create Context File in context/ folder.

2. Wrap <ThemeProvider> around <body> in app/layout.tsx.

3. Use useTheme() hook in any client component to access or update the state.

## 📦 Example Use:
- theme = "light" or "dark"

- toggleTheme() function to switch modes

