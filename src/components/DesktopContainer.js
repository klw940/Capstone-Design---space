import React, { Component } from 'react';
import menu_image from '../image/menu_image.png'
import Content from './Content';
import axios from 'axios';
import {
    Button,
    Container,
    Image,
    Menu,
} from 'semantic-ui-react';
import {Link, Redirect} from "react-router-dom";

class DesktopContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    isAuthenticated = () => {
        let ServerAddr = 'http://ec2-52-32-190-25.us-west-2.compute.amazonaws.com:3001';
        console.log('isAuthenticated');
        axios.get(ServerAddr+'/api/auth/check', { headers: {"x-access-token" : sessionStorage.getItem('dtoken')}}).then(res => {
            sessionStorage.setItem('role',res.data.info.role);
        })
    }

    logout = () => {
        sessionStorage.removeItem('dtoken');
        sessionStorage.removeItem('role');
    }

    render() {
        return (
            <div>
                <Menu inverted fixed='top'>
                    <Container>
                        <Menu.Item inverted as={Link} to='/' header>
                            <Image size='mini' src={menu_image} style={{ marginRight: '1.5em' }} />
                            DiY Drone
                        </Menu.Item>
                        <Menu.Item as={Link} to='/diy'>드론견적</Menu.Item>
                        <Menu.Item as={Link} to='/recommend'>드론추천</Menu.Item>
                        <Menu.Item as={Link} to='/buy'>부품구매</Menu.Item>
                        {
                            ( () =>{
                                if(sessionStorage.getItem('role') === 'seller') return (<Menu.Item as={Link} to='/sale'>부품판매</Menu.Item>);
                            } )()
                        }
                        <Menu.Item as={Link} to='/freeBoard'>자유게시판</Menu.Item>
                        <Menu.Item as={Link} to='/qnaBoard'>QnA게시판</Menu.Item>
                        <Menu.Item position='right'>
                            {
                                ( () =>{
                                    if(!sessionStorage.getItem('dtoken')) return (
                                        <div>
                                        <Button as={Link} to='/login'>
                                            Log in
                                        </Button>
                                        <Button as={Link} to='/sign_up' style={{ marginLeft: '1em' }}>
                                    Sign Up
                                        </Button>
                                        </div>);
                                    else{
                                        return (
                                            <div>
                                                <Button as={Link} to='/profile'> My Prfile</Button>
                                                <Button style={{ marginLeft: '1em' }} onClick={this.logout}>Log Out</Button>
                                            </div>
                                        );
                                    }
                                } )()
                            }

                        </Menu.Item>
                    </Container>
                </Menu>
                <div style={{ marginTop: '4em' }}>
                    <Content isAuthenticated={this.isAuthenticated}/>
                </div>
            </div>
        )
    }
}

export default DesktopContainer;