import React from "react";
import Imgslide from "../components/Imgslide";
import "../css/indexbody.css";
import { Container } from "react-bootstrap";

const About= () => {
   
return (
    <div>
        <Container>
        <div class="up-bar">
            <div class="back-page">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            <div class="right-connect">
                <ion-icon name="add-outline"></ion-icon>
                <ion-icon name="chatbox-outline"></ion-icon>
                <ion-icon name="grid-outline"></ion-icon>
            </div>
        </div>
        <div>
            <Imgslide />
        </div>

        <div class="title-container">
            <div class="title-text">  
            </div>
          
        </div>

        
        <div>공연 목록</div>
        <div class="user-box-container">
        
            <div className='movieselect'>
                
                <div className='imgbox'>
                    <img src='../images/pantom.jpg'/>
                    <h5><b>팬텀</b></h5>
                    <button className='boxdetailbtn'>상세정보</button>
                    <button className='boxbookbtn'>예매하기</button>
                    </div>
                <div className='imgbox'>
                    <img src='../images/hyde.jpg' />
                    <h5><b>지킬 앤 하이드</b></h5>
                    <button className='boxdetailbtn'>상세정보</button>
                    <button className='boxbookbtn'>예매하기</button>
                    </div>
                <div className='imgbox'>
                    <img src='../images/smilemen.jpg'/>
                    <h5><b>웃는 남자</b></h5>
                    <button className='boxdetailbtn'>상세정보</button>
                    <button className='boxbookbtn'>예매하기</button>
                    </div>
                <div className='imgbox'>
                    <img src='../images/wicked.jpg' />
                    <h5><b>위키드</b></h5>
                    <button className='boxdetailbtn'>상세정보</button>
                    <button className='boxbookbtn'>예매하기</button>
                </div>

                <div className='imgbox'>
                    <img src='../images/cats.jpg' />
                    <h5 className="Msc_Name"><b>캣츠</b></h5>
                    <button className='boxdetailbtn'>상세정보</button>
                    <button className='boxbookbtn'>예매하기</button>
                </div>

            </div>
          
        </div>
        </Container>
        
            
    </div>

        );

}

export default About;