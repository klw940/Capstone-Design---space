import React, {Component} from 'react';
import {Step, Steps, Wizard} from 'react-albus';
import DiyList from './DiyList';
import { Collapse, } from 'reactstrap'
import {
    Button,
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
            step1Show: false,
            step2Show: false,
            step3Show: false,
            step4Show: false,
            step5Show: false,
            step6Show: false,
            step7Show: false,
        };
    }

    nextShow1 = () => {
        this.setState({ step1Show: true});
    }

    nextShow2 = () => {
        this.setState({ step2Show: true });
    }

    nextShow3 = () => {
        this.setState({ step3Show: true });
    }

    nextShow4 = () => {
        this.setState({ step4Show: true });
    }

    nextShow5 = () => {
        this.setState({ step5Show: true});
    }

    nextShow6 = () => {
        this.setState({ step6Show: true});
    }

    nextShow7 = () => {
        this.setState({ step7Show: true});
    }

    render(){

        const { info, selectParts } = this.props;
        return(
            <Wizard align="center">
                <Steps>
                    <Step
                        id="step0"
                        render={({ next }) => (
                            <div>
                                <h1>DIY Drone</h1>
                                <Button onClick={next}>시작하기</Button>
                            </div>
                        )}
                    />
                    <Step
                        id="step1"
                        render={({ next }) => (
                            <div>
                                <DiyList
                                    category = {this.state.frame}
                                    info = {info}
                                    selectParts = {selectParts}
                                    show = {this.nextShow1}
                                />
                                <Collapse isOpen={this.state.step1Show}>
                                    <Button onClick={next}>Next</Button>
                                </Collapse>
                            </div>
                        )}
                    />
                    <Step
                        id="step2"
                        render={({ next }) => (
                            <div>
                                <DiyList
                                    category = {this.state.wings}
                                    info = {info}
                                    selectParts = {selectParts}
                                    show = {this.nextShow2}
                                />
                                <Collapse isOpen={this.state.step2Show}>
                                    <Button onClick={next}>Next</Button>
                                </Collapse>
                            </div>
                        )}
                    />
                    <Step
                        id="step3"
                        render={({ next }) => (
                            <div>
                                <div>
                                    <DiyList
                                        category = {this.state.cb}
                                        info = {info}
                                        selectParts = {selectParts}
                                        show = {this.nextShow3}
                                    />
                                    <Collapse isOpen={this.state.step3Show}>
                                        <Button onClick={next}>Next</Button>
                                    </Collapse>
                                </div>
                            </div>
                        )}
                    />
                    <Step
                        id="step4"
                        render={({ next }) => (
                            <div>
                                <DiyList
                                    category = {this.state.esc}
                                    info = {info}
                                    selectParts = {selectParts}
                                    show = {this.nextShow4}
                                />
                                <Collapse isOpen={this.state.step4Show}>
                                    <Button onClick={next}>Next</Button>
                                </Collapse>
                            </div>
                        )}
                    />
                    <Step
                        id="step5"
                        render={({ next }) => (
                            <div>
                                <DiyList
                                    category = {this.state.battery}
                                    info = {info}
                                    selectParts = {selectParts}
                                    show = {this.nextShow5}
                                />
                                <Collapse isOpen={this.state.step5Show}>
                                    <Button onClick={next}>Next</Button>
                                </Collapse>
                            </div>
                        )}
                    />
                    <Step
                        id="step6"
                        render={({ next }) => (
                            <div>
                                <DiyList
                                    category = {this.state.antenna}
                                    info = {info}
                                    selectParts = {selectParts}
                                    show = {this.nextShow6}
                                />
                                <Collapse isOpen={this.state.step6Show}>
                                    <Button onClick={next}>Next</Button>
                                </Collapse>
                            </div>
                        )}
                    />
                    <Step
                        id="step7"
                        render={({ }) => (
                            <div>
                                <DiyList
                                    category = {this.state.motor}
                                    info = {info}
                                    selectParts = {selectParts}
                                    show = {this.nextShow7}
                                />
                                <Collapse isOpen={this.state.step7Show}>
                                    <Link to="/pay">
                                        <Button>선택 완료</Button>
                                    </Link>
                                </Collapse>
                            </div>
                        )}
                    />
                </Steps>
            </Wizard>
        );
    }
}

export default DiyStep;