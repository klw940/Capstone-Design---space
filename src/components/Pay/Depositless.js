import React, { Component } from 'react';
import { Button } from "semantic-ui-react";

class Depositless extends Component{
    render(){
        return(
            <div>
                <h1>예금주: 000, 은행명: 00은행, 계좌번호: 000000000000000000000</h1>
                <Button>확인</Button>
            </div>
        );
    }
}

export default Depositless;