import React, { useEffect, useState } from 'react'
import MessageContainer from '../components/MessageContainer'

import '../style/Channel.css'

function Channel({ db = null, rf = null, signOut = null }) {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (db) {
            const unsubscribe = db
                .collection('messages')
                .orderBy('createdAt')
                .limit(100)
                .onSnapshot(querySnapdhot => {
                    const data = querySnapdhot.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                    setMessages(data)
                })

            return unsubscribe
        }
    }, [db])

    return (
        <div className="channel-container">
            <div id="bg">
                <div className="channel">
                    <div className="msg-start">
                        <h1>Welcome to HiChat</h1>
                        <p>Hi chat! This is a beginning of our conversation.</p>
                        <hr />
                    </div>
                    {messages.map(message => {
                        return (
                            <MessageContainer
                                key={message.key}
                                className="message"
                                text={message.text}
                                username={message.username}
                                profile={message.photoURL}
                            />
                        )
                    })}
                    <span className="msg-bottom" ref={rf} />
                </div>
            </div>
        </div >
    )
}

export default Channel