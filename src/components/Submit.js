import React from 'react';
import '../style/Submit.css'

function Submit({ refer = null, submit = null, text = "", setText = null }) {
    return (
        <div ref={refer}>
            <form className="form-container" onSubmit={submit}>
                <input className="holder" value={text} onChange={(e) => setText(e.target.value)} placeholder="Say hi" />
                <button className="submit" type="submit" disabled={!text}>🌀</button>
            </form>
        </div>
    )
}

export default Submit