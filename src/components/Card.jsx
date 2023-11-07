import React, { useState } from 'react'
import cobWeb from '../assets/Images/Cobweb.png'
import cobWebGray from '../assets/Images/CobwebGrey.png'
import spider from '../assets/Images/Spider.png'


const Card = (props) => {
    const {isFlipped, matched} = props;

    function handleClick(id) {
        props.holdCard(id);
        
    }

    return (
        <button
            className={`
                card
                relative w-[126px] h-[175px] flex items-center rounded-sm 
                ${isFlipped ? 'border-none' : "border-orange-dark"}  
                border justify-center 
                ${isFlipped ? 'bg-orange-light' : 'bg-black'} 
                transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(-180deg)]' : '[transform:rotateY(0deg)]'}
                overflow-hidden
                group
            `}
            disabled={isFlipped || matched}
            onClick={() => handleClick(props.id)}
        >
            <img className={`${!isFlipped &&' group-hover:scale-110 transition-all'} ${matched && 'animate-pulse transition-all'} absolute bottom-0 right-0 w-[45px] h-[45px] rotate-90`}src={isFlipped ? cobWebGray : cobWeb} alt="" />
            <img className={`${!isFlipped &&' group-hover:scale-110 transition-all'} ${matched && 'animate-pulse transition-all'} absolute top-0 right-0 w-[45px] h-[45px] `} src={isFlipped ? cobWebGray : cobWeb} alt="" />
            <img className={`${!isFlipped &&' group-hover:scale-110 transition-all'} ${matched && 'animate-pulse transition-all'} absolute top-0 left-0 w-[45px] h-[45px] -rotate-90`} src={isFlipped ? cobWebGray : cobWeb} alt="" />
            <img className={`${!isFlipped &&' group-hover:scale-110 transition-all'} ${matched && 'animate-pulse transition-all'} absolute bottom-0 left-0 w-[45px] h-[45px] -rotate-180`} src={isFlipped ? cobWebGray : cobWeb} alt="" />
            {isFlipped ?
                <img className={`self-center ${matched && 'animate-[wiggle_1s_ease-in-out_infinite] transition-all'}`} src={props.imgSrc} alt="" /> :
                <img className='transition-all self-start group-hover:scale-90 group-hover:-translate-y-2' src={spider} alt="" />
            }
        </button>
    )
}

export default Card
