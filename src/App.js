import logo from './logo.svg'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Model from './screens/Model';
function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route exact path="/option">
        <Model/>
      </Route>
      <Route path="/">
        <HomeScreen/>
      </Route>
      </Switch>
    </div>
    </Router>
  )
}

export default App
