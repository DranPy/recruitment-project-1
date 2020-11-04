import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './components/Layout'
import RouteSwitcher from './components/RouteSwitcher'
import { CardProvider } from 'context/CardContext'

import 'assets/stylesheets/app.scss'
import 'assets/fonts/fontAwesome'

const App: FC = () => {
  return (
    <Router>
      <CardProvider>
        <Layout>
          <RouteSwitcher />
        </Layout>
      </CardProvider>
    </Router>
  )
}

export default App
