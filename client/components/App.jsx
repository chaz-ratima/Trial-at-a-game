import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Page from './Page'

const App = () => {
    return (
        <>
        <Route exact path='/' component={Home} />
        <Route exact path='/page' component={Page} />
        </>
    )
}

export default App