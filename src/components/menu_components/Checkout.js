import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import { useSelector } from 'react-redux';

function Checkout(){
    const cartCount = useSelector((state) =>state.cart.count )
    const cart = useSelector((state) => state.cart.value)
    return(
        <Container className="mt-2" fluid>
            <Row className='mt-2'>
                <Col md={12}>
                    <Card>
                    {cart.map((item) =>{
                                return(
                                    <Card.Header key={item.coffeeId+item.item}>
                                        <h6>{item.item}</h6>
                                        <Card.Text> <strong>Sweetness:</strong> {item.sweet} | <strong>Caffeine:</strong> {item.shot} | <strong>Ice:</strong> {item.ice} | <strong>Quantity:</strong> {item.qty} </Card.Text>
                                    </Card.Header>
                                )
                            })}
                        <Card.Body style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <Button style={{width:'33%'}} >Checkout({cartCount})</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Checkout;