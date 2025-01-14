import {HashRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth'
import Dash from './Components/Dash'
import Form from './Components/Form'
import Post from './Components/Post'

export default(
    <switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/dash' component={Dash}/>
        <Route path='/post/:id' component={Post}/>
        <Route path='/form' component={Form}/>
    </switch>
)  