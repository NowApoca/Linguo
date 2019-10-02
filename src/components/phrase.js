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
        this.state = {hsk:2,numberInText:0,numberRandom:-1,answered:false,response:false,maxNumber:10,language:props.language, showHelp:false, stringOfResults:"", finalString:""}
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
    showNext(){

    }
    showPrevious(){
        
    }

    changeVocabulary(hsk){
        this.setState({
            hsk: hsk
        })
    }

    generateHskButtons(){
        let itemsToShow = [];
        for(let i = 0; i<6;i++){
            if(this.state.hsk == (i + 1)){
                itemsToShow.push(
                    <div class = "col-2 offset-md-3 ">
                        <Button  className="hskSelectorChoosed" variant="secondary" onClick={() => { this.changeVocabulary(i + 1)}}>{"HSK" + (i + 1)}</Button>
                    </div>);
            }else{
                itemsToShow.push(
                <div class = "col-2 offset-md-3 ">
                    <Button  className="hskSelectorNotChoosed" variant="secondary" onClick={() => { this.changeVocabulary(i + 1)}}>{"HSK" + (i + 1)}</Button>
                </div>);
            }
        }
        return itemsToShow;
    }

    render() {
        let translation;
        if(this.state.numberRandom > -1){
            translation = translateNumber(this.state.numberRandom,"NUMCHN")
        }
        return (
            <div >
                <div className="container" style={{"background-color":"grey", "height":"90vh","border-radius":"30px"}} >
                    <div class="row ">
                        <div className="col-8 offset-md-2 " style={{"background-color":"white", height:"50vh", "border-radius": "24px", "margin-top":"5vh"}}>
                            <div class="row">
                                <div className="col-8 offset-md-2" style={{"margin-top":"20vh","background-color":"Red"}}>
                                    <h1>A A            A AA A A  A A A  A AB</h1>
                                    <h1>A A            A AA A A  A A A  A AB</h1>
                                </div>
                            </div>
                            <div class="row">
                                <div className="col-4 offset-md-1" style={{"margin-top":"10vh"}}>
                                    <arrow  className="left" variant="secondary" onClick={() => { this.showNext("index")}}></arrow>
                                </div>
                                <div className="col-1 offset-md-5" style={{"margin-top":"10vh"}}>
                                    <arrow  className="right" variant="secondary" onClick={() => { this.showPrevious("index")}}></arrow>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="row" >{
                    this.generateHskButtons()
                }
                </div>
                </div>
             </div>
            );
  }
  }
  