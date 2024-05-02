import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { addToCart } from '../../../features/cart';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form'

function SpanishOptions({coffeeName,qty,coffeeId,coffeePrice}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Opciones
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Opciones</Offcanvas.Title>
                </Offcanvas.Header>
                <Form onSubmit={(e) => {e.preventDefault();dispatch(addToCart({item:coffeeName,coffeeId:coffeeId+Math.random()*10,coffeePrice:coffeePrice,sweet:e.target.options.value,ice:e.target.options2.value,shot:e.target.options3.value,toGo:localStorage.getItem('toGo')}))}}>
                <Offcanvas.Body>
                    <Row>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton id="tbg-radio-2" value='Mas Dulce'>
                                Mas Dulce
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-3" value='Menos Dulce'>
                                Menos Dulce
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-3-2" value='Regular'>
                                Regular
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Row>
                    <br/>
                    <Row>
                        <ToggleButtonGroup type="radio" name="options2" defaultValue={4}>
                            <ToggleButton id="tbg-radio-5" value='Mas Hielo'>
                                Mas Hielo
                            </ToggleButton>
                            <ToggleButton id="tbg-radio6" value='Menos Hielo'>
                               Menos Hielo
                            </ToggleButton>
                            <ToggleButton id="tbg-radio6-2" value='Regular'>
                               Regular
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Row>
                    <br/>
                    <Row>
                        <ToggleButtonGroup type="radio" name="options3" defaultValue={6}>
                            <ToggleButton id="tbg-radio-6" value="Mas Cafeina">
                                Mas Cafeina
                            </ToggleButton>
                            <ToggleButton id="tbg-radio7" value='Decafeina'>
                               Decafeina
                            </ToggleButton>
                            <ToggleButton id="tbg-radio7-2" value='Regular'>
                               Regular
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Row>
                    <br/>
                    <Button type='submit' onClick={handleClose}>Anadir al carro </Button>
                </Offcanvas.Body>
                </Form>
            </Offcanvas>
        </>
    );
}



export default SpanishOptions;