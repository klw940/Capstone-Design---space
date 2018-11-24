import React, { Component } from 'react';
import DiyList from './DiyList';
import DiyChoice from './DiyChoice';
import DiyModel from './DiyModel';
import DiyStep from './DiyStep'
import axios from "axios";
import { Map, List, Record } from 'immutable';

import {
    Container,
    Col,
    Row,
    } from 'reactstrap'

const Parts = Record({
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
});

class Diy extends Component{
    state = {
        ServerAddr: "http://ec2-52-32-190-25.us-west-2.compute.amazonaws.com:3001",
        info: List([
            Parts({
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
            }),
        ]),
        selectedParts: Map({
            motor: Parts({
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
            }),
            wings: Parts({
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
            }),
            frame: Parts({
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
            }),
            controlBoard: Parts({
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
            }),
            esc: Parts({
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
            }),
            battery: Parts({
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
            }),
            antenna: Parts({
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
            }),
        }),
    }

    selectParts = (select, input) => {
        const { selectedParts } = this.state;

        switch(select){
            case 1:
                this.setState({
                    selectedParts: selectedParts.set('motor', input)
                })
                break;
            case 2:
                this.setState({
                    selectedParts: selectedParts.set('wings', input)
                })
                break;
            case 3:
                this.setState({
                        selectedParts: selectedParts.set('frame', input)
                })
                break;
            case 4:
                this.setState({
                    selectedParts: selectedParts.set('controlBoard', input)
                })
                break;
            case 5:
                this.setState({
                    selectedParts: selectedParts.set('esc', input)
                })
                break;
            case 6:
                this.setState({
                    selectedParts: selectedParts.set('battery', input)
                })
                break;
            case 7:
                this.setState({
                    selectedParts: selectedParts.set('antenna', input)
                })
                break;
        }
    }

    refreshPage(){
        window.location.reload();
    }

    componentDidMount() {

        axios.get(this.state.ServerAddr+'/drone')
            .then( res => {this.setState({
                info: res.data
                })
            })
            .catch( res => {
                console.log("error");
            });
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col align="center">
                        <DiyModel/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DiyStep
                            info = {this.state.info}
                            selectParts = {this.selectParts}
                        />
                    </Col>
                        <DiyChoice
                            selectedParts = {this.state.selectedParts}
                        />
                    <Col>
                    </Col>
                </Row>
                <Row>
                    < button onClick = {this.refreshPage} >다시하기</button>
                </Row>
            </Container>
        );
    }
}

export default Diy;
/*
*
    selectWings = (input) => {
        const { data } = this.state

        this.setState({
            selectedParts: data.set('wings', input)
        })
    }
    selectFrame = (input) => {
        const { data } = this.state

        this.setState({
            selectedParts: data.set('frame', input)
        })
    }
    selectControlBoard = (input) => {
        const { data } = this.state

        this.setState({
            selectedParts: data.set('controlBoard', input)
        })
    }
    selectEsc = (input) => {
        const { data } = this.state

        this.setState({
            selectedParts: data.set('esc', input)
        })
    }
    selectBattery = (input) => {
        const { data } = this.state

        this.setState({
            selectedParts: data.set('battery', input)
        })
    }
    selectAntenna = (input) => {
        const { data } = this.state

        this.setState({
            selectedParts: data.set('antenna', input)
        })
    }

                <Row>
                    <Col>
                        <DiyList
                            category = {this.state.category}
                            data = {this.state.info}
                            selectParts = {this.selectParts}
            //                selectWings = {this.selectWings}
              //              selectFrame = {this.selectFrame}
                //            selectControlBoard = {this.selectControlBoard}
                  //          selectEsc = {this.selectEsc}
                    //        selectBattery = {this.selectBattery}
                      //      selectAntenna = {this.selectAntenna}
                        />
                    </Col>
                </Row>*/
