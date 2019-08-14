// import React from 'react';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import '../styles/styles.css'
// import { Button } from 'react-bootstrap';

// export class PairButtons extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = { subjet1: props.subjet1, subjet2: props.subjet2}
//     }
//     render() {
//         return (
//             <div>
//                 <div class="row">
//                     <div class="col-4">
//                         <Button style={{margin:"10px",border:"none"}}> this.state </Button>
//                 </div>
//                 <div class="col-4">
//                         <Button style={{margin:"10px",border:"none"}}> his.state.subj </Button>
//                     </div>
//                 <div class="col-4">
//                         <Button style={{margin:"10px",border:"none"}}> tate.subjet2}</Button>
//                     </div>
//                 </div>
//             </div>
//             );
//   }
//   }

import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css'
import { Button } from 'react-bootstrap';

export class PairButtons extends React.Component {
    constructor(props){
        super(props)
        this.state = { subjet1: (props.subjet1) ? props.subjet1: undefined, subjet2: (props.subjet2) ? props.subjet2: undefined, subjet3: (props.subjet3) ? props.subjet3: undefined}
    }
    render() {
        return (
            <div>
                {(this.state.subjet1) ? 
                    (<div class="row">
                        <div class="col-4">
                            <Button style={{margin:"10px",border:"none"}}> {this.state.subjet1.subjet} </Button>
                        </div>
                    </div>): 
                    (function(){})}
                    {(this.state.subjet1) ? 
                        (<div class="row">
                            <div class="col-4">
                                <Button style={{margin:"10px",border:"none"}}> {this.state.subjet1.subjet} </Button>
                            </div>
                        </div>): 
                        (function(){})}
                        {(this.state.subjet1) ? 
                            (<div class="row">
                                <div class="col-4">
                                    <Button style={{margin:"10px",border:"none"}}> {this.state.subjet1.subjet} </Button>
                                </div>
                            </div>): 
                            (function(){})}
            </div>
            );
  }
  }

