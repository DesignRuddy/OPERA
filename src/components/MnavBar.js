import React from "react";
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";

const MnavBar= () => {
   
    return (
        <div>
            <Container>
            <nav class="navigation-bar">
          
                <div class="navigation-logo-wrapper" >
                    <a href="/"><img src='/images/projectlogo.png' alt='로고이미지'/></a>
                </div>
              
                
                <div>
                    <Nav className="navbar">
                        <ul>
                            <Nav.Link href="/Musical"><li>뮤지컬</li></Nav.Link>
                            <Nav.Link href="/Show"><li>공연</li></Nav.Link>
                            <Nav.Link href="/Orchestra"><li>오케스트라</li></Nav.Link>
                            <Nav.Link href="/Concert"><li>콘서트</li></Nav.Link>

                            <li>
                                <ul>
                                    <NavDropdown title="게시판" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/Notice">공지사항</NavDropdown.Item>
                                    <NavDropdown.Item href="/views/ViewButton">자유게시판</NavDropdown.Item>
                                    <NavDropdown.Item href="/communityboard" >커뮤니티게시판</NavDropdown.Item> 
                                    </NavDropdown>
                                </ul>
                            </li>
                        </ul>
                    </Nav>
                </div>

                <div class="right-bar">
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="mail-open-outline"></ion-icon>
                    <ion-icon name="notifications-outline"></ion-icon>
                </div>

                <span>
                    <Navbar className="navfirst">
                        <Nav.Link href="/Login" className="Navsign">로그인</Nav.Link>
                        <Nav.Link href="/SignForm" className="Navsign">회원가입</Nav.Link>
                    </Navbar>
                </span>
            </nav>
            </Container>
        </div>
    );
}

export default MnavBar;