import React, { Component } from 'react';
import { Item, Divider} from 'semantic-ui-react';

class FreeBoardReply extends Component{
    render(){
        const { info } = this.props;
        return(
                <Item.Group>
                    <Item.Content>
                        <Item.Header as='h5'>{info.writer}</Item.Header>
                        <Item.Description>
                            {info.contents}
                            <Divider fitted />
                        </Item.Description>
                    </Item.Content>
                </Item.Group>
            );
    }
}

export default FreeBoardReply;