//import logo from './logo.svg';
//import './App.css';
import {Component} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './style.css'

import Global from './components/Global'
import SriLanka from './components/SriLanka'
import Header from './components/Header'

class App extends Component {

  render(){
    return(
      <BrowserRouter>
      <div className="container-fluid">
        <Header/>
        <Switch>
          <Route component={SriLanka} exact={true} path='/' />
          <Route component={Global} path='/global' />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
