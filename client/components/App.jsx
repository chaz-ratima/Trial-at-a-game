import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Intro from './Intro'
import Page1 from './Page1'
import Page2 from './Page2'

const App = () => {
    return (
        <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/intro' component={Intro} />
            <Route exact path='/page1' component={Page1} />
            <Route exact path='/page2' component={Page2} />
        </div>
    )
}

export default App