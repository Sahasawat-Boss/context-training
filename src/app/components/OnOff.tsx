'use client'

import { useState } from "react"

const Toggle = () => {
    const [isOn, setIsOn] = useState(true)

    return (
        <div>
            <h1>Toggle Swicth</h1>

            <p className={`font-semibold ${isOn? "text-green-500" : "text-gray-500"}`}>Status: {isOn ? 'Active' : 'Inactive'}</p>

            <button onClick={() => setIsOn(!isOn)} className={`p-4 border ${isOn ? 'bg-green-200' : 'bg-gray-400'}`}>
                {isOn ? 'Active' : 'Inactive'}
            </button>
        </div>
    )
}

export default Toggle

// 'use client';

// import { useState } from 'react';

// const Toggle = () => {
//     const [isOn, setIsOn] = useState(false);

//     return (
//         <div className="border">
//             <h2 className="text-xl font-bold">Toggle Switch</h2>

//              <p
                //  className = {`font-medium ${isOn ? 'text-green-600' : 'text-gray-500'
                //  }`}
                //          >
                //      Status: { isOn ? 'Active' : 'Inactive' }
                //          </p >

//             <button
//                 onClick={() => setIsOn(!isOn)}
//                 className={`px-4 py-2 rounded text-white transition ${isOn ? 'bg-green-500' : 'bg-gray-500'
//                     }`}
//             >
//                 {isOn ? 'ON' : 'OFF'}
//             </button>

//         </div>
//     );
// };

// export default Toggle;
