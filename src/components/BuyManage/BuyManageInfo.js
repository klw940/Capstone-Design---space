import React, { Component } from 'react';
import {Divider, Item} from "semantic-ui-react";

class BuyMangeInfo extends Component{
    constructor(props) {
        super(props);
    }

    render() {

        const { info, num } = this.props;

        return (
                <Item>
                    <Item.Image  src={info.image} size='tiny'/>
                    <Item.Content>
                        <Item.Header><b>{info.name}</b> </Item.Header>
                        <Item.Description>
                            {info.price}원<br/>{info.description}<br/><b>수량: {num}</b>
                        </Item.Description>
                        <Divider fitted />
                    </Item.Content>
                </Item>
        );
    }
}

export default BuyMangeInfo;