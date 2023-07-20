import Carousel from 'react-bootstrap/Carousel';
import "../css/common.css";
import { Container } from 'react-bootstrap';

function Imgslide() {
  return (
    <div>
      <Container>
        <div className='poster'>
          <img src="../images/poster.gif" />
        </div>
          <Carousel className='Carou'> 
            <Carousel.Item>
              <img
                className="slideimg"
                src="../images/main1.jpg"
                alt="First slide"
              />
              <div className='captiontext'>
              <Carousel.Caption>
                <h3></h3>
                <p>티켓 오픈 : 2023.06.24~2023.09.17 
                  <br></br> 
                  서울특별시 송파구 올림픽로 300  잠실롯데타워 롯데 콘서트홀</p>
              </Carousel.Caption>
              </div>

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slideimg"
                src="../images/main2.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p>티켓 오픈 : 2023.06.24~2023.09.17 
                  <br></br> 
                  서울특별시 송파구 올림픽로 300  잠실롯데타워 롯데 콘서트홀</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slideimg"
                src="../images/main3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p>티켓 오픈 : 2023.06.24~2023.09.17 
                  <br></br> 
                  서울특별시 송파구 올림픽로 300  잠실롯데타워 롯데 콘서트홀</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
    </Container>
    </div>
  );
}

export default Imgslide;