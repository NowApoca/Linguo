import React from 'react';
import './App.css';
import {translate} from "./translate"
import {Numbers} from "./components/number"
import {Teoric} from "./components/teorics"
import {Dropdown,Navbar,Nav, NavDropdown,Form,Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./images/logo.png";
import {NavBar} from "./components/navbar"
import {Home} from "./components/home"
import Aplications from './components/aplications';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {language:"eng"}
    }

  render() {
    return (
    <div >
    <NavBar language={this.state.language}/>
    </div>);
  }
}

export default App;