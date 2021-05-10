import React from 'react';
import '../style/Home.css'

function Home({ signin = null }) {
    return (
        <div className="home">
            <h1>Hichat - say hi to chat!</h1>
            <h5>- Simple, open source chat app -</h5>
            <button onClick={signin}>Sign In with Google</button>
            <a onClick={() => window.open('https://github.com/EraOfCoding/')}>- Github -</a>
        </div>
    )
}

export default Home