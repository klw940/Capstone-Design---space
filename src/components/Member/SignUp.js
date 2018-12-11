import React, { Component } from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom"
import {Grid, Button, Form } from "semantic-ui-react";
import { ServerAddr } from "../Constants";

class SignUp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
                id: '',
                password: '',
                name: '',
                email: '',
                role: 'user',
            },
            password2: '',
            strCheckId: '',
            strCheckPassword: '',
            message: '',
            change: false,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    checkId(){
        let spe = this.state.userInfo.id.search(/[\W]/);
        if(spe >= 0){
            this.setState({strCheckId:"아이디는 영문과 숫자로만 이루어져야 합니다."});
            this.setState({message: ""});
            return false
        }
        this.setState({strCheckId:""});
        this.setState({message: ""});
        return true
    }

    checkPassword(){
        if(this.state.userInfo.password !== this.state.password2){
            this.setState({strCheckPassword:"패스워드가 일치하지 않습니다."});
            this.setState({message: ""});
            return false
        }
        this.setState({strCheckPassword:""});
        this.setState({message: ""});
        return true
    }

    handleChange = (e) => {
        if(e.target.name === 'password2'){
            this.setState({
                password2: e.target.value
            });
        }
        else {
            this.setState({
                userInfo: {
                    ...this.state.userInfo,
                    [e.target.name]: e.target.value
                }
            });
        }
    };

    handleSubmit = async (e) => {
        const { userInfo, password2 } = this.state;
        await e.preventDefault();
        if( !userInfo.id || !userInfo.name || !userInfo.password || !userInfo.email || !password2){
            this.setState({message: "가입정보를 모두 기입해주세요"});
            return;
        }
        else if(!this.checkId()) return;
        else if(!this.checkPassword()) return;
        await axios.post(ServerAddr+'/api/auth/register', this.state.userInfo)
            .then( res => {
                this.setState({
                    change: true,
                })
            })
            .catch( res => {
                    this.setState({strCheckId:"아이디가 이미 존재합니다."});
                });
    };

    redirectMain = () => {
        if(this.state.change){
            return <Redirect to='/' />
        }
    }

    render() {
        return (
            <Grid centered columns={1} style={{height: '100%', minHeight: 700, padding: '2em 0em' }}>
                {this.redirectMain()}
                <Grid.Column style={{ maxWidth: 1000 }}>
                    <Form onSubmit={this.handleSubmit}>
                        <h1>회원가입</h1>
                        <Form.Group>
                            <Form.Input label="ID" name="id" placeholder="ID" onChange={this.handleChange}/>
                            <h6 className="text-danger">{this.state.strCheckId}</h6>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label="Password" type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                            <Form.Input label="Password Check" type="password" name="password2" placeholder="Password" onChange={this.handleChange}/>
                            <h6 className="text-danger">{this.state.strCheckPassword}</h6>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label="Name" type="text" name="name" id="name" placeholder="name" onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label="E-Mail" type="email" name="email" id="email" placeholder="예시) zongog@ajou.ac.kr" onChange={this.handleChange}/>
                        </Form.Group>
                        <h6 className="text-danger">{this.state.message}</h6>
                        <Button>가입</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default SignUp;