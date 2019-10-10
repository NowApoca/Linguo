import React from 'react';
import './App.css';
import {translate} from "./translate"
import {Dropdown,Navbar,Nav, NavDropdown,Form,Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./images/logo.png";
import {NavBar} from "./components/navbar"
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import {Teoric} from "./components/teorics"
import {Numbers} from "./components/number"
import {Aplications} from "./components/applications"
import {Home} from "./components/home"
import {Article} from "./components/article"
import { Phrase } from './components/phrase';
import {Routes} from "./components/routes"

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {language:"en"}
    }
    changeLanguage(language){
      this.setState({
        language:language
      })
    }

  render() {
    console.log(this.state.language, "EN APP")
    return (
    <div >
    <Router> 
    <NavBar language={this.state.language} changeLanguage={this.changeLanguage.bind(this)}/>
      <Switch>
          <Routes language={this.state.language}/>
      </Switch>
    </Router> 
    </div>);
  }
}

export default App;