import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Page1 from './Page1'
import HeroName from './HeroName'

const App = () => {
    return (
        <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/page' component={Page1} />
            <Route exact path='/name' component={HeroName}/>
        </div>
    )
}

export default App