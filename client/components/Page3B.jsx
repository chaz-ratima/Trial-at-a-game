import React from 'react'
import {Link} from 'react-router-dom'

class Page3B extends React.Component {

    // state = {
    //     showText: false,
    //     showButton: true,
    //     showNextPageButton: false
    // }

    // displayTextHandler = () => {
    //     this.setState({showText: true, showButton: false, showNextPageButton: true})
    // }

    render () {
        return (
            <div>
                <div className="Scribe-text alignment">
                    <h1>3.</h1>
                    <div>
                        <p className="paragraph-text">
                            He Dead.
                        </p>
                    </div>
                    <Link to='/' style={{ textDecoration: 'none', padding: '5px 10px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }}>Home</Link>
                </div>
            </div>
        )
    }
}

export default Page3B