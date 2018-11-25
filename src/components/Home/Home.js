import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../../style/HomeStyle.css';
import home_image from '../../image/main.jpg'
import {
    Button,
    Container,
    Header,
    Icon,
    Image,
} from 'semantic-ui-react'
//import {Button, Container, Header, Icon} from "semantic-ui-react";

const Home = ({ mobile }) =>{
    return(
        <Container>
            <Header
                as='h1'
                content='DiY Drone'
                inverted
                style={{
                    fontSize: mobile ? '2em' : '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: mobile ? '1.5em' : '3em',
                }}
            />
            <Header
                as='h4'
                content='SPACE'
                style={{
                    fontSize: mobile ? '1em' : '1.2em',
                    fontWeight: 'normal',
                    marginTop: mobile ? '0.5em' : '1.5em',
                }}
            />
            <Header
                as='h2'
                content='자신만의 드론을 만들어 보세요'
                inverted
                style={{
                    fontSize: mobile ? '1.5em' : '1.7em',
                    fontWeight: 'normal',
                    marginTop: mobile ? '0.5em' : '1.5em',
                }}
            />
            <Button primary size='huge'>
                자신만의 드론 만들기
                <Icon name='right arrow' />
            </Button>
        </Container>
    )
}

export default Home;
//<img src={home_image} alt="home_image" width="50%"/>