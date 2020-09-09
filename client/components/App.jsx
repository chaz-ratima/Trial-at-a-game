import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Intro from './Intro'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3A from './Page3A'
import Page3B from './Page3B'

const App = () => {
    return (
        <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/intro' component={Intro} />
            <Route exact path='/page1' component={Page1} />
            <Route exact path='/page2' component={Page2} />
            <Route exact path='/page3A' component={Page3A} />
            <Route exact path='/page3B' component={Page3B} />
        </div>
    )
}

export default App