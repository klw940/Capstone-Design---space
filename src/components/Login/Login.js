import React, { Component } from 'react';
import axios from "axios";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import login_image from '../../image/drone.png';
import {Link} from "react-router-dom";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            password:''
        }
    }

    login = (e) => {
        e.preventDefault();
        console.log(this.state);
        let ServerAddr = 'http://ec2-52-32-190-25.us-west-2.compute.amazonaws.com:3001';
        axios.post(ServerAddr+'/login',this.state)
            .then( res => {
                console.log(res.data.success);
                if(res.data.success){
                    sessionStorage.setItem('dtoken',res.data.token);
                    console.log(sessionStorage.getItem('dtoken'));
                    /*여기에 로그인 성공시메인으로 자동  화면 전환 해야하는 코드 추가 할 것*/

                }
            })
            .catch( res => {
                console.log(res);
            });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(
            <div className='login-form'>
                <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='black' textAlign='center'>
                            <Image src={login_image} /> 네 맘대로 드론
                        </Header>
                        <Form size='large' onSubmit={this.login}>
                            <Segment stacked>
                                <Form.Input fluid icon='user' name="id" iconPosition='left' placeholder='ID' onChange={this.handleChange}/>
                                <Form.Input
                                    fluid
                                    name="password"
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.handleChange}
                                />

                                <Button color='black' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            처음이신가요?<br/><a href='/sign_up'>Sign Up</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Login;