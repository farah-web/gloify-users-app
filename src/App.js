import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import Profile from './components/Profile'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/profile/:id" component={Profile}></Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;