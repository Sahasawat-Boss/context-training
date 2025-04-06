'use client';

import { useState } from 'react';

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState('');

    const handleAdd = () => {
        if (input.trim() === '') return;
        const newTodo: Todo = {
            id: Date.now(),
            text: input.trim(),
            completed: false,
        };
        setTodos((prev) => [...prev, newTodo]);
        setInput('');
    };

    const toggleTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <div className="p-6 bg-white shadow-md rounded max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">📝 Todo List</h1>

            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border px-4 py-2 rounded w-full"
                    placeholder="Enter a task"
                />
                <button
                    onClick={handleAdd}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add
                </button>
            </div>

            <ul className="space-y-3">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={`flex justify-between items-center border p-2 rounded ${todo.completed ? 'bg-green-100 line-through text-gray-500' : ''
                            }`}
                    >
                        <span
                            className="cursor-pointer"
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="text-red-500 hover:text-red-700 font-bold border px-1.5 rounded-full"
                        >
                            &times;
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;


// import TodoList from '@/ReactComps/Advanced/TodoList';

// export default function Page() {
//     return (
//         <main className="min-h-screen flex items-center justify-center bg-gray-100">
//             <TodoList />
//         </main>
//     );
// }
