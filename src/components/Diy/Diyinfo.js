import React, { Component } from 'react';
import {
    Row,
    Col,
    } from 'reactstrap';

class DiyInfo extends Component {
    static defaultProps = {
        info: {
            img: '',
            price: '',
            part: '',
            name: '',
            description: '',
            id: 0
        },
    }
    newWindow = () => {
        window.open('http://localhost:3000/', 'sharer', 'toolbar=0,status=0,width=548,height=325');
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
            name, img, description, price
        } = this.props.info;
        return (
            <div style={style}>
                <div onClick={this.newWindow}>
                    <Row>
                        <Col md="3" xs="4" sm="5">
                    <img src={img} width="100%" alt={name}/>
                        </Col>
                        <Col>
                    <div><b>{name}</b>  {price}원</div>
                    <div>{description}</div>
                        </Col>
                    </Row>
                </div>
                <button onClick={this.selectPart}>선택</button>
            </div>
        );
    }
}

export default DiyInfo;