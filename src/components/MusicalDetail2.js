import { Container } from "react-bootstrap";
import React from "react";
import Table from 'react-bootstrap/Table';

const MusicalDetail2 = () =>{

    return(
        <>
        <Container>

            <div className="musicalcont"> 
                <div className="firstwrap">
                    <h1>뮤지컬 〈나르치스와 골드문트〉</h1>
                    <br/><hr/>  
                    <div className="leftitem"> 
                        <img src="../images/musical2.jpg" />
                    </div>
                    
                    <div className="rightitem">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <td>등급</td>
                                <td>만 12세 이상 관람가</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>관람시간</td>
                                <td>100분</td>
                            </tr>
                            <tr>
                                <td>출연</td>
                                <td>박유덕, 유승현, 원우준, 임별, 강찬, 김지온, 김현진, 안지환</td>
                            </tr>
                            <tr>
                            <td>가격</td>
                                <td>R석 66,000원
                                    마리아브론석 55,000원
                                    S석 44,000원
                                </td>
                            </tr>
                            <tr>
                                <td>혜택</td>
                                <td>YES24 우리 V카드 知 5천원할인</td>
                            </tr>
                        </tbody>
                        </Table>

                    <div className="imgcont">
                            <img src="../images/p4.png"/> 나르치스(유승현) <br/>
                            <img src="../images/p5.png"/> 골드문트(안지환)<br/>
                            <img src="../images/p6.png"/> 나르치스(원우준)<br/>
                    </div>
                </div>
                </div>
            </div>
           
        </Container>
        </>
    );
};
export default MusicalDetail2;