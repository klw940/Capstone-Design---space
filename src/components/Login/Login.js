import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component{
    render(){
        return(
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="ID" className="mr-sm-2"><h2>ID</h2></Label>
                    <Input type="text" name="id" id="id"/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="Password" className="mr-sm-2"><h2>Password</h2></Label>
                    <Input type="password" name="password" id="password"/>
                </FormGroup>
                <Button>Sign in</Button>
            </Form>
        );
    }
}

export default Login;