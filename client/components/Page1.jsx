import React from 'react'
import {Link} from 'react-router-dom'

import Character from './Character'

const Page = () => {

        

    return (
        <div className="centerText">
            <div className="Scribe">
                <h1>Turn 1:</h1>
                <p className="othersText">"Psst.<br/>Over Here"</p>
                
                <br></br>
                <Link to='/' style={{ textDecoration: 'none', padding: '5px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }}>Press!</Link>
            </div>
        </div>
    )
}

export default Page
        
    // { Attempt at making a button show the next set of text }
    // { <button onClick={displayText}>continue?</button> }
    // { <p className="hiddenText">Blah Blah Blah</p> }
    // function displayText() {
    //     let text = document.getElementsByClassName("hiddenText");
    //     text.style.display = 'block';
    // }