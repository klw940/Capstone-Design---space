import React, { Component } from 'react';
import DiyChoice from './DiyChoice';
import DiyModel from './DiyModel';
import DiyStep from './DiyStep'
import axios from "axios";
import { Map, List, Record } from 'immutable';

import {
    Container,
    Col,
    Row,
    Button,
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
                this.inputSelectParts(input);
                break;
            case 2:
                this.setState({
                    selectedParts: selectedParts.set('wings', input)
                })
                this.inputSelectParts(input);
                break;
            case 3:
                this.setState({
                        selectedParts: selectedParts.set('frame', input)
                })
                this.inputSelectParts(input);
                break;
            case 4:
                this.setState({
                    selectedParts: selectedParts.set('controlBoard', input)
                })
                this.inputSelectParts(input);
                break;
            case 5:
                this.setState({
                    selectedParts: selectedParts.set('esc', input)
                })
                this.inputSelectParts(input);
                break;
            case 6:
                this.setState({
                    selectedParts: selectedParts.set('battery', input)
                })
                this.inputSelectParts(input);
                break;
            case 7:
                this.setState({
                    selectedParts: selectedParts.set('antenna', input)
                })
                this.inputSelectParts(input);
                break;
        }
    }

    inputSelectParts = (input) => {
        axios.post(this.state.ServerAddr+'/drone', input)
            .then( res => { console.log(res) })
            .catch( res => { console.log(res) });
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
                    <Col xs="3">
                        <DiyChoice
                            selectedParts = {this.state.selectedParts}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col align="center">
                        <Button onClick = {this.refreshPage} >다시하기</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Diy;