'use client';

import React from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg shadow-xl w-[90%] max-w-md p-6 relative animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-black text-xl"
                >
                    &times;
                </button>

                {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;


// 'use client';

// import React, { useState } from 'react';
// import Modal from './components/ReactComps/Modal';

// const ModalExample = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="p-6">
//             <button
//                 onClick={() => setIsOpen(true)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded"
//             >
//                 Open Modal
//             </button>

//             <Modal
//                 isOpen={isOpen}
//                 onClose={() => setIsOpen(false)}
//                 title="Modal Title"
//             >
//                 <p>This is a reusable modal component 🪟</p>
//             </Modal>
//         </div>
//     );
// };

// export default ModalExample;
