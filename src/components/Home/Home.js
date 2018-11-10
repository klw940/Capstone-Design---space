import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../style/HomeStyle.css';
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
                </Jumbotron>
            </div>
        </CSSTransitionGroup>
    )
}

export default Home;