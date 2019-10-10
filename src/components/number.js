import React from 'react';
import '../App.css';
import {constants} from "../constant"
import { translateNumber, getRandomWord, translate } from '../translate';
import { Button } from 'react-bootstrap';
import { NumberHelp } from './numberHelp';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import logo from "../images/logo.png";

export class Numbers extends React.Component {
    constructor(props){
        super(props)
        this.unMount = props.unMount
        let actualNumber = {
            hanzi:"十",
            number: 10,
            pinyin:"shí"
        }
        this.state = {translation:false, maxNumberExponential:100000,actualNumber:actualNumber,numberInText:0,numberRandom:-1,answered:false,response:false,maxNumber:10,language:props.language, showHelp:false, stringOfResults:"", finalString:""}
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
        let randNumber = String(Math.floor(Math.random()*this.state.maxNumberExponential));
        let finalString = translateNumber(randNumber,"NUMCHN")
        this.setState({actualNumber:{
            hanzi: finalString,
            pinyin: "",
            number: randNumber
        }, translation: false});
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
    //
    showNext(){

    }
    showPrevious(){
        
    }

    changeVocabulary(exponential){
        this.setState({
            maxNumberExponential: exponential
        })
    }

    generateHskButtons(){
        let itemsToShow = [];
        for(let i = 1; i<9;i++){
            if(this.state.maxNumberExponential == (10**i)){
                itemsToShow.push(
                    <div class = "col-4 offset-md-1 ">
                        <Button className="hskSelectorChoosed" variant="secondary" onClick={() => { this.changeVocabulary(10**i)}}>{translate((10**i).toString(),this.state.language)}</Button>
                    </div>);
            }else{
                itemsToShow.push(
                <div class = "col-4 offset-md-1 ">
                    <Button className="hskSelectorNotChoosed" variant="secondary" onClick={() => { this.changeVocabulary(10**i)}}>{10**i}</Button>
                </div>);
            }
        }
        return itemsToShow;
    }

    showFlashCard(){
        let itemsToPush = [];
        if(this.state.translation){
            itemsToPush.push(<h1 className="numberSize" style={{"text-align": "center"}}>{this.state.actualNumber.number}</h1>)
        }else{
            itemsToPush.push(<h1 className="numberSize" style={{"text-align": "center"}}>{this.state.actualNumber.hanzi}</h1>)
            if(this.state.pinyin){
                itemsToPush.push(
                    <h3 style={{"text-align": "center"}}>{this.state.actualNumber.pinyin}</h3>
                )
            }
        }
        return itemsToPush;
    }

    showTranslation(){
        if(!this.state.translation){
            this.setState({translation:true})
            return;
        }
        this.setState({translation:false})
        return;
    }

    pinyinButton(){
        if(!this.state.pinyin){
            this.setState({pinyin:true})
            return;
        }
        this.setState({pinyin:false})
        return;
    }
    componentWillReceiveProps(props) {
        this.setState({ language: props.language });  
    }
    render() {
        let translation;
        if(this.state.numberRandom > -1){
            translation = translateNumber(this.state.numberRandom,"NUMCHN")
        }
        return (
                <div >
                <div className="container" style={{"background-color":"grey", "height":"120vh","border-radius":"30px"}} >
                    <div class="row ">

                        <div className="col-8 offset-md-2 " style={{"background-color":"white", height:"50vh", "border-radius": "24px", "margin-top":"5vh"}}>
                            <div class="row">
                                <div className="col-1 offset-md-9" >
                                    <h1 className="reloadButton" onClick={() => { this.showTranslation()}}> &#8634; </h1>
                                </div>
                            </div>
                            <div class="row" style={{position:"absolute",bottom:"35%", width:"100%"}} >                    
                                <div className="col-8 offset-md-2" style={{"margin-top":"5vh"}}>
                                    {this.showFlashCard()}
                                </div>
                            </div>
                            <div class="row" style={{position:"absolute",bottom:"3%", width:"100%"}} >
                                <div className="col-1 offset-md-10" >
                                    <arrow  className="right" variant="secondary" onClick={() => { this.generateNumber("index")}}></arrow>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row" style={{"margin-top":"30px"}} >
                        <div className="col-5">
                            <div class="row">{
                                this.generateHskButtons()}
                            </div>
                        </div>
                        <div className="col-7">
                            <div class="col-12">
                                {(!this.state.pinyin)?
                                    <Button  className="hskSelectorNotChoosed" variant="secondary" onClick={() => { this.pinyinButton()}}>{translate("Enable Pinyin",this.state.language)}</Button>        
                                : 
                                    <Button  className="hskSelectorChoosed" variant="secondary" onClick={() => { this.pinyinButton()}}>{translate("enable_pinyin",this.state.language)}</Button>
                                }
                            </div>
                            <div class = "col-12" style={{"margin-top":"30px"}}>
                                <Button  className="helpButton" variant="secondary" onClick={() => { this.showHelp()}}> 
                                {/* <img src={logo} width="20" />  */}{translate("help",this.state.language)}
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
                    </div>
                </div>
             </div>
            );
  }
  }

  