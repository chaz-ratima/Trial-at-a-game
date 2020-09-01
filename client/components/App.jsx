import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Page from './Page'
// import NameHero from './NameHero'

const App = () => {
    return (
        <>
            <Route exact path='/' component={Home} />
            <Route exact path='/page' component={Page} />
            {/* <Route exact path='/name' component={NameHero}/> */}
        </>
    )
}

export default App