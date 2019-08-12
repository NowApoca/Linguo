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
                    <div class="row ">
                        <div class = "col-12 offset-md-3">
                            <Button style={letterStyle} className="randomNumber" variant="secondary" onClick={() => { this.generateNumber("index")}}>Generate Number Random</Button>
                            <h1 style={letterStyle}>Numbers</h1>
                            <h6> From 0 to {this.state.maxNumber +". Max number allowed: "+constants.maxNumCHN} </h6>                        
                        </div>
                    </div>
                    <div class="row ">
                        <div class = "col-12 offset-md-2">
                            {(this.state.numberRandom < 0) ? (
                                ""
                                    ) : (
                                        <h1> {translation} </h1>
                            )}
                            <label>
                            Max Number:
                            <input type="text" value={this.state.maxNumber} onChange={this.handleMaxNumberChange} />
                            </label>
                            <label>
                            Number:
                            <input type="text" value={this.state.numberInText} onChange={this.handleNumberChange} />
                            </label>
                            <button onClick={() => { this.handleVerify()}}>Verify</button>
                            {(this.state.answered) ? (
                                (this.state.response) ? (
                                    <h1>Bien</h1>
                                        ) : (
                                            <h1> Mal </h1>
                                )
                            )
                            : ("") }    
                        </div>
                    </div>
                    
                </div>
                <div className="textOutput">
                <div class="wrapper">
  <div class="form-group">
    <label for="exampleFormControlTextarea2">WATCH MY SCROLLBAR</label>
    <textarea class="form-control rounded-0" rows="5" >
	??????????
      
		</textarea>
  </div>
</div>
                </div>
                <div className="bottomBar">
                    <img src={logo} alt="Smiley face" height="42" width="42"></img>
                </div>
            </div>
            );
  }
  }
