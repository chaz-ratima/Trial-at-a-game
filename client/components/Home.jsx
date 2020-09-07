import React from 'react'
import {Link} from 'react-router-dom'

import BentoBoy from './BentoBoy'

const Home = () => {
    return (
        <div className="Home-title-text" >
            <div className="centerText">
                <h1 className="home-Title">The tale of Bento-Boy</h1>
                <p className="home-Text"> You are now Bento-Boy, the Bento box Courier.</p>
            </div>
            <BentoBoy />
            <br></br>
            <div className="centerText">
                <Link to='/name' style={{ textDecoration: 'none', padding: '5px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }}>Press Here to advance!</Link>
            </div>
        </div>
    )
}

export default Home