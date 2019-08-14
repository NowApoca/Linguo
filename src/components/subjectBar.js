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
            <div className="col-3">
                <div className="container" style={ {position:"absolute","border-left":"1px solid red"}}>
                    <div class="row">
                            <h1 style={{margin:"30px"}}> Temas </h1>
                    </div>
                    <PairButtons subjet1={{subjet:"HSK1",component:"HSK1"}} subjet2={{subjet:"HSK2",component:"HSK2"}}/>
                    <PairButtons subjet1={{subjet:"HSK2",component:"HSK2"}} subjet2={{subjet:"HSK3",component:"HSK3"}}/>
                </div>
            </div>
            );
  }
  }
