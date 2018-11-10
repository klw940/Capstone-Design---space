import React, { Component } from 'react';
import axios from "axios";

let server_addr = "ec2-52-32-190-25.us-west-2.compute.amazonaws.com:3000"

class FreeBoard extends Component{
	constructor(props){
		super(props);
		this.state = {
			TableData2: [],
			TableData: [
				{number:"1", title:"hello", writer:"mingi", date:"2018-02-10", hits:"1"},
				{number:"2", title:"hello", writer:"mingi", date:"2018-02-10", hits:"1"}
			],
			PageNumber: [
				{page_number:"1"},
				{page_number:"2"},
				{page_number:"3"}
			]
		};
	}

	componentDidMount() {
		axios.get(server_addr+'/board_list',{ headers: { 'Access-Control-Request-Origin': '*','crossDomain': true, 'Content-Type': 'application/json', 'Access-Control-Allow-Headers': 'X-PINGOTHER'}})
		.then( res => {this.setState({TableData2:res});
			console.log(this.state.TableData2)
		})
		.catch( res => { console.log("error");
		});
	}

	render(){
        return(
	<div>
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
		{this.state.TableData.map((row, i) => {
			return (<TableRow number={row.number}
					title={row.title}
					writer={row.writer}
					date={row.date}
					hits={row.hits}
					key={i}/>);
		})}
		</tbody>
	</table>
	<div class="text-center">
		<div>
			{this.state.PageNumber.map((page, i) =>{
			return (<PageNumber page_number={page.page_number}/>);
			})}
		</div>
	</div>
	</div>
        );
    }
}

class TableRow extends Component{
	constructor(props){
		super(props);
		this.state = {
			showBoard:false,
			comment:null
		};
		this.handleShow = this.handleShow.bind(this);
	}
	handleShow(){
		if(this.state.showBoard){
			axios.get(server_addr+'/board_detail', {
				params: {number:"1"}
			})
			.then( res => {console.log(res)})
			.catch( res => {console.log(res)});
			this.setState({showBoard:false});
		}
		else{
			this.setState({showBoard:true});
		}
	}
	render(){
		return(
			<>
			<tr>
			<td>{this.props.number}</td>
			<td onClick={this.handleShow}>{this.props.title}</td>
			<td>{this.props.writer}</td>
			<td>{this.props.date}</td>
			<td>{this.props.hits}</td>
			</tr>
			<tr hidden = {!this.state.showBoard}>
				<td colSpan="5">comment</td>
			</tr>
			</>
		);
	}
}

class PageNumber extends Component{
	render(){
		return(
			<span>{this.props.page_number}&nbsp;</span>
		);
	}
}

export default FreeBoard;
