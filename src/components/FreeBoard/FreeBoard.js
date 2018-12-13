import React, { Component } from 'react'
import {Icon, Table, Button, Container, Pagination} from 'semantic-ui-react'
import {Redirect} from "react-router-dom";
import FreeBoardTable from "./FreeBoardTable"
import axios from "axios";
import { ServerAddr } from "../Constants";
import {Link} from "react-router-dom";

class FreeBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageCount: 10,
            activePage: 1,
            freeboard: [],
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get(ServerAddr+'/freeboard')
            .then( res => {
                this.setState({freeboard: this.state.freeboard.concat(res.data)})
            })
            .catch( res => {
                console.log("error");
            });
    }

    handlePaginationChange = (e, { activePage }) => this.setState({ activePage })
    render() {

        let frontIndex= this.state.pageCount*(this.state.activePage-1);
        let backIndex = this.state.pageCount*this.state.activePage;

        const list = this.state.freeboard.filter((info, index) => (index >= frontIndex && index < backIndex)).map(
            posts => (<FreeBoardTable
                key={posts._id}
                posts={posts}
            />)
        );

        if (!sessionStorage.getItem('dtoken')) {
            return (<Redirect to='/'/>)
        }
        else
            return (
                <Container>
                    <br/>
                    <h1>게시판</h1>
                    <Table celled>
                        <Table.Header>
                            <Table.Row textAlign='center'>
                                <Table.HeaderCell width={1}>번호</Table.HeaderCell>
                                <Table.HeaderCell width={9}>제목</Table.HeaderCell>
                                <Table.HeaderCell width={3}>작성자</Table.HeaderCell>
                                <Table.HeaderCell width={3}>등록일</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {list}
                        </Table.Body>
                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan='16'>
                                    <Link to={{pathname:'/freeBoard/write', state: { number: this.state.freeboard.length+1 }}}>
                                        <Button inverted color='pink'>
                                            글작성
                                        </Button>
                                    </Link>
                                    <Pagination
                                        floated='right'
                                        defaultActivePage={1}
                                        firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                                        lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                                        prevItem={{ content: <Icon name='angle left' />, icon: true }}
                                        nextItem={{ content: <Icon name='angle right' />, icon: true }}
                                        ellipsisItem={null}
                                        onPageChange={this.handlePaginationChange}
                                        totalPages={Math.ceil(this.state.freeboard.length/10)}
                                        style = {{marginLeft: 'auto', marginRight: 'auto'}}
                                    />
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Container>
            )
    }
}

export default FreeBoard