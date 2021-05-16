import { Component } from 'react'
import {HashRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth'
import Dash from './Components/Dash'
import Form from './Components/Form'
import Post from './Components/Post'

class Switch extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <switch>
                <Route>  </Route>
                <Route>  </Route>
                <Route>  </Route>
                <Route>  </Route>
            </switch>
        )
    }
}

export default Switch