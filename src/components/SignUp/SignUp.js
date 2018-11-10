import React, { Component } from 'react';
import { Row,FormText,Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class SignUp extends Component{
    render(){
        return(
	<div>
		<Form>
		<Row form>
			<Col md={6}>
			<FormGroup>
			<Label>Id</Label>
			<Input type="text" name="id"/>
			</FormGroup>
			</Col>
			<Col md={6}>
			<FormGroup>
			<Label for="exampleEmail">Email</Label>
			<Input type="email" name="email" id="exampleEmail"/>
			</FormGroup>
			</Col>
		</Row>
		<FormGroup>
			<Label for="examplePassword">Password</Label>
			<Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
		</FormGroup>
		<FormGroup>
			<Label>Account</Label>
			<Input type="text" name="account"/>
		</FormGroup>
		<FormGroup>
			<Label>Phone</Label>
			<Input type="text" name="phone" placeholder="010-xxxx-xxxx"/>
		</FormGroup>
		<FormGroup>
			<Label for="exampleAddress">Address</Label>
			<Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
		</FormGroup>
		<div class="text-right">
			<Button color="secondary">가입하기</Button>{' '}
			<Button outline color="secondary">모두비우기</Button>{' '}
		</div>
		</Form>
	</div>
        );
    }
}

export default SignUp;
