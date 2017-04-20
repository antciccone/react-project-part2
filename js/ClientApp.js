import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Title from './Title'
import Post from './Post'
import Main from './Main'

import '../public/normalize.scss'
import '../public/style.scss'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Match exactly pattern='/messages' component={Main} />
      </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('app'))
