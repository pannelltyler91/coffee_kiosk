import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';


function KoreanPay() {

    const navigate = useNavigate();
    
    useEffect(() => {
        setTimeout(() => {
          navigate('/kthanks')
        }, 5000)
      }, [navigate])

    return (
        <Container>
            <Card>
                <Card.Header style={{ display:'flex',justifyContent:'center'}}>카드 넣으세요</Card.Header>
                <Card.Body style={{ display:'flex',justifyContent:'center'}}>
                    <Spinner animation="grow" variant="primary" />
                    <Spinner animation="grow" variant="secondary" />
                    <Spinner animation="grow" variant="success" />
                    <Spinner animation="grow" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                    <Spinner animation="grow" variant="info" />
                    <Spinner animation="grow" variant="dark" />

                </Card.Body>
            </Card>
        </Container>
    ) 
}

export default KoreanPay;