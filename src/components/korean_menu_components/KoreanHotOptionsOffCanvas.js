import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { addToCart } from '../../features/cart';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form'

function KoreanHotOptions({ coffeeName, coffeeId, coffeePrice }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
            옵션 메뉴
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>옵션 메뉴</Offcanvas.Title>
                </Offcanvas.Header>
                <Form onSubmit={(e) => { e.preventDefault(); dispatch(addToCart({ item: coffeeName, coffeeId: coffeeId + Math.random() * 10, coffeePrice: coffeePrice, sweet: e.target.options.value, shot: e.target.options3.value, toGo: localStorage.getItem('toGo') })) }}>
                    <Offcanvas.Body>
                        <Row>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton id="tbg-radio-2" value='더 달게'>
                                    더 달게
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-3" value='덜 달게'>
                                    덜 달게
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-3-2" value='보통'>
                                    보통
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Row>
                        <br />
                        <Row>
                            <ToggleButtonGroup type="radio" name="options3" defaultValue={6}>
                                <ToggleButton id="tbg-radio-6" value="샷 추가">
                                    샷 추가 
                                </ToggleButton>
                                <ToggleButton id="tbg-radio7" value='디카페인'>
                                    디카페인
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Row>
                        <br />
                        <Button type='submit' onClick={handleClose}>장바구니 추가</Button>
                    </Offcanvas.Body>
                </Form>
            </Offcanvas>
        </>
    );
}



export default KoreanHotOptions;