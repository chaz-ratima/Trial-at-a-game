import React from 'react'
import { Link } from 'react-router-dom'

class Intro extends React.Component {

    render() {
        return (
            <div className="intro-Text">
                <p>
                    Introduction to the story.
                </p>

                <br></br>
                <Link to='/page1' style={{ textDecoration: 'none', padding: '5px 10px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }}>Press To Start!</Link>
            </div>
        )
    }
}

export default Intro