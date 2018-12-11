import React, { Component } from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import { ServerAddr } from "../Constants";
import {Link, Redirect} from "react-router-dom";
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
                    <Grid.Row Columns={2}>
                    <Grid.Column width={8}>
                        {
                            (()=>{
                                if (this.state.class === 1) return(<div>{redList}</div>)
                                else if (this.state.class === 2) return(<div>{greenList}</div>)
                                else if (this.state.class === 3) return(<div>{blueList}</div>)
                            })()
                        }
                    </Grid.Column>
                        <Grid.Column width={8}>
                            {
                                (()=>{
                                   if (this.state.class === 1) return(
                                        <Link to={{ pathname: '/pay', state: {buyList: [
                                                    {info: this.state.race[0], num: 1},
                                                    {info: this.state.race[1], num: 1},
                                                    {info: this.state.race[2], num: 1},
                                                    {info: this.state.race[3], num: 1},
                                                    {info: this.state.race[4], num: 1},
                                                    {info: this.state.race[5], num: 1},
                                                    {info: this.state.race[6], num: 1}]}}}>
                                            <Button primary>구매하기</Button>
                                        </Link>)
                                    else if (this.state.class === 2) return(
                                       <Link to={{ pathname: '/pay', state: {buyList: [
                                                   {info: this.state.farm[0], num: 1},
                                                   {info: this.state.farm[1], num: 1},
                                                   {info: this.state.farm[2], num: 1},
                                                   {info: this.state.farm[3], num: 1},
                                                   {info: this.state.farm[4], num: 1},
                                                   {info: this.state.farm[5], num: 1},
                                                   {info: this.state.farm[6], num: 1}]}}}>
                                           <Button primary>구매하기</Button>
                                       </Link>)
                                    else if (this.state.class === 3) return(
                                       <Link to={{ pathname: '/pay', state: {buyList: [
                                                   {info: this.state.camera[0], num: 1},
                                                   {info: this.state.camera[1], num: 1},
                                                   {info: this.state.camera[2], num: 1},
                                                   {info: this.state.camera[3], num: 1},
                                                   {info: this.state.camera[4], num: 1},
                                                   {info: this.state.camera[5], num: 1},
                                                   {info: this.state.camera[6], num: 1}]}}}>
                                           <Button primary>구매하기</Button>
                                       </Link>)
                                })()
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            );
    }
}

export default Recommend;