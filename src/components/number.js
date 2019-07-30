import React from 'react';
import '../App.css';
import {constants} from "../constant"
import { translateNumber } from '../translate';

export class Numbers extends React.Component {
    constructor(props){
        super(props)
        this.unMount = props.unMount
        this.state = {numberInText:0,numberRandom:-5}
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleVerify = this.handleVerify.bind(this);
        this.generateNumber = this.generateNumber.bind(this);
    }
    handleNumberChange(event){
        this.setState({numberInText: event.target.value});
    }
    generateNumber(){
        let randNumber = String(Math.floor(Math.random()*constants.maxNumCHN));
        this.setState({numberRandom: randNumber});
    }
    handleVerify(event){
        if(this.state.numberInText == this.state.numberRandom){

        }else{

        }
    }
    render() {
        let translation;
        if(this.state.numberRandom > -1){
            translation = translateNumber(this.state.numberRandom,"NUMCHN")
        }
        console.log(this.state.numberRandom)
        return (
            <div className="App">
                <button onClick={() => { this.unMount("index")}}>Index</button>
                <button onClick={() => { this.generateNumber("index")}}>Generate Number Random</button>
                <h1> Numbers </h1>
                <h1> From {"-"+constants.maxNumCHN} to {constants.maxNumCHN} </h1>
                <h1> Numbers </h1>
                {(this.state.numberRandom < 0) ? (
                    ""
                        ) : (
                            <h1> {translation} </h1>
                )}
                <label>
                Number:
                <input type="text" value={this.state.numberInText} onChange={this.handleNumberChange} />
                </label>
                <button onClick={() => { this.handleVerify()}}>Verify</button>
            </div>);
  }
  }
