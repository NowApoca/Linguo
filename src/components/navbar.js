import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../images/logo.png";

export class NavBar extends React.Component {
  render() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-2"> <img src={logo} alt="Smiley face" height="42" width="42"></img> </div>
                    <div className="col-1"> <h3> Home </h3> </div>
                    <div className="col-1"> <h3> Teoría</h3> </div>
                    <div className="col-2"> <h3> Aplicaciones</h3> </div>
                    <div className="col-1"> <h3> Blogs </h3> </div>
                    <div className="col-2"> <h3> Aaa </h3> </div>
                </div>
            </div>
            <div style={{height:"30px"}}></div>
        </div>);
  }
}

export default NavBar;