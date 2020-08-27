import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <div class="centerText" >
        <h1 className="homeTitle centerText">The tale of Bento-Boy</h1>
        <p class="homeText centerText"> You are now Bento-Boy, the Bento.</p>
        <Link to='/Page' style={{ textDecoration: 'none', padding: '5px', border: '1px solid black', borderRadius: '20px' }}>Press Here to advance!</Link>
        </div>
    )
}

export default Home