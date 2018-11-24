import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignUp extends Component{
    state = {
        name: '',
        email: '',
        id: '',
        password: '',
        role: '구매자',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            name: '',
            mail: '',
            id: '',
            password: '',
            role: '',
        })
    }
    render() {
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <h1>회원가입</h1>
                <FormGroup>
                    <Label for="ID">Email</Label>
                    <Input type="text" name="id" id="ID" placeholder="ID" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="name">Email</Label>
                    <Input type="text" name="name" id="name" placeholder="name" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="예시) zongog@ajou.ac.kr" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="role">Select</Label>
                    <Input type="select" name="role" id="role" onChange={this.handleChange}>
                        <option>구매자</option>
                        <option>판매자</option>
                    </Input>
                </FormGroup>
                <Button>가입</Button>

            </Form>
                <h5>{this.state.id}</h5>
                <h5>{this.state.password}</h5>
                <h5>{this.state.name}</h5>
                <h5>{this.state.email}</h5>
                <h5>{this.state.role}</h5>
            </div>
        );
    }
}


export default SignUp;