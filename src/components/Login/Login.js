import React, { Component } from 'react';
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            password:'',
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            id: '',
            password: ''
        })
    }
    render(){
        return(
            <div>
            <Form inline onSubmit={this.handleSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="ID" className="mr-sm-2"><h2>ID</h2></Label>
                    <Input type="text" name="id" value={this.state.id} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="Password" className="mr-sm-2"><h2>Password</h2></Label>
                    <Input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </FormGroup>
                <Button type = "submit">Sign in</Button>
            </Form>
                <h5>{this.state.id}</h5>
                <h5>{this.state.password}</h5>
            </div>
        );
    }
}

export default Login;