import React, { Component } from 'react';
import {
    Row,
    Col,
    } from 'reactstrap';

class DiyInfo extends Component {

    newWindow = () => {
        window.open('http://localhost:3000/', 'sharer', 'toolbar=0,status=0,width=548,height=325');
    }
    selectPart = () => {
        const { info,
                selectParts,
                } = this.props;
        selectParts(info.part, info);
    }
    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };
        const {
            info,
        } = this.props;
        console.log(info);
        return (
            <div style={style}>
                <div onClick={this.newWindow}>
                    <Row>
                        <Col md="3" xs="4" sm="5">
                    <img src={info.image} width="100%" alt={info.name}/>
                        </Col>
                        <Col>
                            <div><b>{info.name}</b>  {info.price}원</div>
                            <div>{info.description}</div>
                        </Col>
                    </Row>
                </div>
                <button onClick={this.selectPart}>선택</button>
            </div>
        );
    }
}

export default DiyInfo;