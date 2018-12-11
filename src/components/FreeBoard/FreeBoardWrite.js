import React, { Component } from 'react';
import {Input, TextArea, Button, Header, Container, Segment} from 'semantic-ui-react';
import moment from 'moment';
import axios from 'axios';
import { ServerAddr } from "../Constants";
import {Link, Redirect} from "react-router-dom";

class FreeBoardWrite extends Component{
    constructor(props){
        super(props)
        this.state={
            number: this.props.location.state.number,
            title: '',
            contents: '',
            message: '',
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    postPosts = async () => {
        if(!this.state.title || !this.state.contents){
            this.setState({message: "제목과 내용 모두 작성해주세요."});
            return;
        }
        await axios.post(ServerAddr+'/free_write', {number: this.state.number, title:this.state.title, contents:this.state.contents, writer:sessionStorage.getItem('name'), date:moment(Date.now()).format('YYYY[-]MM[-]DD')});
        return <Link to='/freeBoard'/>
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render(){
        if (!sessionStorage.getItem('dtoken')) {
            return (<Redirect to='/'/>)
        }
        else
            return(
                <Container>
                    <br/>
                    <Header as='h2'>글 작성</Header>
                    <Segment style={{minHeight: 600}}>
                        <Header as='h3'>제목<Input name='title' onChange={this.handleChange}/></Header>
                        <Header as='h3'>내용</Header>
                        <TextArea style={{minHeight: 600, minWidth: 1000}} name='contents' onChange={this.handleChange}/>
                    </Segment>
                    <h6 className="text-danger">{this.state.message}</h6>
                    <Link to='/freeBoard'>
                        <Button onClick={this.postPosts}>작성</Button>
                    </Link>
                </Container>
            );
    }
}

export default FreeBoardWrite;