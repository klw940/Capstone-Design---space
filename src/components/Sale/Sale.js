import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay ,Button,Row, Col ,CardBody ,CardSubtitle } from 'reactstrap';
import motor_image from '../../image/motor-ex.jpg'
import wing_image from '../../image/wings-ex.jpg'
import cb_image from '../../image/CB-ex.jpg'
import esc_image from '../../image/esc-ex.jpg'
import frame_image from '../../image/frame-ex.jpg'
import battery_image from '../../image/battery-ex.jpg'
import antenna_image from '../../image/antenna-ex.jpg'

class Sale extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src={motor_image} alt="motor_image" height={"400px"} />
                            <CardBody>
                                <CardTitle>Motor</CardTitle>
                                <CardSubtitle>모터</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <a href="/motor_sale"><button>등록</button></a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src={wing_image} alt="wing_image" height={"400px"} />
                            <CardBody>
                                <CardTitle>Wings</CardTitle>
                                <CardSubtitle>날개</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <a href="/wings_sale"><button>등록</button></a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src={cb_image} alt="cb_image" height={"400px"} />
                            <CardBody>
                                <CardTitle>Control Board</CardTitle>
                                <CardSubtitle>컨트롤보드</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <a href="/cb_sale"><button>등록</button></a>
                            </CardBody>
                        </Card>
                    </Col>
            
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src={esc_image} alt="esc_image" height={"400px"} />
                            <CardBody>
                                <CardTitle>ESC</CardTitle>
                                <CardSubtitle>변속기</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <a href="/esc_sale"><button>등록</button></a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src={frame_image} alt="frame_image" height={"400px"} />
                            <CardBody>
                                <CardTitle>Frame</CardTitle>
                                <CardSubtitle>프레임</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <a href="/frame_sale"><button>등록</button></a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src={battery_image} alt="battery_image" height={"400px"} />
                            <CardBody>
                                <CardTitle>Battery</CardTitle>
                                <CardSubtitle>배터리</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <a href="/battery_sale"><button>등록</button></a>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src={antenna_image} alt="antenna_image" height={"400px"} />
                            <CardBody>
                                <CardTitle>Antenna</CardTitle>
                                <CardSubtitle>안테나</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <a href="/antenna_sale"><button>등록</button></a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Sale;