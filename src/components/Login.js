import { Form, Button, Row, Col, Container } from "react-bootstrap";
import React from 'react';

const Login = () => {

    return(
        <div>
       
        <Container className="panel login" >
        <div className="loginhead">Login</div>
            <Form>
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
                <br/>

                <div className="d-grid gap-1">
                    <Button variant="secondary" type="submit" >
                        Sign In
                    </Button>
                </div>
            </Form>
        </Container>
    </div>
    );
};


export default Login;