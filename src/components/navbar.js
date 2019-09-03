import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../images/logo.png";
import { Button } from 'react-bootstrap';

export class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state ={mountChild: props.mountChild};
    }
    onClick(nextComponent){
        this.state.mountChild(nextComponent)
    }
  render() {
    return (
        <div>
            <div className="container">
                <div className="row navBar" >
                    <div className="col-2"> <img src={logo} alt="Smiley face" height="42" width="42"></img> </div>
                    <div className="col-2"> <button className="navBarButton" onClick={() => { this.onClick("index")}}>Home</button></div>
                    <div className="col-2"> <button className="navBarButton" onClick={() => { this.onClick("teoric")}}>Teoría</button></div>
                    <div className="col-2"> <button className="navBarButton" onClick={() => { this.onClick("number")}}>Aplicaciones</button></div>
                    <div className="col-2"> <button className="navBarButton" onClick={() => { this.onClick("phrase")}}>Blogs</button></div>
                    <div className="col-2"> <button className="navBarButton" onClick={() => { this.onClick("index")}}>Contacto</button></div>
                </div>
            </div>
            <div style={{height:"30px"}}></div>
        </div>);
  }
}

export default NavBar;