'use client';

import { useInputFromCTX } from '@/app/context/InputContext'

const DisplayInputContext = () => {
    const { text, setText } = useInputFromCTX();

    return (
        <main className='border mt-4 bg-gray-200/80'>
            <div>
                <p>Display Result from Context:{text}</p>
            </div>
        </main>
    )
}

export default DisplayInputContext