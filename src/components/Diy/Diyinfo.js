import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
    Collapse,
    Card,
    CardBody,
} from 'reactstrap';

class DiyInfo extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    selectPart = () => {
        const { info,
            selectParts,
        } = this.props;
        selectParts(info.part, info);
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { info } = this.props;

        return (
            <Card style={style}>
                <div onClick={this.toggle}>
                    <Row>
                        <Col xs="4">
                            <img src={info.image} width="100%"/>
                        </Col>
                        <Col>
                            <div><b>{info.name}</b>  {info.price}원</div>
                            <div>{info.description}</div>

                        </Col>
                    </Row>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <h3>{info.name}</h3>
                                가격: {info.price}
                                무게: {info.weight}
                                재고량: {info.store}
                                {info.long_length}
                                {info.short_length}
                                {info.thrust}
                                {info.HOU}
                                {info.rating}
                                {info.frameMaterial}
                                {info.wingMaterial}
                                {info.description}
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <Button onClick={this.selectPart}>선택</Button>
            </Card>
        );
    }
}

export default DiyInfo;