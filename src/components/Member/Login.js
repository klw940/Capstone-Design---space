import React, { Component } from 'react';
import axios from "axios";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import login_image from '../../image/drone.png';
import { Redirect } from 'react-router-dom'
import { ServerAddr } from "../Constants";
import {CSSTransitionGroup} from "react-transition-group";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            password:'',
            message:'',
            success: false
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    isAuthenticated = () => {
        axios.get(ServerAddr+'/api/auth/check', { headers: {"x-access-token" : sessionStorage.getItem('dtoken')}}).then(res => {
            sessionStorage.setItem('role',res.data.info.role);
            sessionStorage.setItem('name',res.data.info.name);
            sessionStorage.setItem('email',res.data.info.email);
        });
    }

    login = (e) => {
        e.preventDefault();
        axios.post(ServerAddr+'/api/auth/login',this.state)
            .then( res => {
                if(res.data.success){
                    sessionStorage.setItem('dtoken',res.data.token);
                    this.isAuthenticated();
                    this.setState({
                        success: true
                    })
                }
                else{
                    this.setState({
                        message: "다시 로그인 해주세요."
                    });
                }
            })
            .catch( res => {
                console.log(res);
                this.setState({
                    message: "다시 로그인 해주세요."
                });
            });
    }


    redirectMain = () => {
        if(this.state.success){
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        if(sessionStorage.getItem('role') && this.state.success)
            return <Redirect to='/' />;
        return(
            <CSSTransitionGroup
                transitionName="homeTransition"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <div className='login-form'>
                    <Grid textAlign='center' style={{ height: '100%', minHeight: 700,  padding: '1em 0em' }} verticalAlign='middle'>
                        <Grid.Column style={{maxWidth: 450}}>
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
                                    <h6 className="text-danger">{this.state.message}</h6>
                                </Segment>
                            </Form>
                            <Message>
                                처음이신가요?<br/><a href='/sign_up'>Sign Up</a>
                            </Message>
                        </Grid.Column>
                    </Grid>
                </div>
            </CSSTransitionGroup>
        );
    }
}

export default Login;