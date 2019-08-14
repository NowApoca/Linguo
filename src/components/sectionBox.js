import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import { translate } from '../translate';
import { Button } from 'react-bootstrap';
import logo from "../images/logo.png";

export class SectionBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {subjet:props.subjet}
    }
    render() {
        return (
            <div className="col-sm-3" style={{"border":"15px double grey","background-color":"white", margin:"30px"}}>
                <div style={{height:"240px"}}>
                    <Button style={{width:"100%","background-color":"grey","margin-top":"10px","margin-bottom":"10px"}}> {this.state.subjet} </Button>
                    <img src={logo} width="100%" height="65%" />
                </div>
            </div>
            );
  }
  }
