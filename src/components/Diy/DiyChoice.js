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
                                <img src={selectedParts.getIn(['motor','img'])} width="100%" alt={selectedParts.getIn(['motor','name'])}/>
                            </Col>
                            <Col>
                                <div><b>{selectedParts.getIn(['motor','name'])}</b></div>
                                <div>{selectedParts.getIn(['motor','description'])}</div>
                            </Col>
                        </Row>
                    </div>
                    <li value="2">Wings</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedParts.getIn(['wings','img'])} width="100%" alt={selectedParts.getIn(['wings','name'])}/>
                            </Col>
                            <Col>
                                <div><b>{selectedParts.getIn(['wings','name'])}</b></div>
                                <div>{selectedParts.getIn(['wings','description'])}</div>
                            </Col>
                        </Row>
                    </div>
                    <li value="3">Frame</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedParts.getIn(['frame','img'])} width="100%" alt={selectedParts.getIn(['frame','name'])}/>
                            </Col>
                            <Col>
                                <div><b>{selectedParts.getIn(['frame','name'])}</b></div>
                                <div>{selectedParts.getIn(['frame','description'])}</div>
                            </Col>
                        </Row>
                    </div>
                    <li value="4">Control Board</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedParts.getIn(['controlBoard','img'])} width="100%" alt= {selectedParts.getIn(['controlBoard','name'])}/>
                            </Col>
                            <Col>
                                <div><b>{selectedParts.getIn(['controlBoard','name'])}</b></div>
                                <div>{selectedParts.getIn(['controlBoard','description'])}</div>
                            </Col>
                        </Row>
                    </div>
                    <li value="5">ESC</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedParts.getIn(['esc','img'])} width="100%" alt={selectedParts.getIn(['esc','name'])}/>
                            </Col>
                            <Col>
                                <div><b>{selectedParts.getIn(['esc','name'])}</b></div>
                                <div>{selectedParts.getIn(['esc','description'])}</div>
                            </Col>
                        </Row>
                    </div>
                    <li value="6">Battery</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedParts.getIn(['battery','img'])}  width="100%" alt={selectedParts.getIn(['battery','name'])}/>
                            </Col>
                            <Col>
                                <div><b>{selectedParts.getIn(['battery','name'])}</b></div>
                                <div>{selectedParts.getIn(['battery','description'])}</div>
                            </Col>
                        </Row>
                    </div>
                    <li value="7">Antenna</li>
                    <div className="category-content">
                        <Row>
                            <Col md="3" xs="4" sm="5">
                                <img src={selectedParts.getIn(['antenna','img'])}  width="100%" alt={selectedParts.getIn(['antenna','name'])}/>
                            </Col>
                            <Col>
                                <div><b>{selectedParts.getIn(['antenna','name'])}</b></div>
                                <div>{selectedParts.getIn(['antenna','description'])}</div>
                            </Col>
                        </Row>
                    </div>
                </ul>
            </div>
        );
    }
}

export default DiyChoice;