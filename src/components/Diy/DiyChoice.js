import React, { Component } from 'react';
import{
    Item,
} from 'semantic-ui-react';

class DiyChoice extends Component{
    static defaultProps = {
        data: '',
    }
    render(){
        const { selectedParts } = this.props;
        return(
            <div className="category">
                <h2>목록</h2>
                    <h5>Frame</h5>
                    <Item className="category-content">
                        <Item.Image src={selectedParts.get('frame').image} width="100%"/>
                        <Item.Header><b>{selectedParts.get('frame').name}</b></Item.Header>
                        <Item.Description>{selectedParts.get('frame').description}</Item.Description>
                    </Item>
                    <h5>Wings</h5>
                    <Item className="category-content">
                        <Item.Image src={selectedParts.get('wings').image} width="100%"/>
                        <Item.Header><b>{selectedParts.get('wings').name}</b></Item.Header>
                        <Item.Description>{selectedParts.get('wings').description}</Item.Description>
                    </Item>
                    <h5>ControlBoard</h5>
                    <Item className="category-content">
                        <Item.Image src={selectedParts.get('controlBoard').image} width="100%"/>
                        <Item.Header><b>{selectedParts.get('controlBoard').name}</b></Item.Header>
                        <Item.Description>{selectedParts.get('controlBoard').description}</Item.Description>
                    </Item>
                    <h5>ESC</h5>
                    <Item className="category-content">
                        <Item.Image src={selectedParts.get('esc').image} width="100%"/>
                        <Item.Header><b>{selectedParts.get('esc').name}</b></Item.Header>
                        <Item.Description>{selectedParts.get('esc').description}</Item.Description>
                    </Item>
                    <h5>Battery</h5>
                    <Item className="category-content">
                        <Item.Image src={selectedParts.get('battery').image} width="100%"/>
                        <Item.Header><b>{selectedParts.get('battery').name}</b></Item.Header>
                        <Item.Description>{selectedParts.get('battery').description}</Item.Description>
                    </Item>
                    <h5>Antenna</h5>
                    <Item className="category-content">
                        <Item.Image src={selectedParts.get('antenna').image} width="100%"/>
                        <Item.Header><b>{selectedParts.get('antenna').name}</b></Item.Header>
                        <Item.Description>{selectedParts.get('antenna').description}</Item.Description>
                    </Item>
                    <h5>Motor</h5>
                    <Item className="category-content">
                        <Item.Image src={selectedParts.get('motor').image} width="100%"/>
                        <Item.Header><b>{selectedParts.get('motor').name}</b></Item.Header>
                        <Item.Description>{selectedParts.get('motor').description}</Item.Description>
                    </Item>
            </div>
        );
    }
}

export default DiyChoice;