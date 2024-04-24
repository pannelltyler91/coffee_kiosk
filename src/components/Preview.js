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

const [previewCart,setPreviewCart] = useState();
const [total,setTotal] = useState();
const count = JSON.parse(localStorage.getItem('count'))
const navigate = useNavigate();

    useEffect(() =>{
        const getOrder = async () =>{
            try{
                const orderRef = doc(db, "Orders", JSON.parse(localStorage.getItem('orderId')));
                const orderData = await getDoc(orderRef);
                const order = orderData.data();
                console.log(order)
                setPreviewCart(order.cart)
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
            { previewCart && previewCart.map((item) => {
                return (
                    <Col m={3} key={item.coffeeId}>
                    <Card >
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
                <Button onClick={() => {navigate('/pay')}}>Checkout({count})</Button>

            </Card>
        </Container>
    )
}

export default Preview;
