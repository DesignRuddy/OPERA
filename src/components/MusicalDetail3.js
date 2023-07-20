import { Container } from "react-bootstrap";
import React from "react";
import Table from 'react-bootstrap/Table';

const MusicalDetail3 = () =>{

    return(
        <>
        <Container>

            <div className="musicalcont"> 
                <div className="firstwrap">
                    <h1>뮤지컬 〈더 픽션〉</h1>
                    <br/><hr/>  
                    <div className="leftitem"> 
                        <img src="../images/musical3.jpg" />
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
                                <td>90분</td>
                            </tr>
                            <tr>
                                <td>출연</td>
                                <td> 김도빈, 유승현, 김준영, 박유덕, 주민진, 최호승, 김서환</td>
                            </tr>
                            <tr>
                            <td>가격</td>
                                <td>R석 66,000원
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
                            <img src="../images/p8.png"/> 그레이 헌트(김도빈) <br/>
                            <img src="../images/p9.png"/> 와이트 히스만(최호승)<br/>
                            <img src="../images/p10.png"/> 휴 대커(김서환)<br/>
                    </div>
                </div>
                </div>
            </div>
           
        </Container>
        </>
    );
};
export default MusicalDetail3;