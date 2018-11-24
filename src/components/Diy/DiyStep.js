import React, { Component } from 'react';
import { Wizard, Steps, Step } from 'react-albus';
import DiyList from './DiyList';
import {
    Container,
    Col,
    Row,
    Button,
} from 'reactstrap'

import {Link} from "react-router-dom";

class DiyStep extends Component{
    state = {
        frame: 3,
        wings: 2,
        motor: 1,
        cb: 4,
        esc: 5,
        battery: 6,
        antenna: 7,
    }

    categoryStep = (e) => {
        this.setState({
            category: e.target.value
        });
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
                                <h1>DIY 시작하기</h1>
                                <Button onClick={next}>Next</Button>
                            </div>
                        )}
                    />
                    <Step
                        id="step1"
                        render={({ next }) => (
                            <div>
                                <DiyStep1
                                    category = {this.state.frame}
                                    info = {info}
                                    selectParts = {selectParts}
                                />
                                <Button onClick={next}>Next</Button>
                            </div>
                        )}
                    />
                    <Step
                        id="step2"
                        render={({ next }) => (
                            <div>
                                <DiyStep2
                                    category = {this.state.wings}
                                    info = {info}
                                    selectParts = {selectParts}
                                />
                                <Button onClick={next}>Next</Button>
                            </div>
                        )}
                    />
                    <Step
                        id="step3"
                        render={({ next }) => (
                            <div>
                                <div>
                                    <DiyStep3
                                        category1 = {this.state.cb}
                                        category2 = {this.state.esc}
                                        info = {info}
                                        selectParts = {selectParts}
                                    />
                                    <Button onClick={next}>Next</Button>
                                </div>
                            </div>
                        )}
                    />
                    <Step
                        id="step4"
                        render={({ next }) => (
                            <div>
                                <DiyStep4
                                    category1 = {this.state.battery}
                                    category2 = {this.state.antenna}
                                    info = {info}
                                    selectParts = {selectParts}
                                />
                                <Button onClick={next}>Next</Button>
                            </div>
                        )}
                    />
                    <Step
                    id="step5"
                    render={({ }) => (
                        <div>
                            <DiyStep5
                                category = {this.state.motor}
                                info = {info}
                                selectParts = {selectParts}
                            />
                            <Link to="/pay">
                                <Button>선택 완료</Button>
                            </Link>
                        </div>
                    )}
                />
                </Steps>
            </Wizard>
        );
    }
}
class DiyStep1 extends Component {
    render(){
        const { category, info, selectParts } = this.props;
        return(
            <div>
                <h1>Frame List</h1>
                <DiyList
                    category = {category}
                    info = {info}
                    selectParts = {selectParts}
                />
            </div>
        );
    }
}
class DiyStep2 extends Component {
    render(){
        const { category, info, selectParts } = this.props;
        return(
            <div>
                <h1>Wings List</h1>
                <DiyList
                    category = {category}
                    info = {info}
                    selectParts = {selectParts}
                />
            </div>
        );
    }
}
class DiyStep3 extends Component {
    render(){
        const { category1,
            category2,
            info,
            selectParts } = this.props;
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1>ControlBoard List</h1>
                            <DiyList
                                category = {category1}
                                info = {info}
                                selectParts = {selectParts}
                            />
                        </Col>
                        <Col>
                            <h1>ESC List</h1>
                            <DiyList
                                category = {category2}
                                info = {info}
                                selectParts = {selectParts}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class DiyStep4 extends Component {
    render(){
        const { category1, category2, info, selectParts } = this.props;
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1>Battery List</h1>
                            <DiyList
                                category = {category1}
                                info = {info}
                                selectParts = {selectParts}
                            />
                        </Col>
                        <Col>
                            <h1>Antenna List</h1>
                            <DiyList
                                category = {category2}
                                info = {info}
                                selectParts = {selectParts}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class DiyStep5 extends Component {
    render(){
        const { category, info, selectParts } = this.props;
        return(
            <div>
                <h1>Motor List</h1>
                <DiyList
                    category = {category}
                    info = {info}
                    selectParts = {selectParts}
                />
            </div>
        );
    }
}

export default DiyStep;