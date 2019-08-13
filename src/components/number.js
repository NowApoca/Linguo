import React from 'react';
import '../App.css';
import {constants} from "../constant"
import { translateNumber } from '../translate';
import { Button } from 'react-bootstrap';
import { NumberHelp } from './numberHelp';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import logo from "../images/logo.png";

export class Numbers extends React.Component {
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
            <div>
                <div className="container">
                    <div class="row">
                        <div class = "col-6 offset-md-3" style={{height:"10px"}} >
                            <Button  className="randomNumber" variant="secondary" onClick={() => { this.generateNumber("index")}}>Generate Number Random</Button>
                        </div>
                        
                        <div class = "col-3">
                            <Button  className="helpButton" variant="secondary" onClick={() => { this.showHelp()}}> 
                            <img src={logo} width="20" /> Help
                            </Button>
                            {/* {this.state.showHelp && <Text> hola</Text> */}
                            {(this.state.showHelp) ? 
                                        (
                                            <NumberHelp initNumber={1} language={"CH"} writedLanguage={"PIN"}/>        
                                    ) : (
                                        function(){}
                            )} 
                        </div>
                    </div>
                    <div class="row ">
                        <div class = "col-6 offset-md-4" height="10">
                            <h6> From 0 to {this.state.maxNumber +". Max number allowed: "+constants.maxNumCHN} </h6>                        
                        </div>
                    </div>
                    <div class="row ">
                        <div class = "col-6 offset-md-4 div-2" height="10">
                            <label>
                            Max Number:
                            <input size="15" type="text" value={this.state.maxNumber} onChange={this.handleMaxNumberChange} />
                            {(this.state.numberRandom < 0) ? (
                                ""
                                    ) : (
                                        <h1 style={{position:"absolute"}}> {translation} </h1>
                            )}
                            </label>
                        </div>                        
                    </div>
                    <div class="row ">
                        <div class = "col-6 offset-md-3">
                                <label>
                                Number:
                                <input size="15" type="text" value={this.state.numberInText} onChange={this.handleNumberChange} />
                                </label>
                                <button onClick={() => { this.handleVerify()}}>Verify</button>
                                {(this.state.answered) ? (
                                    (this.state.response) ? (
                                        <h1 className="font">Bien</h1>
                                            ) : (
                                                <h1> Mal </h1>
                                    )
                                )
                                : ("") }   
                            </div>
                    </div>
                    <div class="row ">
                        <div className="col-10 offset-md-2 textOutput ">
                                <label className="font"> Number to Transalte - Answered - Correct Number</label>
                        </div>
                    </div>
                    <div class="row ">
                        <div className="col-10 offset-md-2 textOutput ">
                                <textarea class="col-8 textAreaNumber" value = {this.state.stringOfResults} ></textarea>
                        </div>
                    </div>
                </div>
             </div>
            );
  }
  }
