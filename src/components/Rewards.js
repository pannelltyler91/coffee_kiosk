import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { addPhnNmbr, clearPhnNmbr, deletePhnNmbrDigit, checkRewards } from '../features/cart';
import { useNavigate } from "react-router-dom";


function Rewards() {
    const dispatch = useDispatch();
    const phoneNumber = useSelector((state) => state.cart.phnNmbr)
    const navigate = useNavigate();
    const submitCheckRewards = () => {
        dispatch(checkRewards({ message: 'can we update?' }))
        navigate('/preview')
    }

    return (
        <Container >
            <h1>Rewards</h1>
            <p style={{ marginBottom: '5px' }}>Please enter your phone number to gain/use rewards!</p>
            <Container style={{ margin: '5px', width: '75%' }} >
                <Row>
                    <Card style={{ margin: '5px' }}>
                        {phoneNumber}
                    </Card>

                </Row>
                <Row>
                    <Col style={{ border: 'white solid 1px', margin: '10px', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}><Button onClick={(e) => { dispatch(addPhnNmbr({ digit: e.target.value })) }} value='1' style={{ border: 'none', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>1</Button></Col>
                    <Col style={{ border: 'white solid 1px', margin: '10px', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}><Button onClick={(e) => { dispatch(addPhnNmbr({ digit: e.target.value })) }} value='2' style={{ border: 'none', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>2</Button></Col>
                    <Col style={{ border: 'white solid 1px', margin: '10px', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}><Button onClick={(e) => { dispatch(addPhnNmbr({ digit: e.target.value })) }} value='3' style={{ border: 'none', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>3</Button></Col>

                </Row>
                <Row>
                    <Col style={{ border: 'white solid 1px', margin: '10px', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}><Button onClick={(e) => { dispatch(addPhnNmbr({ digit: e.target.value })) }} value='4' style={{ border: 'none', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>4</Button></Col>
                    <Col style={{ border: 'white solid 1px', margin: '10px', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}><Button onClick={(e) => { dispatch(addPhnNmbr({ digit: e.target.value })) }} value='5' style={{ border: 'none', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>5</Button></Col>
                    <Col style={{ border: 'white solid 1px', margin: '10px', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}><Button onClick={(e) => { dispatch(addPhnNmbr({ digit: e.target.value })) }} value='6' style={{ border: 'none', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>6</Button></Col>
                </Row>
                <Row>
                    <Col style={{ border: 'white solid 1px', margin: '10px', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}><Button onClick={(e) => { dispatch(addPhnNmbr({ digit: e.target.value })) }} value='7' style={{ border: 'none', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>7</Button></Col>
                    <Col style={{ border: 'white solid 1px', margin: '10px', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}><Button onClick={(e) => { dispatch(addPhnNmbr({ digit: e.target.value })) }} value='8' style={{ border: 'none', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>8</Button></Col>
                    <Col style={{ border: 'white solid 1px', margin: '10px', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}><Button onClick={(e) => { dispatch(addPhnNmbr({ digit: e.target.value })) }} value='9' style={{ border: 'none', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>9</Button></Col>
                </Row>
                <Row>
                    <Col style={{ border: 'white solid 1px', backgroundColor: '#A47C6F', margin: '10px', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}><Button onClick={() => { dispatch(clearPhnNmbr({ message: "cleared" })) }} style={{ border: 'none', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>Clear</Button></Col>
                    <Col style={{ border: 'white solid 1px', margin: '10px', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}><Button onClick={(e) => { dispatch(addPhnNmbr({ digit: e.target.value })) }} value='0' style={{ border: 'none', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>0</Button></Col>
                    <Col style={{ border: 'white solid 1px', backgroundColor: '#A47C6F', margin: '10px', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}><Button style={{ border: 'none', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }} onClick={(e) => { dispatch(deletePhnNmbrDigit({ message: 'delete' })) }}>Delete</Button></Col>
                </Row>
            </Container>
            <Row>
                <Col></Col>
                <Col style={{ border: 'white solid 1px', backgroundColor: '#A47C6F', marginRight: '162px', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}><Button style={{ border: 'none', backgroundColor: '#A47C6F', borderRadius: '25px', display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }} onClick={submitCheckRewards}>Continue</Button></Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Rewards;