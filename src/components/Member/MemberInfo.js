import React, { Component } from 'react';
import axios from "axios";
import {Button, Grid, Form} from "semantic-ui-react";
import {Link} from "react-router-dom";

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
        let ServerAddr = 'http://ec2-54-180-90-44.ap-northeast-2.compute.amazonaws.com:3001';
        axios.get(ServerAddr+'/api/auth/check', { headers: {"x-access-token" : sessionStorage.getItem('dtoken')}}).then(res => {
            console.log(res.data.info);
         this.setState(res.data.info);
        })
    }
    render(){
        return(
            <Grid centered columns={1} style={{height: '100%', minHeight: 700, padding: '2em 0em' }}>
                <Grid.Column style={{ maxWidth: 700 }}>
                    <Form onSubmit={this.handleSubmit}>
                        <h1>회원정보</h1>
                        <Form.Group>
                            <Form.Input label="ID" name="id" value={this.state.id}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label="Password" type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                            <Form.Input label="Password Check" type="password" name="password2" placeholder="Password" onChange={this.handleChange2}/>
                            <h6 className="text-danger">{this.state.strCheckPassword}</h6>
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
                        <Button>{this.state.change && <Link to='/'/>}수정하기</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default MemberInfo;