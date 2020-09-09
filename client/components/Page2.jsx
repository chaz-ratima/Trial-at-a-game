import React from 'react'
import {Link} from 'react-router-dom'

class Page2 extends React.Component {

    state = {
        showText: false,
        showButton: true,
        showNextPageButton: false
    }

    displayTextHandler = () => {
        this.setState({showText: true, showButton: false, showNextPageButton: true})
    }

    render () {
        return (
            <div>
                <div className="Scribe-text alignment">
                    <h1>2.</h1>
                    <div>
                        <p className="paragraph-text">
                            Your head is hazy ,but your eyes can't help but drift to the direction of those said words. A man wearing a mask covering his lower face walks closer nonchalantly as if your two worlds were disconnected.
                            <br></br><span className="othersText">"There, There sweet child"</span> he says as he pets your cheek slowly.
                            <br></br><span className="othersText">"You'll join the rest of them"</span>
                        </p>
                    </div>
                    {this.state.showButton && <button onClick={this.displayTextHandler}>Next</button>}
                    {this.state.showText && <p className="othersText">"L-leaaave me.. Alone"</p>}

                    <br></br>
                    {this.state.showNextPageButton && <Link to='/page3A' style={{ textDecoration: 'none', padding: '5px 10px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }}>Save him!</Link> }
                    <br></br>
                    <br></br>
                    {this.state.showNextPageButton && <Link to='/page3B' style={{ textDecoration: 'none', padding: '5px 10px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }}>Kill him!</Link>}
                </div>
            </div>
        )
    }
}

export default Page2