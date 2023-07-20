import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Concert = () =>{
    return(
        <div>
           <Container>
            <div className="mtext">
            |           Concert TOP 3           |
            </div>
            <div className="items">
            <Card className="item" >
                    <Card.Img variant="top" src="../images/concert1.jpg" />
                    <Card.Body>
                        
                        <Card.Title><p>한요한 정규 5집 콘서트 [Shining Star]</p></Card.Title>
                        
                        <Card.Text>
                        2023.07.01~2023.07.01 
                        <br/>
                        YES24 LIVE HALL
                        </Card.Text>
                        <Button href="/MusicalDetail">더보기</Button>
                    </Card.Body>
                    </Card>

                    <Card className="item">
                    <Card.Img variant="top" src="../images/concert2.jpg" />
                    <Card.Body>
                        <Card.Title><p>LEE SUNG KYOUNG FAN MEETING</p></Card.Title>
                        <Card.Text>
                        2023.07.22~2023.07.22
                        <br/>
                        건국대학교 새천년관 대공연장
                        </Card.Text>
                        <Button variant="primary"  href="/MusicalDetail">더보기</Button>
                    </Card.Body>
                    </Card>

                    <Card className="item" >
                    <Card.Img variant="top" src="../images/concert11.jpg" />
                    <Card.Body>
                        <Card.Title><p>SHINee WORLD VI</p></Card.Title>
                        <Card.Text>
                        2023.06.23 ~ 2023.06.25
                        <br/>
                        KSPO DOME(올림픽체조경기장)
                        </Card.Text>
                        <Button variant="primary"  href="/MusicalDetail">더보기 </Button>
                    </Card.Body>
                    </Card>

                </div>
                
            <div className="mtext"><p>|    콘서트 순위    |</p></div>
                <div className="listitem">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>작품명</th>
                            <th>장소</th>
                            <th>기간</th>
                            <th>할인</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            <img src="../images/concert4.jpg" />
                            [수원]워터밤 2023
                        </td>
                        <td>장소 미정</td>
                        <td>2023.07.12~2023.09.03</td>
                        <td></td>
                        </tr>

                        <tr>
                        <td>
                            <img src="../images/concert5.jpg" />
                            라우브 내한공연 (LAUV Live in Seoul)
                        </td>
                        <td>KSPO DOME</td>
                        <td>2023.05.13~2023.07.23</td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/concert6.jpg" />
                            루이스 콜 내한공연 (Louis Cole Live in Seoul)
                        </td>
                        <td>YES24 LIVE HALL</td>
                        <td>2023.07.07~2023.07.09</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/concert7.jpg" />
                            2023 Raon& DAZBEE Concert 
                        </td>
                        <td>YES24 LIVE HALL</td>
                        <td>2023.07.21~2023.11.17</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/concert8.jpg" />
                            2023 이찬원 전국투어 콘서트
                        </td>
                        <td>올림픽공원</td>
                        <td>2023.05.16~2023.07.16</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/concert9.jpg" />
                           [광주] 김창옥 토크콘서트
                        </td>
                        <td>예술의 전당 대극장</td>
                        <td>2023.08.11~2023.08.20</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/concert10.jpg" />
                            [광주] 유리상자 전국투어 콘서트
                        </td>
                        <td>광주 조선대학교</td>
                        <td>2023.06.27~2023.06.29</td>
                        <td>@fat</td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
               
           </Container>
        </div>
    );
};

export default Concert;