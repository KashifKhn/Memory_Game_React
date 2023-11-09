import React from 'react'

const OverGame = (props) => {
    const {handleResetGame, time, flipCount, matchedCount} = props
    return (
        <div className='w-full flex flex-col items-center justify-center text-center gap-4 min-h-screen overflow-hidden mb-8'>
            <h1 className='text-[6em] font-Creepy text-orange-dark '>Game Over</h1>
            <h2 className='text-[4em] font-Lunacy text-orange-light '>Time: {time}</h2>
            <h2 className='text-[4em] font-Lunacy text-orange-light '>Flips: {flipCount}</h2>
            <h2 className='text-[4em] font-Lunacy text-orange-light '>Matches: {matchedCount}</h2>
            <button
                className='text-[10em] max-sm:text-[8em] font-Creepy text-orange-dark'
                onClick={handleResetGame}
            >
                Play Again
            </button>
        </div>
    )
}

export default OverGame
