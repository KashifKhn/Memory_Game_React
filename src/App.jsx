import React, { useEffect, useState } from 'react'
import CardList from './components/CardList'

const App = () => {
  const [flipCount, setFlipCount] = useState(0);
  const [matchedCount, setMatchedCount] = useState(0);
  const [time, setTime] = useState(100);
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if(gameOver) return;
    if(time === 0) setGameOver(true);
    const interval = setInterval(() => {
      setTime(time => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if(!gameStart) 
    return (
      <div className='w-full flex flex-col items-center justify-center gap-4 min-h-screen overflow-hidden'>
        <button
          className='text-[10em] font-Creepy text-orange-dark self-center'
          onClick={() => setGameStart(true)}
        >
          Click To Start
        </button>
      </div>
    );

  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 mt-8'>
      <h1 className='text-[6em] font-Creepy text-orange-dark '>Mix-OR-Match</h1>
      <div className='flex gap-8'>
        <h2 className='text-[4em] font-Lunacy text-orange-light '>Time: {time}</h2>
        <h2 className='text-[4em] font-Lunacy text-orange-light '>Flips: {flipCount}</h2>
        <h2 className='text-[4em] font-Lunacy text-orange-light '>Matches: {matchedCount}</h2>
      </div>
      <CardList
        setFlipCount={setFlipCount}
        setMatchedCount={setMatchedCount}
        gameOver={gameOver}
       />
    </div>
  )
}

export default App
