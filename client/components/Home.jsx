import React from 'react'
import {Link} from 'react-router-dom'

import Character from './Character'
import HeroName from './HeroName'

class Home extends React.Component {

    state = {
        showHeroName: false,
        showButton: true
    }

    displayHandler = () => {
        this.setState({showHeroName: true, showButton: false})
    }

    render() {
        return (
            <div className="Home-title-text" >
                <div>
                    <h1 className="home-Title">Title</h1>
                </div >
                <div className="start-Button">
                    <Character />
                    
                    <br></br>
                    {this.state.showButton && <button onClick={this.displayHandler}>Press Here to advance!</button>}

                    {this.state.showHeroName && <HeroName />}
                </div>
            </div>
        )
    }
}

export default Home

// <Link to='/name' style={{ textDecoration: 'none', padding: '5px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }}