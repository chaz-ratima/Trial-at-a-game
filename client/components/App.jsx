import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Page1 from './Page1'
import HeroName from './HeroName'
import Intro from './Intro'

const App = () => {
    return (
        <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/name' component={HeroName} />
            <Route exact path='/intro' component={Intro} />
            <Route exact path='/page1' component={Page1} />
        </div>
    )
}

export default App