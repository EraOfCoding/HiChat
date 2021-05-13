import React from 'react';
import '../style/Submit.css'

function Submit({ refer = null, submit = null, text = "", setText = null }) {
    return (
        <div ref={refer}>
            <div className="form-container">
                <form className="form" onSubmit={submit}>
                    <input className="holder" value={text} onChange={(e) => setText(e.target.value)} placeholder="Say Hi" />
                    <button className="submit" type="submit" disabled={!text}>🌀</button>
                </form>
            </div>
        </div>
    )
}

export default Submit