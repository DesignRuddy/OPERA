import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


const Musical = () =>{
    return(
        <div>
           <Container>
            <div className="mtext">
            |           Msical TOP 3           |
            </div>
            <div className="items">
            <Card className="item" >
                    <Card.Img variant="top" src="../images/musical1.jpg" />
                    <Card.Body>
                        
                        <Card.Title><p>뮤지컬 아르토, 고흐</p></Card.Title>
                        
                        <Card.Text>
                        2023.06.04~2023.08.27 
                        <br/>
                        예스24 스테이지 2관
                        </Card.Text>
                        <Button href="/MusicalDetail">더보기</Button>
                    </Card.Body>
                    </Card>

                    <Card className="item">
                    <Card.Img variant="top" src="../images/musical2.jpg" />
                    <Card.Body>
                        <Card.Title><p>뮤지컬 나르치스와 골드문트</p></Card.Title>
                        <Card.Text>
                        2023.04.15~2023.07.02 
                        <br/>
                        대학로 TOM 1관
                        </Card.Text>
                        <Button variant="primary" href="/MusicalDetail2">더보기</Button>
                    </Card.Body>
                    </Card>

                    <Card className="item" >
                    <Card.Img variant="top" src="../images/musical3.jpg" />
                    <Card.Body>
                        <Card.Title><p>뮤지컬 더 픽션</p></Card.Title>
                        <Card.Text>
                        2023.06.24~2023.09.17
                        <br/>
                        예스24 스테이지 1관 
                        </Card.Text>
                        <Button variant="primary" href="/MusicalDetail3">더보기 </Button>
                    </Card.Body>
                    </Card>

                </div>
                
            <div className="mtext"><p>|    뮤지컬 순위    |</p></div>
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
                            <img src="../images/musical4.jpg" />
                            뮤지컬 그날들 10주년 기념공연
                        </td>
                        <td>예술의전당 오페라극장</td>
                        <td>2023.07.12~2023.09.03</td>
                        <td></td>
                        </tr>

                        <tr>
                        <td>
                            <img src="../images/musical5.jpg" />
                            쇼뮤지컬 드림하이
                        </td>
                        <td>광림아트센터 BBCH홀</td>
                        <td>2023.05.13~2023.07.23</td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/musical6.jpg" />
                            뮤지컬 맘마미아!
                        </td>
                        <td>인천문화예술회관</td>
                        <td>2023.07.07~2023.07.09</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/musical7.jpg" />
                            뮤지컬 오페라의 유령
                        </td>
                        <td>샤롯데씨티어</td>
                        <td>2023.07.21~2023.11.17</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/musical8.jpg" />
                            뮤지컬 할란카운터
                        </td>
                        <td>한전아트센터</td>
                        <td>2023.05.16~2023.07.16</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/musical9.jpg" />
                            뮤지컬 시카고 25주년 기념 오리지널 내한
                        </td>
                        <td>드림씨티어</td>
                        <td>2023.08.11~2023.08.20</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/musical10.jpg" />
                            쿠로이 저택엔 누가 살고 있을까?
                        </td>
                        <td>플러스씨어터</td>
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

export default Musical;