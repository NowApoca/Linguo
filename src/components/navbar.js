import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../images/logo.png";
import { Button } from 'react-bootstrap';

export class NavBar extends React.Component {
  render() {
    return (
        <div>
            <div className="container">
                <div className="row navBar" >
                    <div className="col-2"> <img src={logo} alt="Smiley face" height="42" width="42"></img> </div>
                    <div className="col-2"> <Button className="navBarButton">Home</Button></div>
                    <div className="col-2"> <Button className="navBarButton">Teoría</Button></div>
                    <div className="col-2"> <Button className="navBarButton">Aplicaciones</Button></div>
                    <div className="col-2"> <Button className="navBarButton">Blogs</Button></div>
                    <div className="col-2"> <Button className="navBarButton">Contacto</Button></div>
                </div>
            </div>
            <div style={{height:"30px"}}></div>
        </div>);
  }
}

export default NavBar;