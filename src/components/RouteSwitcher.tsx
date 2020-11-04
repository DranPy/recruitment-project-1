import React, { FC } from 'react'
import { Route, Switch } from 'react-router'
import { ROUTES } from '../routes'

const routesList = Object.values(ROUTES)

const RouteSwitcher: FC = () => {
  return (
    <Switch>
      {routesList.map((props, key) => (
        <Route {...props} key={key} />
      ))}
    </Switch>
  )
}

export default RouteSwitcher
