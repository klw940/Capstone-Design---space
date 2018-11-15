import React, { Component } from 'react';



class WriteFree extends Component{
    render(){
        return(
            <div>
                <table className="table table-bordered">
                    <tr>
                        <th>글제목</th>
                        <td><input type="text" name="motor_name" className="form-control"
                                   value="<%=motor.motor_name%>"/></td>
                    </tr>
                    <tr>
                        <th>이미지</th>
                        <td>
                          aaa
                        </td>
                    </tr>
                    <tr>
                         <th>가격</th>
                         <td><input type="text" name="motor_pice" class="form-control" value="<%=motor.motor_price%>"/></td>
                    </tr>
                    <tr>
                        <th>무게</th>
                        <td><input type="text" name="motor_weight" class="form-control" value="<%=motor.motor_weight%>"/></td>
                    </tr>
                    <tr>
                        <th>추력</th>
                        <td><input type="text" name="motor_thrust" class="form-control" value="<%=motor.motor_thrust%>"/></td>
                    </tr>
                    <tr>
                        <th>재고</th>
                        <td><input type="text" name="motor_store" class="form-control" value="<%=motor.motor_store%>"/></td>
                    </tr>
                    <tr>
                        <th>비고</th>
                        <td><input type="text" name="motor_description" class="form-control" value="<%=motor.motor_description%>"/></td>
                    </tr>
                    </table>
                      <button class="btn btn-primary">등록</button>
            </div>
        );
    }
}

export default WriteFree;