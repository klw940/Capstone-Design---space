import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../../style/HomeStyle.css';
import home_image from '../../image/main.jpg'
import { Jumbotron } from 'reactstrap';

const Home = () =>{
    return(
        <CSSTransitionGroup
            transitionName="homeTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <div>
                <Jumbotron>
                    <h1>DIY Drone</h1>
                    <p> Space </p>
                    <img src={home_image} alt="home_image" width="50%"/>
                </Jumbotron>
            </div>
        </CSSTransitionGroup>
    )
}

export default Home;