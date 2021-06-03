import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

export default function LineDropdown() {
    return (
        <div style={{position:"absolute",left:"3.3vw",backgroundColor:"rgb(245, 245, 245)",padding:"0.5vw",boxShadow:"#00000030 5px 3px 5px",height:"21.5vh", borderRadius:"5px"}}>
        <Container>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextNumber">
            <Form.Label column sm="2">
                Length
           </Form.Label>
            <Col sm="10">
            <Form.Control type="number" placeholder="Length" />
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextNumber">
            <Form.Label column sm="2">
                Rotation
           </Form.Label>
            <Col sm="10">
            <Form.Control type="number" className="mobileBox" placeholder="Rotation" />
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextNumber">
            <Form.Label column sm="2">
            Stroke Width
           </Form.Label>
            <Col sm="10">
            <Form.Control type="number" placeholder="Stroke Width" />
            </Col>
            </Form.Group>
        </Container>
        </div>
    )
}
