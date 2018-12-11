import React, { Component } from 'react';
import { Grid, Button, Container, Segment, Form} from "semantic-ui-react";
import PayList from "./PayList";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import {ServerAddr} from "../Constants";
import {CSSTransitionGroup} from "react-transition-group";

class Pay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buyList: [],
            payMethod: '',
            price: 0,
            address: '',
            message: '',
        };
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        await this.setState({ buyList: this.props.location.state.buyList});
        await this.state.buyList.map(
            part => {
                this.setState({price: this.state.price + (part.info.price * part.num)})
                part.info.store = part.info.store - part.num;
            }
        );
    }

    postBuyList = () => {
        axios.post(ServerAddr+'/buy_list',{name: sessionStorage.getItem('name'), email: sessionStorage.getItem('email'),list: this.state.buyList, address: this.state.address})
            .then( res => {
                console.log(res.data);
            })
            .catch( res => {
            });
    }

    handleChange = (e) => {
        this.setState({
            address: e.target.value
        });
    };

    handleSelectChange = (e, {value}) => {
        this.setState({
            payMethod: value
        })
    }

    render(){
        const list = this.state.buyList.map(
            part => {
                return (<PayList
                    key={part._id}
                    info={part.info}
                    num={part.num}
                />)
            }
        );

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
                            <Grid.Row Columns={2}>
                                <Grid.Column width = "10">
                                    <h3>구매 목록</h3>
                                    {list}
                                    <Segment size="large" floated="right"><b>가격: {this.state.price}원</b></Segment>
                                </Grid.Column>
                                <Grid.Column width = "6">
                                    <h2>결제 정보</h2>
                                    <Form>
                                        <Form.Group>
                                            <Form.Input label='주소' placeholder='주소' onChange={this.handleChange}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Select placeholder="결제 방법" options={[{key: '1', value: '1', text: '무통장 입금'}]} value={this.state.payMethod} onChange={this.handleSelectChange}/>
                                        </Form.Group>
                                    </Form>
                                    <h6 className="text-danger">{this.state.message}</h6>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row Columns={1}>
                                <Grid.Column>
                                    {
                                        (()=>{
                                            if(!this.state.payMethod || !this.state.address) return(<Button onClick={() => {
                                                window.scrollTo(0, 0); this.setState({message: '결제 정보를 모두 입력해주세요'})}}>결제하기</Button>);
                                            else return(
                                                <Link to={{ pathname: '/pay/depositless', state: { price: this.state.price, address: this.state.address}}}>
                                                    <Button onClick={this.postBuyList}>결제하기</Button>
                                                </Link>);
                                        })()
                                    }
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </CSSTransitionGroup>
            );
    }
}

export default Pay;