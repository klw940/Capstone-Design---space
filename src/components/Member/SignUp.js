import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"
import {Grid, Button, Form} from "semantic-ui-react";

const options = [
    {key: 'customer', value:'customer', text:'구매자'},
    {key: 'seller', value:'seller', text:'판매자'}
];

class SignUp extends Component{
    state = {
        userInfo:{
            id: '',
            password: '',
            name: '',
            email: '',
            role: '',
        },
        password2: '',
        strCheckId: '',
        strCheckPassword: '',
        change: false,
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    checkId(){
        let spe = this.state.userInfo.id.search(/['~!@@#$%^&*|\\\'\'';:\/?.,-_+=`]/);
        if(spe >= 0){
            this.setState({strCheckId:"아이디는 영문으로만 이루어져야 합니다."});
            return false
        }
        this.setState({strCheckId:""});
        return true
    }

    checkPassword(){
        if(this.state.userInfo.password !== this.state.password2){
            this.setState({strCheckPassword:"패스워드가 일치하지 않습니다."});
            return false
        }
        this.setState({strCheckPassword:""});
        return true
    }

    handleChange = (e) => {
        this.setState({
            userInfo:{
                ...this.state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    };

    handleChange2 = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.userInfo);
        if(!this.checkId()) return;
        if(!this.checkPassword()) return;
        let serverAddr = "http://ec2-52-32-190-25.us-west-2.compute.amazonaws.com:3001";
        axios.post(serverAddr+'/api/auth/register', this.state.userInfo)
            .then( res => {console.log(res);})
            .catch( res => {console.log(res);});
        this.setState({
            change: true,
        })
    };

    render() {
        return (
            <Grid centered columns={1} style={{height: '100%', minHeight: 700, padding: '2em 0em' }}>
                <Grid.Column style={{ width: 700 }}>
                    <Form onSubmit={this.handleSubmit}>
                        <h1>회원가입</h1>
                        <Form.Group>
                            <Form.Input label="ID" name="id" placeholder="ID" onChange={this.handleChange}/>
                            <h6 className="text-danger">{this.state.strCheckId}</h6>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label="Password" type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label="Password Check" type="password" name="password2" placeholder="Password" onChange={this.handleChange2}/>
                            <h6 className="text-danger">{this.state.strCheckPassword}</h6>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label="Name" type="text" name="name" id="name" placeholder="name" onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label="E-Mail" type="email" name="email" id="email" placeholder="예시) zongog@ajou.ac.kr" onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Select label="유형" name="role" id="role" options={options} placeholder="유형" onChange={this.handleChange}/>
                        </Form.Group>
                        <Button>{this.state.change && <Link to='/'/>}가입</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default SignUp;

