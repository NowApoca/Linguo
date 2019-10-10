import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../images/logo.png";
import { Button } from 'react-bootstrap';
import { Route, Link, Switch} from 'react-router-dom'
import {Teoric} from "./teorics"
import {translate} from "../translate"
import {Numbers} from "./number"
import {Aplications} from "./applications"
import {Home} from "./home"
import {Article} from "./article"
import { Phrase } from './phrase';

function withProps(Component, props) {
    return function(matchProps) {
      return <Component {...props} {...matchProps} />
    }
  }

export class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state ={language: props.language};
        this.changeLanguage = props.changeLanguage;
    }

    componentWillReceiveProps(props) {
      this.setState({ language: props.language });  
  }
  changeLanguageApp(language){
    this.setState({
      language: language
    })
    this.changeLanguage(language)
  }
  render() {
    return (
        <div>
                <div className="container">
                    <div className="row navBar" >
                        <div className="col-2"> <img src={logo} alt="Smiley face" height="42" width="42"></img> </div>
                        <div className="col-1"> <Link to="/"> <button className="navBarButton" >{translate("home",this.state.language)}</button></Link></div>
                        <div className="col-1"> <Link to="/teorics">  <button className="navBarButton" >{translate("theorics",this.state.language)}</button></Link></div>
                        <div className="col-2-md"> <Link to="/applications">  <button className="navBarButton" >{translate("applications",this.state.language)}</button></Link></div>
                        <div className="col-1-sm"> <Link to="/downloads">  <button className="navBarButton" >{translate("downloads",this.state.language)}</button></Link></div>
                        <div className="col-1-sm"> <Link to="/about">  <button className="navBarButton" >{translate("aboutus",this.state.language)}</button></Link></div>
                        <div className="col-1-sm">  <button className="navBarButton" onClick={() => this.changeLanguageApp("es")}>{translate("es",this.state.language)}</button> </div>
                        <div className="col-1-sm">  <button className="navBarButton" onClick={() => this.changeLanguageApp("zh")}>{translate("zh",this.state.language)}</button> </div>
                        <div className="col-1-sm">  <button className="navBarButton" onClick={() => this.changeLanguageApp("en")}>{translate("en",this.state.language)}</button> </div>
                    </div>
                </div>
                <div style={{height:"30px"}}></div> 
        </div>);
  }
}

export default NavBar;