import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../images/logo.png";
import { Button } from 'react-bootstrap';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import {Teoric} from "./teorics"
import {translate} from "../translate"
import {Numbers} from "./number"
import {Aplications} from "./aplications"
import {Home} from "./home"
import { Phrase } from './phrase';

function withProps(Component, props) {
    return function(matchProps) {
      return <Component {...props} {...matchProps} />
    }
  }

export class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state ={mountChild: props.mountChild};
    }
  render() {
    return (
        <div>
            <Router> 
                <div className="container">
                    <div className="row navBar" >
                        <div className="col-2"> <img src={logo} alt="Smiley face" height="42" width="42"></img> </div>
                        <div className="col-2"> <Link to="/"> <button className="navBarButton" >Home</button></Link></div>
                        <div className="col-2"> <Link to="/teorics">  <button className="navBarButton" >Teoría</button></Link></div>
                        <div className="col-2"> <Link to="/applications">  <button className="navBarButton" >Aplicaciones</button></Link></div>
                        <div className="col-2"> <Link to="/about">  <button className="navBarButton" >¿?</button></Link></div>
                    </div>
                </div>
                <div style={{height:"30px"}}></div> 
                <Switch> 
                    <Route path="/teorics" component={Teoric} />
                    <Route path="/applications/number" component={Numbers} />
                    <Route path="/applications/phrase" component={Phrase} />
                    <Route path="/applications" component={Aplications} />
                    <Route path="/about" component={withProps(Teoric, { theme: 'main' })} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </div>);
  }
}

export default NavBar;