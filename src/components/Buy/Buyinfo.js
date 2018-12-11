import React, { Component } from 'react';
import { Collapse} from 'reactstrap'
import {
    Item,
    Button,
    Divider,
    Segment,
    Input,
} from 'semantic-ui-react';
import axios from "axios";
import {Link} from "react-router-dom";
import {Menu} from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";
import { ServerAddr } from "../Constants";

class BuyInfo extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.plus = this.plus.bind(this);
        this.state = {
            collapse: false,
            num: 1,
            newStore: 0,
        };
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    plus = () => {
        if(this.state.num < this.props.info.store) this.setState({num: this.state.num + 1});
    }

    minus = () => {
        if(this.state.num > 1) this.setState({num: this.state.num - 1});
    }

    plusOne = () => {
        this.setState({newStore: this.state.newStore + 1});
    }

    minusOne = () => {
        if(this.state.newStore > 1) this.setState({newStore: this.state.newStore - 1});
    }

    plusTen = () => {
        this.setState({newStore: this.state.newStore + 10});
    }

    minusTen = () => {
        if(this.state.newStore > 11) this.setState({newStore: this.state.newStore - 10});
    }

    removeItem = () => {
        axios.post(ServerAddr+'/drone_delete', {_id: this.props.info._id})
            .then(res => {
                console.log(res.data)
            })
            .catch(res =>{
                console.log('removeItemError')
            })
         window.location.reload();
    }

    changeStore = async () => {
        await axios.post(ServerAddr+'/change_store', {_id: this.props.info._id, store: this.state.newStore})
            .then(res => {
                console.log(res.data)
            })
            .catch(res =>{
                console.log('change store Error')
            });
        await window.location.reload();
    }

    render() {
        const style = {
            border: '2px solid gray',
            borderRadius: '5px',
            padding: '8px',
            margin: '8px'
        };

        const select = {
            cursor: 'pointer',
        };

        const { info } = this.props;

        return (
            <Item.Group style={style}>
                <Item >
                    <Item.Image  src={info.image} size='tiny'/>
                    <Item.Content >
                        <Item.Header style={select} onClick={this.toggle}><b>{info.name}</b> </Item.Header>
                        <Item.Description style={select} onClick={this.toggle}>{info.price}원<br/>{info.description}
                            <Divider fitted />
                            <Collapse isOpen={this.state.collapse}>
                                무게: {info.weight} g
                                <br/>
                                재고량: {info.store} 개
                                <br/>
                                길이 : {info.long_length} cm / {info.short_length} cm
                                <br/>
                                높이 : {info.height} cm
                                <br/>
                                {
                                    ( () =>{
                                        if(info.part === 7) return (<div>추력 : {info.thrust} g</div>);
                                        else if(info.part === 1) return (<div>프레임재질 : {info.material}</div>);
                                        else if(info.part === 2) return (<div>날개재질 : {info.material}</div>);
                                        else if(info.part === 5) return (<div>사용시간 : {info.HOU} 분</div>);
                                        else if(info.part === 6) return (<div>수신거리 : {info.rating} m</div>);
                                    } )()
                                }
                            </Collapse>
                        </Item.Description>
                        <Item.Extra>
                            {
                                ( () =>{
                                    if(sessionStorage.getItem('role')==='admin') return (
                                        <Button onClick={this.removeItem}>삭제하기</Button>
                                    );
                                    else if(sessionStorage.getItem('role')==='user') return(
                                        <Link to={{ pathname: '/pay', state: {buyList: [{info: info, num: this.state.num}]}}}>
                                            <Button>구매하기</Button>
                                        </Link>
                                    )
                                } )()
                            }
                            {
                                ( () =>{
                                    if(sessionStorage.getItem('role')==='admin') return (
                                        <Segment floated='right' compact>
                                            재고량 변경: {this.state.newStore}
                                            <Button floated='right' onClick={this.changeStore}>적용하기</Button>
                                            <Button floated='right' onClick={this.minusTen}>-10</Button>
                                            <Button floated='right' onClick={this.minusOne}>-1</Button>
                                            <Button floated='right' onClick={this.plusOne}>+1</Button>
                                            <Button floated='right' onClick={this.plusTen}>+10</Button>
                                        </Segment>
                                    );
                                    else if(sessionStorage.getItem('role')==='user') return (
                                        <Segment floated='right' compact>수량: {this.state.num}
                                            <Button floated='right' onClick={this.minus}>-</Button>
                                            <Button floated='right' onClick={this.plus}>+</Button>
                                        </Segment>
                                    );
                                } )()
                            }
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        );
    }
}

export default BuyInfo;