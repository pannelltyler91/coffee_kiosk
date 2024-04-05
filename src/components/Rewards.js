import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function Rewards() {
    return (
        <Container >
            <h1>Rewards</h1>
            <Container >
                <Row>
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                </Row>
                <Row>
                    <Col>4</Col>
                    <Col>5</Col>
                    <Col>6</Col>
                </Row>
                <Row>
                    <Col>7</Col>
                    <Col>8</Col>
                    <Col>9</Col>
                </Row>
                <Row>
                    <Col><Button>Continue</Button></Col>
                    <Col>0</Col>
                    <Col><Button>Delete</Button></Col>
                </Row>
            </Container>
            <Row>
                <Col></Col>
                <Col><Button href='/pay'>Continue</Button></Col>
                <Col></Col>
                </Row>
        </Container>
    )
}

export default Rewards;