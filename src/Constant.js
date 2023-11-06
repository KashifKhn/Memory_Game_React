import Bat from './assets/Images/Bat.png'
import Bones from './assets/Images/Bones.png'
import Cauldron from './assets/Images/Cauldron.png'
import Dracula from './assets/Images/Dracula.png'
import Eye from './assets/Images/Eye.png'
import Ghost from './assets/Images/Ghost.png'
import Pumpkin from './assets/Images/Pumpkin.png'
import Skull from './assets/Images/Skull.png'
import { nanoid } from 'nanoid'

export const unShuffledCards = [
    {
        imgSrc: Bat,
        flipped: false,
        value: 'bat',
        matched: false,
        id: nanoid()
    },
    {
        imgSrc: Bones,
        flipped: false,
        value: "bones",
        matched: false,
        id: nanoid()
    },
    {
        imgSrc: Cauldron,
        flipped: false,
        value: "cauldron",
        matched: false,
        id: nanoid()
    },
    {
        imgSrc: Dracula,
        flipped: false,
        value: "dracula",
        matched: false,
        id: nanoid()
    },
     {
        imgSrc: Eye,
        flipped: false,
        value: "eye",
        matched: false,
        id: nanoid()
    },
    {
        imgSrc: Ghost,
        flipped: false,
        value: "ghost",
        matched: false,
        id: nanoid()
    },
    {
        imgSrc: Pumpkin,
        flipped: false,
        value: "pumpkin",
        matched: false,
        id: nanoid()
    },
    {
        imgSrc: Skull,
        flipped: false,
        value: "skull",
        matched: false,
        id: nanoid()
    },
    {
        imgSrc: Bat,
        flipped: false,
        value: 'bat',
        matched: false,
        id: nanoid()
    },
    {
        imgSrc: Bones,
        flipped: false,
        value: "bones",
        matched: false,
        id: nanoid()
    },
    {
        imgSrc: Cauldron,
        flipped: false,
        value: "cauldron",
        matched: false,
        id: nanoid()
    },
    {
        imgSrc: Dracula,
        flipped: false,
        value: "dracula",
        matched: false,
        id: nanoid()
    },
    {
        imgSrc: Eye,
        flipped: false,
        value: "eye",
        matched: false,
        id: nanoid()
    },
    {
        imgSrc: Ghost,
        flipped: false,
        value: "ghost",
        matched: false,
        id: nanoid()
    },
    {
        imgSrc: Pumpkin,
        flipped: false,
        value: "pumpkin",
        matched: false,
        id: nanoid()
    },
    {
        imgSrc: Skull,
        flipped: false,
        value: "skull",
        matched: false,
        id: nanoid()
    },
]

export function handleShuffledCards(cards) {
    const sortCard = cards.sort(() => Math.random() - 0.5);
    const newArray = [...sortCard];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export const shuffledCards = handleShuffledCards(unShuffledCards);