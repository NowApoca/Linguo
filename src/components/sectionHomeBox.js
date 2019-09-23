import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import { translate } from '../translate';
import { Button } from 'react-bootstrap';

export class SectionHomeBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {subjet:props.subjet, image:props.image, date: props.date, text: props.text}
    }
    render() {
        return (
            <div className=".col-md-6" style={{margin:"30px"}}>
                <div className="row">
                    <img src={this.state.image} width="95%" height="65%" style={{"margin":"10px"}} />
                        <div class ="col-6">
                            <h6> {this.state.subjet} </h6>
                        </div>
                        <div class ="col-6">
                            <h6 > {this.state.date} </h6>
                        </div>

                </div>
                <div classname="row">
                    <h6 > {this.state.text} </h6>
                </div>
            </div>
            );
  }
  }
