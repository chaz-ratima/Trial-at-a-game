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
        this.setState({heroName: name.value})
    }

    render () {
        {console.log(this.state)}
        return (
            <div className="hero-name-enter" class="centerText">
                <Character />
                
                <br></br>
                <label>Insert Hero Name: </label>
                <input id="name" type="text" value={this.state.heroName} onChange={this.handleChange} />
                <Link to='/page'><button onClick={this.nameWrite}>Submit</button></Link>
            </div>
        )
    }
}

export default HeroName