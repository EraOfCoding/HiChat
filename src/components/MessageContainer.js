import React from 'react';
import '../style/MessageContainer.css'

function MessageContainer({ key = null, text = "", profile = null, username = "", time = [] }) {
    return (
        <div key={key} className="msg-container">
            <img className="profile" src={profile} />
            <div className="msg">
                <h6 className="username">{username} <p>{time}</p></h6>
                <p className="text" key={key}>{text}</p>
            </div>
        </div>
    )
}

export default MessageContainer