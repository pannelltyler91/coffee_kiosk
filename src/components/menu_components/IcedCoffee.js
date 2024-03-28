import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import Options from './OptionsOffCanvas';

function IcedCoffee(){
    const icedCoffeeMenu = useSelector((state) => state.icedcoffee.value)
    return(
        <Container>
            <Row>
                {icedCoffeeMenu.map((coffee) => {
                    return(
                        <Col md={6} key={coffee.id}>
                            <Card>
                            <Card.Title>{coffee.name}</Card.Title>
                            <Card.Body>
                                <Card.Text>Price:{coffee.price}</Card.Text>
                                <Options coffeeName={coffee.name} qty={coffee.quantity} coffeeId={coffee.id} coffeePrice={coffee.price} />
                            </Card.Body>
                        </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default IcedCoffee;