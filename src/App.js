import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import InputContext from './components/ReactContext/index'
import './App.css'
import HomeRoute from './components/HomeRoute/index'
import RegisterRoute from './components/RegisterRoute/index'
import NotFoundRoute from './components/NotFoundRoute/index'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {userName: '', choice: '', isRegistered: true}

  onUnction = (userName, choice, isRegistered) => {
    this.setState({userName, choice, isRegistered})
  }

  render() {
    const {userName, choice, isRegistered} = this.state

    return (
      <InputContext.Provider
        value={{userName, choice, isRegistered, changeValues: this.onUnction}}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/register" component={RegisterRoute} />
          <Route component={NotFoundRoute} />
        </Switch>
      </InputContext.Provider>
    )
  }
}

export default App
