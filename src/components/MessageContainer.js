import React from 'react';
import '../style/MessageContainer.css'

function MessageContainer({ key = null, text = "", profile = null, username = "", time = [] }) {
    let ghost = ""
    return (
        <div key={key} className="msg-container">
            <img className="profile" src={profile} />
            <div className="msg">
                <h6 className="username">{username} <p>{time}</p></h6>
                <p className="text" key={key}>
                    {text.split(' ').map(
                        word => word.startsWith('https://') ?
                            <pre><a className="link" key={key} onClick={() => window.open(text)}> {word}</a></pre> :
                            <pre> {word}</pre>
                    )}
                </p>
            </div>
        </div>
    )
}

export default MessageContainer