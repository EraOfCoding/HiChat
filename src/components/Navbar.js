import React from 'react';
import '../style/Navbar.css'
import comet from '../images/comet.png'

function Navbar({ signout = null }) {
    return (
        <div className="footer">
            <h4 className="app-name">HiChat <img id="comet" src={comet} /> </h4>
            <div className="btn-container">
                <button className="nav-button" onClick={() => window.open('https://github.com/EraOfCoding/HiChat')}>About</button>
                <button className="nav-button" onClick={signout}>Sign Out</button>
            </div>
        </div>
    )
}

export default Navbar