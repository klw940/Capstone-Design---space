import React, { Component } from 'react';
import '../../style/HomeStyle.css';
import home_image from '../../image/main.jpg'
import { Link } from 'react-router-dom';
import {
    Button,
    Header,
    Icon,
    Image,
    Segment,
} from 'semantic-ui-react'
import {CSSTransitionGroup} from "react-transition-group";

class Home extends Component {
    render(){
        return(

            <CSSTransitionGroup
                transitionName="homeTransition"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <div>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 800, padding: '1em 0em' }}
                        vertical
                    >
                        <Header
                            as='h1'
                            content='DiY Drone'
                            inverted
                            style={{
                                fontSize: '4em',
                                fontWeight: 'normal',
                                marginBottom: 0,
                                marginTop: '3em',
                            }}
                        />
                        <Header
                            as='h4'
                            content='SPACE'
                            inverted
                            style={{
                                fontSize: '1.2em',
                                fontWeight: 'normal',
                                marginTop: '1.5em',
                            }}
                        />
                        <Header
                            as='h2'
                            content='자신만의 드론을 만들어 보세요'
                            inverted
                            style={{
                                fontSize: '1.7em',
                                fontWeight: 'normal',
                                marginTop: '1.5em',
                            }}
                        />
                        <Link to='/diy'>
                            <Button primary size='huge'>
                                자신만의 드론 만들기
                                <Icon name='right arrow' />
                            </Button>
                        </Link>
                    </Segment>
                    <Image src={home_image}/>
                </div>
            </CSSTransitionGroup>
        )}
}

export default Home;
//<img src={home_image} alt="home_image" width="50%"/>
/*
HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}
*/