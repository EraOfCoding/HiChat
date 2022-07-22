import React from 'react'
import '../style/Loading.css'
import calculateAge from '../utils/calculateAge'

function Loading() {
    const phrases = [
        `Did you know that the creator is a ${calculateAge()} year old student?`,
        "Every 60 seconds in Africa a minute passes.",
        "A wise man once said: Hippity hoppity your code now is my property.",
        "By the way do you know what Karlson is?",
        "Please give me 100% on SAT xd",
        "Tatakae, tatakae means fight, fight",
        "Did you know that I used React and Firebase to create this web app?"
    ]

    const phrase = phrases[Math.floor(Math.random() * phrases.length)]

    return (
        <div className="loading-container">
            <div className="loading"></div>
            <h5 className="rand-text">{phrase}</h5>
        </div>
    )
}

export default Loading