import React, { Component } from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import { ServerAddr } from "../Constants";
import {Redirect} from "react-router-dom";
import RecommendList from "./RecommendList";

class Recommend extends Component{
    constructor() {
        super();
        this.state = {
            class: 0,
            race: [],
            farm: [],
            camera: [],
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    red = () => { axios.get(ServerAddr + '/reco_race').then(res => {this.setState({race: res.data}); this.setState({class: 1});}).catch(res => console.log('error')) }
    green = () => { axios.get(ServerAddr + '/reco_farm').then(res => {this.setState({farm: res.data}); this.setState({class: 2});}).catch(res => console.log('error')) }
    blue = () => { axios.get(ServerAddr + '/reco_camera').then(res => {this.setState({camera: res.data}); this.setState({class: 3});}).catch(res => console.log('error')) }

    render(){
        const redList = this.state.race.map(
            part => {
                return (<RecommendList
                    info={part}
                />)
            }
        );

        const greenList = this.state.farm.map(
            part => {
                return (<RecommendList
                    info={part}
                />)
            }
        );
        const blueList = this.state.camera.map(
            part => {
                return (<RecommendList
                    info={part}
                />)
            }
        );


        if(!sessionStorage.getItem('dtoken')){
            return(<Redirect to='/' />)
        }
        else
            return(
                <Grid container style={{ padding: '2em 0em' }}>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h1'>드론 추천</Header>
                            <Button color='red' onClick={this.red}>
                                레이싱
                            </Button>
                            <Button color='green' onClick={this.green}>
                                농업
                            </Button>
                            <Button color='blue' onClick={this.blue}>
                                촬영
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                <Grid.Row>
                    {
                        (()=>{
                            if (this.state.class === 1) return(<div>{redList}</div>)
                            else if (this.state.class === 2) return(<div>{greenList}</div>)
                            else if (this.state.class === 3) return(<div>{blueList}</div>)
                        })()
                    }
                </Grid.Row>

                </Grid>
            );
    }
}

export default Recommend;