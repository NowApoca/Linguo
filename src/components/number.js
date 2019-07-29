import React from 'react';
import '../App.css';
import {constants} from "../constant"

export class Numbers extends React.Component {
    constructor(props){
      super(props)
      this.unMount = props.unMount
      this.state = {number:""}
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleVerify = this.handleVerify.bind(this);
    }
    handleNumberChange(event){
        this.setState({number: event.target.value});
    }
    handleVerify(event){
        // match with PINYIN    
    }
    render() {
        return (
            <div className="App">
                <button onClick={() => { this.unMount("index")}}>Index</button>
                <h1> Numbers </h1>
                <h1> From {"-"+constants.maxNumCHN} to {constants.maxNumCHN} </h1>
                <h1> Numbers </h1>
                <label>
                Number:
                <input type="text" value={this.state.number} onChange={this.handleNumberChange} />
                </label>
                <button onClick={() => { this.handleVerify()}}>Verify</button>
            </div>);
  }
  }
