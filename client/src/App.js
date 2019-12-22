import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//PAGINAS
import IndexPage from './pages/IndexPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"  exact component={IndexPage} />
        <Route path="/bybiot/dashboard" component={DashboardPage} />
      </Switch>      
    </Router>
  );
}

export default App;
