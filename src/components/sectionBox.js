import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import { translate } from '../translate';
import { Button } from 'react-bootstrap';
import { Route, Link, Switch} from 'react-router-dom'

export class SectionBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {subject:props.subject, image:props.image, date: props.date, theme: props.theme}
    }
    render() {
        return (
            <div className="col-sm-3" style={{"border":"12px double grey","border-radius": "35px","background-color":"white", margin:"30px"}}>
                <div className="row" style={{height:"240px"}}>
                    <img src={this.state.image} width="95%" height="65%" style={{"margin":"10px"}} />
                        <div class ="col-6">
                        <Link to={"/teorics/" + this.state.subject}>  <button className="blogButton" > {this.state.subject} </button></Link>
                        </div>
                        <div class ="col-6">
                            <h6 > {this.state.date} </h6>
                        </div>
                </div>
            </div>
            );
  }
  }


 // <Route path="/teorics/grammar/hanzi" component={withProps(Article, { text: 'main', image:logo ,date:"23:12:34", text: "The first newspaper, Siraj-ul-Akhbar (Lamp of the News) was initially published on January 11 , 1906, with Abdul-Rauf as editor. After this first and only issue in Persian language, its publication stopped. It was revived in October 1911 by Mahmud Tarzi, the editor and owner of the newspaper who was critical of the friendship  between the British Empire and Afghanistan. Mahmud Tarzi became known as the pioneer of Afghan journalism, in 1916 he famously wrote:   'Siraj Al Akhbar Afghaniya is neither British, nor Russian nor French nor Italian nor German nor Chinese or Japanese.    It is a Muslim newspaper and, in that, it is specifically an Afghan newspaper. Whatever it says, whatever melody it sings,     is from an Afghan point of view and stems from the tone of Afghan national dignity.'      In 1919, under King Amanullah Khan, Aman-i-Afghan (Afghan Peace) replaced Siraj al-Akhbar, serving as an organ       of the government, while several smaller private journals appeared under different ministries.[11] Along with these developments,        Radio Kabul began broadcasting in 1925, which inaugurated a new era of mass media in the country.[11] The 1964 Constitution of         Afghanistan and the Press Law of 1965 provided for freedom of the press, within the boundaries of appropriate behavior. The          press was editorially independent from government but was instructed to safeguard the interests of the state and constitutional monarchy,          Islam, and public order. Afghan journalism progressed and developed from the 1950s through to the 1970s, though it remained limited. " })} />