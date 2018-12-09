import React, { Component } from 'react';
import { Grid, Button, Container, Select, Input } from "semantic-ui-react";
import Diy from "../Diy/Diy";
import DiyChoice from "../Diy/DiyChoice";
import {Link} from "react-router-dom";

class Pay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: this.props.info,
            num: this.props.num,
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        console.log(this.state.info);
        console.log(this.state.num);
    }

    render(){
        return(
            <Container>
                <br/>
                <Grid>
                    <Grid.Row Columns={2}>
                        <Grid.Column width = "10">
                            {this.state.info}
                        </Grid.Column>
                        <Grid.Column width = "6">
                            <h3>결제 방법</h3>
                            <Select placeholder="결제 방법" options={[{key: '1', value: '1', text: '무통장 입금'}]}/>
                            <Input label='주소' placeholder='주소'/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row Columns={1}>
                        <Grid.Column>
                            <Link to="/pay/depositless">
                                <Button>결제하기</Button>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Pay;
