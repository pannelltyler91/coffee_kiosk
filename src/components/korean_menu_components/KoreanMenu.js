import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import KoreanIcedCoffee from "../korean_menu_components/KoreanIcedCoffee"
import Accordion from 'react-bootstrap/Accordion';
import KoreanCheckout from "../korean_menu_components/KoreanCheckout";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Navbar from "react-bootstrap/esm/Navbar";
import KoreanHotCoffee from "../korean_menu_components/KoreanHotCoffe";

function Menu() {
    return (
        <Container fluid>
            <Row><Navbar><NavbarBrand href='/korean'>CoffeeKiosk</NavbarBrand></Navbar></Row>
            <Row>
                <Accordion defaultActiveKey="0" >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>아이스 커피</Accordion.Header>
                        <Accordion.Body>
                            <KoreanIcedCoffee/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>커피</Accordion.Header>
                        <Accordion.Body>
                            <KoreanHotCoffee/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            <KoreanCheckout/>
        </Container>
    )
}

export default Menu;