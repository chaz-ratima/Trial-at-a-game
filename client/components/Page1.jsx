import React from 'react'
import {Link} from 'react-router-dom'

import BentoBoy from './BentoBoy'

const Page = () => {

    return (
        <div className="centerText">
            <div className="Scribe">
                <h1>Turn 1:</h1>
                <p class="othersText">
                    "Psst.<br/>Over Here"
                </p>
                <Link to='/' style={{ textDecoration: 'none', padding: '5px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }}>Press!</Link>
            </div>
        </div>
    )
}

export default Page