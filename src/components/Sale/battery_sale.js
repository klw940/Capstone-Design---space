import React, { Component } from 'react';
import {Input} from "reactstrap";

class battery_sale extends Component{
    render(){
        return(
            <div>
                <form action="" method="post" encType="multipart/form-data">
                    <table className="table">
                        <tr>
                            <th>제품명</th>
                            <td>
                                <Input type="text" name="text" />
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
                                <Input type="text" name="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>무게</th>
                            <td>
                                <Input type="text" name="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>배터리 용량(가용시간)</th>
                            <td>
                                <Input type="select" name="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </td>
                        </tr>
                        <tr>
                            <th>재고</th>
                            <td>
                                <Input type="text" name="text" />
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
                            <th>비고</th>
                            <td>
                                <Input type="textarea" name="text" />
                            </td>
                        </tr>
                    </table>
                    <button className="btn btn-primary">등록</button>
                </form>
            </div>
        );
    }
}

export default battery_sale;