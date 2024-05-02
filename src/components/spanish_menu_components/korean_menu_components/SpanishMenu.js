import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SpanishIcedCoffee from "../../spanish_menu_components/korean_menu_components/SpanishIcedCoffee";
import Accordion from 'react-bootstrap/Accordion';
import Checkout from "../../spanish_menu_components/korean_menu_components/SpanishCheckout";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Navbar from "react-bootstrap/esm/Navbar";
import SpanishHotCoffee from "../../spanish_menu_components/korean_menu_components/SpanishHotCoffe";

function SpanishMenu() {
    return (
        <Container fluid>
            <Row><Navbar><NavbarBrand href='/'>CoffeeKiosk</NavbarBrand></Navbar></Row>
            <Row>
                <Accordion defaultActiveKey="0" >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Bebidas Frias</Accordion.Header>
                        <Accordion.Body>
                            <SpanishIcedCoffee/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Bebidas Calientes</Accordion.Header>
                        <Accordion.Body>
                            <SpanishHotCoffee/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            <Checkout/>
        </Container>
    )
}

export default SpanishMenu;