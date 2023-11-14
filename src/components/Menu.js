import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import IcedCoffee from "./menu_components/IcedCoffee";
import Accordion from 'react-bootstrap/Accordion';
import Checkout from "./menu_components/Checkout";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Navbar from "react-bootstrap/esm/Navbar";
import HotCoffee from "./menu_components/HotCoffe";

function Menu() {
    return (
        <Container fluid>
            <Row><Navbar><NavbarBrand href='/'>CoffeeKiosk</NavbarBrand></Navbar></Row>
            <Row>
                <Accordion defaultActiveKey="0" >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Iced Coffee</Accordion.Header>
                        <Accordion.Body>
                            <IcedCoffee/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Hot Coffee</Accordion.Header>
                        <Accordion.Body>
                            <HotCoffee/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            <Checkout/>
        </Container>
    )
}

export default Menu;