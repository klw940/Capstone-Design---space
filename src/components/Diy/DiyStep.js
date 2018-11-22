import React, { Component } from 'react';
import { Wizard, Steps, Step } from 'react-albus';
import DiyList from './DiyList';
import {
    Container,
    Col,
    Row,
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
        const { data, selectParts } = this.props;
        return(
            <Wizard align="center">
                <Steps>
                    <Step
                        id="step0"
                        render={({ next }) => (
                            <div>
                                <h1>DIY 시작하기</h1>
                                <button onClick={next}>Next</button>
                            </div>
                        )}
                    />
                    <Step
                        id="step1"
                        render={({ next }) => (
                            <div>
                                <DiyStep1
                                    category = {this.state.frame}
                                    data = {data}
                                    selectParts = {selectParts}
                                />
                                <button onClick={next}>Next</button>
                            </div>
                        )}
                    />
                    <Step
                        id="step2"
                        render={({ next }) => (
                            <div>
                                <DiyStep2
                                    category = {this.state.wings}
                                    data = {data}
                                    selectParts = {selectParts}
                                />
                                <button onClick={next}>Next</button>
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
                                        category3 = {this.state.battery}
                                        category4 = {this.state.antenna}
                                        data = {data}
                                        selectParts = {selectParts}
                                    />
                                    <button onClick={next}>Next</button>
                                </div>
                            </div>
                        )}
                    />
                    <Step
                    id="step4"
                    render={({ }) => (
                        <div>
                            <DiyStep4
                                category = {this.state.motor}
                                data = {data}
                                selectParts = {selectParts}
                            />
                            <Link to="/pay">
                                <button>선택 완료</button>
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
        const { category, data, selectParts } = this.props;
        console.log({category});
        return(
            <div>
                <h1>Frame List</h1>
                <DiyList
                    category = {category}
                    data = {data}
                    selectParts = {selectParts}
                />
            </div>
        );
    }
}
class DiyStep2 extends Component {
    render(){
        const { category, data, selectParts } = this.props;
        return(
            <div>
                <h1>Wings List</h1>
                <DiyList
                    category = {category}
                    data = {data}
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
                 category3,
                 category4,
                 data,
                 selectParts } = this.props;
        return(
            <div>
                <Row>
                    <Col>
                        <h1>ControlBoard List</h1>
                        <DiyList
                            category = {category1}
                            data = {data}
                            selectParts = {selectParts}
                        />
                    </Col>
                    <Col>
                        <h1>ESC List</h1>
                        <DiyList
                            category = {category2}
                            data = {data}
                            selectParts = {selectParts}
                        />
                    </Col>
                    <Col>
                        <h1>Battery List</h1>
                        <DiyList
                            category = {category3}
                            data = {data}
                            selectParts = {selectParts}
                        />
                    </Col>
                    <Col>
                        <h1>Antenna List</h1>
                        <DiyList
                            category = {category4}
                            data = {data}
                            selectParts = {selectParts}
                        />
                    </Col>
                </Row>

            </div>
        );
    }
}
class DiyStep4 extends Component {
    render(){
        const { category, data, selectParts } = this.props;
        return(
            <div>
                <h1>Motor List</h1>
                <DiyList
                    category = {category}
                    data = {data}
                    selectParts = {selectParts}
                />
            </div>
        );
    }
}
export default DiyStep;