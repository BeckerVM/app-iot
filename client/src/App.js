import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//PAGINAS
import IndexPage from './pages/IndexPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/"  exact component={IndexPage} />
          <Route path="/bybiot/dashboard" component={DashboardPage} />
        </Switch>      
      </Router>
    </Provider>
  )
}

export default App
