import React, { Component } from 'react';
import { Collapse, } from 'reactstrap'
import {
    Item,
    Button,
    Divider,
} from 'semantic-ui-react';
import {Link} from "react-router-dom";

class BuyInfo extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            num: 0,
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    plus() {
        this.setState = {
            num: this.state.num + 1,
        }
    }

    minus() {
        this.setState = {
            num: this.state.num - 1,
        }
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
                                        else if(info.part === 1) return (<div>프레임재질 : {info.frameMaterial}</div>);
                                        else if(info.part === 2) return (<div>날개재질 : {info.wingMaterial}</div>);
                                        else if(info.part === 5) return (<div>사용시간 : {info.HOU} 분</div>);
                                        else if(info.part === 6) return (<div>수신거리 : {info.rating} m</div>);
                                    } )()
                                }
                            </Collapse>
                        </Item.Description>
                        <Item.Extra>
                            <Link to={{ pathname: '/pay', state: {info: info, num: this.state.num}}}>
                                <Button>구매하기</Button>
                            </Link>
                            {this.state.num}
                            <Button floated='right' onclick={this.plus}>-</Button>
                            <Button floated='right' onclick={this.minus}>+</Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        );
    }
}

export default BuyInfo;