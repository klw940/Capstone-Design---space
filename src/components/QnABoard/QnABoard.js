import React, { Component } from 'react';

class QnABoard extends Component{
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
                   <th>
                       번호
                   </th>
                   <th>
                       번호
                   </th>
                   <th>
                       번호
                   </th>
                   <th>
                       번호
                   </th>
                   <th>
                       번호
                   </th>
                    </tbody>
                </table>
             </div>
        );
    }
}

export default QnABoard;