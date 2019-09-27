import React from 'react';
import '../App.css';
import { translateNumber } from '../translate';
import {SectionBox} from "./sectionBox"
import {SubjetBar} from "./subjectBar"
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import hanzi from "../images/hanzi.png";
import number from "../images/number.png";
import vocabulary from "../images/vocabulary.png";

const items = [{
        subject:"number",
        date:"29-11-12",
        image:number,
        theme:"grammar"
    },
    {
        subject:"vocabulary",
        date:"29-11-12",
        image:number,
        theme:"grammar"
    },
    {
        subject:"Auctions",
        date:"29-11-12",
        image:number,
        theme:"grammar"
    },
    {
        subject:"number",
        date:"29-11-12",
        image:number,
        theme:"grammar"
    },
    {
        subject:"number",
        date:"29-11-12",
        image:number,
        theme:"grammar"
    },
    {
        subject:"number",
        date:"29-11-12",
        image:number,
        theme:"grammar"
    },
    {
        subject:"number",
        date:"29-11-12",
        image:number,
        theme:"grammar"
    },
    {
        subject:"number",
        date:"29-11-12",
        image:number,
        theme:"grammar"
    }]

export class Teoric extends React.Component {
    constructor(props){
        super(props)
        this.state = {articles:[{title:"",type:"",date:""}], theme: props.theme}
    }
    render() {
        let translation;
        let itemsToShow = [];
        if(this.state.numberRandom > -1){
            translation = translateNumber(this.state.numberRandom,"NUMCHN")
        }
        for(let index in items){
            const item = items[index];
            if((this.state.theme == "main") || (this.state.theme == item.theme)){
                itemsToShow.push(<SectionBox subjet={item.subject} date={item.date} image={item.image}/>)
                if(index == 1){
                    itemsToShow.push(<SubjetBar />)
                }
            }
        }
        return (
            <div >
                <div className="container teoricContainer" >
                    <div className="row">
                        {itemsToShow}
                    </div>
                </div>
             </div>
            );
    }
  }

  