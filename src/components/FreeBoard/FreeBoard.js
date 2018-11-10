import React, { Component } from 'react';

class FreeBoard extends Component{
	constructor(props){
		super(props);
		this.state = {
			TableData: [
				{number:"1", title:"hello", writer:"mingi", date:"2018-02-10", hits:"1"},
				{number:"2", title:"hello", writer:"mingi", date:"2018-02-10", hits:"1"}
			],
			PageNumber: [
				{page_number:"1"},
				{page_nubmer:"2"}
			]
		};
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
		<ul class="pagination">
			{this.state.PageNumber.map((page, i) =>{
			return (<PageNumber page_number={page.page_number}/>);
			})}
		</ul>
	</div>
	</div>
        );
    }
}


class TableRow extends Component{
	constructor(props){
		super(props);
		this.state = {showBoard:false};
		this.handleShow = this.handleShow.bind(this);
	}
	handleShow(){
		if(this.state.showBoard){
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
				<td colspan="5">hi</td>
			</tr>
			</>
		);
	}
}

class PageNumber extends Component{
	render(){
		return(
			<li>{this.props.page_number}</li>
		);
	}
}

export default FreeBoard;
