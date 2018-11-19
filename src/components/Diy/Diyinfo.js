import React, { Component } from 'react';
import {
    Row,
    Col,
    } from 'reactstrap';

class DiyInfo extends Component {
    static defaultProps = {
        info: {
            img: '',
            part: '',
            name: '이름',
            contents: '내용',
            id: 0
        },
    }
    selectPart = () => {
        const { info,
                selectMotor,
                selectWings,
                selectFrame,
                selectControlBoard,
                selectEsc,
                selectBattery,
                selectAntenna,
                } = this.props;
        if(info.part === 1) selectMotor(info);
        else if(info.part === 2) selectWings(info);
        else if(info.part === 3) selectFrame(info);
        else if(info.part === 4) selectControlBoard(info);
        else if(info.part === 5) selectEsc(info);
        else if(info.part === 6) selectBattery(info);
        else if(info.part === 7) selectAntenna(info);
    }
    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };
        const {
            img, part, name, contents, id
        } = this.props.info;
        return (
            <div style={style} onClick={this.selectPart}>
                <Row>
                    <Col md="3" xs="4" sm="5">
                <img src={img} width="100%" alt={name}/>
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