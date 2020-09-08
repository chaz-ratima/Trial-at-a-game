import React from 'react'
import { Link } from 'react-router-dom'

class Intro extends React.Component {

    render() {
        return (
            <div className="intro-Text">
                <p>
                    Introduction to the game or story.
                </p>

                <br></br>
                <Link to='/page1' style={{ textDecoration: 'none', padding: '5px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }}>Press!</Link>
            </div>
        )
    }
}

export default Intro