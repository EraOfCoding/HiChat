import React from 'react';
import '../style/MessageContainer.css'

function MessageContainer({ key = null, text = "", profile = null, username = "" }) {
    return (
        <div className="msg-container">
            <img className="profile" src={profile} />
            <div className="msg">
                <h6>{username}</h6>
                <p key={key}>{text}</p>
            </div>
        </div>
    )
}

export default MessageContainer