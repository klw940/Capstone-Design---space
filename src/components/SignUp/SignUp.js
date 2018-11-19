import React, { Component } from 'react';

class SignUp extends Component{
    state = {
        name: '',
        mail: '',
        id: '',
        password: ''
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
            password: ''
        })
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <br/>
                <input
                    placeholder="E-mail"
                    value={this.state.mail}
                    onChange={this.handleChange}
                    name="mail"
                />
                <br/>
                <input
                    placeholder="ID"
                    value={this.state.id}
                    onChange={this.handleChange}
                    name="id"
                />
                <br/>
                <input
                    type = "password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    name="password"
                />
                <br/>
                <button type="submit">확인</button>
            </form>
                <h5>{this.state.name}</h5>
                <h5>{this.state.mail}</h5>
                <h5>{this.state.id}</h5>
                <h5>{this.state.password}</h5>
            </div>
        );
    }
}


export default SignUp;