import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay ,Button,Row, Col ,CardBody ,CardSubtitle } from 'reactstrap';
import motor_image from '../../image/motor-ex.jpg'
import wing_image from '../../image/wings-ex.jpg'
import cb_image from '../../image/CB-ex.jpg'
import esc_image from '../../image/esc-ex.jpg'
import frame_image from '../../image/frame-ex.jpg'
import battery_image from '../../image/battery-ex.jpg'
import antenna_image from '../../image/antenna-ex.jpg'
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';

class Sale extends Component{
    render(){
        return(
            <Tabs>
            <TabList>
            <Tab>Motor</Tab>
            <Tab>Wings</Tab>
            <Tab>Control Board</Tab>
        <Tab>ESC</Tab>
        <Tab>Frame</Tab>
        <Tab>Battery</Tab>
        <Tab>Antenna</Tab>
        </TabList>
        <PanelList>
        <Panel>
        <Card align = "center">
            <img src={motor_image} alt="motor_image" width = "200" height="200" />
            <CardBody>
            <CardTitle>Motor</CardTitle>
            <CardSubtitle>제품을 등록하려면 '등록' 버튼을 누르세요.</CardSubtitle>
        <CardText></CardText>
        <a href="/motor_sale"><button>등록</button></a>
        </CardBody>
        </Card>
        </Panel>
        <Panel>
        <Card align = "center">
            <img src={wing_image} alt="wing_image" width = "250" height="200" />
            <CardBody>
            <CardTitle>Wings</CardTitle>
            <CardSubtitle>제품을 등록하려면 '등록' 버튼을 누르세요.</CardSubtitle>
        <CardText></CardText>
        <a href="/wings_sale"><button>등록</button></a>
        </CardBody>
        </Card>
        </Panel>
        <Panel>
        <Card align = "center">
            <img src={cb_image} alt="cb_image" width = "200" height="200"/>
            <CardBody>
            <CardTitle>Contol Board</CardTitle>
        <CardSubtitle>제품을 등록하려면 '등록' 버튼을 누르세요.</CardSubtitle>
        <CardText></CardText>
        <a href="/cb_sale"><button>등록</button></a>
        </CardBody>
        </Card>
        </Panel>
        <Panel>
        <Card align = "center">
            <img src={esc_image} alt="esc_image" width = "200" height="200"/>
            <CardBody>
            <CardTitle>ESC</CardTitle>
            <CardSubtitle>제품을 등록하려면 '등록' 버튼을 누르세요.</CardSubtitle>
        <CardText></CardText>
        <a href="/esc_sale"><button>등록</button></a>
        </CardBody>
        </Card>
        </Panel>
        <Panel>
        <Card align = "center">
            <img src={frame_image} alt="frame_image" width = "200" height="200"/>
            <CardBody>
            <CardTitle>Frame</CardTitle>
            <CardSubtitle>제품을 등록하려면 '등록' 버튼을 누르세요.</CardSubtitle>
        <CardText></CardText>
        <a href="/frame_sale"><button>등록</button></a>
        </CardBody>
        </Card>
        </Panel>
        <Panel>
        <Card align = "center">
            <img src={battery_image} alt="battery_image" width = "200" height="200"/>
            <CardBody>
            <CardTitle>Battery</CardTitle>
            <CardSubtitle>제품을 등록하려면 '등록' 버튼을 누르세요.</CardSubtitle>
        <CardText></CardText>
        <a href="/battery_sale"><button>등록</button></a>
        </CardBody>
        </Card>
        </Panel>
        <Panel>
        <Card align = "center">
            <img src={antenna_image} alt="antenna_image" width = "200" height="200"/>
            <CardBody>
            <CardTitle>Antenna</CardTitle>
            <CardSubtitle>제품을 등록하려면 '등록' 버튼을 누르세요.</CardSubtitle>
        <CardText></CardText>
        <a href="/antenna_sale"><button>등록</button></a>
        </CardBody>
        </Card>
        </Panel>
        </PanelList>
        </Tabs>
    );
    }
}

export default Sale;