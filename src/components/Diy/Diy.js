import React, { Component } from 'react';
import DiyList from './DiyList';
import DiyCategory from './DiyCategory';
import custom_image from '../../image/custom.png';
import motor_ex from '../../image/motor-ex.jpg';
import wings_ex from '../../image/wings-ex.jpg';
import frame_ex from '../../image/frame-ex.jpg';
import CB_ex from '../../image/CB-ex.jpg';
import esc_ex from '../../image/esc-ex.jpg';
import battery_ex from '../../image/battery-ex.jpg';
import antenna_ex from '../../image/antenna-ex.jpg';

import {
    Container,
    Col,
    Row,
    } from 'reactstrap'

class Diy extends Component{
    id = 3
    state = {
        category: '',
        motorInfo: [
            {
                id: 0,
                img: motor_ex,
                name: '모터1',
                contents: '모터1모터1모터1모터1모터1'
            },
            {
                id: 1,
                img: motor_ex,
                name: '모터2',
                contents: '모터2모터2모터2모터2모터2'
            },
            {
                id: 2,
                img: motor_ex,
                name: '모터3',
                contents: '모터3모터3모터3모터3모터3'
            }
        ],
        wingsInfo: [
            {
                id: 0,
                img: wings_ex,
                name: '날개1',
                contents: '날개1날개1날개1날개1날개1'
            },
            {
                id: 1,
                img: wings_ex,
                name: '날개2',
                contents: '날개2날개2날개2날개2날개2'
            },
            {
                id: 2,
                img: wings_ex,
                name: '날개3',
                contents: '날개3날개3날개3날개3날개3'
            }
        ],
        frameInfo: [
            {
                id: 0,
                img: frame_ex,
                name: '프레임1',
                contents: '프레임1프레임1프레임1프레임1프레임1프레임1'
            },
            {
                id: 1,
                img: frame_ex,
                name: '프레임2',
                contents: '프레임2프레임2프레임2프레임2프레임2프레임2'
            },
            {
                id: 2,
                img: frame_ex,
                name: '프레임3',
                contents: '프레임3프레임3프레임3프레임3프레임3프레임3'
            }
        ],
        controlBoardInfo: [
            {
                id: 0,
                img: CB_ex,
                name: '보드1',
                contents: '보드1보드1보드1보드1보드1보드1'
            },
            {
                id: 1,
                img: CB_ex,
                name: '보드2',
                contents: '보드2보드2보드2보드2보드2보드2'
            },
            {
                id: 2,
                img: CB_ex,
                name: '보드3',
                contents: '보드3보드3보드3보드3보드3보드3'
            }
        ],
        escInfo: [
            {
                id: 0,
                img: esc_ex,
                name: 'esc1',
                contents: 'esc1esc1esc1esc1esc1esc1'
            },
            {
                id: 1,
                img: esc_ex,
                name: 'esc2',
                contents: 'esc2esc2esc2esc2esc2esc2'
            },
            {
                id: 2,
                img: esc_ex,
                name: 'esc3',
                contents: 'esc3esc3esc3esc3esc3esc3'
            }
        ],
        batterInfo: [
            {
                id: 0,
                img: battery_ex,
                name: '배터리1',
                contents: '배터리1배터리1배터리1배터리1배터리1'
            },
            {
                id: 1,
                img: battery_ex,
                name: '배터리2',
                contents: '배터리2배터리2배터리2배터리2배터리2'
            },
            {
                id: 2,
                img: battery_ex,
                name: '배터리3',
                contents: '배터리3배터리3배터리3배터리3배터리3'
            }
        ],
        antennaInfo: [
            {
                id: 0,
                img: antenna_ex,
                name: '안테나1',
                contents: '안테나1안테나1안테나1안테나1안테나1'
            },
            {
                id: 1,
                img: antenna_ex,
                name: '안테나2',
                contents: '안테나2안테나2안테나2안테나2안테나2'
            },
            {
                id: 2,
                img: antenna_ex,
                name: '안테나3',
                contents: '안테나3안테나3안테나3안테나3안테나3'
            }
        ],
    }
    categoryInput = (data) => {
        this.setState({
            category: data
        })
    }
    render(){
        return(
            <Container>
                <br/>
                <Row>
                    <Col align="center">
                        <img src={custom_image} alt="home_image" width="30%"/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col algin="center">
                        <DiyCategory
                            onInput={this.categoryInput}
                        />
                    </Col>
                    <Col>
                        <DiyList
                            category={this.state.category}
                            motorData = {this.state.motorInfo}
                            wingsData = {this.state.wingsInfo}
                            frameData = {this.state.frameInfo}
                            controlBoardData = {this.state.controlBoardInfo}
                            escData = {this.state.escInfo}
                            batteryData = {this.state.batterInfo}
                            antennaData = {this.state.antennaInfo}
                        />
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>

        );
    }
}

export default Diy;
