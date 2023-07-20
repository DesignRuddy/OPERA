import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';

const Notice = () => {
    return(
        <>
        <div className="grid-container">
	<div className="grid-100 tablet-grid-100 mobile-grid-100 topper">
   	    <img src="../images/notice1.png" alt="" />
	</div>
</div>

<div className="wrapper partner">
	<div className='grid-container'>
		<div className="grid-100 tablet-grid-100 mobile-grid-100">
			<div className="grid-20 tablet-grid-20">
				<h6>예매/결제</h6>
			</div>
		</div>
	</div>
</div>

		<div className="wrapper links">
			<div className="grid-container">
				<div className="grid-100 tablet-grid-100 mobile-grid-100">
					<div className="grid-25 tablet-grid-25 mobile-grid-100 tm-resale">
					<Container>
						<Accordion defaultActiveKey="" className='Notice-acco'>
						<Accordion.Item eventKey="0">
							<Accordion.Header>결제 완료 메시지를 받았는데 예매 내역이 없어요.</Accordion.Header>
							<Accordion.Body>
							동시 접속 수가 많을 경우 좌석 선택 중복건이 다수 발생할 수 있습니다. <br/>
							이런 경우에는 결제를 먼저 완료하신 고객님의 예매가 완료됩니다.<br/>
							또한, 결제 완료 메시지를 받으셨더라도 예매번호가 생성 되지 않은 경우 정상 예매건이 아니므로<br/>
							[MY티켓 - 예매확인/취소]에서 예매내역을 꼭 확인해 주시기 바랍니다.<br/>
							만약, 예매 내역 없이 결제만 완료가 되었다면 자동으로 취소가 진행되나, <br/>
							빠른 취소를 원하신다면 예매자 본인께서 고객센터 1544-6399 또는 1:1문의하기로 <br/>
							연락해 주시기 바랍니다.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>비회원도 공연 에매를 할 수 있나요?</Accordion.Header>
							<Accordion.Body>
							비회원 및 간편 가입 회원은 예매를 하실 수가 없습니다. <br/>
							예매 서비스 이용을 위해서는 휴대폰 또는 I-PIN 본인 인증을 해주시기 바랍니다. 
							</Accordion.Body>
						</Accordion.Item>
						</Accordion>
					</Container>
				</div>
            <hr className='Notice-hr'/>

			<div className="grid-25 tablet-grid-25 mobile-grid-100 quick-links">
				<h6>취소/환불</h6>
				<Container>
					<Accordion defaultActiveKey="" className='Notice-acco'>
					<Accordion.Item eventKey="0">
						<Accordion.Header>환불 계좌 정보를 잘못 입력해서 환불받지 못했어요</Accordion.Header>
						<Accordion.Body>
						환불 계좌 정보를 잘못 입력하여 환불이 되지 않은 경우 환불 계좌 수정이 가능합니다.  <br/>
						MY티켓 - 예매확인/취소 - 결제내역 의 환불진행상태에서 [수정] 버튼을 클릭하시어 환불 계좌 정보를 입력해주세요.   <br/>
						단, PC 에서만, 평일 오전 10시 ~ 오후 2시 에 가능합니다.  
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>공연 관람 당일 취소가 가능한가요?</Accordion.Header>
						<Accordion.Body>
						기본적으로 공연 관람 당일 취소는 불가합니다. <br/>
						(관람일 당일 취소가 가능한 일부 공연의 경우 티켓 금액의 90%가 취소수수료로 부과됩니다.)  <br/>
						공연의 특성에 따라 취소마감시간/취소수수료 정책이 달라질 수 있으니 예매 시 반드시 각 공연 상세 정보를 확인해주시기 바랍니다. 
						</Accordion.Body>
					</Accordion.Item>
					</Accordion>
				</Container>
				
			</div>
            <hr className='Notice-hr'/>

			<div className="grid-25 tablet-grid-25 mobile-grid-100 legal">
				<h6>회원</h6>
				<Container>
					<Accordion defaultActiveKey="" className='Notice-acco'>
					<Accordion.Item eventKey="0">
						<Accordion.Header>본인 인증된 ID로만 에매할 수 있나요? </Accordion.Header>
						<Accordion.Body>
						공연 예매는 본인 인증된 ID로만 예매 가능합니다. <br/>
						비회원 또는 간편 가입 회원 예매는 불가하오니, 예매 전 휴대폰 또는 I-PIN 으로 본인 인증을 하신 후 재로그인 해주시기 바랍니다. 
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="1">
						<Accordion.Header>예매한 이후 회원정보를 변경했어요. 예매 정보에도 자동으로 변경되나요?</Accordion.Header>
						<Accordion.Body>
						아닙니다. 회원 정보 수정 후 기존 로그인 상태를 유지할 경우 변경된 회원 정보는 예매 정보에 반영이 되지 않습니다. <br/>
						번거로우시겠지만 반드시 로그아웃 후 재 로그인을 하셔야 반영되므로, 최신 회원 정보 반영을 위해서는 재로그인해주시기 바랍니다.
						</Accordion.Body>
					</Accordion.Item>
					</Accordion>
				</Container>
			</div>
            <hr className='Notice-hr'/>


			<div className="grid-25 tablet-grid-25 mobile-grid-100 visit-us">
				<h6>최근소식</h6>
				<ul>
                    
				</ul>
			</div>
            <hr className='Notice-hr'/>


		</div>
	</div>
</div>

        </>
    )
}
export default Notice;