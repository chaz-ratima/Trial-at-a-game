import React from 'react'
import {Link} from 'react-router-dom'

const Page = () => {
    return (
        <div class="centerText">
        <p> You were eaten.</p>
        <Link to='/' style={{ textDecoration: 'none', padding: '5px', border: '1px solid black', borderRadius: '20px' }}>You died. Press Here to Restart!</Link>
        </div>
    )
}

export default Page