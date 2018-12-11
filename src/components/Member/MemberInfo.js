import React, { Component } from 'react';
import axios from "axios";
import {Grid, Form} from "semantic-ui-react";
import {Redirect} from "react-router-dom";
import { ServerAddr } from "../Constants";
class MemberInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            email:'',
            role:'',
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get(ServerAddr+'/api/auth/check', { headers: {"x-access-token" : sessionStorage.getItem('dtoken')}}).then(res => {
            console.log(res.data.info);
            this.setState(res.data.info);
        })
    }
    render(){
        if(!sessionStorage.getItem('dtoken')){
            return(<Redirect to='/' />)
        }
        else
            return(
                <Grid centered columns={2} style={{height: '100%', minHeight: 700, padding: '2em 0em' }}>
                    <Grid.Column style={{ maxWidth: 700 }}>
                        <Form onSubmit={this.handleSubmit}>
                            <h1>회원정보</h1>
                            <Form.Group>
                                <Form.Input label="ID" name="id" value={this.state.id}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input label="Name" name="name" value={this.state.name}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input label="E-Mail" type="email" name="email" value={this.state.email}  onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input label="유형" name="role" value={this.state.role}/>
                            </Form.Group>
                        </Form>
                    </Grid.Column>
                </Grid>
            );
    }
}

export default MemberInfo;