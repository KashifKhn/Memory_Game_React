import React, { useEffect, useState } from 'react'
import CardList from './components/CardList'

const App = () => {
  const [flipCount, setFlipCount] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem("highScore") || 0); // [TODO
  const [matchedCount, setMatchedCount] = useState(0);
  const [time, setTime] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(undefined);
  const [gameStatus, setGameStatus] = useState("");
  

  useEffect(() => {
    if(!gameStart) return;
    const interval = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [gameStart]);

  useEffect(() => {
    if (matchedCount === 8) {
      setGameOver(true);
      if (flipCount < highScore) {
        setHighScore(flipCount);
        localStorage.setItem("highScore", flipCount);
      }
    }
  }, [matchedCount]);

  if(gameOver){
    return (
      <div className='w-full flex flex-col items-center justify-center gap-4 min-h-screen overflow-hidden mb-8'>
        <h1 className='text-[6em] font-Creepy text-orange-dark '>Game Over</h1>
        <h2 className='text-[4em] font-Lunacy text-orange-light '>Time: {time}</h2>
        <h2 className='text-[4em] font-Lunacy text-orange-light '>Flips: {flipCount}</h2>
        <h2 className='text-[4em] font-Lunacy text-orange-light '>Matches: {matchedCount}</h2>
        <button
          className='text-[10em] font-Creepy text-orange-dark'
          onClick={() => {
            setGameStart(false)
            setGameOver(false)
            setTime(0)
            setFlipCount(0)
            setMatchedCount(0)
            setGameStatus("")
          }}
        >
          Play Again
        </button>
      </div>
    );
  }
  

  if (!gameStart) {
    return (
      <div className='w-full flex flex-col items-center justify-center gap-4 min-h-screen overflow-hidden mb-8'>
        <button
          className='text-[10em] font-Creepy text-orange-dark'
          onClick={() => setGameStart(true)}
        >
          Click To Start
        </button>
      </div>
    );
  }

  return (
    <div className='w-full h-full overflow-hidden flex flex-col items-center justify-center gap-4 my-8'>
      <h1 className='text-[6em] font-Creepy text-orange-dark '>Mix-OR-Match</h1>
      <div className='flex gap-8'>
        <h2 className='text-[4em] font-Lunacy text-orange-light '>Time: {time}</h2>
        <h2 className='text-[4em] font-Lunacy text-orange-light '>Flips: {flipCount}</h2>
        <h2 className='text-[4em] font-Lunacy text-orange-light '>Matches: {matchedCount}</h2>
      </div>
      <CardList
        setFlipCount={setFlipCount}
        setMatchedCount={setMatchedCount}
        setGameOver={setGameOver}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      />
    </div>
  )
}

export default App
