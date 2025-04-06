import { create } from 'zustand';

type User = {
    name: string;
    age: number;
    mood: string;
};

type UserState = {
    user: User;
    updateUser: (newUser: Partial<User>) => void;
};

export const userStore = create<UserState>((set) => ({
    user: {
        name: 'No Value',
        age: 0,
        mood: 'No Value',
    },
    updateUser: (newUser) =>
        set((state) => ({
            user: {
                ...state.user,
                ...newUser, // ✅ Merge into user only, not entire state
            },
        })),
}));



// 'use client';

// import { userStore } from '@/app/store/userZStore';

// export default function UserZ() {
//     const user = userStore((state) => state.user);
//     const updateUser = userStore((state) => state.updateUser);

//     return (
//         <div className="border p-4 space-y-4">
//             <div className="font-semibold text-lg"> User Info</div>

//             <div>
//                 <label className="block">Edit Name:</label>
//                 <input
//                     type="text"
//                     value={user.name}
//                     onChange={(e) => updateUser({ name: e.target.value })}
//                     className="border px-2 py-1 w-full"
//                 />
//                 <p className="text-sm text-gray-600">Name: {user.name}</p>
//             </div>

//             <div>
//                 <label className="block">Edit Age:</label>
//                 <input
//                     type="number"
//                     value={user.age}
//                     onChange={(e) => updateUser({ age: Number(e.target.value) })}
//                     className="border px-2 py-1 w-full"
//                 />
//                 <p className="text-sm text-gray-600">Age: {user.age}</p>
//             </div>

//             <div>
//                 <label className="block">Edit Mood:</label>
//                 <input
//                     type="text"
//                     value={user.mood}
//                     onChange={(e) => updateUser({ mood: e.target.value })}
//                     className="border px-2 py-1 w-full"
//                 />
//                 <p className="text-sm text-gray-600">Mood: {user.mood}</p>
//             </div>
//         </div>
//     );
// }
