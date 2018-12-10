import React, { Component } from 'react';
import {Button, Header, Icon, Segment, Grid} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Depositless extends Component{
    render(){
        return(
            <Grid textAlign='center' style={{ height: '100%', minHeight: 700,  padding: '1em 0em' }} verticalAlign='middle'>
                <Grid.Column>
                    <Segment placeholder>
                        <Header icon>
                            <Icon name='truck' />
                            구매 신청 완료되었습니다. 아래 계좌번호로 돈을 입금해주세요.<br/>
                            <Segment>
                                예금주: 김병각, 은행명: 하나은행, 계좌번호: 219-890622-78707<br/>
                                금액: {this.props.location.state.price}원<br/>
                                배송주소: {this.props.location.state.address}
                            </Segment>
                        </Header>
                        <Link to='/'>
                            <Button primary>확인</Button>
                        </Link>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Depositless;