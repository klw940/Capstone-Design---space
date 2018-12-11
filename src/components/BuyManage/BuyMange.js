import React, { Component } from 'react';
import axios from "axios";
import { ServerAddr } from "../Constants";
import {Container, Divider, Grid} from 'semantic-ui-react'
import BuyMangeList from "./BuyMangeList";
import {Redirect} from "react-router-dom";

class BuyMange extends Component{
    constructor() {
        super();
        this.state = {
            buyList: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get(ServerAddr+'/buy_list')
            .then( res => {
                this.setState({buyList: res.data});
            })
            .catch( res => {
                console.log('error');
            });
    }

    render(){
        const beforeList = this.state.buyList.filter(part => part.check === false).map(
            part => {
                return (<BuyMangeList
                    key={part._id}
                    list={part.list}
                    address={part.address}
                    name={part.name}
                    email={part.email}
                    check={part.check}
                    setCheck={()=>{ axios.post(ServerAddr+'/buy_list_check',{_id: part._id});
                        window.location.reload();}}
                />)
            }
        );

        const afterList = this.state.buyList.filter(part => part.check === true).map(
            part => {
                return (<BuyMangeList
                    key={part._id}
                    list={part.list}
                    address={part.address}
                    name={part.name}
                    email={part.email}
                    check={part.check}
                    setCheck={()=>{}}
                />)
            }
        );

        if(!sessionStorage.getItem('dtoken')){
            return(<Redirect to='/' />)
        }
        else
            return(
                <Container>
                    <br/>
                    <Grid Columns={2} relaxed='very'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <h1>거래 대기 품목</h1>
                                {beforeList}
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <h1>거래 완료 품목</h1>
                                {afterList}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider vertical/>
                </Container>
            );
    }
}

export default BuyMange;