import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import { useSelector} from 'react-redux';
import {db} from '../../config/firebase';
import {addDoc,collection} from 'firebase/firestore';
import { Timestamp } from "@firebase/firestore";
import {useNavigate} from 'react-router-dom';



function SpanishCheckout(){
    const cartCount = useSelector((state) =>state.cart.count )
    const cart = useSelector((state) => state.cart.value)
    const cartTotal = useSelector((state) =>state.cart.total )
    const cartRef = collection(db,"Orders")

    const navigate = useNavigate();
    let noteDate = Timestamp.fromDate(new Date());

    const submitCart = async () => {
        try {
         const createdOrderRef = await addDoc(cartRef, {
                cart: cart,
                cart_total: cartTotal,
                order_time: noteDate
            })
            localStorage.setItem('orderId', JSON.stringify(createdOrderRef.id))
            localStorage.setItem('count', JSON.stringify(cartCount))
            localStorage.setItem('cart', JSON.stringify(cart))
            navigate('/srewards')

        } catch (err) {
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
                                        <Card.Text> <strong>Azucar:</strong> {item.sweet} | <strong>Cafeina:</strong> {item.shot} | <strong>Hielo:</strong> {item.ice}  </Card.Text>
                                    </Card.Header>
                                )
                            })}
                        <Card.Body style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <Button  onClick={submitCart}style={{width:'33%'}} >Continuar({cartCount})</Button>
                        </Card.Body>
                        <Card.Footer><strong>Total:${cartTotal}</strong></Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SpanishCheckout;