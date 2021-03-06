import React, { Component } from 'react'
import { Route } from 'react-router'
import { isAdmin, shouldNotBeAuthenticated } from './auth'

import {
  Admin,
  Calendar,
  Home,
  Login,
  Page,
  Register,
} from './views'

export default class Routes extends Component {
  render() {
    return (
      <main role="main">
        <Route component={Home} exact={true} path="/" />
        <Route component={shouldNotBeAuthenticated(Login)} path="/login" />
        <Route component={shouldNotBeAuthenticated(Register)} path="/register" />
        <Route component={Calendar} path="/calendar" />
        <Route component={Page} path="/pages/:slug" />
        <Route component={isAdmin(Admin)} path="/admin" />
      </main>
    )
  }
}
