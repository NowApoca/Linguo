import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import { translate } from '../translate';

export class NumberHelp extends React.Component {
    constructor(props){
        super(props)
        this.state = {language:props.language, initNumber:props.initNumber, writedLanguage: props.writedLanguage}
    }
    componentWillReceiveProps(props) {
        this.setState({ language: props.language });  
    }
    render() {
        return (
            <div>
                <div className="container" style={ {position:"absolute"}}>
                    <div class="row ">
                        <div class = "col-4">
                            <h3> 0</h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> {translate("unit0",this.state.writedLanguage)} </h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> {translate("unit1",this.state.writedLanguage)}</h3>                        
                        </div>
                    </div>
                    <div class="row ">
                        <div class = "col-4">
                            <h3> {translate(0,this.state.language)}</h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> {translate("unit0",this.state.language)} </h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> {translate("unit1",this.state.language)}</h3>                        
                        </div>
                    </div>
                    <div class="row ">
                        <div class = "col-4">
                            <h3> {translate("unit2",this.state.writedLanguage)}</h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> {translate("unit3",this.state.writedLanguage)} </h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> {translate("unit4",this.state.writedLanguage)}</h3>                        
                        </div>
                    </div>
                    <div class="row ">
                        <div class = "col-4">
                            <h3> {translate("unit2",this.state.language)}</h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> {translate("unit3",this.state.language)} </h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> {translate("unit4",this.state.language)}</h3>                        
                        </div>
                    </div>
                    <div class="row ">
                        <div class = "col-4">
                            <h3> 1</h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> 2 </h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> 3</h3>                        
                        </div>
                    </div>
                    <div class="row ">
                        <div class = "col-4">
                            <h3> {translate(1,this.state.language)}</h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> {translate(2,this.state.language)} </h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> {translate(3,this.state.language)}</h3>                        
                        </div>
                    </div>
                    <div class="row ">
                        <div class = "col-4">
                            <h3> 4</h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> 5 </h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> 6</h3>                        
                        </div>
                    </div>
                    <div class="row ">
                        <div class = "col-4">
                            <h3> {translate(4,this.state.language)}</h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> {translate(5,this.state.language)} </h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> {translate(6,this.state.language)}</h3>                        
                        </div>
                    </div>
                    <div class="row ">
                        <div class = "col-4">
                            <h3> 7 </h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> 8 </h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> 9</h3>                        
                        </div>
                    </div>
                    <div class="row ">
                        <div class = "col-4">
                            <h3> {translate(7,this.state.language)}</h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> {translate(8,this.state.language)} </h3>                        
                        </div>
                        <div class = "col-4">
                            <h3> {translate(9,this.state.language)}</h3>                        
                        </div>
                    </div>
                    
                </div>
            </div>
            );
  }
  }
