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
import custom_image from "../../image/drone.png";

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
                                    info = {info}
                                    selectParts = {selectParts}
                                    show = {this.nextShow1}
                                />
                                <Button onClick={() => {next(); postSelectParts(selectedParts.get('frame'))}}>Next</Button>
                            </div>
                        )}
                    />
                    <Step
                        id="step2"
                        render={({ next, previous }) => (
                            <div>
                                <DiyList
                                    category = {this.state.wings}
                                    info = {info}
                                    selectParts = {selectParts}
                                    show = {this.nextShow2}
                                />
                                    <Button onClick={() => {previous(); postSelectParts(selectedParts.get('wings'))}}>Previous</Button>
                                    <Button onClick={() => {next(); postSelectParts(selectedParts.get('wings'))}}>Next</Button>

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
                                        info = {info}
                                        selectParts = {selectParts}
                                        show = {this.nextShow3}
                                    />
                                        <Button onClick={() => {previous(); postSelectParts(selectedParts.get('controlBoard'))}}>Previous</Button>
                                        <Button onClick={() => {next(); postSelectParts(selectedParts.get('controlBoard'))}}>Next</Button>
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
                                    info = {info}
                                    selectParts = {selectParts}
                                    show = {this.nextShow4}
                                />
                                    <Button onClick={() => {previous(); postSelectParts(selectedParts.get('esc'))}}>Previous</Button>
                                    <Button onClick={() => {next(); postSelectParts(selectedParts.get('esc'))}}>Next</Button>
                            </div>
                        )}
                    />
                    <Step
                        id="step5"
                        render={({ next, previous }) => (
                            <div>
                                <DiyList
                                    category = {this.state.battery}
                                    info = {info}
                                    selectParts = {selectParts}
                                    show = {this.nextShow5}
                                />
                                    <Button onClick={() => {previous(); postSelectParts(selectedParts.get('battery'))}}>Previous</Button>
                                    <Button onClick={() => {next(); postSelectParts(selectedParts.get('battery'))}}>Next</Button>
                            </div>
                        )}
                    />
                    <Step
                        id="step6"
                        render={({ next, previous }) => (
                            <div>
                                <DiyList
                                    category = {this.state.antenna}
                                    info = {info}
                                    selectParts = {selectParts}
                                    show = {this.nextShow6}
                                />
                                    <Button onClick={() => {previous(); postSelectParts(selectedParts.get('antenna'))}}>Previous</Button>
                                    <Button onClick={() => {next(); postSelectParts(selectedParts.get('antenna'))}}>Next</Button>
                            </div>
                        )}
                    />
                    <Step
                        id="step7"
                        render={({ next, previous }) => (
                            <div>
                                <DiyList
                                    category = {this.state.motor}
                                    info = {info}
                                    selectParts = {selectParts}
                                    show = {this.nextShow7}
                                />
                                    <Button onClick={() => {previous(); postSelectParts(selectedParts.get('motor'))}}>Previous</Button>
                                    <Link to="/pay">
                                        <Button onClick={() => {postSelectParts(selectedParts.get('motor'))}}>선택 완료</Button>
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