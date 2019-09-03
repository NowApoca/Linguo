import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css';
import { Button } from 'react-bootstrap';

export class SubjetBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {language:props.language, initNumber:props.initNumber, writedLanguage: props.writedLanguage}
    }
    render() {
        return (
            <div className="col-sm-4" style={ {"border-left":"1px solid red"}}>
                <div className="container blogSubjects" >
                    <h2 style={{margin:"5px", "border-bottom":"3px solid black"}}> Categorías </h2>
                    <div>
                        <row>
                            <button class="themeButton" style={{margin:"10px"}}>Vocabulary</button>
                        </row>
                    </div>
                    <div>
                        <row>
                            <button class="themeButton" style={{margin:"10px"}}>Grammar</button>
                        </row>
                    <div>
                        <row>
                            <button class="themeButton" style={{margin:"10px"}}>Expresions</button>
                        </row>
                    </div>
                    <div>
                        <row>
                            <button class="themeButton" style={{margin:"10px"}}>Mock Tests</button>
                        </row>
                    </div>
                    <div>
                        <row>
                            <button class="themeButton" style={{margin:"10px"}}>About China</button>
                        </row>
                    </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            );
  }
  }
