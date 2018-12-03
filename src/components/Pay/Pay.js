import React, { Component } from 'react';
import { Grid, Button, Container, Select } from "semantic-ui-react";
import Diy from "../Diy/Diy";
import DiyChoice from "../Diy/DiyChoice";

class Pay extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <Container>
                <br/>
                <Grid>
                    <Grid.Row Columns={2}>
                        <Grid.Column width = "10">

                        </Grid.Column>
                        <Grid.Column width = "6">
                            <h3>결제 방법</h3>
                            <Select placeholder="결제 방법" options={[{key: '1', value: '1', text: '무통장 입금'}]}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row Columns={1}>
                        <Grid.Column >
                            <Button>결제하기</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Pay;
