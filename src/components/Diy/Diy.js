import React, { Component } from 'react';
import DiyList from './DiyList';
import DiyCategory from './DiyCategory';
import {Link} from "react-router-dom";
import axios from "axios";
//import { Map, List } from 'immutable';

import custom_image from '../../image/custom.png';

import {
    Container,
    Col,
    Row,
    } from 'reactstrap'

class Diy extends Component{
    state = {
        ServerAddr: "http://ec2-52-32-190-25.us-west-2.compute.amazonaws.com:3001",
        category: 1,
        info: [
            {
              name: '',
              image: '',
              price: '',
              weight: '',
              long_length: '',
              short_length: '',
              store: '',
              description: '',
              part: '',
              thrust: '',
              HOU: '',
              rating: '',
              frameMaterial: '',
              wingMaterial: '',
            },
        ],
        selectedMotor: [
            {
                id: '',
                part: '',
                img: '',
                name: '',
                description: '',
            }
        ],
        selectedWings: [
            {
                id: '',
                part: '',
                img: '',
                name: '',
                description: '',
            }
        ],
        selectedFrame: [
            {
                id: '',
                part: '',
                img: '',
                name: '',
                description: '',
            }
        ],
        selectedControlBoard: [
            {
                id: '',
                part: '',
                img: '',
                name: '',
                description: '',
            }
        ],
        selectedEsc: [
            {
                id: '',
                part: '',
                img: '',
                name: '',
                description: '',
            }
        ],
        selectedBattery: [
            {
                id: '',
                part: '',
                img: '',
                name: '',
                description: '',
            }
        ],
        selectedAntenna: [
            {
                id: '',
                part: '',
                img: '',
                name: '',
                description: '',
            }
        ],
    }
    categoryInput = (data) => {
        this.setState({
            category: data
        })
    }
    selectMotor = (data) => {
        this.setState({
            selectedMotor: data
        })
    }
    selectWings = (data) => {
        this.setState({
            selectedWings: data
        })
    }
    selectFrame = (data) => {
        this.setState({
            selectedFrame: data
        })
    }
    selectControlBoard = (data) => {
        this.setState({
            selectedControlBoard: data
        })
    }
    selectEsc = (data) => {
        this.setState({
            selectedEsc: data
        })
    }
    selectBattery = (data) => {
        this.setState({
            selectedBattery: data
        })
    }
    selectAntenna = (data) => {
        this.setState({
            selectedAntenna: data
        })
    }

    componentDidMount() {
        axios.get(this.state.ServerAddr+'/drone')
            .then( res => {this.setState({
                info: res.data
            })
            })
            .catch( res => { console.log("error");
            });
    }
    render(){
        console.log(this.state.info);
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
                            inputCategory={this.categoryInput}
                            selectedMotor= {this.state.selectedMotor}
                            selectedWings = {this.state.selectedWings}
                            selectedFrame = {this.state.selectedFrame}
                            selectedControlBoard = {this.state.selectedControlBoard}
                            selectedEsc = {this.state.selectedEsc}
                            selectedBattery = {this.state.selectedBattery}
                            selectedAntenna = {this.state.selectedAntenna}
                        />
                    </Col>
                    <Col>
                        <DiyList
                            category = {this.state.category}
                            data = {this.state.info}
                            selectMotor = {this.selectMotor}
                            selectWings = {this.selectWings}
                            selectFrame = {this.selectFrame}
                            selectControlBoard = {this.selectControlBoard}
                            selectEsc = {this.selectEsc}
                            selectBattery = {this.selectBattery}
                            selectAntenna = {this.selectAntenna}
                        />
                    </Col>
                </Row>
                <Row>
                    <Link to="/pay">
                        <button>선택 완료</button>
                    </Link>
                </Row>
            </Container>
        );
    }
}

export default Diy;
