import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import LoginFrom from './components/LoginForm'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={LoginFrom} />
    <Route component={NotFound} />
  </Switch>
)

export default App
