import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import IcedCoffee from "./menu_components/IcedCoffee";
import Accordion from 'react-bootstrap/Accordion';
import Checkout from "./menu_components/Checkout";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Navbar from "react-bootstrap/esm/Navbar";
import HotCoffee from "./menu_components/HotCoffe";
import '../styles/Menu.css'

function Menu() {
    return (
        <Container  fluid className="menu">
            <Row><Navbar><NavbarBrand href='/'>CoffeeKiosk</NavbarBrand></Navbar></Row>
            <Row className="menuOptions" >
                <Accordion  defaultActiveKey="0" s >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header style={{backgroundColor:'#6f4e37'}} >Iced Coffee</Accordion.Header>
                        <Accordion.Body className="iced">
                            <IcedCoffee/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Hot Coffee</Accordion.Header>
                        <Accordion.Body className="hot">
                            <HotCoffee/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            < Checkout className="checkout"/>
        </Container>
    )
}

export default Menu;