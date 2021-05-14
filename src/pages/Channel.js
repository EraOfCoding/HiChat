import React, { useEffect, useState, useRef } from 'react'
import MessageContainer from '../components/MessageContainer'

import '../style/Channel.css'

import { useSound } from 'use-sound'
import msgsound from '../audio/notification_sound.m4a'

function Channel({ auth = null, db = null }) {
    const [messages, setMessages] = useState([])

    const channelScrollref = useRef()

    const [sound] = useSound(msgsound)

    const buildDate = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"]

        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()
        let hours = d.getHours()
        let minutes = d.getMinutes()

        if (date / 10 <= 0) date = "${date}0"

        return `${hours}:${minutes}, ${date} ${month} ${year}`
    }

    useEffect(() => {
        if (db) {
            const unsubscribe = db
                .collection('messages')
                .orderBy('createdAt')
                .onSnapshot(querySnapdhot => {
                    const data = querySnapdhot.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                    setMessages(data)
                    channelScrollref.current.scrollIntoView({ behavior: 'smooth' })
                    if (auth !== null ? data[data.length - 1].username != auth.currentUser.displayName : false) sound()
                })

            return unsubscribe
        }
    }, [db])

    return (
        <div className="channel-container">
            <div id="bg">
                <div className="channel">
                    <div>
                        <div className="msg-start">
                            <h1>Welcome to HiChat</h1>
                            <p>Hi chat! This is the beginning of our conversation.</p>
                            <hr />
                        </div>
                        {messages.map(message => {
                            return (
                                <div key={message.key}>
                                    <MessageContainer
                                        key={message.key}
                                        className="message"
                                        text={message.text}
                                        username={message.username}
                                        profile={message.photoURL}
                                        time={message.createdAt !== null ? buildDate(message.createdAt.toDate()) : ""}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div ref={channelScrollref}></div>
                </div>
            </div>
        </div >
    )
}

export default Channel