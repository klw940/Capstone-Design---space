import React, { Component } from 'react';
import DiyList from './DiyList';
import DiyCategory from './DiyCategory';
import {
    Container,
    Col,
    Row,
    } from 'reactstrap'
class Diy extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col align="center">
                        <img width="300" src="https://www.costco.co.kr/medias/sys_master/images/ha9/hc0/10418540740638.jpg"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DiyCategory align="left"/>
                    </Col>
                    <Col>
                        <DiyList align="right"/>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Diy;