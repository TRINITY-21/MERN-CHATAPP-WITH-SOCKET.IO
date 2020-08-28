import React from 'react'
import { FaCode } from "react-icons/fa";

function LandingPage() {
    return (
        <>
            <div className="app">
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <h1>Login to begin chats</h1>
                <span style={{ fontSize: '2rem' }}>Let's Start Coding!</span>
            </div>
            <div style={{ float: 'right' }}></div>
        </>
    )
}

export default LandingPage
