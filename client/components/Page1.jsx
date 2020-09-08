import React from 'react'
import {Link} from 'react-router-dom'

class Page1 extends React.Component {

    state = {
        showText: false,
        showButton: true,
        showNextPageButton: false
    }

    displayHandler = () => {
        this.setState({showText: true, showButton: false, showNextPageButton: true})
    }

    render () {
        return (
            <div>
                <div className="Scribe-text alignment">
                    <h1>1.</h1>
                    <p className="othersText">"Psst.<br/>Over Here."</p>
                    
                    {this.state.showButton && <button onClick={this.displayHandler}>Next</button>}
                    {this.state.showText && <p className="othersText">"Me and you... We're the only ones left."</p>}

                    <br></br>
                    {this.state.showNextPageButton && <Link to='/page2' style={{ textDecoration: 'none', padding: '5px 10px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }}>Press!</Link>}
                </div>
            </div>
        )
    }
}

export default Page1
        
    // Attempt at making a button show the next set of text
    // <button onClick={displayText}>continue?</button>
    // <p className="hiddenText">Me and you... We're the only ones left.</p>
    // displayText = () => {
    //     let text = document.getElementsById(hiddenText1)
    //     text.style.display = 'block'
    // }