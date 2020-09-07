import React,{ Component } from 'react'
import { HashRouter, Switch, Route} from 'react-router-dom'
import Register from './pages/Register/Index'
import Login from './pages/Login/Index'
import Main from './pages/Main/Index'

export default class App extends Component {
    render () {
        return(
            <HashRouter>
            <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route component={Main} />
            </Switch>
            </HashRouter>
        )
    }
}