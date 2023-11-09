import React from 'react'

const StartGame = ({setGameStart}) => {
    return (
        <div className='w-full flex flex-col items-center text-center justify-center gap-4 min-h-screen overflow-hidden mb-8'>
            <button
                className='text-[10em] max-sm:text-[8em]  font-Creepy text-orange-dark'
                onClick={() => setGameStart(true)}
            >
                Click To Start
            </button>
        </div>
    )
}

export default StartGame
