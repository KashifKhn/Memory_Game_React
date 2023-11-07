import React, { useEffect, useState } from 'react'
import CardList from './components/CardList'
import OverGame from './components/OverGame'
import StartGame from './components/StartGame'
import { shuffledCards, handleShuffledCards, unShuffledCards } from './Constant'


const App = () => {
  const [cards, setCards] = useState(shuffledCards);
  const [flipCount, setFlipCount] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem("highScore") || 0); // [TODO
  const [matchedCount, setMatchedCount] = useState(0);
  const [time, setTime] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameStatus, setGameStatus] = useState("");

  useEffect(() => {
    if (!gameStart) return;
    if(gameOver) return;
    const interval = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [gameStart, gameOver]);

  useEffect(() => {
    if (matchedCount === 8) {
        setGameStatus("win");
        setGameOver(true);
        if (flipCount < highScore) {
          setHighScore(flipCount);
          localStorage.setItem("highScore", flipCount);
        }
    }
  }, [matchedCount]);

  function handleResetGame() {
    setGameStart(false)
    setGameOver(false)
    setTime(0)
    setFlipCount(0)
    setMatchedCount(0)
    setGameStatus("")
    setCards(handleShuffledCards(unShuffledCards))
  }

  if (gameOver) {
    return <OverGame
      handleResetGame={handleResetGame}
      time={time}
      flipCount={flipCount}
      matchedCount={matchedCount}
    />
  }

  if (!gameStart) {
    return <StartGame setGameStart={setGameStart} />
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
        gameOver={gameOver}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        setCards={setCards}
        cards={cards}
      />
    </div>
  )
}

export default App
