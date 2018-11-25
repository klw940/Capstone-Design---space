import React, { Component } from 'react';
import DiyChoice from './DiyChoice';
import DiyModel from './DiyModel';
import DiyStep from './DiyStep'
import axios from "axios";
import { Map, List, Record} from 'immutable';

import {
    Grid,
    Button,
} from 'semantic-ui-react';

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
    constructor() {
        super();
        this.state = {
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
    nextShow1 = () => {
        this.setState({ step1Show: true});
    }

    nextShow2 = () => {
        this.setState({ step2Show: true });
    }

    nextShow3 = () => {
        this.setState({ step3Show: true });
    }

    nextShow4 = () => {
        this.setState({ step4Show: true });
    }

    nextShow5 = () => {
        this.setState({ step5Show: true});
    }

    nextShow6 = () => {
        this.setState({ step6Show: true});
    }

    nextShow7 = () => {
        this.setState({ step7Show: true});
    }

    render(){
        return(
            <Grid>
                <Grid.Column>
                    <DiyModel/>
                </Grid.Column>
                <Grid.Row>
                    <Grid.Column width="10">
                        <DiyStep
                            info = {this.state.info}
                            selectParts = {this.selectParts}
                        />
                    </Grid.Column>
                    <Grid.Column width="6">
                        <DiyChoice
                            selectedParts = {this.state.selectedParts}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Column>
                    <Button onClick = {this.refreshPage} >다시하기</Button>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Diy;