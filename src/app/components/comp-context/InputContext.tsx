'use client';

import { useInputFromCTX } from '@/app/context/InputContext'

const InputContext = () => {
    const { text, setText } = useInputFromCTX();

    return (
        <main className='border mt-4'>
            <div>InputContext</div>
            <div>
                <input type="text" className="border p-1" placeholder="Type Here"
                    value={text} onChange={(e) => setText(e.target.value)} />

                <p>Result:{text}</p>

                <button onClick={() => setText('')} className='btn'>
                    Clear
                </button>
            </div>
        </main>
    )
}

export default InputContext