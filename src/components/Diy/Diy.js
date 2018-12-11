import React, { Component } from 'react';
import DiyChoice from './DiyChoice';
import DiyStep from './DiyStep'
import axios from "axios";
import origin_image from '../../image/step_image/(0)origin.jpg';
import frame_image from '../../image/step_image/(1)frame.jpg';
import wing_image from '../../image/step_image/(2)wing.jpg';
import controlboard_image from '../../image/step_image/(3)controlboard.jpg';
import ESC_image from '../../image/step_image/(4)ESC.jpg';
import battery_image from '../../image/step_image/(5)battery.jpg';
import antenna_image from '../../image/step_image/(6)antenna.jpg';
import motor_image from '../../image/step_image/(7)motor.jpg';
import { Map, List, Record} from 'immutable';
import { ServerAddr } from "../Constants";

import {
    Grid,
    Button,
    Container, Image
} from 'semantic-ui-react';
import {Redirect} from "react-router-dom";
import {CSSTransitionGroup} from "react-transition-group";

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
    material: '',
});

class Diy extends Component{
    constructor() {
        super();
        this.state = {
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
                    material: '',
                }),
            ]),
            selectedParts: Map({
                motor: '',
                wings: '',
                frame: '',
                controlBoard: '',
                esc: '',
                battery: '',
                antenna: '',
            }),
            step: 0,
        }
    }

    selectParts = (select, input) => {
        const { selectedParts } = this.state;

        switch(select){
            case 1:
                this.setState({
                    selectedParts: selectedParts.set('frame', input)
                })
                break;
            case 2:
                this.setState({
                    selectedParts: selectedParts.set('wings', input)
                })
                break;
            case 3:
                this.setState({
                    selectedParts: selectedParts.set('controlBoard', input)
                })
                break;
            case 4:
                this.setState({
                    selectedParts: selectedParts.set('esc', input)
                })
                break;
            case 5:
                this.setState({
                    selectedParts: selectedParts.set('battery', input)
                })
                break;
            case 6:
                this.setState({
                    selectedParts: selectedParts.set('antenna', input)
                })
                break;
            case 7:
                this.setState({
                    selectedParts: selectedParts.set('motor', input)
                })
                break;
            default:
                break;
        }
    };

    postSelectParts = (input) => {
        axios.post(ServerAddr+'/drone', input)
            .then( res => {
                this.setState({
                    info: res.data
                })
            })
            .catch( res => { console.log("postSelectPartsError") });
    };

    setStep = (input)=>{
        this.setState({
            step: input
        })
    }

    refreshPage(){
        window.location.reload();
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get(ServerAddr+'/drone')
            .then( res => {this.setState({
                info: res.data
            })
            })
            .catch( res => {
                console.log("droneGetError");
            });
    }

    render(){
        if(!sessionStorage.getItem('dtoken')){
            return(<Redirect to='/' />)
        }
        else
            return(
                <CSSTransitionGroup
                    transitionName="homeTransition"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Container>
                        <br/>
                        <Grid>
                            <Grid.Row Columns={1}>
                                <Grid.Column width={16}>
                                    {
                                        (() => {
                                            if(this.state.step === 0) return(
                                                <Image src={origin_image} size="large" rounded centered/>
                                            );
                                            else if(this.state.step === 1) return(
                                                <Image src={frame_image} size="large" rounded centered/>
                                            );
                                            else if(this.state.step === 2) return(
                                                <Image src={wing_image} size="large" rounded centered/>
                                            );
                                            else if(this.state.step === 3) return(
                                                <Image src={controlboard_image} size="large" rounded centered/>
                                            );
                                            else if(this.state.step === 4) return(
                                                <Image src={ESC_image} size="large" rounded centered/>
                                            );
                                            else if(this.state.step === 5) return(
                                                <Image src={battery_image} size="large" rounded centered/>
                                            );
                                            else if(this.state.step === 6) return(
                                                <Image src={antenna_image} size="large" rounded centered/>
                                            );
                                            else if(this.state.step === 7) return(
                                                <Image src={motor_image} size="large" rounded centered/>
                                            );

                                        })()
                                    }
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row Columns={2}>
                                <Grid.Column width = "10">
                                    <DiyStep
                                        info = {this.state.info}
                                        selectParts = {this.selectParts}
                                        selectedParts = {this.state.selectedParts}
                                        postSelectParts = {this.postSelectParts}
                                        step = {this.setStep}
                                    />
                                </Grid.Column>
                                <Grid.Column width = "6">
                                    <Button primary floated="right" onClick = {this.refreshPage} >다시하기</Button>
                                    <br/>
                                    <br/>
                                    <DiyChoice
                                        selectedParts = {this.state.selectedParts}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </CSSTransitionGroup>
            );
    }
}

export default Diy;