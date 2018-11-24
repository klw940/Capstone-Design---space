import React, { Component } from 'react';
import {
    Row,
    Col,
} from 'reactstrap';

class DiyChoice extends Component{
    static defaultProps = {
        data: '',
    }
    render(){
        const { selectedParts } = this.props;
        return(
            <div className="category">
                <h2>Category</h2>
                <ul className="category-list">
                    <li value="1">Motor</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedParts.get('motor').image} width="100%" alt={selectedParts.get('motor').name}/>
                            </Col>
                            <Col>
                                <div><b>{selectedParts.get('motor').name}</b></div>
                                <div>{selectedParts.get('motor').description}</div>
                            </Col>
                        </Row>
                    </div>
                    <li value="2">Wings</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedParts.get('wings').image} width="100%" alt={selectedParts.get('wings').name}/>
                            </Col>
                            <Col>
                                <div><b>{selectedParts.get('wings').name}</b></div>
                                <div>{selectedParts.get('wings').description}</div>
                            </Col>
                        </Row>
                    </div>
                    <li value="3">Frame</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedParts.get('frame').image} width="100%" alt={selectedParts.get('frame').name}/>
                            </Col>
                            <Col>
                                <div><b>{selectedParts.get('frame').name}</b></div>
                                <div>{selectedParts.get('frame').description}</div>
                            </Col>
                        </Row>
                    </div>
                    <li value="4">Control Board</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedParts.get('controlBoard').image} width="100%" alt= {selectedParts.get('controlBoard').name}/>
                            </Col>
                            <Col>
                                <div><b>{selectedParts.get('controlBoard').name}</b></div>
                                <div>{selectedParts.get('controlBoard').description}</div>
                            </Col>
                        </Row>
                    </div>
                    <li value="5">ESC</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedParts.get('esc').image} width="100%" alt={selectedParts.get('esc').name}/>
                            </Col>
                            <Col>
                                <div><b>{selectedParts.get('esc').name}</b></div>
                                <div>{selectedParts.get('esc').description}</div>
                            </Col>
                        </Row>
                    </div>
                    <li value="6">Battery</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedParts.get('battery').image}  width="100%" alt={selectedParts.get('battery').name}/>
                            </Col>
                            <Col>
                                <div><b>{selectedParts.get('battery').name}</b></div>
                                <div>{selectedParts.get('battery').description}</div>
                            </Col>
                        </Row>
                    </div>
                    <li value="7">Antenna</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedParts.get('antenna').image}  width="100%" alt={selectedParts.get('antenna').name}/>
                            </Col>
                            <Col>
                                <div><b>{selectedParts.get('antenna').name}</b></div>
                                <div>{selectedParts.get('antenna').description}</div>
                            </Col>
                        </Row>
                    </div>
                </ul>
            </div>
        );
    }
}

export default DiyChoice;