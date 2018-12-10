import React, { Component } from 'react';
import {Button, Table, Form, Popup} from 'semantic-ui-react';
import axios from "axios";
import {Link} from "react-router-dom";

class Sale_Register extends Component{
    constructor(props){
        super(props);
        this.state= {
            ServerAddr: "http://ec2-54-180-90-44.ap-northeast-2.compute.amazonaws.com:3001",
            info: {
                name: '',
                image: '',
                price: '',
                weight: '',
                long_length: '',
                short_length: '',
                height: '',
                store: '',
                description: '',
                thrust: '',
                HOU: '',
                rating: '',
                material: '',
            },
            allWrite: false,
            message:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.postSellPart= this.postSellPart.bind(this);
    }

    postSellPart = () => {
        const data = new FormData();
        data.append('name',this.state.info.name);
        data.append('img',this.state.info.img);
        data.append('price',this.state.info.price);
        data.append('weight',this.state.info.weight);
        data.append('height',this.state.info.height);
        data.append('long_length',this.state.info.long_length);
        data.append('short_length',this.state.info.short_length);
        data.append('store',this.state.info.store);
        data.append('description',this.state.info.description);
        data.append('part',this.props.part);
        data.append('thrust',this.state.info.thrust);
        data.append('HOU',this.state.info.HOU);
        data.append('rating',this.state.info.rating);
        data.append('material',this.state.info.material);
        axios.post(this.state.ServerAddr+'/part_sale', data)
            .then( res => {
                    if(res.data) this.setState({message: '등록 완료'}); // res 에 등록 성공인지 아닌지 확인해주는 데이터 넣어줌.
                }
            )
            .catch( res => { console.log(res) });
    };

    handleChange = (e) => {
        this.setState ({
            info: {
                ...this.state.info,
                [e.target.name]: e.target.value
            }
        })
    }

    setImages = (e) => {
        e.preventDefault();
        this.setState({
            info: {
                ...this.state.info,
                img: ''
            }
        });
        this.setState ({
            info: {
                ...this.state.info,
                img: e.target.files[0]
            }
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        const { part } = this.props;
        return(
            <div>
                {
                    (() => {
                        if(part === 1) return(<h1>Frame List</h1>);
                        else if(part === 2) return(<h1>Wings List</h1>);
                        else if(part === 3) return(<h1>ControlBoard List</h1>);
                        else if(part === 4) return(<h1>ESC List</h1>);
                        else if(part === 5) return(<h1>Battery List</h1>);
                        else if(part === 6) return(<h1>Antenna List</h1>);
                        else if(part === 7) return(<h1>Motor List</h1>);
                    })()
                }
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>제품명</Table.Cell>
                            <Table.Cell><Form.Input name="name" placeholder="제품명" onChange={this.handleChange}/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>섬네일(업로드)</Table.Cell>
                            <Table.Cell>
                                <Form.Input id="image" type="file" onChange={this.setImages}/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>가격</Table.Cell>
                            <Table.Cell><Form.Input name="price" placeholder="가격(원)" onChange={this.handleChange}/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>무게</Table.Cell>
                            <Table.Cell><Form.Input name="weight" placeholder="무게(g)" onChange={this.handleChange}/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>길이(가로)</Table.Cell>
                            <Table.Cell><Form.Input name="long_length" placeholder="가로길이(cm)" onChange={this.handleChange}/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>길이(세로)</Table.Cell>
                            <Table.Cell><Form.Input name="short_length" placeholder="세로길이(cm)" onChange={this.handleChange}/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>높이</Table.Cell>
                            <Table.Cell><Form.Input name="height" placeholder="높이(cm)" onChange={this.handleChange}/></Table.Cell>
                        </Table.Row>
                        {
                            (() => {
                                if(part === 7) return(
                                    <Table.Row>
                                        <Table.Cell>추력</Table.Cell>
                                        <Table.Cell><Form.Input name="thrust" placeholder="추력(g)" onChange={this.handleChange}/></Table.Cell>
                                    </Table.Row>
                                );
                            })()
                        }
                        {
                            (() => {
                                if(part === 5) return(
                                    <Table.Row>
                                        <Table.Cell>배터리 가용시간</Table.Cell>
                                        <Table.Cell><Form.Input name="HOU" placeholder="가용시간(분)" onChange={this.handleChange}/></Table.Cell>
                                    </Table.Row>
                                );
                            })()
                        }
                        {
                            (() => {
                                if(part === 6) return(
                                    <Table.Row>
                                        <Table.Cell>수신거리</Table.Cell>
                                        <Table.Cell><Form.Input name="rating" placeholder="수신거리(m)" onChange={this.handleChange}/></Table.Cell>
                                    </Table.Row>
                                );
                            })()
                        }
                        {
                            (() => {
                                if(part === 1 || part === 2) return(
                                    <Table.Row>
                                        <Table.Cell>재질</Table.Cell>
                                        <Table.Cell><Form.Input name="material" placeholder="재질" onChange={this.handleChange}/></Table.Cell>
                                    </Table.Row>
                                );
                            })()
                        }
                        <Table.Row>
                            <Table.Cell>재고</Table.Cell>
                            <Table.Cell><Form.Input name="store" placeholder="재고(개)" onChange={this.handleChange}/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell width="2">상세설명</Table.Cell>
                            <Table.Cell width="10"><Form.TextArea autoHeight name="description" placeholder="상세설명" onChange={this.handleChange}/></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <Link to='/'>
                    <Button onClick={this.postSellPart}>등록</Button>
                </Link>
            </div>
        );
    }
}

export default Sale_Register;