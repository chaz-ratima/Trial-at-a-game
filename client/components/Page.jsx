import React from 'react'
import {Link} from 'react-router-dom'

import BentoBoy from './BentoBoy'

const Page = () => {

    return (
        <div className="rightText">
            <p className="paragraphText"> You were eaten.</p>
            <Link to='/' style={{ textDecoration: 'none', padding: '5px', border: '1px solid black', borderRadius: '20px' }}>You died. Press Here to Restart!</Link>
            <div className="heroEntity">
                <BentoBoy />
            </div>
        </div>
    )
}

export default Page