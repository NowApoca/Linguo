import React from 'react';
import '../App.css';
import {constants} from "../constant"
import { translateNumber } from '../translate';
import { Button } from 'react-bootstrap';
import { NumberHelp } from './numberHelp';
import {SectionBox} from "./sectionBox"
import {SubjetBar} from "./subjectBar"
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import logo from "../images/logo.png";

export class Teoric extends React.Component {
    constructor(props){
        super(props)
        this.unMount = props.unMount
        this.state = {}
    }
    render() {
        let translation;
        if(this.state.numberRandom > -1){
            translation = translateNumber(this.state.numberRandom,"NUMCHN")
        }
        return (
            <div >
                <div className="container" style={{"background-color":"grey","height":"100%"}} >
                    <div className="row">
                        <SectionBox subjet="Words"/>
                        <SectionBox subjet="Letters"/>
                        <SubjetBar/>
                    </div>
                    <div className="row">
                        <SectionBox subjet="Number"/>
                        <SectionBox subjet="Vocabulary"/>
                    </div>
                    <div className="row">
                        <SectionBox subjet="Auctions"/>
                    </div>
                </div>
             </div>
            );
  }
  }

  