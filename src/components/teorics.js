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
    image: number,
    date:"23:12:34",
    subject: "hanzii",
    theme: ["grammar","mocks"]
},{
    image: number,
    date:"23:12:34",
    subject: "hanzii",
    theme: ["grammar","vocabulary","mocks"]
},{
    image: number,
    date:"23:12:34",
    subject: "hanzii",
    theme: ["grammar","mocks","aboutchina"]
},{
    image: number,
    date:"23:12:34",
    subject: "hanzii",
    theme: ["grammar","vocabulary"]
},{
    image: number,
    date:"23:12:34",
    subject: "hanzii",
    theme: ["grammar","vocabulary"]
},{
    image: number,
    date:"23:12:34",
    subject: "hanzii",
    theme: ["grammar","vocabulary"]
},{
    image: number,
    date:"23:12:34",
    subject: "hanzii",
    theme: ["grammar","aboutchina"]
},{
    image: number,
    date:"23:12:34",
    subject: "hanzii",
    theme: ["grammar","aboutchina"]
},{
    image: number,
    date:"23:12:34",
    subject: "hanzii",
    theme: ["grammar","aboutchina"]
},{
    image: number,
    date:"23:12:34",
    subject: "hanzii",
    theme: ["grammar","vocabulary"]
},{
    image: number,
    date:"23:12:34",
    subject: "hanzii",
    theme: ["grammar","mocks"]
},{
    image: number,
    date:"23:12:34",
    subject: "hanzii",
    theme: ["expresions"]
},{
    image: number,
    date:"23:12:34",
    subject: "hanzii",
    theme: ["expresions"]
}]

export class Teoric extends React.Component {
    constructor(props){
        super(props)
        this.state = {articles:[{title:"",type:"",date:""}], theme: props.theme}
    }
    render() {
        let itemsToShow = [];
        let n = 0;
        for(let index in items){
            const item = items[index];
            if((this.state.theme == "main") || (item.theme.indexOf(this.state.theme) >= 0)){
                n++;
                itemsToShow.push(<SectionBox theme={item.theme} subject={item.subject} date={item.date} image={item.image}/>)
                if(n == 2){
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

  