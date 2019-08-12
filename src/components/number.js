import React from 'react';
import '../App.css';
import {constants} from "../constant"
import { translateNumber } from '../translate';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import logo from "../images/logo.png";

var letterStyle = {
    padding: 10,
    margin: 10,
    display: "inline",
  };

export class Numbers extends React.Component {
    constructor(props){
        super(props)
        this.unMount = props.unMount
        this.state = {numberInText:0,numberRandom:-1,answered:false,response:false,maxNumber:100000000,language:props.language}
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleMaxNumberChange = this.handleMaxNumberChange.bind(this);
        this.handleVerify = this.handleVerify.bind(this);
        this.generateNumber = this.generateNumber.bind(this);
    }
    handleNumberChange(event){
        this.setState({numberInText: event.target.value});
    }
    handleMaxNumberChange(event){
        this.setState({maxNumber: parseInt(event.target.value)});
    }
    generateNumber(){
        let randNumber = String(Math.floor(Math.random()*this.state.maxNumber));
        this.setState({numberRandom: randNumber});
    }
    handleVerify(){
        if(this.state.numberInText == this.state.numberRandom){
            this.setState({answered:true,response:true})
        }else{
            this.setState({answered:true,response:false})
        }
    }
    render() {
        let translation;
        if(this.state.numberRandom > -1){
            translation = translateNumber(this.state.numberRandom,"NUMCHN")
        }
        return (

            <div>
            <div className="navBar">
                <img src={logo} alt="Smiley face" height="42" width="42"></img>
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 center-block">
                        </div>
                    </div>
                    <div className="row">
                        <div className = "col-4 center-block">
                            <Button style={letterStyle} className="randomNumber" variant="secondary" onClick={() => { this.generateNumber("index")}}>Generate Number Random</Button>
                            <h1 style={letterStyle}>Numbers</h1>
                        
                        </div>
                        <div className = "col-4 center-block">
                            <Button style={letterStyle} className="randomNumber" variant="secondary" onClick={() => { this.generateNumber("index")}}>Generate Number Random</Button>
                            <h1 style={letterStyle}>Numbers</h1>
                        </div>
                        <div className="col-4 center-block">
                            
                        </div>
                    </div>
                </div>
            </div>
            );
  }
  }
