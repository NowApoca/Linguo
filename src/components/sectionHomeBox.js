import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import { translate } from '../translate';
import { Button } from 'react-bootstrap';

export class SectionHomeBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {subject:props.subject, image:props.image, date: props.date, text: props.text, language: props.language}
    }
    componentWillReceiveProps(props) {
        this.setState({ language: props.language });  
    }
    render() {
        return (
            <div class="row" style={{"border-bottom-style":"dotted"}}>
                <div class ="col-6 offset-md-3">
                    <div className=".col-md-6" style={{margin:"30px"}}>
                        <div className="row">
                            <img src={this.state.image} width="95%" height="65%" style={{"margin":"10px"}} />
                            <div class ="col-6">
                                <h6> {translate(this.state.subject, this.state.language)} </h6>
                            </div>
                            <div class ="col-6">
                                <h6 > {this.state.date} </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class ="col-10  offset-md-1">
                        <div classname="row">
                            <h6 className="fontStyle"> {this.state.text} </h6>
                        </div>
                </div>
                </div>
            );
  }
  }
