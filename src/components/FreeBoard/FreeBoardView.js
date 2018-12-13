import React, { Component } from 'react'
import {Container, Segment, Header, Button, TextArea} from "semantic-ui-react";
import {Redirect, Link} from "react-router-dom";
import FreeBoardReply from "./FreeBoardReply";
import axios from 'axios';
import BuyInfo from "../Buy/Buyinfo";
import {ServerAddr} from "../Constants";

class FreeBoardView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reply:[],
            replyInput:{
                number: this.props.location.state.number,
                name: sessionStorage.getItem('name'),
                contents: '',
            }
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.post(ServerAddr+'/get_reply', {number: this.props.location.state.number})
            .then(res => {
                this.setState({reply: res.data});
            });
    }

    inputReply = () => {
        axios.post(ServerAddr+'/put_reply', this.state.replyInput);
        window.location.reload();
    }

    handleChange = (e) => {
        this.setState({
            replyInput: {
                ...this.state.replyInput,
                contents: e.target.value
            }
        });
    };

    render() {
        const replyList = this.state.reply.map(
            info => (<FreeBoardReply
                key={info._id}
                info={info}
            />)
        );

        if (!sessionStorage.getItem('dtoken')) {
            return (<Redirect to='/'/>)
        }
        else
            return (
                <Container>
                    <br/>
                    <Header as='h1'>{this.props.location.state.title}</Header>
                    <Segment style={{minHeight: 600}}>
                        <p>{this.props.location.state.contents}</p>
                    </Segment>
                    <Header as='h3'>댓글</Header>
                    <Segment style={{minHeight: 10}}>
                        {replyList}
                    </Segment>
                    <Header as='h3'>댓글 작성</Header>
                    <TextArea style={{resize: 'none', minHeight: 10, minWidth: 1000}} onChange={this.handleChange}/>
                    <Button onClick={this.inputReply}>등록</Button>
                    <Link to='/freeBoard'>
                        <Button>뒤로</Button>
                    </Link>
                </Container>
            )
    }
}

export default FreeBoardView