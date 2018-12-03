import React, {Component} from 'react';
import {Step, Steps, Wizard} from 'react-albus';
import DiyList from './DiyList';
//import { Collapse, } from 'reactstrap'
import {
    Segment,
    Header,
    Icon,
    Button, Image,
} from 'semantic-ui-react';
import {Link} from "react-router-dom";

class DiyStep extends Component{
    constructor(props) {
        super(props);
        this.state = {
            frame: 1,
            wings: 2,
            cb: 3,
            esc: 4,
            battery: 5,
            antenna: 6,
            motor: 7,
            message:'',
        };
    }

    render(){
        const { info, selectParts, postSelectParts, selectedParts} = this.props;
        return(
            <Wizard align="center">
                <Steps>
                    <Step
                        id="step0"
                        render={({ next }) => (
                            <div>
                                <h1><Icon name='search' />DiY Drone</h1>
                                <Button onClick={next} primary>시작하기</Button>
                            </div>
                        )}
                    />
                    <Step
                        id="step1"
                        render={({ next }) => (
                            <div>
                                <DiyList
                                    category = {this.state.frame}
                                    message = {this.state.message}
                                    info = {info}
                                    selectParts = {selectParts}
                                />
                                <Button onClick={() => {if(!selectedParts.get('frame')){this.setState({
                                    message: '부품을 선택해주세요.'
                                })} else{next(); postSelectParts(selectedParts.get('frame')); this.setState({
                                    message: ''
                                })}}}>Next</Button>
                            </div>
                        )}
                    />
                    <Step
                        id="step2"
                        render={({ next, previous }) => (
                            <div>
                                <DiyList
                                    category = {this.state.wings}
                                    message = {this.state.message}
                                    info = {info}
                                    selectParts = {selectParts}
                                />
                                    <Button onClick={() => {previous(); postSelectParts({part: this.state.wings}); selectParts(this.state.wings, ''); }}>Previous</Button>
                                    <Button onClick={() => {if(!selectedParts.get('wings')){this.setState({
                                        message: '부품을 선택해주세요.'
                                    })} else{next(); postSelectParts(selectedParts.get('wings')); this.setState({
                                        message: ''
                                    })}}}>Next</Button>

                            </div>
                        )}
                    />
                    <Step
                        id="step3"
                        render={({ next, previous }) => (
                            <div>
                                <div>
                                    <DiyList
                                        category = {this.state.cb}
                                        message = {this.state.message}
                                        info = {info}
                                        selectParts = {selectParts}
                                    />
                                        <Button onClick={() => {previous(); postSelectParts({part: this.state.cb, short_length: 0}); selectParts(this.state.cb, ''); }}>Previous</Button>
                                    <Button onClick={() => {if(!selectedParts.get('controlBoard')){this.setState({
                                    message: '부품을 선택해주세요.'
                                })} else{next(); postSelectParts(selectedParts.get('controlBoard')); this.setState({
                                    message: ''
                                })}}}>Next</Button>
                                </div>
                            </div>
                        )}
                    />
                    <Step
                        id="step4"
                        render={({ next, previous }) => (
                            <div>
                                <DiyList
                                    category = {this.state.esc}
                                    message = {this.state.message}
                                    info = {info}
                                    selectParts = {selectParts}
                                />
                                    <Button onClick={() => {previous(); postSelectParts({part: this.state.esc}); selectParts(this.state.esc, ''); }}>Previous</Button>
                                <Button onClick={() => {if(!selectedParts.get('esc')){this.setState({
                                    message: '부품을 선택해주세요.'
                                })} else{next(); postSelectParts(selectedParts.get('esc')); this.setState({
                                    message: ''
                                })}}}>Next</Button>
                            </div>
                        )}
                    />
                    <Step
                        id="step5"
                        render={({ next, previous }) => (
                            <div>
                                <DiyList
                                    category = {this.state.battery}
                                    message = {this.state.message}
                                    info = {info}
                                    selectParts = {selectParts}
                                />
                                    <Button onClick={() => {previous(); postSelectParts({part: this.state.battery}); selectParts(this.state.battery, ''); }}>Previous</Button>
                                <Button onClick={() => {if(!selectedParts.get('battery')){this.setState({
                                    message: '부품을 선택해주세요.'
                                })} else{next(); postSelectParts(selectedParts.get('battery')); this.setState({
                                    message: ''
                                })}}}>Next</Button>
                            </div>
                        )}
                    />
                    <Step
                        id="step6"
                        render={({ next, previous }) => (
                            <div>
                                <DiyList
                                    category = {this.state.antenna}
                                    message = {this.state.message}
                                    info = {info}
                                    selectParts = {selectParts}
                                />
                                    <Button onClick={() => {previous(); postSelectParts({part: this.state.antenna, weight: 0}); selectParts(this.state.antenna, ''); }}>Previous</Button>
                                <Button onClick={() => {if(!selectedParts.get('antenna')){this.setState({
                                    message: '부품을 선택해주세요.'
                                })} else{next(); postSelectParts(selectedParts.get('antenna')); this.setState({
                                    message: ''
                                })}}}>Next</Button>
                            </div>
                        )}
                    />
                    <Step
                        id="step7"
                        render={({ next, previous }) => (
                            <div>
                                <DiyList
                                    category = {this.state.motor}
                                    message = {this.state.message}
                                    info = {info}
                                    selectParts = {selectParts}
                                />
                                    <Button onClick={() => {previous(); postSelectParts({part: this.state.motor, weight: 0, price: 0}); selectParts(this.state.motor, ''); }}>Previous</Button>
                                    <Link to="/pay">
                                        <Button onClick={() => {if(!selectedParts.get('motor')){this.setState({
                                            message: '부품을 선택해주세요.'
                                        })} else{next(); postSelectParts(selectedParts.get('motor')); this.setState({
                                            message: ''
                                        })}}}>선택완료</Button>
                                    </Link>
                            </div>
                        )}
                    />
                </Steps>
            </Wizard>
        );
    }
}

export default DiyStep;