import '../css/location.css';
//맨위에 global kakao를 선언해서 kakao를 글로벌로 선언해서 사용합니다.
//global kakao
import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import Bus from "../images_src/location_bus_icon.svg";
import Subway from "../images_src/location_subway_icon.svg";
import Nav from "../images_src/location_navigation_icon.svg";
import Park from "../images_src/location_parking_icon.svg";
import LocationImage from "../images_src/location_image.jpg";


const location_name = "OPERA";

export default function Map(){
    useEffect(() =>{
        kakaoMapScript();
}, []);

const kakaoMapScript = () => {
    let container = document.getElementById("map");
    let options = {
        center: new window.kakao.maps.LatLng (37.4270039, 126.9851306),
        level: 3,
    };

    //map 변수에 kakao map 정보를 대입해 줍니다.
    const map = new window.kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다 
    let markerPosition = new window.kakao.maps.LatLng(37.4270039, 126.9851306);

    //마커를 생성해 줍니다.
    let marker = new window.kakao.maps.Marker({
        position: markerPosition,
    });
    //마커를 지도 위에 표시해 줍니다.
    marker.setMap(map);
};
return(
<>
    <Container>
    <div className="location_common">
        <h1>{location_name} 찾아오시는 길</h1>
        <div id="map"></div>
        <div className="location_information">
            <h2>LOCATION INFORMATION</h2>
            <h2><small>OPERA 정보</small></h2><br /><br />
            <h3>주소</h3>
            <h3><small>서울특별시 구로구 경인로 557 삼영빌딩 4층</small></h3>
            <h3>대표전화번호</h3>
            <h3><small>02-1234-5678</small></h3>
        </div>
        <div className='location_information_add'>
            {/* 교통(traffic) 정보 추가 */}
            <div className='location_traffic'>
                <div className='traffic_details'>
                    <img src={Bus} alt="버스 아이콘" />
                    <h2>버스</h2>                            
                </div>
                <h2><small>정류장 하차 <br></br> 일반 지선(녹색) 버스 : 1-1, 9, 9-3, 11-1, 11-2, 11-3, 11-5, 103, 777, 917</small></h2>            
            </div>
          <div className='location_traffic'>
            <div className='traffic_details'>
              <img src={Subway} alt="지하철 아이콘"/>
              <h2>지하철</h2>
            </div>            
            <h2><small>1호선 구로역 하차<br></br>2번 출구로 나와서 횡단보도 건너편</small></h2>
          </div>
          <div className='location_traffic'>
            <div className='traffic_details'>
              <img src={Nav} alt="네비게이션 아이콘"/>
              <h2>내비게이션(Navigation) 정보</h2>
            </div>
            <h2><small>아이나비 네비, 구글 네비 등 네비게이션 "OPERA" 검색</small></h2>
          </div>
          <div className='location_traffic'>
            <div className='traffic_details'>
            <img src={Park} alt="주차 아이콘"/>
            <h2>주차안내</h2>
            </div>
            <h2><small>OPERA 고객안내센터 1층 주차장 이용</small></h2>
          </div>
        </div>
      </div>                     
    </Container>
</>

);
}