import React from 'react'
import {Link} from 'react-router-dom'

import BentoBoy from './BentoBoy'

const Home = () => {
    return (
            <div className="centerText" >
                <h1 className="homeTitle">The tale of Bento-Boy</h1>
                <p className="homeText"> You are now Bento-Boy, the Bento box Courier.</p>
                <BentoBoy />
                <br></br>
                <Link to='/page' style={{ textDecoration: 'none', padding: '5px', border: '1px solid black', borderRadius: '20px' }}>Press Here to advance!</Link>
            </div>
    )
}

export default Home