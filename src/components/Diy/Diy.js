import React, { Component } from 'react';
import DiyList from './DiyList';
import DiyCategory from './DiyCategory';
import {
    Container,
    Col,
    Row,
    } from 'reactstrap'
class Diy extends Component{
    state ={
        category: ''
    }
    categoryInput = (data) => {
        this.setState({
            category: data
        })
        console.log(this.state.category);
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col align="center">
                        Image
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DiyCategory onInput={this.categoryInput} align="left"/>
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
