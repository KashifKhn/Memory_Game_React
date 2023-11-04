import React, { useState } from 'react'
import cobWeb from '../assets/Images/Cobweb.png'
import cobWebGray from '../assets/Images/CobwebGrey.png'
import spider from '../assets/Images/Spider.png'


const Card = (props) => {
    const {isFlipped} = props;

    function handleClick(id) {
        props.holdCard(id);
    }

    return (
        <div
            className={`
                card
                relative w-[126px] h-[175px] flex items-center rounded-sm 
                ${isFlipped ? 'border-orange-light' : "border-orange-dark"}  
                border-2 justify-center 
                ${isFlipped ? 'bg-orange-light' : 'bg-black'} 
                transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(-180deg)]' : '[transform:rotateY(0deg)]'}
            `}
            onClick={() => handleClick(props.id)}
        >
            <img className='absolute bottom-0 right-0 w-[45px] h-[45px] rotate-90' src={isFlipped ? cobWebGray : cobWeb} alt="" />
            <img className='absolute top-0 right-0 w-[45px] h-[45px] ' src={isFlipped ? cobWebGray : cobWeb} alt="" />
            <img className='absolute top-0 left-0 w-[45px] h-[45px] -rotate-90' src={isFlipped ? cobWebGray : cobWeb} alt="" />
            <img className='absolute bottom-0 left-0 w-[45px] h-[45px] -rotate-180' src={isFlipped ? cobWebGray : cobWeb} alt="" />
            {isFlipped ?
                <img className='self-center' src={props.imgSrc} alt="" /> :
                <img className='self-start' src={spider} alt="" />
            }
        </div>
    )
}

export default Card
