import React, { Component } from 'react';
import {
    Divider,
    Item,
} from 'semantic-ui-react';

class DiyChoice extends Component{
    render(){
        const style = {
            border: '2px solid gray',
            borderRadius: '5px',
            padding: '8px',
            margin: '8px'
        };
        const { selectedParts } = this.props;
        return(
            <div className="category" style={style}>
                <h2>선택 목록</h2>
                <h5>Frame</h5>
                <Item className="category-content">
                    <Item.Image src={selectedParts.get('frame').image} size='tiny'/>
                    <Item.Content>
                        <Item.Header><b>{selectedParts.get('frame').name}</b></Item.Header>
                        <Item.Description>{selectedParts.get('frame').description}</Item.Description>
                    </Item.Content>
                    <Divider fitted />
                <h5>Wings</h5>
                    <Item.Image src={selectedParts.get('wings').image} size='tiny'/>
                    <Item.Content>
                        <Item.Header><b>{selectedParts.get('wings').name}</b></Item.Header>
                        <Item.Description>{selectedParts.get('wings').description}</Item.Description>
                    </Item.Content>
                    <Divider fitted />
                <h5>ControlBoard</h5>
                    <Item.Image src={selectedParts.get('controlBoard').image} size='tiny'/>
                    <Item.Content>
                        <Item.Header><b>{selectedParts.get('controlBoard').name}</b></Item.Header>
                        <Item.Description>{selectedParts.get('controlBoard').description}</Item.Description>
                    </Item.Content>
                    <Divider fitted />
                <h5>ESC</h5>
                    <Item.Image src={selectedParts.get('esc').image} size='tiny'/>
                    <Item.Content>
                        <Item.Header><b>{selectedParts.get('esc').name}</b></Item.Header>
                        <Item.Description>{selectedParts.get('esc').description}</Item.Description>
                    </Item.Content>
                    <Divider fitted />
                <h5>Battery</h5>
                    <Item.Image src={selectedParts.get('battery').image} size='tiny'/>
                    <Item.Content>
                        <Item.Header><b>{selectedParts.get('battery').name}</b></Item.Header>
                        <Item.Description>{selectedParts.get('battery').description}</Item.Description>
                    </Item.Content>
                    <Divider fitted />
                <h5>Antenna</h5>
                    <Item.Image src={selectedParts.get('antenna').image} size='tiny'/>
                    <Item.Content>
                        <Item.Header><b>{selectedParts.get('antenna').name}</b></Item.Header>
                        <Item.Description>{selectedParts.get('antenna').description}</Item.Description>
                    </Item.Content>
                    <Divider fitted />
                <h5>Motor</h5>
                    <Item.Image src={selectedParts.get('motor').image} size='tiny'/>
                    <Item.Content>
                        <Item.Header><b>{selectedParts.get('motor').name}</b></Item.Header>
                        <Item.Description>{selectedParts.get('motor').description}</Item.Description>
                    </Item.Content>
                    <Divider fitted />
                </Item>
            </div>
        );
    }
}

export default DiyChoice;