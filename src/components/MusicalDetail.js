import { Container } from "react-bootstrap";
import React from "react";
import Table from 'react-bootstrap/Table';

const MusicalDetail = () =>{

    return(
        <>
        <Container>

            <div className="musicalcont"> 
                <div className="firstwrap">
                    <h1>뮤지컬 아르토 고흐</h1>
                    <br/><hr/>  
                    <div className="leftitem"> 
                        <img src="../images/musical1.jpg" />
                    </div>
                    
                    <div className="rightitem">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <td>등급</td>
                                <td>만 13세 이상 관람가</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>관람시간</td>
                                <td>100분, 중간휴식없음</td>
                            </tr>
                            <tr>
                                <td>출연</td>
                                <td>유승현, 안재영, 양지원, 조풍래, 김준영, 박좌헌</td>
                            </tr>
                            <tr>
                            <td>가격</td>
                                <td>R석 66,000원
                                    S석 44,000원
                                </td>
                            </tr>
                            <tr>
                                <td>혜택</td>
                                <td>예스24-하나 SK 카드 40% 청구 할인</td>
                            </tr>
                        </tbody>
                        </Table>

                    <div className="imgcont">
                            <img src="../images/p1.jpg"/> 아르토(유승현) <br/>
                            <img src="../images/p2.png"/> 고흐(조풍래)<br/>
                            <img src="../images/p3.png"/> 박사(임병근)<br/>
                    </div>
                </div>
                </div>
            </div>
           
        </Container>
        </>
    );
};
export default MusicalDetail;