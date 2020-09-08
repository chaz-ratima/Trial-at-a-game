import React from 'react'
import {Link} from 'react-router-dom'

import Character from './Character'

const Home = () => {
    return (
        <div className="Home-title-text" >
            <div>
                <h1 className="home-Title">Do it</h1>
            </div>
            <Character />
            
            <br></br>
            <div>
                <Link to='/name' style={{ textDecoration: 'none', padding: '5px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }}>Press Here to advance!</Link>
            </div>
        </div>
    )
}

export default Home