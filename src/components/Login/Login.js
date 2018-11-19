import React, { Component } from 'react';
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            ServerAddr: "http://ec2-52-32-190-25.us-west-2.compute.amazonaws.com:3001",
            checkId:'',
            checkPassword:'',
            data: [
                {
                    id:'',
                    password:'',
                    email: '',
                    role: '',}
            ],
        };
    }

    componentDidMount() {
        axios.get(this.state.ServerAddr+'/member')
            .then( res => {this.setState({
                data: res.data
                })
            })
            .catch( res => { console.log("error");
            });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
        this.setState({
            checkId: '',
            checkPassword: ''
        })
    }
    /*
    check = () =>{
        if(!this.state.Id.filter( id => {})) {
          //
        };
    }*/
    render(){
        console.log(this.state.data);
        return(
            <div>
            <Form inline onSubmit={this.handleSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="ID" className="mr-sm-2"><h2>ID</h2></Label>
                    <Input type="text" name="checkId"/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="Password" className="mr-sm-2"><h2>Password</h2></Label>
                    <Input type="password" name="checkPassword"/>
                </FormGroup>
                <Button type = "submit">Sign in</Button>
            </Form>
            </div>
        );
    }
}

export default Login;