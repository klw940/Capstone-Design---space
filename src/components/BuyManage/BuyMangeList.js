import React, { Component } from 'react';
import { Item, Button} from "semantic-ui-react";
import BuyMangeInfo from "./BuyManageInfo";

class BuyMangeList extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const style = {
            border: '2px solid gray',
            borderRadius: '5px',
            padding: '8px',
            margin: '8px'
        };

        const { list, address, name, email, check, setCheck } = this.props;

        const info = list.map(
            list => (
                <BuyMangeInfo
                    info = {list.info}
                    num = {list.num}
                />
            )
        );

        return (
            <div>
                <br/>
                <h3>이름:{name} 이메일:{email} 주소:{address}</h3>
                <Item.Group style={style}>
                    {info}
                </Item.Group>
                    {check ? {} : <Button onClick={setCheck}>거래완료</Button>}
                {check}
            </div>
        );
    }
}

export default BuyMangeList;