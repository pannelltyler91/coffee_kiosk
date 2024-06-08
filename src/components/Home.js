import Image from 'react-bootstrap/Image'
import pic1 from '../img/IMG_0835.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Logo from '../components/Logo'
import { useDispatch, } from 'react-redux'
import { hereToGo } from '../features/cart';
import '../App.css'




function Home() {
    const dispatch = useDispatch();
    return (
        <Container className='App' fluid >
            <Container fluid >
                <Row>
                    <Col>
                        <a href='/'><Logo /></a>
                    </Col>
                </Row>
            </Container >
            <Container style={{paddingLeft:'12%',marginBottom:'5%'}}>
                <Row >
                    <Col ><a href='/'>English</a></Col>
                    <Col><a href='/korean'  >한국어</a></Col>
                    <Col><a href='/spanish'>Español</a></Col>
                </Row>
            </Container>
            <Row className='imgHolder'><Image src={pic1} style={{height:'300px',width:'300px'}}  /></Row>
            <Row className='homeButtons'>
                <Col xs={4}></Col>
                <Col>
                    <Button style={{backgroundColor:'#8db600',border:'#8db600'}} onClick={() => {
                        dispatch(hereToGo({ toGo: false }))
                    }} href='/menu' > Dine In
                    </Button>
                </Col>
                <Col><Button onClick={() => { dispatch(hereToGo({ toGo: true })) }} href='/menu' className='homeButton' style={{backgroundColor:'#8db600',border:'#8db600'}} ><Card.Body>To Go</Card.Body></Button></Col>
                <Col xs={4}></Col>
            </Row>
        </Container>
    )
}

export default Home;