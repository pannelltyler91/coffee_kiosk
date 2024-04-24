import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';


function Pay() {

    const navigate = useNavigate();
    
    useEffect(() => {
        setTimeout(() => {
          navigate('/thankyou')
        }, 5000)
      }, [navigate])

    return (
        <Container>
            <Card>
                <Card.Header style={{ display:'flex',justifyContent:'center'}}>Please insert your card</Card.Header>
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

export default Pay;