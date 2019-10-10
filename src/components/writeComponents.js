import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { translateNumber } from '../translate';
import {SectionHomeBox} from "./sectionHomeBox"
import {SubjetBar} from "./subjectBar"
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import hanzi from "../images/hanzi.png";
import number from "../images/number.png";
import vocabulary from "../images/vocabulary.png";


export class Image extends React.Component {
    constructor(props){
        super(props)
        this.state = {image: props.image}
    }
    render() {
        return (
            <div class ="col-6 offset-md-3">
                <img src={this.state.image} width="100%" height="500" style={{"margin-bottom":"50px"}} />
            </div>
            );
  }
}

export class Title extends React.Component {
    constructor(props){
        super(props)
        this.state = {text: props.text}
    }
    render() {
        return (
            <div >
                <h1 className="h7" style={{"text-align":"center"}} > {this.state.text} </h1>
            </div>
            );
  }
}


export class SubTitle extends React.Component {
    constructor(props){
        super(props)
        this.state = {text: props.text}
    }
    render() {
        return (
            <div class ="offset-md-1">
                <h3 className="h7"> {this.state.text} </h3>
            </div>
            );
  }
  }


export class Paragraph extends React.Component {
    constructor(props){
        super(props)
        this.state = {text: props.text}
    }
    render() {
        return (
            <div class ="col-10  offset-md-1">
                <h5 className="h7"> {this.state.text} </h5>
            </div>
            );
  }
}
