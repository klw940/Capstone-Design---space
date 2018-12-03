import React, { Component } from 'react';
import axios from "axios";
import FreeTableRow from './FreeBoardTable';
import FreePageNumber from './FreeBoardPage';
import {Container} from "semantic-ui-react";

class FreeBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
            ServerAddr: "http://ec2-52-32-190-25.us-west-2.compute.amazonaws.com:3001",
            TableData: [
                {number:'', title:'', writer:'', date:'', hits:''}
                ],
            PageNumber: [
                {page_number:'1'}
            ]
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get(this.state.ServerAddr+'/board_list')
            .then( res => {this.setState({TableData: res.data})
                console.log(res);
            })
            .catch( res => { console.log("error");
            });
    }

    render(){
        const TableData = this.state.TableData.map(
            data => (
                <FreeTableRow
                    key={data.id}
                    data={data}
                />)
        );
        return(
            <div>
                <br/>
                <h3>자유게시판</h3>
                <table class ="table table-hover">
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                        <th>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                        {TableData}
                    </tbody>
                </table>
                <div class="text-center">
                    <div>
                        {this.state.PageNumber.map((page, i) =>{
                            return (<FreePageNumber page_number={page.page_number}/>);
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default FreeBoard;