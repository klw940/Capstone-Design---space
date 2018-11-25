import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";

class SignUp extends Component{
    state = {
        userInfo:{
            name: '',
            email: '',
            id: '',
            password: '',
            password2: '',
            role: 1,
        },
        strCheckId: '',
        strCheckPassword: ''
    }
    checkId(){
        //console.log(this.state.userInfo.id)
        let spe = this.state.userInfo.id.search(/['~!@@#$%^&*|\\\'\'';:\/?.,-_+=`]/);
        if(spe >= 0){
            this.setState({strCheckId:"아이디는 영문으로만 이루어져야 합니다."});
            return false
        }
        this.setState({strCheckId:""});
        return true
    }
    checkPassword(){
        if(this.state.userInfo.password != this.state.userInfo.password2){
            this.setState({strCheckPassword:"패스워드가 일치하지 않습니다."});
            return false
        }
        this.setState({strCheckPassword:""});
        return true
    }
    handleChange = (e) => {
        this.setState({
            userInfo:{
                ...this.state.userInfo,
                [e.target.name]:e.target.value}
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.userInfo);
        this.checkPassword()
        let serverAddr = "http://ec2-52-32-190-25.us-west-2.compute.amazonaws.com:3001"
        axios.post(serverAddr+'/sign-up',this.state.userInfo)
            .then( res => {console.log(res);})
            .catch( res => {console.log(res);})
    }
    render() {
        return (
            <Container>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <h1>회원가입</h1>
                        <FormGroup>
                            <Label for="ID">Id</Label>
                            <Input type="text" name="id" id="ID" placeholder="ID" onChange={this.handleChange}/>
                            <h6 className="text-danger">{this.state.strCheckId}</h6>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password2">Password Check</Label>
                            <Input type="password" name="password2" id="password2" placeholder="Password" onChange={this.handleChange}/>
                            <h6 className="text-danger">{this.state.strCheckPassword}</h6>
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">Name</Label>
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
                    { /*<h5>{this.state.id}</h5>
                <h5>{this.state.password}</h5>
                <h5>{this.state.name}</h5>
                <h5>{this.state.email}</h5>
                <h5>{this.state.role}</h5> */}
                </div>
            </Container>
        );
    }
}

export default SignUp;