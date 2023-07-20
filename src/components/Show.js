import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Show = () =>{
    return(
        <div>
           <Container>
            <div className="mtext">
            |           Show TOP 3           |
            </div>
            <div className="items">
            <Card className="item" >
                    <Card.Img variant="top" src="../images/show1.jpg" />
                    <Card.Body>
                        
                        <Card.Title><p>연극 라스트 세션 Freud’s Last Session</p></Card.Title>
                        <Card.Text>
                        2023.07.08 ~ 2023.09.10
                        <br/>
                        대학로 TOM 1관
                        </Card.Text>
                        <Button href="/MusicalDetail">더보기</Button>
                    </Card.Body>
                    </Card>

                    <Card className="item">
                    <Card.Img variant="top" src="../images/show2.jpg" />
                    <Card.Body>
                        <Card.Title><p>연극 '나무 위의 군대' </p></Card.Title>
                        <Card.Text>
                        2023.06.20 ~ 2023.08.05
                        <br/>
                        LG 아트센터 서울 U+ 스테이지
                        </Card.Text>
                        <Button variant="primary"  href="/MusicalDetail">더보기</Button>
                    </Card.Body>
                    </Card>

                    <Card className="item" >
                    <Card.Img variant="top" src="../images/show4.jpg"/>
                    <Card.Body>
                        <Card.Title><p>연극 행오버</p></Card.Title>
                        <Card.Text>
                        2022.01.21 ~ 2023.07.31
                        <br/>
                        정극장
                        </Card.Text>
                        <Button variant="primary"  href="/MusicalDetail">더보기 </Button>
                    </Card.Body>
                    </Card>

                </div>
                
                <div className="mtext"><p>|    공연 순위    |</p></div>
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
                            <img src="../images/show3.jpg" />
                            공포연극[스위치]
                        </td>
                        <td>전주 힌해랑아트홀</td>
                        <td>2023.07.12~2023.09.03</td>
                        <td></td>
                        </tr>

                        <tr>
                        <td>
                            <img src="../images/show5.jpg" />
                            밀양아리나 성벽극장
                        </td>
                        <td>광림아트센터 BBCH홀</td>
                        <td>2023.05.13~2023.07.23</td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/show6.jpg" />
                            [영덕] 넌버벌 마스크 연극
                        </td>
                        <td>인천문화예술회관</td>
                        <td>2023.07.07~2023.07.09</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/show7.jpg" />
                            [대학로] 연극 [오백에 삼십]
                        </td>
                        <td>샤롯데씨티어</td>
                        <td>2023.07.21~2023.11.17</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/show8.jpg" />
                            연극 [한뼘사이]
                        </td>
                        <td>라온아트홀</td>
                        <td>2023.05.16~2023.07.16</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/show9.jpg" />
                            연극[수상한 흥신소]
                        </td>
                        <td>OPEN RUN</td>
                        <td>2023.08.11~2023.08.20</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/show10.jpg" />
                            [서울대학로] 연극 라면
                        </td>
                        <td>대학로 해피씨어터</td>
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

export default Show;