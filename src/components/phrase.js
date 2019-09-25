import React from 'react';
import '../App.css';
import {constants} from "../constant"
import { translateNumber } from '../translate';
import { Button } from 'react-bootstrap';
import { NumberHelp } from './numberHelp';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import logo from "../images/logo.png";

export class Phrase extends React.Component {
    constructor(props){
        super(props)
        this.unMount = props.unMount
        this.state = {numberInText:0,numberRandom:-1,answered:false,response:false,maxNumber:10,language:props.language, showHelp:false, stringOfResults:"", finalString:""}
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleMaxNumberChange = this.handleMaxNumberChange.bind(this);
        this.handleVerify = this.handleVerify.bind(this);
        this.generateNumber = this.generateNumber.bind(this);
        this.showHelp = this.showHelp.bind(this);
    }
    handleNumberChange(event){
        this.setState({numberInText: event.target.value});
    }
    handleMaxNumberChange(event){
        this.setState({maxNumber: parseInt(event.target.value)});
    }
    generateNumber(){
        let randNumber = String(Math.floor(Math.random()*this.state.maxNumber));
        let finalString = translateNumber(randNumber,"NUMCHN")
        this.setState({numberRandom: randNumber, finalString:finalString});
    }
    showHelp(){
        (this.state.showHelp)? this.setState({showHelp: false}) : this.setState({showHelp: true});
    }
    handleVerify(){
        let finalString =  translateNumber(this.state.numberRandom,"NUMCHN") + "   " + this.state.numberInText + "   " + this.state.numberRandom + "\n"
        let resultString = this.state.stringOfResults + finalString
        if(this.state.numberInText == this.state.numberRandom){
            this.setState({answered:true,response:true, stringOfResults:resultString, finalString: ""})
        }else{
            this.setState({answered:true,response:false, stringOfResults:resultString, finalString: ""})
        }
    }
    render() {
        let translation;
        if(this.state.numberRandom > -1){
            translation = translateNumber(this.state.numberRandom,"NUMCHN")
        }
        return (
            <div >
                <div className="container" style={{"background-color":"grey", "height":"90vh"}} >
                    <div class="row ">
                        <div className="col-8 offset-md-2 " style={{"background-color":"white", height:"50vh", "border-radius": "24px", "margin-top":"5vh"}}>
                            <div class="row">
                                <div className="col-8 offset-md-2" style={{"margin-top":"20vh","background-color":"Red"}}>
                                    <h1>A A            A AA A A  A A A  A AB</h1>
                                    <h1>A A            A AA A A  A A A  A AB</h1>
                                </div>
                            </div>
                            <div class="row">
                                <div className="col-4" style={{"margin-top":"10vh"}}>
                                    <Button  className="arrowButton" variant="secondary" onClick={() => { this.generateNumber("index")}}>Random Flashcard</Button>
                                </div>
                                <div className="col-4 offset-md-4" style={{"margin-top":"10vh"}}>
                                    <Button  className="arrowButton" variant="secondary" onClick={() => { this.generateNumber("index")}}>Random Flashcard</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" >
                        <div class = "col-12 offset-md-3 " style={{height:"10px", "margin-top":"30px"}} >
                            <Button  className="randomPhrase" variant="secondary" onClick={() => { this.generateNumber("index")}}>Random Flashcard</Button>
                        </div>
                    </div>
                    <div class="row" >
                        <div class = "col-4 offset-md-2 " style={{height:"10px", "margin-top":"30px"}} >
                            <input class="inputPhrase" size="15" type="text" value={this.state.maxNumber} onChange={this.handleMaxNumberChange} />
                        </div>
                        <div class = "col-4 offset-md-2 " style={{height:"10px", "margin-top":"30px"}} >
                            <Button  className="verifyPhrase" variant="secondary" onClick={() => { this.generateNumber("index")}}>Check</Button>
                        </div>
                    </div>
                    <div class="row ">
                        <div className="col-10 offset-md-2 textOutput ">
                                <label className="font"> Number to Transalte - Answered - Correct Number</label>
                        </div>
                    </div>
                    <div class="row ">
                        <div className="col-12 textOutput ">
                                <textarea class="col-8 textAreaNumber" value = {this.state.stringOfResults} ></textarea>
                        </div>
                    </div>
                </div>
             </div>
            );
  }
  }
  