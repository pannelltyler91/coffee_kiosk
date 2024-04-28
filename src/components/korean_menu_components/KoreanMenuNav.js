import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';



function KoreanMenuNav() {
    return (
        <Container  style={{backgroundColor:'#A47C6F'}}>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">New</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="icedcoffeeenglish" eventKey="link-2">Iced Coffee</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="hotcoffeeenglish" >
                        Hot Coffee
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/link-4">Iced Tea</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-5">Hot Tea</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-6">Juice</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-7" >
                        Smoothie
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    )
}

export default KoreanMenuNav;