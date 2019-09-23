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
                    <div className="col-2"> <Link to="/aplications">  <button className="navBarButton" >Aplicaciones</button></Link></div>
                    <div className="col-2"> <Link to="/about">  <button className="navBarButton" >¿?</button></Link></div>
                </div>
            </div>
        <Switch> 
            <Route path="/teorics" component={Teoric} />
            <Route path="/aplications/number" component={Numbers} />
            <Route path="/aplications" component={Aplications} />
            <Route path="/about" component={Teoric} />
            <Route path="/" component={Home} />
        </Switch>
            <div style={{height:"30px"}}></div> </Router>
        </div>);
  }
}

export default NavBar;