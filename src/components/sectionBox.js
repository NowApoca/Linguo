import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import { translate } from '../translate';
import { Button } from 'react-bootstrap';

export class SectionBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {subjet:props.subjet, image:props.image}
    }
    render() {
        return (
            <div className="col-sm-3" style={{"border":"12px double grey","border-radius": "35px","background-color":"white", margin:"30px"}}>
                <div style={{height:"240px"}}>
                    <img src={this.state.image} width="100%" height="65%" style={{"margin-top":"10px","margin-bottom":"10px"}} />
                    <button className="blogButton" > {this.state.subjet} </button>
                </div>
            </div>
            );
  }
  }
