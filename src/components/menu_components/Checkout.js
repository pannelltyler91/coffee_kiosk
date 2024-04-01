import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import { useSelector } from 'react-redux';
import {db} from '../config/firebase';
import {addDoc,collection} from 'firebase/firestore';

function Checkout(){
    const cartCount = useSelector((state) =>state.cart.count )
    const cart = useSelector((state) => state.cart.value)
    const cartTotal = useSelector((state) =>state.cart.total )
    const cartRef = collection(db,"Orders")

    const submitCart = async () =>{
        try{
            await addDoc(cartRef,{
                cart:cart,
                cart_total:cartTotal,
                order_id:Math.random()
            })
        } catch (err){
            console.log(err)
        }
    }
    return(
        <Container className="mt-2" fluid>
            <Row className='mt-2'>
                <Col md={12}>
                    <Card>
                    {cart.map((item) =>{
                                return(
                                    <Card.Header key={item.coffeeId+Math.random()*10}>
                                        <h6>{item.item}</h6>
                                        <Card.Text> <strong>Sweetness:</strong> {item.sweet} | <strong>Caffeine:</strong> {item.shot} | <strong>Ice:</strong> {item.ice}  </Card.Text>
                                    </Card.Header>
                                )
                            })}
                        <Card.Body style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <Button  onClick={submitCart()}style={{width:'33%'}} >Checkout({cartCount})</Button>
                        </Card.Body>
                        <Card.Footer>Total:${cartTotal}</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Checkout;