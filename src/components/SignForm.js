import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import "../css/join.css";

const SignForm = () => {
    return (
        <>
        <Container className="panel-SignForm">
            {/* <div className="main-w3layouts">JOIN */}
            

            {/* <!-- main --> */}
            <div class="main-agileinfo">
                <div className="loginhead">Sing Up</div>
                    <div className="agileits-top">
                    <Form action="#" method="post">
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Control type="text" placeholder="UserID" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">   
                            <Col sm>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Control type="text" placeholder="Username" required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                            <Col sm>
                                <Form.Control type="email" placeholder="Email Address" />
                            </Col>
                        </Form.Group>

                           <input type="submit" value="Sign Up"/>
                        
                    </Form>
                    <p>Don't have an Account? <a href="#"> Login Now!</a></p>
                    </div>
                </div>
            

            {/* <div className="main-agileinfo">
                <div className="agileits-top">
                    <Form action="#" method="post">
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Control type="text" placeholder="UserID" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">   
                            <Col sm>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Control type="text" placeholder="Username" required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                            <Col sm>
                                <Form.Control type="email" placeholder="Email Address" />
                            </Col>
                        </Form.Group>
                        <br/>

                        <div className="d-grid gap-1">
                            <Button variant="secondary" type="submit" >
                                Sign Up
                            </Button>
                        </div>
                    </Form>
                </div>
            </div> */}
            </Container>
        </>
    );
}

export default SignForm;