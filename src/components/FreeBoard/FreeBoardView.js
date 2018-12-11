import React, { Component } from 'react'
import {Container, Segment, Header, Button} from "semantic-ui-react";
import {Redirect, Link} from "react-router-dom";

class FreeBoardView extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
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
                    <Link to='/freeBoard'>
                        <Button>뒤로</Button>
                    </Link>
                </Container>
            )
    }
}

export default FreeBoardView