import React, { Component } from 'react';
import menu_image from '../image/menu_image.png'
import Content from './Content';
import {
    Button,
    Container,
    Image,
    Menu,
} from 'semantic-ui-react';
import {Link} from "react-router-dom";

class DesktopContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                        <Menu.Item as={Link} to='/buy'>부품구매</Menu.Item>
                        <Menu.Item as={Link} to='/sale'>부품판매</Menu.Item>
                        <Menu.Item as={Link} to='/freeBoard'>자유게시판</Menu.Item>
                        <Menu.Item as={Link} to='/qnaBoard'>QnA게시판</Menu.Item>
                        <Menu.Item position='right'>
                            <Button as={Link} to='/login'>
                                Log in
                            </Button>
                            <Button as={Link} to='/sign_up' style={{ marginLeft: '0.5em' }}>
                                Sign Up
                            </Button>
                        </Menu.Item>
                    </Container>
                </Menu>
                <div style={{ marginTop: '4em' }}>
                    <Content/>
                </div>
            </div>
        )
    }
}

export default DesktopContainer;