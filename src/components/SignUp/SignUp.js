import React, { Component } from 'react';

class SignUp extends Component{
    state = {
        name: '',
        mail: '',
        ID: '',
        Password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <form>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <br></br>
                <input
                    placeholder="E-mail"
                    value={this.state.mail}
                    onChange={this.handleChange}
                    name="mail"
                />
                <br></br>
                <input
                    placeholder="ID"
                    value={this.state.ID}
                    onChange={this.handleChange}
                    name="ID"
                />
                <br></br>
                <input
                    placeholder="Password"
                    value={this.state.Password}
                    onChange={this.handleChange}
                    name="Password"
                />
                <br></br>
                <button type="submit">확인</button>
            </form>
        );
    }
}


export default SignUp;