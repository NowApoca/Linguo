import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import { translate } from '../translate';
import { Button } from 'react-bootstrap';

export class SectionBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {subjet:props.subjet, image:props.image, date: props.date}
    }
    render() {
        return (
            <div className="col-sm-3" style={{"border":"12px double grey","border-radius": "35px","background-color":"white", margin:"30px"}}>
                <div className="row" style={{height:"240px"}}>
                    <img src={this.state.image} width="95%" height="65%" style={{"margin":"10px"}} />
                        <div class ="col-6">
                            <button className="blogButton" > {this.state.subjet} </button>
                        </div>
                        <div class ="col-6">
                            <h6 > {this.state.date} </h6>
                        </div>
                </div>
            </div>
            );
  }
  }
