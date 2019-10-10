import React from 'react';
import '../App.css';
import {constants} from "../constant"
import { translateNumber, translate, getRandomWord } from '../translate';
import { Button } from 'react-bootstrap';
import { NumberHelp } from './numberHelp';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import logo from "../images/logo.png";

export class Phrase extends React.Component {
    constructor(props){
        super(props)
        this.unMount = props.unMount
        const actualCard = getRandomWord(props.fromLanguage, props.toLanguage);
        this.state = {pinyin:false, position:0, flashcards:[actualCard],translation:false, actualCard: actualCard, previousCard: [], hsk:2,
            numberInText:0,numberRandom:-1,answered:false,response:false,maxNumber:10,language:props.language,
             showHelp:false, stringOfResults:"", finalString:""}
        this.showTranslation = this.showTranslation.bind(this);
        this.pinyinButton = this.pinyinButton.bind(this)
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

    generateFlashCard(state){
        let arr = this.state.flashcards;
        const actualPosition = this.state.position;
        (state == "previous")? this.setState({
            actualCard: ((this.state.position == 0)? this.state.actualCard : arr[actualPosition-1] ),
            position: ((this.state.position == 0)? 0 : actualPosition-1 ),
            flashcards: arr,
            translation: false
        }): this.generateNext(arr);
    }

    generateNext(arr){
        if(this.state.flashcards.length < 3 || this.state.position < 2){
            let nextWord;
            const actualPosition = this.state.position;
            if(!this.state.flashcards[actualPosition+1]  ){
                nextWord = getRandomWord(this.state.fromLanguage, this.state.toLanguage, this.state.hsk)
                arr.push(nextWord)
            }else{
                nextWord = this.state.flashcards[actualPosition+1]
            }  
            this.setState({
                position: actualPosition+1,
                flashcards: arr,
                actualCard: nextWord,
                translation: false
            })
        }
    }

    showFlashCard(){
        let itemsToPush = [];
        if(this.state.language != "CHN"){
            let item = [];
            if(this.state.translation){
                let translations = "";
                for(let translation of this.state.actualCard.translations){
                    translations+= translation + ", ";
                }
                item.push(<h4 >{translations}</h4>)
            }else{
                item.push(<h1 className="flashCardSize" style={{"text-align": "center"}}>{this.state.actualCard.hanzi}</h1>)
                if(this.state.pinyin){
                    item.push(
                        <h3 style={{"text-align": "center"}}>{this.state.actualCard.pinyin}</h3>
                    )
                }
            }
            itemsToPush.push(
                <div className="col-8 offset-md-2" style={{"margin-top":"5vh"}}>
                    {item}
                </div>
            )
            
        }else{
            itemsToPush.push(
                <div className="col-8 offset-md-2" style={{"margin-top":"5vh"}}>
                    <h1 className="flashCardSize" style={{"text-align": "center"}}>{this.state.actualCard.hanzi}</h1>
                    <h1 className="flashCardSize" style={{"text-align": "center"}}>{this.state.actualCard.pinyin}</h1>
                </div>)
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
                                <div className="col-1 offset-md-9" >
                                    <h1 className="reloadButton" onClick={() => { this.showTranslation()}}> &#8634; </h1>
                                </div>
                            </div>
                            <div class="row" style={{position:"absolute",bottom:"35%", width:"100%"}} >
                                    {this.showFlashCard()}
                            </div>
                            <div class="row" style={{position:"absolute",bottom:"3%", width:"100%"}} >
                                <div className="col-6  offset-md-1" >
                                    <arrow  className="left"  variant="secondary" onClick={() => { this.generateFlashCard("previous")}}></arrow>
                                </div>
                                <div className="col-1 offset-md-3" >
                                    <arrow  className="right" variant="secondary" onClick={() => { this.generateFlashCard("next")}}></arrow>
                                </div>
                            </div>
                        </div>

                    </div>
                <div class="row" >{
                    this.generateHskButtons()
                }
                </div>
                <div class="row" >
                    <div class="col-3 offset-md-3">
                    {(!this.state.pinyin)?
                        <Button  className="hskSelectorNotChoosed" variant="secondary" onClick={() => { this.pinyinButton()}}>{"Enable Pinyin"}</Button>        
                    : 
                        <Button  className="hskSelectorChoosed" variant="secondary" onClick={() => { this.pinyinButton()}}>{"Enable Pinyin"}</Button>
                    }
                </div>
                </div>
                </div>
             </div>
            );
  }
  }
  