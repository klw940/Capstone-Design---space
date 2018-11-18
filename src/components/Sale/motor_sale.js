import React, { Component } from 'react';
import {FormGroup, Label, Input} from 'reactstrap';
class motor_sale extends Component{
    render(){
        return(
            <div>
                <form action="" method="post" encType="multipart/form-data">
                    <table className="table">
                        <tr>
                            <th>제품명</th>
                            <td>
                                <input type="text" name="motor_name" class="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <th>섬네일(업로드)</th>
                            <td>
                                <input type="file" name="motor_image"/>
                                <a href="/uploads/<%=motor.motor_image%>" target="_blank">업로드 이미지 보기</a>
                            </td>
                        </tr>
                        <tr>
                            <th>가격</th>
                            <td>
                                <input type="text" name="motor_pice" class="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <th>무게</th>
                            <td>
                                <input type="text" name="motor_weight" class="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <th>추력</th>
                            <td>
                                <input type="text" name="motor_thrust" class="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <th>길이(가로)</th>
                            <td>
                                <Input type="text" name="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>길이(세로)</th>
                            <td>
                                <Input type="text" name="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>재고</th>
                            <td>
                                <input type="text" name="motor_store" class="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <th>비고</th>
                            <td>
                                <input type="text" name="motor_description" class="form-control"/>
                            </td>
                        </tr>
                    </table>
                    <button className="btn btn-primary">등록</button>
                </form>
            </div>
        );
    }
}

export default motor_sale;