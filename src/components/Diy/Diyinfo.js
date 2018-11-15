import React, { Component } from 'react';
import {
    Row,
    Col,
    } from 'reactstrap';

class DiyInfo extends Component {
    static defaultProps = {
        info: {
            img: '',
            name: '이름',
            contents: '내용',
            id: 0
        },
    }
    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };
        const {
            img, name, contents, id
        } = this.props.info;
        return (
            <div style={style}>
                <Row>
                    <Col md="3" xs="4" sm="5">
                <img src={img} width="100%"/>
                    </Col>
                    <Col>
                <div><b>{name}</b></div>
                <div>{contents}</div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DiyInfo;