import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import { Button } from 'react-bootstrap';
import {PairButtons} from "./pairOfButtons"

export class SubjetBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {language:props.language, initNumber:props.initNumber, writedLanguage: props.writedLanguage}
    }
    render() {
        return (
            <div className="col-sm-4">
                <div className="container" style={ {position:"absolute","border-left":"1px solid red"}}>
                        <h1 style={{margin:"30px"}}> Temas </h1>
                    <div class="row">
                        <PairButtons subjet1={{subjet:"HSK1",component:"HSK2"}} subjet2={{subjet:"HSK2",component:"HSK3"}}  subjet3={{subjet:"HSK3",component:"HSK2"}}/>
                        <PairButtons subjet1={{subjet:"HSK4",component:"HSK1"}} subjet2={{subjet:"HSK5",component:"HSK2"}}  subjet3={{subjet:"HSK6",component:"HSK2"}}/>
                    </div>
                        <h1 style={{margin:"30px"}}> HSKs </h1>
                    <div class="row">
                        <PairButtons subjet1={{subjet:"Number",component:"Caracteres"}} subjet2={{subjet:"Caracteres",component:"HSK3"}}  subjet3={{subjet:"Dias",component:"HSK2"}}/>
                        <PairButtons subjet1={{subjet:"Adjetivos",component:"HSK1"}}/>
                    </div>
                        <h1 style={{margin:"30px"}}> Vocabulario HSK </h1>
                    <div class="row">
                        <PairButtons subjet1={{subjet:"HSK1",component:"HSK1"}} subjet2={{subjet:"HSK2",component:"HSK2"}} subjet3={{subjet:"HSK2",component:"HSK2"}}/>
                        <PairButtons subjet1={{subjet:"HSK2",component:"HSK2"}} subjet2={{subjet:"HSK3",component:"HSK3"}} subjet3={{subjet:"HSK2",component:"HSK2"}}/>
                    </div>
                </div>
            </div>
            );
  }
  }
