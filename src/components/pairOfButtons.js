import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import { Button } from 'react-bootstrap';

export class PairButtons extends React.Component {
    constructor(props){
        super(props)
        this.state = { subjet1: props.subjet1, subjet2: props.subjet2}
    }
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-6">
                        <Button style={{margin:"10px"}}> {this.state.subjet1.subjet} </Button>
                </div>
                <div class="col-6">
                        <Button style={{margin:"10px"}}> {this.state.subjet2.subjet} </Button>
                    </div>
                </div>
            </div>
            );
  }
  }
