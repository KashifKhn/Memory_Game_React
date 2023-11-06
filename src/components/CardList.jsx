import React, { useEffect, useState } from 'react'
import Card from './Card'

const CardList = (props) => {
  const {cards, setCards} = props;
  // const [cards, setCards] = useState(shuffleArray);
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    const win = cards.every(card => card.matched === true);
      setTimeout(() => {
        if(win){
          props.setGameStatus('win');
          props.setGameOver(true);
        }
      }, 2000);
  }, [cards]);

  const handleCardClick = (id) => {
    if (flippedCards[0] === id) return;
    props.setFlipCount(oldCount => oldCount + 1);
    if (flippedCards.length === 0) {
      const updatedCards = cards.map((card) =>
        card.id === id ? { ...card, flipped: true } : card
      );
      setCards(updatedCards);
      setFlippedCards([id]);
    }
    else if (flippedCards.length === 1) {
      const updatedCards = cards.map((card) =>
        card.id === id ? { ...card, flipped: true } : card
      );
      setCards(updatedCards);
      setFlippedCards([...flippedCards, id]);

      const [firstCardId, secondCardId] = flippedCards;
      const firstCard = cards.find((card) => card.id === firstCardId);
      const secondCard = cards.find((card) => card.id === id);

      if (firstCard.value === secondCard.value) {
        props.setMatchedCount(oldCount => oldCount + 1);
        const matchedCards = cards.map((card) =>
          card.id === firstCardId || card.id === id
            ? { ...card, flipped: true, matched: true }
            : card
        );
        setCards(matchedCards);
        setFlippedCards([]);
      }
      else {
        setTimeout(() => {
          const unFlippedCards = cards.map((card) =>
            card.id === firstCardId || card.id === id
              ? { ...card, flipped: false }
              : card
          );
          setCards(unFlippedCards);
          setFlippedCards([]);
        }, 700);
      }
    }
  };

  return (
    <div className='[perspective:500px] grid grid-cols-4 gap-4'>
      {
        cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            imgSrc={card.imgSrc}
            value={card.value}
            isFlipped={card.flipped}
            holdCard={handleCardClick}
          />
        ))
      }
    </div>
  )
}

export default CardList
