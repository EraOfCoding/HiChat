import React from 'react'
import '../style/Loading.css'

function Loading() {
    const phrases = [
        "Did you know that creator is a 13 years old student?",
        "By the way do you know what Karlson is?",
        "Please give me 100% on SAT xd",
        "Tatakae, tatakae means fight, fight",
        "Did you know that I used React and firebase to create this web app?"
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