import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Orchestra = () =>{
    return(
        <div>
           <Container>
            <div className="mtext">
            |           Orchestra TOP 3           |
            </div>
            <div className="items">
            <Card className="item" >
                    <Card.Img variant="top" src="../images/oche1.jpg" />
                    <Card.Body>
                        
                        <Card.Title><p>쇼팽 피아노 듀오 콘서트</p></Card.Title>
                        
                        <Card.Text>
                        2023.07.08~2023.07.08
                        <br/>
                        푸르지오아트홀
                        </Card.Text>
                        <Button href="/MusicalDetail">더보기</Button>
                    </Card.Body>
                    </Card>

                    <Card className="item">
                    <Card.Img variant="top" src="../images/och2.jpg" />
                    <Card.Body>
                        <Card.Title><p>빈 베를린 체임버 오케스트라</p></Card.Title>
                        <Card.Text>
                        2023.07.04~2023.07.04
                        <br/>
                        롯데콘서트홀
                        </Card.Text>
                        <Button variant="primary"  href="/MusicalDetail">더보기</Button>
                    </Card.Body>
                    </Card>

                    <Card className="item" >
                    <Card.Img variant="top" src="../images/oche3.jpg" />
                    <Card.Body>
                        <Card.Title><p>2023 썸머뉴아티스트콘서트</p></Card.Title>
                        <Card.Text>
                        2023.07.30~2023.07.30
                        <br/>
                        대전예술의전당 앙상블홀
                        </Card.Text>
                        <Button variant="primary" href="/MusicalDetail">더보기 </Button>
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
                            <img src="../images/oche4.jpg" />
                            김응수 바이올린 독주회
                        </td>
                        <td>예술의전당</td>
                        <td>2023.07.12~2023.09.03</td>
                        <td></td>
                        </tr>

                        <tr>
                        <td>
                            <img src="../images/oche5.jpg" />
                            빈 베를린 체임버 오케스트라
                        </td>
                        <td>롯데콘서트홀</td>
                        <td>2023.05.13~2023.07.23</td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/oche6.jpg" />
                            Gratia 트리오, 지브리와 클래식을 품다
                        </td>
                        <td>부산문화예술회관</td>
                        <td>2023.07.07~2023.07.09</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/oche7.jpg" />
                            루돌프 부흐빈더 베토벤 피아노 소나타 전곡 Ⅶ
                        </td>
                        <td>예술의전당</td>
                        <td>2023.07.21~2023.11.17</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/oche8.jpg" />
                            바이올린 콰르텟 FOVA 정기연주회
                        </td>
                        <td>성남아트센터</td>
                        <td>2023.05.16~2023.07.16</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/oche9.jpg" />
                            빈-베를린 체임버 오케스트라
                        </td>
                        <td>OPEN RUN</td>
                        <td>2023.08.11~2023.08.20</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>
                            <img src="../images/oche10.jpg" />
                            2023 서울 어린이 오페라 페스티벌
                        </td>
                        <td>은평문화예술회관</td>
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

export default Orchestra;