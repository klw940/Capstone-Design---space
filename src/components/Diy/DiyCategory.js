import React, { Component } from 'react';
import '../../style/DiyCategoryStyle.css';
import {
    Row,
    Col,
} from 'reactstrap';

class DiyCategory extends Component{
    static defaultProps = {
        data: '',
    }
    handleClick = (e) => {
        this.props.inputCategory(e.target.value);
    }
    render(){
        const {
                selectedMotor,
                selectedWings,
                selectedFrame,
                selectedControlBoard,
                selectedEsc,
                selectedBattery,
                selectedAntenna,
                } = this.props;
        return(
            <div className="category">
                <h2>Category</h2>
                <ul className="category-list">
                    <li onClick={this.handleClick} value="1">Motor</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedMotor.img} width="100%" alt={selectedMotor.name}/>
                            </Col>
                            <Col>
                                <div><b>{selectedMotor.name}</b></div>
                                <div>{selectedMotor.description}</div>
                            </Col>
                        </Row>
                    </div>
                    <li onClick={this.handleClick} value="2">Wings</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedWings.img} width="100%" alt={selectedWings.name}/>
                            </Col>
                            <Col>
                                <div><b>{selectedWings.name}</b></div>
                                <div>{selectedWings.description}</div>
                            </Col>
                        </Row>
                    </div>
                    <li onClick={this.handleClick} value="3">Frame</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedFrame.img} width="100%" alt={selectedFrame.name}/>
                            </Col>
                            <Col>
                                <div><b>{selectedFrame.name}</b></div>
                                <div>{selectedFrame.description}</div>
                            </Col>
                        </Row>
                    </div>
                    <li onClick={this.handleClick} value="4">Control Board</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedControlBoard.img} width="100%" alt= {selectedControlBoard.name}/>
                            </Col>
                            <Col>
                                <div><b>{selectedControlBoard.name}</b></div>
                                <div>{selectedControlBoard.description}</div>
                            </Col>
                        </Row>
                    </div>
                    <li onClick={this.handleClick} value="5">ESC</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedEsc.img} width="100%" alt={selectedEsc.name}/>
                            </Col>
                            <Col>
                                <div><b>{selectedEsc.name}</b></div>
                                <div>{selectedEsc.description}</div>
                            </Col>
                        </Row>
                    </div>
                    <li onClick={this.handleClick} value="6">Battery</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedBattery.img} width="100%" alt={selectedBattery.name}/>
                            </Col>
                            <Col>
                                <div><b>{selectedBattery.name}</b></div>
                                <div>{selectedBattery.description}</div>
                            </Col>
                        </Row>
                    </div>
                    <li onClick={this.handleClick} value="7">Antenna</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedAntenna.img} width="100%" alt={selectedAntenna.name}/>
                            </Col>
                            <Col>
                                <div><b>{selectedAntenna.name}</b></div>
                                <div>{selectedAntenna.description}</div>
                            </Col>
                        </Row>
                    </div>
                </ul>
            </div>
        );
    }
}

export default DiyCategory;