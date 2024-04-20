import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import { db } from './config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react';


function Preview() {

const [cart,setCart] = useState();
const [total,setTotal] = useState();
const count = JSON.parse(localStorage.getItem('count'))
// const navigate = useNavigate();

    useEffect(() =>{
        const getOrder = async () =>{
            try{
                const OrderRef = doc(db, "Orders", localStorage.getItem('orderId'));
                const orderData = await getDoc(OrderRef);
                const order = orderData.data();
                console.log(order)
                setCart(order.cart)
                setTotal(order.cart_total)
            }catch(err) {
                console.log(err);
            }
        }
        getOrder();
    }, []);

    return (
        <Container className="mt-2" fluid>
            <h1>Preview</h1>
            <Row>
            {cart.map((item) => {
                return (
                    <Col m={3}>
                    <Card  key={item.coffeeId}>
                        <Card.Title>{item.item}</Card.Title>
                        <Card.Body>
                            <Card.Text><strong>Sweetness:</strong> {item.sweet}</Card.Text>
                            <Card.Text><strong>Ice:</strong> {item.ice}</Card.Text>
                            <Card.Text><strong>Shot:</strong> {item.shot}</Card.Text>
                            <Card.Text><strong>Price: $</strong>{item.coffeePrice}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    
                )
            })}
            </Row>
            <Card>
                <Card.Header>
                    <strong>Total:$</strong>{total}
                </Card.Header>
                <Button onClick={console.log('clicked')}>Checkout({count})</Button>

            </Card>
        </Container>
    )
}

export default Preview;
