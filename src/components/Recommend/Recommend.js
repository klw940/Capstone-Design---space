import React, { Component } from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';
import {Redirect} from "react-router-dom";
class Recommend extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        if(!sessionStorage.getItem('dtoken')){
            return(<Redirect to='/' />)
        }
        else
            return(
                <Grid container style={{ padding: '2em 0em' }}>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h1'>드론 추천</Header>
                            <Button as='a' tabindex='0' color='red'>
                                레이싱
                            </Button>
                            <Button as='a' tabindex='0' color='green'>
                                농업
                            </Button>
                            <Button as='a' tabindex='0' color='blue'>
                                촬영
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            );
    }
}

export default Recommend;