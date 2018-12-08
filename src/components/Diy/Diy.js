import React, { Component } from 'react';
import DiyChoice from './DiyChoice';
import DiyStep from './DiyStep'
import axios from "axios";
import { Map, List, Record} from 'immutable';

import {
    Grid,
    Button,
    Container, Image
} from 'semantic-ui-react';
import custom_image from "../../image/drone.png";
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
            ServerAddr: "http://ec2-54-180-90-44.ap-northeast-2.compute.amazonaws.com:3001",
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
        axios.post(this.state.ServerAddr+'/drone', input)
            .then( res => {
                console.log(this.state.info);
                this.setState({
                    info: res.data
                })
            })
            .catch( res => { console.log(res) });
    };

    refreshPage(){
        window.location.reload();
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get(this.state.ServerAddr+'/drone')
            .then( res => {this.setState({
                info: res.data
            })
                console.log(this.state.info);
            })
            .catch( res => {
                console.log("error");
            });
    }

    render(){
        return(
                <Container>
                    <br/>
                    <Grid>
                        <Grid.Row Columns={1}>
                <Grid.Column width={16}>
                    <Image src={custom_image} size='medium' rounded centered/>
                </Grid.Column>
                        </Grid.Row>
                <Grid.Row Columns={2}>
                    <Grid.Column width = "10">
                        <DiyStep
                            info = {this.state.info}
                            selectParts = {this.selectParts}
                            selectedParts = {this.state.selectedParts}
                            postSelectParts = {this.postSelectParts}
                        />
                    </Grid.Column>
                    <Grid.Column width = "6">
                        <DiyChoice
                            selectedParts = {this.state.selectedParts}
                        />
                    </Grid.Column>
                </Grid.Row>
                        <Grid.Row Columns={1}>
                <Grid.Column >
                    <Button onClick = {this.refreshPage} >다시하기</Button>
                </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
        );
    }
}

export default Diy;