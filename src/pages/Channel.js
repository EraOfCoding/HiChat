import React, { useEffect, useState } from 'react'
import MessageContainer from '../components/MessageContainer'

import '../style/Channel.css'

function Channel({ user = null, db = null, rf = null, signOut = null }) {
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
                    {messages.map(message => {
                        return (
                            <MessageContainer
                                key={message.key}
                                className="message"
                                text={message.text}
                                username={user.displayName}
                                profile={user.photoURL}
                            />
                        )
                    })}
                    < span ref={rf} />
                </div>
            </div>
            <button onClick={signOut} id="signout">Sign Out</button>
        </div >
    )
}

export default Channel