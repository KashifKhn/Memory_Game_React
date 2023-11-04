import React, { useState } from 'react'
import Card from './Card'
import shuffleArray from '../Constant'

const CardList = () => {
  const [cards, setCards] = useState(shuffleArray);
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (id) => {
    console.log('Card clicked:', id);
    if (flippedCards.length === 0) {
      const updatedCards = cards.map((card) =>
        card.id === id ? { ...card, flipped: true } : card
      );
      setCards(updatedCards);
      setFlippedCards([id]);
    } else if (flippedCards.length === 1) {
      const updatedCards = cards.map((card) =>
        card.id === id ? { ...card, flipped: true } : card
      );
      setCards(updatedCards);
      setFlippedCards([...flippedCards, id]);

      const [firstCardId, secondCardId] = flippedCards;
      const firstCard = cards.find((card) => card.id === firstCardId);
      const secondCard = cards.find((card) => card.id === id);

      if (firstCard.value === secondCard.value) {
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          const unFlippedCards = cards.map((card) =>
            card.id === firstCardId || card.id === id
              ? { ...card, flipped: false }
              : card
          );
          setCards(unFlippedCards);
          setFlippedCards([]);
        }, 1000);
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
