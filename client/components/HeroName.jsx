import React from 'react'

import Character from './Character'
import { Link } from 'react-router-dom'

class HeroName extends React.Component {

    state = {
        heroName: "Choose Name"
    }

    handleChange = (event) => {
        this.setState({heroName: event.target.value})
    }

    nameWrite = (event) => {
        this.setState({heroName: event.heroName.value})
    }

    render () {
        return (
            <div className="hero-name-enter">
                <label>Insert Hero Name: </label>
                <input id="name" type="text" value={this.state.heroName} onChange={this.handleChange} />
                <Link to='/intro'><button onClick={this.nameWrite}>Submit</button></Link>
            </div>
        )
    }
}

export default HeroName