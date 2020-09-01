import React from 'react'

import BentoBoy from './BentoBoy'
import Page from './Page'
import { Link } from 'react-router-dom'

class NameHero extends React.Component {

    state = {
        heroName: "Alex"
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
            <div>
                <BentoBoy />
                <label>Insert Hero Name: </label>
                <input id="name" type="text" value={this.state.heroName} onChange={this.handleChange} />
                <Link to='/page'><button onClick={this.nameWrite}>Submit</button></Link>
            </div>
        )
    }
}

export default NameHero