import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import MenuNav from './MenuNav';
import HotOptions from './HotOptionsOffCanvas';

function HotCoffee(){
    const icedCoffeeMenu = useSelector((state) => state.hotcoffee.value)
    return(
        <Container>
            <MenuNav/>
            <Row>
                {icedCoffeeMenu.map((coffee) => {
                    return(
                        <Col md={6} key={coffee.id}>
                            <Card>
                            <Card.Title>{coffee.name}</Card.Title>
                            <Card.Body>
                                <Card.Text>Price:{coffee.price}</Card.Text>
                                <HotOptions/>
                            </Card.Body>
                        </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default HotCoffee;